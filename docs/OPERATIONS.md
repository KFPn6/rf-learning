# 運営手順

公開ページの目次は [README.md](../README.md) です。このファイルは、ページを直すときと、公開後に見るときの手順です。Jekyll の公開対象からは外しています。

公開 URL は https://kfpn6.github.io/rf-learning/ です。プロジェクトサイトなので、ページのパスの前に `/rf-learning` が付きます。設定の `baseurl` がこの接頭辞です。

屋号は仮置きで、ヘッダーに出る初期値は「学習ハブ」です。ブラウザの `<title>` の末尾は「高周波コネクタ・同軸ケーブル学習ハブ」です。

## GitHub Pages の有効化

公開元はリポジトリ直下（`/`）です。`docs/` は運営メモ専用なので、Pages のフォルダに選ばないでください。選ぶとサイトの代わりにメモだけが公開されます。

### すでに有効な場合

Settings → Pages で、Source が **Deploy from a branch**、Branch が `main`、フォルダが `/ (root)` になっていれば、追加の操作はありません。反映には数分かかることがあります。

### 画面で有効にする場合

次のクリックが必要です。

1. GitHub でこのリポジトリを開く
2. **Settings** → 左の **Pages**
3. Build and deployment の Source を **Deploy from a branch** にする
4. Branch を `main`、フォルダを **/ (root)** にして Save
5. 表示された URL が `https://kfpn6.github.io/rf-learning/` であることを確認する

ユーザーサイト（`https://kfpn6.github.io/` 直下）に変えるときは、`_config.yml` の `baseurl` を `""` にします。いまのリポジトリ名のままでは `"/rf-learning"` のままにしてください。

## 文章の直し方

1. 該当ページの `index.md` を編集する
2. 検索で開かれるページでは、front matter の `title` と `description`、本文の最初の見出し（h1）を、実際に検索される具体語を含む形にする。`<title>` はレイアウトが `title｜高周波コネクタ・同軸ケーブル学習ハブ` と組む
3. そのページの `lastmod` を直した日（`YYYY-MM-DD`）にする。書かないページは `_config.yml` の既定日になる
4. `main` ブランチへ commit して push する
5. 数分後に公開 URL を再読み込みする
6. 公開されたら、下の IndexNow で変わった URL を送る

| ページ | ファイル |
| --- | --- |
| トップ | `index.md` |
| 業界を知る | `industry/index.md` |
| 学び | `learn/index.md` と `learn/` 以下の各 `index.md` |
| 学習マンガ | `manga/index.md` と `manga/01-usb-c/` から `manga/15-botka-24mm/`。偉人シリーズの年表は `manga/great-people/` |
| 用語集 | `glossary/index.md` |
| 規格・周波数 | `spectrum/index.md` |
| 現場の仕事 | `work/index.md` |
| 読む | `reading/index.md` |
| About | `about/index.md` |
| 問い合わせ | `contact/index.md`（公開ナビには出さない。ページ自体は残す） |

用語を足すときは `glossary/index.md` に見出しを追加し、ページ上部のタグからもリンクします。

本文の数値、出典、断定の範囲は、題名を直すときも変えないでください。周波数や系列の上限は学習用の目安であり、製品の保証値ではありません。

### 本棚（読む）に本を足すとき

公開ページの `reading/index.md` は、訪れる人向けの書誌です。運営向けの手順はここだけに置きます。

1. 書名、著者、出版社、年を、既存の見出し（RFの基礎、計測、はんだ・接合、洋書・達人、無料の資料）のどれかに一行足す
2. 品切れや古い版は、その行に注記する
3. 公式や出版社のページがあるときだけ URL を付ける。在庫や価格は書かない
4. `main` へ push する

記入例です。`example.com` はダミーです。

```markdown
- 『書名』（著者／出版社・年） — 何が読めるかを一文で。[出版社のページ](https://example.com/book)
```

ナビゲーションのラベルと並びは `_config.yml` の `nav` です。見た目は `assets/css/style.css` です。

## 題名と検索向けのファイル

- 各ページの `title` がページ名です。ブラウザの `<title>`、OGP、`twitter:card` は `_includes/head-seo.html` が `ページ名｜高周波コネクタ・同軸ケーブル学習ハブ` にします。末尾の文言は `_config.yml` の `title_suffix` です
- 同じファイルが JSON-LD（WebSite、TechArticle、BreadcrumbList）を出します。`docs/dashboard.html` はレイアウトを使わないので、これらの対象外です
- `robots.txt` はプロジェクトのパスに出ます。Sitemap 行は `https://kfpn6.github.io/rf-learning/sitemap.xml` です
- `sitemap.xml` は公開ページの URL と `lastmod` です。404、運営用 `docs/`、アセット、このメモは出しません
- 検索エンジンがホスト直下の `https://kfpn6.github.io/robots.txt` を読む場合、このリポジトリの `robots.txt` はその場所には出ません。プロジェクトサイトのファイルは `https://kfpn6.github.io/rf-learning/robots.txt` です

## IndexNow

キーはリポジトリ直下の `55f9428353fa3269dd0a22f47684cca2.txt` です。中身はそのキーだけです。公開後の場所は次です。

https://kfpn6.github.io/rf-learning/55f9428353fa3269dd0a22f47684cca2.txt

ページを公開したあと、キーファイルがこの URL で開けることを確認してから、`https://api.indexnow.org/indexnow` へ POST します。`host` は `kfpn6.github.io`、`keyLocation` は上の URL、`urlList` はサイトマップにある公開 URL です。

## 屋号を変える

`_config.yml` の `brand` を書き換えます。ヘッダーとフッターに反映されます。`tagline` と `description` と `brand_note` も同じファイルです。ブラウザの題名の末尾を変えるときは `title_suffix` です。本文の地の文は自動では置き換わらないので、必要なら `about/index.md` を読み返します。

## 問い合わせフォーム

いまは作りません。問い合わせページはプレースホルダのままです。Google フォームの設置は、英語版とモバイルの追加の磨き込みと同じで、月間 PV が 500 を超えてからです。`contact_form_embed_url` は空のままにします。手順は [METRICS.md](METRICS.md) にあります。

## アクセス計測（公開後）

MVP は有料プランを前提にしません。推奨は無料の Cloudflare Web Analytics です。トークンを貼るまでスクリプトは出ません。

1. サイトが本番 URL で開くことを確認する
2. Cloudflare の Web Analytics でホスト名 `kfpn6.github.io` を追加する。DNS の移管はしない
3. スニペットの `token` だけをコピーする。アカウントの API トークンは貼らない
4. `_config.yml` の `analytics.provider` を `cloudflare` にし、`cloudflare_token` に貼る
5. `main` へ push する

週次の PV、ユニーク訪問者、ページ別上位の読み方と、暫定目標は [METRICS.md](METRICS.md) にあります。運営ダッシュボードは `/rf-learning/docs/dashboard.html` です（noindex）。

Plausible のクラウド版は有料です。必須ではありません。すでに使えるインスタンスがあるときだけ `provider: plausible` にします。GA4 は代替で、`provider: ga4` と測定 ID です。三つは同時に出ません。

## 目標を超えるまで着手しないこと

英語版、モバイル表示の追加の磨き込み、Google フォームの設置は、トラフィックの暫定目標（月間 PV 500）を上回ったあとの作業です。手順と判定は [METRICS.md](METRICS.md) に書いてあります。

スマートフォンで読めるレスポンシブ CSS（はみ出さない、メニューから全ページへ行ける、表は横スクロール）は、そのゲートの外です。MVP の公開時点で満たします。読めない不具合の修正は、目標の達成を待ちません。

暫定目標の初期値も同じ文書にあります。1ヶ月目は月間 100 PV、3ヶ月目は月間 500 PV です。問い合わせ件数は、フォームを接続したあとにはじめて数えます。いずれも暫定です。

## 手元で見る

Ruby と Jekyll がある環境で、リポジトリ直下から次を実行します。

```bash
jekyll serve
```

ブラウザでは http://127.0.0.1:4000/rf-learning/ を開きます。`baseurl` が付いているため、ホスト直下ではありません。

## 範囲

掲載は日本語です。特定のメーカー名や、非公開の社内事情、職の募集は置きません。社名は公開ページに書きません。周波数やコネクタ系列の上限は学習用の目安であり、製品の保証値ではありません。
