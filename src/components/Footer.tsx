import { company, navLinks } from "@/src/data/company";
export function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div><a className="footer-brand" href="#top">{company.name}</a><p>{company.location} ／ 鉄塔送電線工事</p></div><nav aria-label="フッターナビゲーション">{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><a className="back-top" href="#top">ページ上部へ ↑</a></div><div className="footer-bottom"><small>© {new Date().getFullYear()} HASHIMOTO KOGYO</small><p>写真：<a href="https://commons.wikimedia.org/wiki/File:Japanese_Transmission_tower_2022-04.jpg">Minirexs / Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a><br />表示枠に合わせてトリミング。写真部分は同ライセンスで利用できます。</p></div></footer>;
}
