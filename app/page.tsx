/* eslint-disable @next/next/no-img-element -- 静的配信するローカル画像。 */
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { company, companyProfileRows } from "@/src/data/company";
import { recruit } from "@/src/data/recruit";
import { sitePath } from "@/src/lib/sitePath";

export const dynamic = "force-static";
const structuredData = {
  "@context": "https://schema.org", "@type": "Organization",
  name: company.name, url: company.seo.siteUrl, telephone: company.phone,
  description: company.seo.description,
  address: { "@type": "PostalAddress", addressRegion: "山口県", addressLocality: "岩国市", addressCountry: "JP" },
};

function SectionHeading({ number, english, japanese }: { number: string; english: string; japanese: string }) {
  return <div className="section-heading"><span className="section-number">{number} /</span><h2><span className="heading-en" lang="en">{english}</span><span className="heading-ja">{japanese}</span></h2></div>;
}

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <Hero />
      <section id="about" className="section about">
        <SectionHeading number="01" english="ABOUT US" japanese="私たちについて" />
        <div className="about-body">
          <figure className="about-photo"><img src={sitePath("/images/transmission-towers-japan.jpg")} width="3229" height="2422" alt="日本の送電鉄塔と、鉄塔の間をつなぐ送電線（イメージ写真）" loading="lazy" /><figcaption>送電鉄塔のイメージ写真<br />当社の施工現場ではありません</figcaption></figure>
          <div className="about-copy"><p className="eyebrow">IWAKUNI, YAMAGUCHI</p><h3>岩国から、<br />送電線の現場へ。</h3><p>ハシモト工業は、山口県岩国市を拠点に、鉄塔送電線工事に取り組む会社です。</p><p>発電所や変電所を結ぶ送電線と、電線を支える鉄塔。その設備に関わる現場の工事を行っています。</p><a className="outline-link" href="#company">会社概要を見る <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
      <section id="services" className="work-section">
        <div className="section">
          <SectionHeading number="02" english="OUR BUSINESS." japanese="事業内容" />
          <div className="work-heading"><h3>鉄塔と、送電線。<br />電気を運ぶ設備の工事。</h3><p>鉄塔送電線工事を主な業務としています。<br />工事の内容や対応範囲は、お問い合わせください。</p></div>
          <div className="business-list">
            <article className="business-card"><div className="business-art tower-art" aria-hidden="true"><svg viewBox="0 0 400 260" fill="none"><path d="M178 25h44l47 208H131L178 25Z M200 25v208 M166 80h68 M150 150h100 M131 233l119-83 M269 233l-119-83 M150 150l84-70 M250 150l-84-70 M166 80l56-55 M234 80l-56-55 M145 80h110 M122 125h156 M105 168h190"/><path className="tower-wire" d="M0 68q72 28 145 12 M255 80q72 16 145-12 M0 112q60 25 122 13 M278 125q60 12 122-13 M0 155q55 23 105 13 M295 168q55 10 105-13"/></svg><span>TRANSMISSION TOWER</span></div><div className="business-card-body"><p className="business-kicker">TRANSMISSION LINE <span>01</span></p><h4>鉄塔送電線工事</h4><p>電気を運ぶ送電線と、それを支える鉄塔。送電設備に関わる現場の工事を行います。</p><a className="text-link" href="#contact">工事について相談する <span aria-hidden="true">↗</span></a></div></article>
            <article className="business-card"><div className="business-art line-art" aria-hidden="true"><svg viewBox="0 0 400 260" fill="none"><path d="M-40 62C110 230 230 5 440 140 M-40 104C110 272 230 47 440 182 M-40 146C110 314 230 89 440 224"/></svg><span>POWER INFRASTRUCTURE</span></div><div className="business-card-body"><p className="business-kicker">RELATED WORK <span>02</span></p><h4>送電線設備の関連工事</h4><p>送電線工事に伴う関連作業についてもご相談を承ります。作業内容を伺い、対応の可否をご案内します。</p><a className="text-link" href="#contact">対応内容を問い合わせる <span aria-hidden="true">↗</span></a></div></article>
          </div>
          <div className="work-context"><h4>送電線工事を知る</h4><div><p>一般に送電線の建設は、鉄塔を支える基礎をつくり、鉄塔を組み立て、電線を張る工程で進みます。設備を長く使うための点検や部材の交換も、送電線に関わる仕事の一つです。</p><p className="work-note">上記は一般的な工程の説明です。当社の施工範囲は個別にお問い合わせください。</p></div></div>
        </div>
      </section>
      <section id="recruit" className="recruit-section">
        <div className="section">
          <SectionHeading number="03" english="JOIN OUR TEAM" japanese="採用について" />
          <div className="recruit-inner"><div><h3>{recruit.title}</h3><p>{recruit.lead}</p><a className="outline-link" href={company.phoneHref}>採用について電話で聞く <span aria-hidden="true">↗</span></a></div><aside><h4>お問い合わせいただけること</h4><ul>{recruit.questions.map(q => <li key={q}>{q}<span aria-hidden="true">↗</span></li>)}</ul><p>「ホームページを見た」とお伝えください。</p></aside></div>
        </div>
      </section>
      <section id="company" className="section company-section">
        <SectionHeading number="04" english="COMPANY" japanese="会社概要" />
        <div className="company-inner"><div><h3>{company.name}</h3><p className="company-location">IWAKUNI, YAMAGUCHI, JAPAN</p></div><dl className="company-table">{companyProfileRows.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.label === "電話番号" ? <a href={company.phoneHref}>{row.value}</a> : row.value}</dd></div>)}</dl></div>
      </section>
      <section id="contact" className="contact-section"><div className="section contact-inner"><div><p className="contact-en" lang="en">LET’S TALK.</p><h2>工事のご相談・採用のお問い合わせ</h2><p>現場の場所や作業内容など、<br />まずはお電話でお聞かせください。</p></div><a className="phone-link" href={company.phoneHref}><span>お電話はこちら</span>{company.phone}<small>電話で問い合わせる <span aria-hidden="true">↗</span></small></a></div></section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} />
  </>;
}
