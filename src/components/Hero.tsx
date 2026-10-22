/* eslint-disable @next/next/no-img-element -- 静的配信するローカル画像。 */
import { company } from "@/src/data/company";
import { sitePath } from "@/src/lib/sitePath";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">山口県岩国市 ｜ 株式会社ハシモト工業</p>
        <h1 id="hero-title">鉄塔をつくる。<br />電気の道をつなぐ。</h1>
        <p className="hero-intro">{company.heroLead}</p>
        <a className="text-link" href="#services">私たちの仕事 <span aria-hidden="true">↗</span></a>
        <span className="hero-index" aria-hidden="true">HASHIMOTO KOGYO</span>
      </div>
      <figure className="hero-photo">
        <img src={sitePath("/images/transmission-towers-japan.jpg")} width="3229" height="2422" alt="空に伸びる日本の送電鉄塔と、鉄塔の間をつなぐ送電線（イメージ写真）" fetchPriority="high" />
        <figcaption>送電鉄塔のイメージ写真（当社の施工現場ではありません）</figcaption>
      </figure>
      <div className="hero-bottom"><span>鉄塔送電線工事</span><a href="#about">ハシモト工業について <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
