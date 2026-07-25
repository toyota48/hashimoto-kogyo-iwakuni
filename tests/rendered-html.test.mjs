import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Hashimoto Kogyo corporate sample", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /株式会社ハシモト工業/);
  assert.match(html, /電力インフラを、確かな技術で支える。/);
  assert.match(html, /岩国市 送電線工事/);
  assert.match(html, /公開時には、実在の施工実績と掲載許可を確認/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /Codex/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site|差し替え用|サンプル画像/);
});

test("removes starter preview files and keeps editable data sources", async () => {
  const [page, layout, packageJson, companyData, servicesData] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../src/data/company.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/data/services.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<Header \/>/);
  assert.match(page, /application\/ld\+json/);
  assert.match(layout, /lang="ja"/);
  assert.match(packageJson, /"lucide-react"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(companyData, /仮情報・公開前/);
  assert.match(servicesData, /サンプル情報・要確認/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
