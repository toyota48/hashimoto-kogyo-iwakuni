export type Project = {
  title: string;
  category: string;
  area: string;
  image: string;
  imageAlt: string;
  description: string;
};

export const projectSampleNotice = "掲載内容はWebサイト制作時のサンプルです";

export const projects: Project[] = [
  {
    title: "工場内電気設備工事",
    category: "電気工事",
    area: "山口県東部エリア",
    image: "/images/project-factory-electrical-placeholder.png",
    imageAlt: "工場内電気設備工事をイメージしたサンプル画像",
    description: "工場内の設備利用を想定した電気設備工事のサンプル事例です。",
  },
  {
    title: "店舗照明設備の更新",
    category: "電気工事",
    area: "岩国市周辺",
    image: "/images/project-store-lighting-placeholder.png",
    imageAlt: "店舗照明設備の更新をイメージしたサンプル画像",
    description: "店舗の明るさや省エネ性に配慮した照明更新のサンプル事例です。",
  },
  {
    title: "事業所内の配線工事",
    category: "電気工事",
    area: "岩国市周辺",
    image: "/images/project-office-wiring-placeholder.png",
    imageAlt: "事業所内の配線工事をイメージしたサンプル画像",
    description: "事業所のレイアウト変更に伴う配線工事のサンプル事例です。",
  },
  {
    title: "太陽光発電設備関連工事",
    category: "電気工事",
    area: "近隣地域",
    image: "/images/project-solar-equipment-placeholder.png",
    imageAlt: "太陽光発電設備関連工事をイメージしたサンプル画像",
    description: "発電設備まわりの電気工事を想定したサンプル事例です。",
  },
  {
    title: "建設現場の仮設工事",
    category: "とび・土工工事",
    area: "山口県東部エリア",
    image: "/images/project-temporary-scaffold-placeholder.png",
    imageAlt: "建設現場の仮設工事をイメージしたサンプル画像",
    description: "現場の作業性と安全性を支える仮設工事のサンプル事例です。",
  },
  {
    title: "土工事・現場整備",
    category: "とび・土工工事",
    area: "岩国市周辺",
    image: "/images/project-earthwork-site-preparation-placeholder.png",
    imageAlt: "土工事と現場整備をイメージしたサンプル画像",
    description: "工事前後の現場環境を整える土工事のサンプル事例です。",
  },
];
