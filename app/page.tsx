import type { Metadata } from "next";
import { Building2, CheckCircle2, GraduationCap, MapPinned, ShieldCheck, Users } from "lucide-react";
import { ContactForm } from "@/src/components/ContactForm";
import { FeatureCard } from "@/src/components/FeatureCard";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { MobileContactBar } from "@/src/components/MobileContactBar";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SectionTitle } from "@/src/components/SectionTitle";
import { ServiceCard } from "@/src/components/ServiceCard";
import { company, companyProfileRows, verificationNote } from "@/src/data/company";
import { projects } from "@/src/data/projects";
import { recruit } from "@/src/data/recruit";
import { services } from "@/src/data/services";

export const metadata: Metadata = {
  title: company.seo.title,
  description: company.seo.description,
};

export const dynamic = "force-static";

const reasonIcons = [ShieldCheck, MapPinned, GraduationCap, CheckCircle2];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  legalName: company.name,
  description: company.seo.description,
  url: company.seo.siteUrl, // サンプルURLです。公開時は正式なURLへ変更してください。
  telephone: company.phone, // 仮情報・公開前に公式情報で確認してください。
  address: {
    "@type": "PostalAddress",
    addressRegion: "山口県",
    addressLocality: company.location, // 仮情報・公開前に所在地表記を確認してください。
    addressCountry: "JP",
  },
  identifier: company.permitNumber, // 仮情報・公開前に許可番号を確認してください。
  areaServed: company.area.primaryText, // 仮情報・実際の対応範囲を確認してください。
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />

        <section id="about" className="section-shell bg-[#080808]">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle
              eyebrow="About"
              title="私たちについて"
              description="安全を最優先に、誠実で丁寧な施工を積み重ねること。それが、私たちハシモト工業の基本姿勢です。地域に根差した企業として、一つひとつの現場に責任を持って取り組みます。"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {company.features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell bg-[#111111]">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle
              eyebrow="Services"
              title="事業内容"
              description="電気工事、とび・土工工事を中心に、地域の建設現場や事業活動を支える施工内容を分かりやすく紹介します。"
            />
            <div className="mt-10 grid gap-7 lg:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="reasons" className="section-shell bg-[#080808] text-white">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="ハシモト工業が選ばれる理由"
              description="根拠のない件数や年数ではなく、施工の基本姿勢と対応品質が伝わる内容に絞っています。"
              tone="dark"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {company.reasons.map((reason, index) => {
                const Icon = reasonIcons[index] ?? CheckCircle2;

                return (
                  <article
                    className="group rounded-lg bg-white/[0.08] p-6 transition duration-200 hover:-translate-y-1 hover:bg-white/[0.12]"
                    key={reason.title}
                  >
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-[#f97316] text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-normal">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-200">{reason.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell bg-[#111111]">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle
              eyebrow="Projects"
              title="施工実績"
              description="公開時には、実在の施工実績と掲載許可を確認したうえで内容を更新してください。"
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="area" className="section-shell bg-[#080808]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionTitle eyebrow="Area" title="対応エリア" description={company.area.primaryText} align="left" />
              <p className="mt-6 leading-8 text-zinc-300">{company.area.description}</p>
              <p className="mt-4 text-sm text-zinc-400">{company.area.note}</p>
            </div>
            <div className="area-map" aria-label="岩国市周辺をイメージした対応エリア表示">
              <div className="area-map__ring area-map__ring--outer" />
              <div className="area-map__ring area-map__ring--inner" />
              <div className="area-map__center">
                <MapPinned aria-hidden="true" className="mx-auto mb-3 size-8 text-[#f97316]" />
                <span className="block text-sm text-zinc-400">中心エリア</span>
                <strong className="text-2xl text-white">岩国市</strong>
              </div>
              {company.area.labels.map((label, index) => (
                <span className={`area-map__label area-map__label--${index + 1}`} key={label}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="recruit" className="section-shell bg-[#111111]">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-10 text-white lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <div>
                <p className="mb-4 inline-flex border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#fb923c]">
                  Recruit
                </p>
                <h2 className="text-3xl font-extrabold tracking-normal md:text-4xl">{recruit.title}</h2>
                <p className="mt-5 leading-8 text-zinc-300">{recruit.lead}</p>
                <a className="btn-secondary mt-8" href="#contact">
                  募集要項を見る
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {recruit.points.map((point) => (
                  <article className="rounded-lg bg-[#242426] p-5 transition duration-200 hover:-translate-y-1 hover:bg-[#2b2b2e]" key={point.title}>
                    <Users aria-hidden="true" className="mb-4 size-6 text-[#fb923c]" />
                    <h3 className="font-bold">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">{point.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="company" className="section-shell bg-[#080808]">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle
              eyebrow="Company"
              title="会社概要"
              description="会社情報は設定ファイルからまとめて変更できます。公開前に所在地、代表者名、電話番号、許可番号をご確認ください。"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div className="overflow-hidden rounded-lg bg-[#242426] shadow-[0_18px_56px_rgba(0,0,0,0.24)]">
                <table className="w-full border-collapse text-left text-sm">
                  <tbody>
                    {companyProfileRows.map((row) => (
                      <tr className="border-b border-white/10 last:border-b-0" key={row.label}>
                        <th className="w-36 bg-[#1c1c1e] px-4 py-4 font-bold text-white md:w-48">
                          {row.label}
                        </th>
                        <td className="px-4 py-4 leading-7 text-zinc-300">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="map-placeholder">
                <Building2 aria-hidden="true" className="size-12 text-[#f97316]" />
                <div>
                  <p className="text-xl font-bold text-white">地図表示エリア</p>
                  <p className="mt-2 leading-7 text-zinc-300">
                    Googleマップは直接埋め込まず、公開時に所在地確認後、地図画像やリンクを設定する想定です。
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-zinc-400">{verificationNote}</p>
          </div>
        </section>

        <section id="contact" className="section-shell bg-[#111111]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="お問い合わせ"
                description="工事のご相談、お見積もり、採用に関するお問い合わせはこちらからご連絡ください。"
                align="left"
              />
              <div className="mt-8 rounded-lg bg-[#242426] p-6">
                <p className="text-sm font-bold text-zinc-400">電話でのお問い合わせ</p>
                <a className="mt-3 inline-flex text-3xl font-extrabold text-white transition hover:text-[#f97316]" href={company.phoneHref}>
                  {company.phone}
                </a>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  受付時間などは公開前に正式な条件を確認してください。
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <MobileContactBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
