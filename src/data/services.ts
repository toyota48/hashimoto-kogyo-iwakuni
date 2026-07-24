export type Service = {
  title: string;
  slug: "electrical" | "earthwork";
  icon: "zap" | "construction";
  image: string;
  imageAlt: string;
  description: string;
  examples: string[];
  note: string;
};

export const services: Service[] = [
  {
    title: "電気工事",
    slug: "electrical",
    icon: "zap",
    image: "/images/service-electrical-work-placeholder.png",
    imageAlt: "電気設備工事をイメージした仮画像",
    description:
      "住宅、店舗、事業所、工場などの電気設備に関する工事を行う想定です。安全性と使いやすさに配慮し、現場に合わせた施工を目指します。",
    // サンプル情報・要確認: 以下の施工例は実際の対応可否を公開前に確認してください。
    examples: [
      "電気設備工事",
      "配線工事",
      "コンセント・照明設備工事",
      "設備の改修・交換",
      "太陽光発電設備関連工事",
    ],
    note: "掲載している施工例はサンプル情報です。実際に対応している工事内容は要確認です。",
  },
  {
    title: "とび・土工工事",
    slug: "earthwork",
    icon: "construction",
    image: "/images/service-scaffold-earthwork-placeholder.png",
    imageAlt: "仮設足場工事と土工事をイメージした仮画像",
    description:
      "建設現場で必要となる仮設工事や土工事などを行う想定です。現場の安全と作業効率を支える基礎的な工事に対応します。",
    // サンプル情報・要確認: 以下の施工例は実際の対応範囲を公開前に確認してください。
    examples: ["仮設足場工事", "土工事", "建設現場の付帯工事", "現場環境の整備"],
    note: "掲載している対応範囲はサンプル情報です。実際の対応地域・内容は要確認です。",
  },
];
