import { sitePath } from "@/src/lib/sitePath";

export type Service = {
  title: string;
  slug: "transmissionTower" | "powerInfrastructure";
  icon: "radioTower" | "cable" | "utilityPole";
  image: string;
  imageAlt: string;
  description: string;
  examples: string[];
  note: string;
};

export const services: Service[] = [
  {
    title: "鉄塔送電線工事",
    slug: "transmissionTower",
    icon: "radioTower",
    image: sitePath("/images/service-transmission-tower-line.png"),
    imageAlt: "鉄塔送電線工事をイメージしたビジュアル",
    description:
      "送電線鉄塔に関わる工事を中心に、電力インフラを支える現場作業に対応する想定です。高所作業を伴うため、安全確認とチーム連携を重視した施工内容として整理しています。",
    // サンプル情報・要確認: 以下の施工例は実際の対応可否と作業区分を公開前に確認してください。
    examples: [
      "送電線鉄塔の組立・改修関連工事",
      "架線・張替に関わる作業",
      "がいし・金具類の取付関連作業",
      "鉄塔まわりの保守・点検補助",
      "現場仮設・資材運搬に関わる作業",
    ],
    note: "実際の対応範囲・作業区分は公開前に確認してください。",
  },
  {
    title: "送電設備の関連工事",
    slug: "powerInfrastructure",
    icon: "cable",
    image: sitePath("/images/service-power-infrastructure.png"),
    imageAlt: "送電設備の関連工事をイメージしたビジュアル",
    description:
      "送電線工事に付帯する準備、現場環境の整備、資材・安全管理の補助などを紹介する想定です。対応可否や工事区分は正式確認が必要です。",
    // サンプル情報・要確認: 以下の関連作業は実際の対応範囲を公開前に確認してください。
    examples: [
      "現場調査・施工準備",
      "仮設・安全設備の設置補助",
      "資材搬入・撤去に関わる作業",
      "沿線・作業ヤードの環境整備",
      "電力インフラ工事の付帯作業",
    ],
    note: "実際の対応地域・内容は公開前に確認してください。",
  },
];
