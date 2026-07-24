/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { ArrowRight, PhoneCall } from "lucide-react";
import { company } from "@/src/data/company";

export function Hero() {
  return (
    <section className="hero-grid" id="top">
      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl gap-10 px-5 py-12 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex border border-white/25 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-200">
            Electrical / Construction
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-normal md:text-6xl">{company.catchcopy}</h1>
          <p className="mt-6 text-base leading-8 text-slate-100 md:text-lg">{company.heroLead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
        <div className="hero-image-frame border border-white/20 bg-white/10 p-3">
          <img
            alt="建設現場または電気工事をイメージした仮画像"
            className="aspect-[4/3] h-full w-full object-cover"
            height="900"
            src="/images/hero-construction-electrical-site.png"
            width="1200"
          />
        </div>
      </div>
    </section>
  );
}
