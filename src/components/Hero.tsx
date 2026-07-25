/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { ArrowRight, Cable, PhoneCall, RadioTower, UtilityPole } from "lucide-react";
import { company } from "@/src/data/company";
import { sitePath } from "@/src/lib/sitePath";

const heroSignals = [
  { label: "鉄塔送電線工事", icon: RadioTower },
  { label: "送電設備関連工事", icon: Cable },
  { label: "岩国市を中心に対応", icon: UtilityPole },
];

export function Hero() {
  const [catchcopyLead, catchcopyRest] = company.catchcopy.split("、");

  return (
    <section className="hero-grid overflow-hidden bg-[#080808]" id="top">
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl place-items-center px-5 py-20 text-center text-white">
        <div className="w-full">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-200">
            Transmission Line / Infrastructure
          </p>
          <h1
            aria-label={company.catchcopy}
            className="mx-auto max-w-6xl text-4xl font-black leading-tight tracking-normal md:text-7xl"
          >
            {catchcopyRest ? (
              <>
                <span className="block">{catchcopyLead}、</span>
                <span className="block">{catchcopyRest}</span>
              </>
            ) : (
              company.catchcopy
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-xl">{company.heroLead}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="btn-primary" href="#services">
              事業内容を見る
              <ArrowRight aria-hidden="true" className="size-5" />
            </a>
            <a className="btn-outline" href="#contact">
              お問い合わせ
            </a>
          </div>
          <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-100 transition hover:text-white" href={company.phoneHref}>
            <PhoneCall aria-hidden="true" className="size-4" />
            電話で相談する {company.phone}
          </a>
          <div className="mx-auto mt-10 hidden max-w-3xl gap-3 md:grid md:grid-cols-3">
            {heroSignals.map(({ icon: Icon, label }) => (
              <div
                className="flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.08] px-4 text-sm font-bold text-zinc-100"
                key={label}
              >
                <Icon aria-hidden="true" className="size-4 text-[#fb923c]" />
                {label}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-[#1c1c1e] shadow-[0_28px_90px_rgba(0,0,0,0.36)] md:mt-12">
            <img
              alt="鉄塔送電線工事をイメージしたビジュアル"
              className="aspect-[16/5] w-full object-cover md:aspect-[16/7]"
              height="900"
              src={sitePath("/images/hero-transmission-tower-line.png")}
              width="1200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
