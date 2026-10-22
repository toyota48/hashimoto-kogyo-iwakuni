# 株式会社ハシモト工業 コーポレートサイト

岩国市の鉄塔送電線工事会社の案内サイト。Vinext / React / TypeScript。

## 開発・確認

```bash
npm run dev
npm run build
node --test tests/rendered-html.test.mjs
npx tsc --noEmit
```

GitHub Pages用の静的出力は `npm run build:github-pages`。出力先は `dist/client/`。公開URLは https://toyota48.github.io/hashimoto-kogyo-iwakuni/ 。

## 編集箇所

- `app/page.tsx`：会社紹介、事業内容、会社概要、採用案内、電話問い合わせ
- `app/globals.css`：白・濃紺を基調にしたレスポンシブレイアウト
- `src/data/company.ts`：会社情報とSEO
- `src/data/recruit.ts`：採用に関する問い合わせ案内
- `src/components/Hero.tsx`：メインビジュアル

## 掲載情報

事業内容は依頼者提供の「鉄塔送電線工事」が前提。会社名・地域・電話番号は従来の情報を維持。詳細住所、代表者、資本金、許可番号、具体的な施工範囲、採用条件は正式確認後に追加する。未確認の詳細を構造化データにも含めていない。

旧サンプルの施工実績と送信先未設定のフォームは表示しない。問い合わせは電話に一本化。具体的な自社施工写真・掲載可能な工事情報が揃った段階で実績を追加する。`src/data/projects.ts` などの旧サンプルは未使用のため、編集しても公開画面には反映されない。

## 写真の出典

`public/images/transmission-towers-japan.jpg`

- 作品：Japanese Transmission tower 2022-04.jpg
- 撮影者：Minirexs
- 出典：https://commons.wikimedia.org/wiki/File:Japanese_Transmission_tower_2022-04.jpg
- ライセンス：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
- 元画像を保存し、表示枠でトリミング。写真部分には同ライセンスが適用される。
- 自社施工実績ではなくイメージ写真であることを画像の近くに明記し、フッターでクレジットを表示。

将来自社の現場写真に差し替える際は、画像、alt、キャプション、フッター、OGP画像を合わせて更新する。
