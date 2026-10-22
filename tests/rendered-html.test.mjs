import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} });
}

test("renders the company site without draft content or fabricated project claims", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /株式会社ハシモト工業/);
  assert.match(html, /鉄塔をつくる。/);
  assert.match(html, /電気の道をつなぐ。/);
  assert.match(html, /岩国市 送電線工事/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /lang="ja"/);
  assert.doesNotMatch(html, /公開前|公開時には|想定|要確認|仮情報|選ばれる理由|施工実績|送信する|Codex|codex-preview|Building your site/);
  assert.doesNotMatch(html, /hero-transmission-tower-line\.png|project-[\w-]+\.png/);
  assert.match(html, /当社の施工現場ではありません/);
  assert.match(html, /Minirexs/);
  assert.match(html, /https:\/\/creativecommons.org\/licenses\/by-sa\/4.0\//);

  // Every in-page navigation target exists and the telephone is actionable.
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(match[1]), `Missing anchor: ${match[1]}`);
  assert.match(html, /href="tel:0827461201"/);
  assert.doesNotMatch(html, /<form\b/);

  const images = [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)];
  assert.ok(images.length > 0);
  for (const [, path] of images) await access(new URL(`../public${path.replace(/^\/hashimoto-kogyo-iwakuni(?=\/)/, "")}`, import.meta.url));
});

test("keeps mobile navigation accessible and removes starter routes", async () => {
  const header = await readFile(new URL("../src/components/Header.tsx", import.meta.url), "utf8");
  assert.match(header, /aria-expanded=\{open\}/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /hidden=\{!open\}/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
