export const verificationNote =
  "掲載情報は公開前に正式内容をご確認ください。";

export const company = {
  name: "株式会社ハシモト工業",
  // 仮情報・公開前に所在地表記を公式情報で確認してください。
  location: "山口県岩国市",
  // 仮情報・公開前に代表者名を公式情報で確認してください。
  representative: "橋本 宗治",
  // 仮情報・公開前に電話番号を公式情報で確認してください。
  phone: "0827-46-1201",
  // 仮情報・公開前に電話番号を公式情報で確認してください。
  phoneHref: "tel:0827461201",
  capital: "1,000万円",
  // 仮情報・公開前に建設業許可番号を公式情報で確認してください。
  permitNumber: "山口県知事許可 第013833号",
  business: ["鉄塔送電線工事", "送電線設備の関連工事"],
  catchcopy: "電力インフラを、確かな技術で支える。",
  heroLead:
    "株式会社ハシモト工業は、山口県岩国市を拠点に、鉄塔送電線工事を中心とした電力インフラ工事に取り組んでいます。安全を最優先に、一つひとつの現場で確かな施工品質を追求します。",
  area: {
    // 仮情報・実際の対応範囲は公開前に確認してください。
    primaryText: "岩国市を中心に、山口県東部および近隣地域のご相談に対応します。",
    description:
      "岩国市周辺と山口県東部を想定したエリア表現です。鉄塔送電線工事の実際の対応範囲は、公開前に正式な営業範囲へ合わせて変更してください。",
    note: "市区町村名や範囲は後から編集できます。",
    labels: ["山口県東部", "近隣地域", "山間部・沿線", "電力インフラ"],
  },
  features: [
    {
      title: "安全を第一に考えた高所作業",
      text: "高所作業を伴う現場だからこそ、作業前の確認、声かけ、危険箇所の共有を大切にします。",
    },
    {
      title: "電力インフラを支える責任感",
      text: "地域の暮らしと産業に欠かせない送電線設備に関わる仕事として、一つひとつの工程に責任を持って取り組みます。",
    },
    {
      title: "現場条件に合わせた丁寧な施工",
      text: "地形、天候、周辺環境など現場ごとの条件を確認し、チームで連携しながら確実な施工を目指します。",
    },
  ],
  reasons: [
    {
      title: "安全管理を徹底した施工",
      text: "作業環境の確認、危険箇所の共有、無理のない工程づくりを大切にします。",
    },
    {
      title: "送電線工事に向き合う専門性",
      text: "鉄塔や架線に関わる工事の特性を踏まえ、現場ごとの安全計画と施工手順を大切にします。",
    },
    {
      title: "チーム連携を重視した現場対応",
      text: "高所作業や重機・資材を扱う現場では、合図、確認、報告を徹底し、無理のない作業を進めます。",
    },
    {
      title: "工事前後まで見据えた丁寧な対応",
      text: "準備、施工、片付けまでを一連の品質と捉え、周辺環境への配慮と確実な確認を心がけます。",
    },
  ],
  seo: {
    // GitHub Pages公開URLです。正式ドメインを使う場合は変更してください。
    siteUrl: "https://toyota48.github.io/hashimoto-kogyo-iwakuni/",
    title: "株式会社ハシモト工業 | 岩国市の鉄塔送電線工事",
    description:
      "山口県岩国市の株式会社ハシモト工業のコーポレートサイト。鉄塔送電線工事、送電線設備の関連工事、対応エリア、会社概要、お問い合わせを掲載しています。",
    keywords: [
      "岩国市 鉄塔送電線工事",
      "岩国市 送電線工事",
      "山口県 送電線工事",
      "電力インフラ 工事 山口県",
      "ハシモト工業",
    ],
  },
};

export const navLinks = [
  { href: "#top", label: "ホーム" },
  { href: "#about", label: "私たちについて" },
  { href: "#services", label: "事業内容" },
  { href: "#projects", label: "施工実績" },
  { href: "#company", label: "会社概要" },
  { href: "#recruit", label: "採用情報" },
  { href: "#contact", label: "お問い合わせ" },
];

export const contactCategories = [
  "鉄塔送電線工事について",
  "送電線設備の関連工事について",
  "協力会社・工事相談について",
  "採用について",
  "その他",
];

export const companyProfileRows = [
  { label: "会社名", value: company.name },
  { label: "代表者", value: company.representative },
  { label: "所在地", value: company.location },
  { label: "電話番号", value: company.phone },
  { label: "資本金", value: company.capital },
  { label: "建設業許可番号", value: company.permitNumber },
  { label: "事業内容", value: company.business.join("、") },
];
