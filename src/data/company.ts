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
  business: ["電気工事", "とび・土工工事"],
  catchcopy: "確かな技術で、地域の未来を支える。",
  heroLead:
    "株式会社ハシモト工業は、山口県岩国市を中心に、電気工事やとび・土工工事を通じて、地域の暮らしと産業を支えています。",
  area: {
    // 仮情報・実際の対応範囲は公開前に確認してください。
    primaryText: "岩国市を中心に、山口県東部および近隣地域のご相談に対応します。",
    description:
      "岩国市周辺を中心にしたエリア表現です。具体的な対応地域は、公開前に実際の営業範囲へ合わせて変更してください。",
    note: "市区町村名や範囲は後から編集できます。",
    labels: ["山口県東部", "近隣地域", "事業所・工場", "住宅・店舗"],
  },
  features: [
    {
      title: "安全を第一に考えた施工",
      text: "現場の状況を丁寧に確認し、作業前の共有と安全確認を大切にします。",
    },
    {
      title: "地域に根差した迅速な対応",
      text: "岩国市周辺のご相談に、地域企業として柔軟な姿勢で向き合います。",
    },
    {
      title: "経験と技術を生かした丁寧な仕事",
      text: "一つひとつの工程をおろそかにせず、長く安心できる施工を目指します。",
    },
  ],
  reasons: [
    {
      title: "安全管理を徹底した施工",
      text: "作業環境の確認、危険箇所の共有、無理のない工程づくりを大切にします。",
    },
    {
      title: "地域密着による柔軟な対応",
      text: "地域の現場事情に寄り添い、住宅・店舗・事業所など幅広い相談に向き合います。",
    },
    {
      title: "有資格者による専門的な作業",
      text: "資格が必要な作業は、法令や安全基準に沿った体制で進める想定です。公開前に資格情報を確認してください。",
    },
    {
      title: "工事後まで見据えた丁寧な対応",
      text: "施工して終わりではなく、使いやすさや維持管理まで考えた説明を心がけます。",
    },
  ],
  seo: {
    // GitHub Pages公開URLです。正式ドメインを使う場合は変更してください。
    siteUrl: "https://toyota48.github.io/hashimoto-kogyo-iwakuni/",
    title: "株式会社ハシモト工業 | 岩国市の電気工事・とび土工工事",
    description:
      "山口県岩国市の株式会社ハシモト工業のコーポレートサイト。電気工事、とび・土工工事、対応エリア、会社概要、お問い合わせを掲載しています。",
    keywords: [
      "岩国市 電気工事",
      "岩国市 建設会社",
      "山口県 電気設備工事",
      "岩国市 とび工事",
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
  "電気工事について",
  "とび・土工工事について",
  "見積もりについて",
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
