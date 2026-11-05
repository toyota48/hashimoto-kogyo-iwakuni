/* eslint-disable @next/next/no-img-element -- 静的配信するローカル画像。 */
import { company } from "@/src/data/company";
import { HeroSlideshow } from "@/src/components/HeroSlideshow";

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
      <HeroSlideshow />
      <div className="hero-bottom"><span>鉄塔送電線工事</span><a href="#about">ハシモト工業について <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
