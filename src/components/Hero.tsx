/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { ArrowRight, PhoneCall } from "lucide-react";
import { company } from "@/src/data/company";

export function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden" id="top">
      <img
        alt="建設現場または電気工事をイメージしたビジュアル"
        className="absolute inset-0 h-full w-full object-cover"
        height="900"
        src="/images/hero-construction-electrical-site.png"
        width="1200"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,32,0.76)_0%,rgba(8,18,32,0.48)_42%,rgba(8,18,32,0.76)_100%)]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl place-items-center px-5 py-16 text-center text-white">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-200">
            Electrical / Construction
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-normal md:text-7xl">{company.catchcopy}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-100 md:text-xl">{company.heroLead}</p>
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
        </div>
      </div>
    </section>
  );
}
