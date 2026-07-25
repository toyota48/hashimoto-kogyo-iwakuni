import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const outputDir = new URL("../public/images/", import.meta.url);

const assets = [
  ["hero-construction-electrical-site.png", "建設現場・電気工事", "安全確認と施工品質", 1200, 900, "hero"],
  ["service-electrical-work.png", "電気工事", "配線・照明・設備改修", 1200, 675, "electric"],
  ["service-scaffold-earthwork.png", "とび・土工工事", "仮設足場・土工事", 1200, 675, "earth"],
  ["project-factory-electrical.png", "工場内電気設備工事", "電気設備工事", 1200, 900, "factory"],
  ["project-store-lighting.png", "店舗照明設備の更新", "照明設備", 1200, 900, "store"],
  ["project-office-wiring.png", "事業所内の配線工事", "配線工事", 1200, 900, "office"],
  ["project-solar-equipment.png", "太陽光発電設備関連工事", "設備関連工事", 1200, 900, "solar"],
  ["project-temporary-scaffold.png", "建設現場の仮設工事", "仮設工事", 1200, 900, "scaffold"],
  ["project-earthwork-site-preparation.png", "土工事・現場整備", "現場整備", 1200, 900, "earthwork"],
  ["og-hashimoto-kogyo.png", "株式会社ハシモト工業", "確かな技術で、地域の未来を支える。", 1200, 630, "og"],
];

function motif(kind, width, height) {
  const baseY = height * 0.68;
  const line = "#f97316";
  const pale = "rgba(255,255,255,0.62)";
  const common = `
    <rect x="${width * 0.08}" y="${baseY}" width="${width * 0.84}" height="10" fill="${line}" opacity="0.8"/>
    <path d="M ${width * 0.12} ${baseY - 55} L ${width * 0.88} ${baseY - 55}" stroke="${pale}" stroke-width="5" stroke-dasharray="22 18"/>
  `;

  if (kind === "electric" || kind === "factory" || kind === "office") {
    return `
      ${common}
      <path d="M ${width * 0.25} ${baseY - 120} h ${width * 0.5} v ${height * 0.14} h -${width * 0.5} z" fill="none" stroke="${pale}" stroke-width="8"/>
      <path d="M ${width * 0.35} ${baseY - 120} v -${height * 0.12} h ${width * 0.3} v ${height * 0.12}" fill="none" stroke="${line}" stroke-width="10"/>
      <circle cx="${width * 0.5}" cy="${baseY - 46}" r="20" fill="${line}"/>
    `;
  }

  if (kind === "solar") {
    return `
      ${common}
      <circle cx="${width * 0.72}" cy="${height * 0.24}" r="48" fill="${line}" opacity="0.9"/>
      <path d="M ${width * 0.22} ${baseY - 40} l ${width * 0.52} -70 l ${width * 0.08} 110 h -${width * 0.56} z" fill="none" stroke="${pale}" stroke-width="8"/>
      <path d="M ${width * 0.3} ${baseY - 95} v 85 M ${width * 0.42} ${baseY - 112} v 102 M ${width * 0.54} ${baseY - 128} v 118" stroke="${pale}" stroke-width="4"/>
    `;
  }

  if (kind === "earth" || kind === "scaffold" || kind === "earthwork") {
    return `
      ${common}
      <path d="M ${width * 0.24} ${baseY - 155} v 155 M ${width * 0.42} ${baseY - 155} v 155 M ${width * 0.6} ${baseY - 155} v 155 M ${width * 0.78} ${baseY - 155} v 155" stroke="${pale}" stroke-width="8"/>
      <path d="M ${width * 0.18} ${baseY - 118} h ${width * 0.66} M ${width * 0.18} ${baseY - 62} h ${width * 0.66}" stroke="${line}" stroke-width="9"/>
      <path d="M ${width * 0.2} ${baseY} c ${width * 0.12} -50 ${width * 0.22} -55 ${width * 0.34} 0 c ${width * 0.1} -34 ${width * 0.22} -30 ${width * 0.36} 0" fill="none" stroke="${pale}" stroke-width="8"/>
    `;
  }

  if (kind === "store") {
    return `
      ${common}
      <path d="M ${width * 0.26} ${baseY - 170} h ${width * 0.48} l ${width * 0.08} 80 h -${width * 0.64} z" fill="none" stroke="${pale}" stroke-width="8"/>
      <path d="M ${width * 0.32} ${baseY - 35} h ${width * 0.36} v -${height * 0.18} h -${width * 0.36} z" fill="none" stroke="${line}" stroke-width="9"/>
      <circle cx="${width * 0.39}" cy="${baseY - 115}" r="16" fill="${line}"/>
      <circle cx="${width * 0.5}" cy="${baseY - 115}" r="16" fill="${line}"/>
      <circle cx="${width * 0.61}" cy="${baseY - 115}" r="16" fill="${line}"/>
    `;
  }

  return `
    ${common}
    <path d="M ${width * 0.18} ${baseY - 24} h ${width * 0.64} l -${width * 0.08} -${height * 0.34} h -${width * 0.48} z" fill="none" stroke="${pale}" stroke-width="8"/>
    <path d="M ${width * 0.24} ${baseY - 92} h ${width * 0.24} v -${height * 0.18} h ${width * 0.18}" fill="none" stroke="${line}" stroke-width="10"/>
    <path d="M ${width * 0.62} ${baseY - 205} l 44 44 h -32 l 22 48 l -54 -62 h 34 z" fill="${line}" opacity="0.92"/>
  `;
}

function svg([filename, title, subtitle, width, height, kind]) {
  const isOg = filename.startsWith("og-");
  const titleSize = isOg ? 58 : 52;
  const subtitleSize = isOg ? 29 : 25;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#080808"/>
          <stop offset="0.62" stop-color="#1c1c1e"/>
          <stop offset="1" stop-color="#f97316"/>
        </linearGradient>
        <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse">
          <path d="M 52 0 L 0 0 0 52" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <rect width="${width}" height="${height}" fill="url(#grid)"/>
      ${isOg ? `<rect x="${width * 0.06}" y="${height * 0.08}" width="${width * 0.12}" height="8" fill="#f97316"/>
      <text x="${width * 0.06}" y="${height * 0.23}" fill="#ffffff" font-family="Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif" font-size="${titleSize}" font-weight="800">${title}</text>
      <text x="${width * 0.06}" y="${height * 0.32}" fill="#e2e8f0" font-family="Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif" font-size="${subtitleSize}" font-weight="700">${subtitle}</text>` : ""}
      ${motif(kind, width, height)}
    </svg>`;
}

await mkdir(outputDir, { recursive: true });

for (const asset of assets) {
  const [filename] = asset;
  await sharp(Buffer.from(svg(asset))).png().toFile(fileURLToPath(new URL(filename, outputDir)));
}
