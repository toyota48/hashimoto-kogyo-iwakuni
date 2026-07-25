# 株式会社ハシモト工業 コーポレートサイトサンプル

山口県岩国市にある「株式会社ハシモト工業」の公式コーポレートサイトを想定したサンプル実装です。Next.js App Router、TypeScript、Tailwind CSSで構成しています。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開くと確認できます。

## ビルド

```bash
npm run build
```

`next.config.ts` で `output: "export"` を設定しているため、静的サイトとして出力しやすい構成です。

## 文章・会社情報の変更

会社名、所在地、代表者、電話番号、建設業許可番号、SEO文言などは `src/data/company.ts` にまとめています。

事業内容は `src/data/services.ts`、施工事例サンプルは `src/data/projects.ts`、採用情報は `src/data/recruit.ts` を編集してください。

所在地、代表者名、電話番号、許可番号、対応エリア、採用条件、施工対応範囲は仮情報です。公開前に必ず正式情報へ更新してください。

## 画像の変更

画像は `public/images/` に配置しています。更新する場合は、以下のように用途が分かるファイル名を保つと管理しやすくなります。

- `hero-construction-electrical-site.png`
- `service-electrical-work-placeholder.png`
- `service-scaffold-earthwork-placeholder.png`
- `project-...-placeholder.png`
- `og-hashimoto-kogyo.png`

画像を再生成する場合は、必要に応じて以下を実行できます。

```bash
node scripts/generate-placeholders.mjs
```

## 主な構成

- `app/page.tsx`: トップページの各セクション
- `app/layout.tsx`: title、description、OGPなどのメタ情報
- `src/components/`: Header、Footer、Hero、カード、フォームなど
- `src/data/`: 会社情報、事業内容、施工事例、採用情報
- `public/images/`: ページ内で使用する画像

## 注意

このサイトは公開前の制作データです。架空の受賞歴、施工件数、創業年数、お客様の声は掲載していません。
