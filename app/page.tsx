import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { SiteMotion } from "@/src/components/SiteMotion";
import { Hero } from "@/src/components/Hero";
import { company, companyProfileRows } from "@/src/data/company";
import { recruit } from "@/src/data/recruit";

export const dynamic = "force-static";
const structuredData = {
  "@context": "https://schema.org", "@type": "Organization",
  name: company.name, url: company.seo.siteUrl, telephone: company.phone,
  description: company.seo.description,
  address: { "@type": "PostalAddress", addressRegion: "山口県", addressLocality: "岩国市", addressCountry: "JP" },
};

export default function Home() {
  return <>
    <Header />
    <main>
      <Hero />
      <section id="about" className="section about">
        <div data-reveal className="section-label"><span>01</span><h2>私たちについて</h2></div>
        <div className="about-body">
          <h3 data-reveal>岩国から、<br />送電線の現場へ。</h3>
          <div data-reveal><p>街の中にも、山の上にも。<br />鉄塔と送電線は、発電所や変電所を結び、<br className="desktop-break" />暮らしや産業に必要な電気を運んでいます。</p>
          <p>ハシモト工業の主な仕事は、この鉄塔送電線工事です。<br className="desktop-break" />山口県岩国市を拠点に、送電線設備に関わる工事に取り組んでいます。</p></div>
        </div>
      </section>
      <section id="services" className="work-section">
        <div className="section">
          <div data-reveal className="section-label"><span>02</span><h2>事業内容</h2></div>
          <div data-reveal className="work-heading"><h3>私たちの仕事</h3><p>鉄塔送電線工事を主な業務としています。</p></div>
          <article data-reveal className="work-row"><span className="work-number">01 /</span><h4>鉄塔送電線工事</h4><div><p>電気を運ぶ送電線と、それを支える鉄塔。送電設備に関わる現場の工事を行います。</p></div></article>
          <article data-reveal className="work-row"><span className="work-number">02 /</span><h4>送電線設備の関連工事</h4><div><p>送電線工事に伴う関連作業に取り組んでいます。</p><a className="text-link" href="#contact">工事について相談する <span aria-hidden="true">↗</span></a></div></article>
          <div data-reveal className="work-context"><span>送電線工事を知る</span><p>一般に送電線の建設は、鉄塔を支える基礎をつくり、鉄塔を組み立て、電線を張る工程で進みます。設備を長く使うための点検や部材の交換も、送電線に関わる仕事の一つです。</p></div>
        </div>
      </section>
      <section id="company" className="section company-section">
        <div><div data-reveal className="section-label"><span>03</span><h2>会社概要</h2></div><p data-reveal className="company-wordmark" aria-hidden="true">HASHIMOTO<br />KOGYO<span>IWAKUNI, YAMAGUCHI</span></p></div>
        <dl className="company-table">{companyProfileRows.map(row => <div data-reveal key={row.label}><dt>{row.label}</dt><dd>{row.label === "電話番号" ? <a href={company.phoneHref}>{row.value}</a> : row.value}</dd></div>)}</dl>
      </section>
      <section id="recruit" className="recruit-section">
        <div className="section recruit-inner"><div><div data-reveal className="section-label"><span>04</span><h2>採用について</h2></div><h3 data-reveal>{recruit.title}</h3><p data-reveal>{recruit.lead}</p><a className="text-link" href={company.phoneHref}>採用について電話で聞く <span aria-hidden="true">↗</span></a></div><aside data-reveal><h4>お問い合わせいただけること</h4><ul>{recruit.questions.map(q => <li key={q}>{q}</li>)}</ul></aside></div>
      </section>
      <section id="contact" className="section contact-section"><div data-reveal><p className="eyebrow">お問い合わせ</p><h2>工事のご相談・採用のお問い合わせ</h2></div><a data-reveal className="phone-link" href={company.phoneHref}><span>お電話はこちら</span>{company.phone}<small>タップして電話する <span aria-hidden="true">↗</span></small></a></section>
    </main>
    <Footer />
    <SiteMotion />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} />
  </>;
}
