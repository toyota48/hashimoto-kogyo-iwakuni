import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
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
        <div className="section-label"><span>01</span><h2>私たちについて</h2></div>
        <div className="about-body">
          <h3>岩国から、<br />送電線の現場へ。</h3>
          <div><p>街の中にも、山の上にも。<br />鉄塔と送電線は、発電所や変電所を結び、<br className="desktop-break" />暮らしや産業に必要な電気を運んでいます。</p>
          <p>ハシモト工業の主な仕事は、この鉄塔送電線工事です。<br className="desktop-break" />山口県岩国市を拠点に、送電線設備に関わる工事に取り組んでいます。</p></div>
        </div>
      </section>
      <section id="services" className="work-section">
        <div className="section">
          <div className="section-label"><span>02</span><h2>事業内容</h2></div>
          <div className="work-heading"><h3>私たちの仕事</h3><p>鉄塔送電線工事を主な業務としています。<br />工事の内容や対応範囲は、お問い合わせください。</p></div>
          <article className="work-row"><span className="work-number">01 /</span><h4>鉄塔送電線工事</h4><div><p>電気を運ぶ送電線と、それを支える鉄塔。送電設備に関わる現場の工事を行います。</p><p className="work-note">工事のご相談では、現場の場所・工期・作業内容をお聞かせください。</p></div></article>
          <article className="work-row"><span className="work-number">02 /</span><h4>送電線設備の関連工事</h4><div><p>送電線工事に伴う関連作業についてもご相談を承ります。具体的な作業内容を伺い、対応の可否をご案内します。</p><a className="text-link" href="#contact">工事について相談する <span aria-hidden="true">↗</span></a></div></article>
          <div className="work-context"><span>送電線工事を知る</span><p>一般に送電線の建設は、鉄塔を支える基礎をつくり、鉄塔を組み立て、電線を張る工程で進みます。設備を長く使うための点検や部材の交換も、送電線に関わる仕事の一つです。</p><small>上記は一般的な工程の説明です。当社の施工範囲は個別にお問い合わせください。</small></div>
        </div>
      </section>
      <section id="company" className="section company-section">
        <div><div className="section-label"><span>03</span><h2>会社概要</h2></div><p className="company-wordmark" aria-hidden="true">HASHIMOTO<br />KOGYO<span>IWAKUNI, YAMAGUCHI</span></p></div>
        <dl className="company-table">{companyProfileRows.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.label === "電話番号" ? <a href={company.phoneHref}>{row.value}</a> : row.value}</dd></div>)}</dl>
      </section>
      <section id="recruit" className="recruit-section">
        <div className="section recruit-inner"><div><div className="section-label"><span>04</span><h2>採用について</h2></div><h3>{recruit.title}</h3><p>{recruit.lead}</p><a className="text-link" href={company.phoneHref}>採用について電話で聞く <span aria-hidden="true">↗</span></a></div><aside><h4>お問い合わせいただけること</h4><ul>{recruit.questions.map(q => <li key={q}>{q}</li>)}</ul><p>「ホームページを見た」とお伝えください。</p></aside></div>
      </section>
      <section id="contact" className="section contact-section"><div><p className="eyebrow">お問い合わせ</p><h2>工事のご相談・採用のお問い合わせ</h2><p>工事については現場の場所や作業内容を、<br />採用についてはご関心のあることをお聞かせください。</p></div><a className="phone-link" href={company.phoneHref}><span>お電話はこちら</span>{company.phone}<small>タップして電話する <span aria-hidden="true">↗</span></small></a></section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} />
  </>;
}
