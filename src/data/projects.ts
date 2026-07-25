import { sitePath } from "@/src/lib/sitePath";

export type Project = {
  title: string;
  category: string;
  area: string;
  image: string;
  imageAlt: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "工場内電気設備工事",
    category: "電気工事",
    area: "山口県東部エリア",
    image: sitePath("/images/project-factory-electrical.png"),
    imageAlt: "工場内電気設備工事をイメージしたビジュアル",
    description: "工場内の設備利用を想定した電気設備工事の事例イメージです。",
  },
  {
    title: "店舗照明設備の更新",
    category: "電気工事",
    area: "岩国市周辺",
    image: sitePath("/images/project-store-lighting.png"),
    imageAlt: "店舗照明設備の更新をイメージしたビジュアル",
    description: "店舗の明るさや省エネ性に配慮した照明更新の事例イメージです。",
  },
  {
    title: "事業所内の配線工事",
    category: "電気工事",
    area: "岩国市周辺",
    image: sitePath("/images/project-office-wiring.png"),
    imageAlt: "事業所内の配線工事をイメージしたビジュアル",
    description: "事業所のレイアウト変更に伴う配線工事の事例イメージです。",
  },
  {
    title: "太陽光発電設備関連工事",
    category: "電気工事",
    area: "近隣地域",
    image: sitePath("/images/project-solar-equipment.png"),
    imageAlt: "太陽光発電設備関連工事をイメージしたビジュアル",
    description: "発電設備まわりの電気工事を想定した事例イメージです。",
  },
  {
    title: "建設現場の仮設工事",
    category: "とび・土工工事",
    area: "山口県東部エリア",
    image: sitePath("/images/project-temporary-scaffold.png"),
    imageAlt: "建設現場の仮設工事をイメージしたビジュアル",
    description: "現場の作業性と安全性を支える仮設工事の事例イメージです。",
  },
  {
    title: "土工事・現場整備",
    category: "とび・土工工事",
    area: "岩国市周辺",
    image: sitePath("/images/project-earthwork-site-preparation.png"),
    imageAlt: "土工事と現場整備をイメージしたビジュアル",
    description: "工事前後の現場環境を整える土工事の事例イメージです。",
  },
];
