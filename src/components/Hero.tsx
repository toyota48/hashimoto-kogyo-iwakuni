/* eslint-disable @next/next/no-img-element -- 静的配信するローカル画像。 */
import { company } from "@/src/data/company";
import { sitePath } from "@/src/lib/sitePath";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-art" src={sitePath("/images/transmission-flow.svg")} width="1600" height="1000" alt="" aria-hidden="true" fetchPriority="high" />
      <div className="hero-copy">
        <p className="eyebrow">TRANSMISSION LINE / IWAKUNI, YAMAGUCHI</p>
        <h1 id="hero-title"><span className="hero-name" lang="en">HASHIMOTO<br />KOGYO</span><span className="hero-tagline">鉄塔をつくる。<br className="mobile-break" />電気の道をつなぐ。</span></h1>
        <p className="hero-intro">{company.heroLead}</p>
        <a className="solid-link" href="#services">私たちの仕事 <span aria-hidden="true">↗</span></a>
      </div>
      <div className="hero-bottom"><span>株式会社ハシモト工業</span><a href="#about">SCROLL <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
