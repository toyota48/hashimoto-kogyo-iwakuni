// 会社固有の詳細は、確認できた情報から追加する。
export const company = {
  name: "株式会社ハシモト工業",
  location: "山口県岩国市",
  phone: "0827-46-1201",
  phoneHref: "tel:0827461201",
  business: ["鉄塔送電線工事", "送電線設備の関連工事"],
  catchcopy: "鉄塔をつくる。電気の道をつなぐ。",
  heroLead: "山口県岩国市を拠点に、鉄塔送電線工事に取り組む会社です。",
  seo: {
    siteUrl: "https://toyota48.github.io/hashimoto-kogyo-iwakuni/",
    title: "株式会社ハシモト工業｜山口県岩国市の鉄塔送電線工事",
    description: "株式会社ハシモト工業は山口県岩国市を拠点に、鉄塔送電線工事に取り組む会社です。事業内容、会社概要、採用に関するお問い合わせをご案内します。",
    keywords: ["岩国市 送電線工事", "鉄塔送電線工事", "ハシモト工業"],
  },
};
export const navLinks = [
  { href: "#about", label: "私たちについて" },
  { href: "#services", label: "事業内容" },
  { href: "#company", label: "会社概要" },
  { href: "#recruit", label: "採用について" },
];
export const companyProfileRows = [
  { label: "会社名", value: company.name },
  { label: "所在地", value: company.location },
  { label: "事業内容", value: company.business.join("・") },
  { label: "電話番号", value: company.phone },
];
export const contactCategories = ["工事について", "採用について", "その他"];
