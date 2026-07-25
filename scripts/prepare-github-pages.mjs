import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = fileURLToPath(new URL("../dist/client/", import.meta.url));
const rawBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : "";
const textExtensions = new Set(["", ".css", ".html", ".js", ".json", ".rsc", ".txt"]);

if (!basePath) {
  console.log("GITHUB_PAGES_BASE_PATH is empty. Skipping GitHub Pages path preparation.");
  process.exit(0);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
      continue;
    }

    if (textExtensions.has(extname(entry.name))) files.push(path);
  }

  return files;
}

for (const file of await walk(outputDir)) {
  const current = await readFile(file, "utf8");
  let next = current
    .replaceAll("/assets/", `${basePath}/assets/`)
    .replaceAll(`${basePath}${basePath}/assets/`, `${basePath}/assets/`)
    // Vinext's client runtime builds preload URLs from chunk names. Patch only the static export artifact.
    .replaceAll("return`/`+e", `return\`${basePath}/\`+e`)
    .replaceAll('return"/"+e', `return"${basePath}/"+e`);

  if (next !== current) await writeFile(file, next);
}

await writeFile(join(outputDir, ".nojekyll"), "");
