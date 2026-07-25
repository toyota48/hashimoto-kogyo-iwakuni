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
    title: "送電線鉄塔の組立関連工事",
    category: "鉄塔送電線工事",
    area: "山口県東部エリア",
    image: sitePath("/images/project-transmission-tower-assembly.png"),
    imageAlt: "送電線鉄塔の組立関連工事をイメージしたビジュアル",
    description: "鉄塔の組立や建方に関わる作業を想定した事例イメージです。",
  },
  {
    title: "架線・張替に関わる工事",
    category: "送電線工事",
    area: "岩国市周辺",
    image: sitePath("/images/project-overhead-line-stringing.png"),
    imageAlt: "架線と張替に関わる工事をイメージしたビジュアル",
    description: "送電線の架線や張替に関わる作業を想定した事例イメージです。",
  },
  {
    title: "がいし・金具類の取付関連作業",
    category: "送電設備関連工事",
    area: "岩国市周辺",
    image: sitePath("/images/project-insulator-hardware.png"),
    imageAlt: "がいしと金具類の取付関連作業をイメージしたビジュアル",
    description: "送電設備の金具類や付属部材に関わる作業を想定した事例イメージです。",
  },
  {
    title: "鉄塔まわりの保守・点検補助",
    category: "電力インフラ工事",
    area: "近隣地域",
    image: sitePath("/images/project-tower-maintenance.png"),
    imageAlt: "鉄塔まわりの保守と点検補助をイメージしたビジュアル",
    description: "鉄塔周辺の確認や保守に関わる補助作業を想定した事例イメージです。",
  },
  {
    title: "沿線・作業ヤードの整備",
    category: "付帯工事",
    area: "山口県東部エリア",
    image: sitePath("/images/project-site-access-preparation.png"),
    imageAlt: "沿線と作業ヤードの整備をイメージしたビジュアル",
    description: "作業場所へのアクセスや資材置き場の環境整備を想定した事例イメージです。",
  },
  {
    title: "安全設備・資材搬入に関わる作業",
    category: "現場支援",
    area: "岩国市周辺",
    image: sitePath("/images/project-safety-support.png"),
    imageAlt: "安全設備と資材搬入に関わる作業をイメージしたビジュアル",
    description: "送電線工事を安全に進めるための設備準備や資材搬入を想定した事例イメージです。",
  },
];
