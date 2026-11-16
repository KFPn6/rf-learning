---
layout: default
title: "SMAとBNCの違いと使い分け"
description: "SMAのねじ結合（資料の呼びは1/4-36 UNS）とBNCのバヨネットの違い、直接は嵌合しないこと、変換アダプタ、出典ごとの周波数、50Ωと75Ω、着脱とトルクの読み分けを整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-16
permalink: /learn/sma-bnc/
---

{% include learn-nav.html %}

# SMAとBNCの違いと使い分け

SMA と BNC は、どちらも高周波の同軸コネクタです。結合が違います。IEC 61169-15:2021 の題は、ねじ結合、特性インピーダンス 50 Ω、type SMA です。IEC 61169-8:2007 の題は、バヨネット、特性インピーダンス 50 Ω、type BNC です。Rosenberger の SMA の技術資料は、結合ねじを 1/4-36 UNS と書きます。BNC の資料は、二本のスタッドと、約四分の一回転です。ねじの山と、スタッドは、掛かり合う相手ではありません。系列をまたぐときは、変換アダプタです。

ここにある数字は、公開の規格のプレビューと、メーカーの技術資料、計測器メーカーのアプリケーションノートから取った学習用の目安です。個別の製品が保証する値ではありません。同じ名前でも、資料が複数の周波数と、複数のトルクを置きます。平均して一つの上限にはしません。

系列の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。N 型の 5/8-24 とのねじの違いは [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。ねじの N 型と、このバヨネットの使い分けは [N型とBNC]({{ '/learn/n-bnc/' | relative_url }}) です。同じ 6.5 mm の呼びでねじにした TNC は [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。BNC の 50 Ω と 75 Ω の見分けと、誤嵌合の注意は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。このページは、BNC に両方があることと、その導線にとどめます。SMA が 3.5 mm、2.92 mm と機械的に嵌合しうることは [互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }})、中心を入れ替えた呼びは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }})、クイックロックの QMA は [QMAとSMA]({{ '/learn/qma-sma/' | relative_url }}) です。上限を平均しない読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 項目 | SMA | BNC |
| --- | --- | --- |
| このページが読んだ規格 | IEC 61169-15:2021。題は外導体内径 4.13 mm（0.163 in）、ねじ結合、50 Ω、type SMA | IEC 61169-8:2007。題は外導体内径 6.5 mm（0.256 in）、バヨネット、50 Ω、type BNC |
| 結合 | ねじ。Rosenberger のオス列は 1/4-36 UNS-2B、メス列は 1/4-36 UNS-2A。IEC のプレビュー本文に、この呼びの文字は無かった | 二本のスタッドのバヨネット。Amphenol のカタログは、メス側の二つのラグを約四分の一回転。IEC の適用範囲は、クイックな着脱 |
| その資料の周波数 | IEC の適用範囲は 18 GHz まで。推奨表は grade 1 を DC–18 GHz、フレキシブルのストレートとライトアングルを DC–12.4 GHz。Rosenberger は DC–18 GHz。R&S の節と図の例は 12 GHz。18 GHz まで出すメーカーもある、と本文 | R&S の図の例は 4 GHz。Rosenberger は、50 Ω が最大 10 GHz・最適 4 GHz、75 Ω が最大 4 GHz・最適 1 GHz。Amphenol の 50 Ω の説明は、動作 11 GHz まで、低い反射は 4 GHz まで。IEC の開いたプレビューの適用範囲に、GHz の数字は無かった |
| インピーダンス | 確認した資料は 50 Ω | 50 Ω と 75 Ω。カタログは、互いに嵌合しうる、と書く。見分けは別ページ |
| トルクの行 | Rosenberger の技術資料は、推奨が 0.8–1.1 N·m と 0.5 N·m。試験トルクの上限は 1.7 N·m と 0.6 N·m。製品案内の不等号は別の向き。R&S の表は 5 lb-inch（0.56 N·m）で、注は SMA を例外にする | カタログの結合は四分の一回転で、推奨トルクの行は無い。IEC のゲージの節は、掛け外しのトルクが 0.25 N·m を超えない、と書く |

</div>

4.13 mm と 6.5 mm は、規格の題が置く外導体内径の呼びです。界面の表の公差として、このページが読み直した数字ではありません。12 GHz、12.4 GHz、18 GHz を、一つの SMA の上限にはしません。1 GHz、4 GHz、10 GHz、11 GHz を、一つの BNC の上限にはしません。0.5、0.56、0.8–1.1、1.7 も、一つの締付にはしません。図面は転載していません。

## ねじと、バヨネット

IEC 61169-15:2021 の適用範囲は、外導体内径 4.13 mm（0.163 in）、ねじ結合、特性インピーダンス 50 Ω、type SMA です。SMA 形の高周波同軸コネクタは、あらゆる種類の高周波ケーブルとマイクロストリップに使い、マイクロ波の伝送系で使う、と続きます。動作周波数は 18 GHz まで、と書きます。Webstore の公開案内は、題と、詳細仕様を書くための規則までです。18 GHz の文は、その案内の要旨にはありません。周波数は、開いたプレビューの適用範囲と、推奨特性の表で置きます。

ねじの呼びは、そのプレビューから読んだ文字には、1/4-36 がありません。呼びは、Rosenberger の技術資料で置きます。オス列の F は 1/4-36 UNS-2B、メス列の F は 1/4-36 UNS-2A です。2B は内ねじ、2A は外ねじの等級です。オス列の K は hex 8 です。1/4 インチ × 25.4 = 6.35 mm です。これはねじの呼び径の換算であり、二面幅の 8 mm ではありません。

IEC 61169-8:2007 の適用範囲は、低電力で、着脱が速い用途、結合はバヨネット、通称は type BNC、と書きます。外導体内径の呼びは 6.5 mm（0.256 in）です。Webstore の公開案内も、クイックな着脱と、バヨネット、までです。開いたプレビューの適用範囲に、GHz の数字はありません。

Amphenol のカタログは、メス側に二つのバヨネットのラグがあり、結合ナットの約四分の一回転で嵌合する、と書きます。仕様表の結合は、2-stud bayonet coupling です。Rosenberger の製品案内は、二本のスタッドのバヨネットで、容易で速く、確実な接続、と書きます。四分の一回転を、ねじの山が何回転も進む締め方には読みません。

<figure class="assembly">
  <svg viewBox="0 0 720 240" role="img" aria-labelledby="coupTitle coupDesc">
    <title id="coupTitle">左はねじの結合ナット、右は二本のスタッド、という概念図</title>
    <desc id="coupDesc">左の胴には、ねじを示す横線があります。右の胴には上下に短い突起があります。外導体内径の比や、ピンの径は描いていません。</desc>
    <rect x="70" y="48" width="180" height="72" rx="36" fill="none" stroke="#1f4d45" stroke-width="10"></rect>
    <line x1="88" y1="62" x2="232" y2="62" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="82" y1="84" x2="238" y2="84" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="88" y1="106" x2="232" y2="106" stroke="#1f4d45" stroke-width="3"></line>
    <circle cx="160" cy="84" r="10" fill="#c9843d"></circle>
    <text x="160" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA の例</text>
    <text x="160" y="178" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">1/4-36 のねじ</text>
    <rect x="470" y="48" width="180" height="72" rx="8" fill="none" stroke="#1f4d45" stroke-width="10"></rect>
    <rect x="440" y="62" width="36" height="16" rx="3" fill="#1f4d45"></rect>
    <rect x="644" y="90" width="36" height="16" rx="3" fill="#1f4d45"></rect>
    <circle cx="560" cy="84" r="10" fill="#c9843d"></circle>
    <text x="560" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">BNC の例</text>
    <text x="560" y="178" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">二本のスタッド</text>
    <text x="360" y="214" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">胴の大きさは、4.13 mm と 6.5 mm の比にしていません。製品の嵌合図ではありません</text>
  </svg>
  <figcaption>
    <p>左の横線は、Rosenberger が書く 1/4-36 のねじがある、という本文を目で追うための線です。右の突起は、Amphenol のカタログが書く二本のラグの側です。山の数も、ピンの径も、この絵の比ではありません。</p>
  </figcaption>
</figure>

5/16 インチは、別の欄です。Rohde & Schwarz の 1MA99 のトルクの表は、SMA のナット開口を 5/16 インチ、8 mm と書きます。5/16 インチ × 25.4 = 7.9375 mm です。この計算は、同じ欄に 8 mm と並ぶ開口の換算であり、新しい公差ではありません。6.35 mm の呼び径とも、別です。hex 8 を、すべての SMA のナットへは写しません。IEC のプレビューが、ほかの構造も可、と注記する二面幅の話は [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。

## 周波数の目安

周波数は、学習用の目安です。製品が保証する上限ではありません。

SMA 側で、このページが並べる行は次です。IEC 61169-15:2021 の適用範囲は、18 GHz までです。推奨特性の表は、grade 1 を DC–18 GHz とします。同じ表は、フレキシブルのストレートと、ライトアングルを DC–12.4 GHz、セミリジッドとセミフレキのストレートを DC–18 GHz とします。Rosenberger の技術資料と、製品案内は、どちらも DC–18 GHz です。Rohde & Schwarz の 1MA99 は、節の見出しを最大 12 GHz とし、本文を DC から 12 GHz まで、と書きます。続けて、18 GHz まで動作する SMA を出すメーカーもある、と書きます。同じノートの図は、市販のコネクタの動作周波数の例として、SMA を 12 GHz に置きます。英語版（2015 年 4 月、1MA99_2e）と、日本語版（2012-12-12、Version 1.0）で、この 12 と、メーカーによっては 18、という並びは同じです。二つの版の全文が同一だとは、このページでは確認していません。12、12.4、18 を平均しません。18 を、12 の誤記には読みません。12 を、IEC と Rosenberger の 18 の更新にも読みません。

BNC 側の行は次です。同じ 1MA99 の図は、BNC を 4 GHz の例に置きます。BNC だけの節は、このノートにはありません。図の 4 を、節で説明された上限には読みません。Rosenberger は、50 Ω の最大を 10 GHz、最適を 4 GHz、75 Ω の最大を 4 GHz、最適を 1 GHz とします。Amphenol のカタログの 50 Ω の説明は、11 GHz まで動作するよう設計され、4 GHz まで低い反射が典型、と書きます。同じカタログの 50 Ω の仕様表は、周波数範囲を 0–4 GHz、低い反射、と書きます。11 と、表の 0–4 は、別の文です。75 Ω の節は、Type 1 を 4 GHz まで低い VSWR、Type 2 を 1 GHz まで低い反射、と分けます。仕様表の周波数範囲は 0–4 GHz です。1、4、10、11 を平均しません。図の 4 を、カタログの 11 の更新には読みません。カタログの 11 を、Rosenberger の最適 4 の更新にも読みません。

R&S の図の前の文は、より小さい同軸の形状ほど、使える上限が高くなる例がある、と書きます。SMA の題の 4.13 mm と、BNC の題の 6.5 mm は、この文の大小の側にあります。径が小さい方が、その製品の定格まで自動で伸びる、とはその文は書いていません。同じノートは、具体の型の性能は、必ずメーカーに確認する、と書きます。カットオフの計算へ寸法を入れる読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。このページは、その計算を SMA と BNC の保証値にはしていません。

## インピーダンス

確認した SMA の資料は、50 Ω です。IEC 61169-15 の題、Rosenberger の技術資料と製品案内、1MA99 の節が、いずれも 50 Ω と書きます。このページは、SMA に 75 Ω が無い、とまでは書いていません。開いた資料の中心が 50 Ω だ、というところまでです。

BNC には、50 Ω と 75 Ω があります。IEC 61169-8 の題は 50 Ω です。開いたプレビューの目次は、75 Ω の界面寸法を付録に置く題を載せます。付録の本文は、開いた 15 ページの範囲にはありません。Rosenberger の製品案内は、50 Ω と 75 Ω の両方を置き、互いに嵌合する、と書きます。Amphenol のカタログも、50 Ω と 75 Ω があり、互いに嵌合する、と書きます。目的の語は、壊さない嵌合を確保する、です。嵌合ピンの径、誘電体の見え方、混ぜたときの反射は、このページでは書きません。[BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。境目の反射係数 0.2 を欄へ入れるなら [電卓]({{ '/learn/calculator/#reflect' | relative_url }}) です。0.2 を、ねじとバヨネットの違いを表す数字には使いません。

## 用途と、着脱の速さ

用途も、資料の文のまま置きます。一つの「SMA は計測、BNC は映像」にはまとめません。

IEC の SMA は、マイクロ波の伝送系、と書きます。Rosenberger の製品案内は、通信、移動体通信、計測機器、産業、機器、航空電子、と書きます。1MA99 は、測定機器で使う同軸コネクタの選定と取り扱いの案内です。SMA の節は、半精密の超小型で、高周波とマイクロ波で最も広く使われる型の一つ、と書きます。機械的な嵌合回数は 500 回、とも書きます。Rosenberger の技術資料は、嵌合回数を、CuBe またはステンレスが 500 回以上、CuZn が 100 回以上、と分けます。500 と 100 を、一つの寿命にはしません。1MA99 の 500 を、真鍮の 100 の更新にも読みません。

IEC の BNC は、低電力で、着脱が速い用途、と書きます。ワットの数字は、その文にはありません。Rosenberger は、主に実験室、データシステム、通信、と書きます。用途の列には、ラジオ、映像、音声、オシロスコープと計測器の実験室、があります。Amphenol のカタログの用途の列には、アンテナ、計測器、オシロスコープ、ネットワークアナライザ、放送（75 Ω）、無線、があります。75 Ω の節は、放送と CATV、と書きます。実験室という語が両方に出ても、結合は別のままです。

着脱の速さは、結合の文で分かれます。BNC は、IEC がクイックな着脱、Amphenol が約四分の一回転、Rosenberger が容易で速い、と書きます。SMA は、Rosenberger がねじでロックする、と書きます。1MA99 の取り扱いの節は、規定のトルクまで校正済みのトルクレンチで締める、と書きます。四分の一回転の手順を、トルクレンチの折れる位置には読みません。逆も同じです。

電力の行も、片方だけです。Rosenberger の SMA は 200 W @ 2 GHz です。開いた BNC のカタログの仕様表と、Rosenberger の BNC の製品案内に、ワットの行はありません。無い行を、200 W で埋めません。IEC の「低電力」を、200 W の何分の一、とも計算しません。

## 振動の行

資料が振動試験の条件として置く文字と、「ねじだから振動に強い」という順位は、別です。

Rosenberger の SMA の技術資料は、振動を MIL-STD-202、Method 204、Condition D とします。Amphenol のカタログの 50 Ω の仕様表も、75 Ω の仕様表も、振動を MIL-Std. 202 method 204、test cond. D とします。注は、これらの特性は典型値で、すべてのコネクタには当てはまらない、です。同じ Condition D という文字を、SMA と BNC の耐振動が同じだ、という測定結果には読みません。系列の名前だけで、何 g まで、とも決まりません。Method 204 の加速度の本文は、このページでは読んでいません。条件の文字の大小を順位にしない読み方は [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。Rosenberger の BNC の製品案内には、振動の行がありません。無い行を、カタログの Condition D で埋めません。

使う一本は、その図面の振動の行を見ます。バヨネットだから外れる、ねじだから外れない、という一語では決めません。

## トルク

SMA の資料は、トルクを数字にします。BNC の資料は、バヨネットの回転と、掛け外しの上限を書きます。推奨のレンチ設定として、一つの N·m にはしません。

Rosenberger の技術資料の推奨は、CuBe またはステンレスが 0.8–1.1 N·m、CuZn が 0.5 N·m です。結合の試験トルクは、前者が 1.7 N·m 以下、後者が 0.6 N·m 以下です。1.7 と 0.6 を、毎日のレンチ設定には読みません。同じ系列の製品案内は、試験トルクを CuBe またはステンレスが 1.7 N·m 以上、CuZn が 0.6 N·m 以上、と書きます。推奨の CuZn は 0.5 N·m 以上、と書きます。技術資料の「以下」と、製品案内の「以上」は、不等号の向きが違います。0.5 と 0.5 以上も、一つの真鍮値にはしません。製品案内の導入は、規定された最大トルクのあるねじ結合、と書きます。最大の数字は、その文にはありません。

1MA99 の表は、SMA を 5 lb-inch、0.56 N·m、ナット開口 5/16 インチ、8 mm とします。同じ行のトルクレンチは、Not available です。注は、表の値はローデ・シュワルツが供給するコネクタ向けで、SMA は除く、と書きます。ほかの同軸コネクタの正しい限界は、損傷を避けるためメーカーから得る、と続きます。0.56 を、Rosenberger の 0.5 や 0.8–1.1 の更新には読みません。0.8–1.1 を、この表の 0.56 の更新にも読みません。英語版と日本語版で、5 lb-inch、0.56 N·m、SMA を除く、という注の並びは同じです。

BNC で確認できた数字は、別の種類です。IEC 61169-8 のゲージの節は、ピンコネクタのバヨネットを掛け外しするトルクは 0.25 N·m を超えない、と書きます。同じ節は、長手方向の力は 20 N を超えない、とも書きます。これは、掛け外しに要するトルクと力の上限です。推奨の締付トルクとして 0.25 N·m をレンチに設定する、という文ではありません。Amphenol の仕様表に、嵌合トルクの行はありません。結合の欄は、二本のスタッドです。SMA の 0.8–1.1 N·m を、四分の一回転へは使いません。0.25 N·m を、SMA の真鍮の 0.5 N·m の代わりにも使いません。

技術資料の末尾は、個々の値は用途、設計、ケーブル、組立、作業によって異なりうる、と書きます。上の幅を、すべての個体の設定値には読みません。締付の残りの読み方は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) と [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。

## 見分けのポイント

見るのは、ねじを回し続けるナットか、スタッドが約四分の一回転で掛かるか、です。

指で回し始めて、山が噛み合わない相手は、その対ではありません。金色に見えること、白い樹脂が見えること、全体が小さいことは、SMA と BNC を分けません。中心がピンか穴かだけでも、決まりません。外導体内径の題は、4.13 mm と 6.5 mm で違います。目視の太さを、その呼びの測定にはしません。

ねじがあることだけでも、SMA とは決まりません。N 型は 5/8-24、TNC は 7/16-28 です。1/4-36 のナットは、5/8-24 にも 7/16-28 にも進みません。読み分けは [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) と [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。

同じ 1/4-36 でも、中心のピンとソケットを入れ替えた呼びは、標準の SMA と対になりません。[SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。3.5 mm と 2.92 mm が機械的に嵌合しうる、という組は、ねじが合う側の話です。バヨネットの BNC は、その組に入りません。[互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。クイックロックの QMA も、1/4-36 の相手ではありません。[QMAとSMA]({{ '/learn/qma-sma/' | relative_url }}) です。

50 Ω か 75 Ω かは、スタッドが見えることだけでは決まりません。BNC でそれをどう読むかは [別のページ]({{ '/learn/bnc-50-75/' | relative_url }}) です。

## 直接は嵌合しない

1/4-36 の山と、二本のスタッドは、掛かり合う相手ではありません。山が掛からないところから、力でねじを作りません。スタッドの溝へ、SMA のナットを押し込みません。

系列をまたぐときは、変換アダプタです。1MA99 は、違う型を一つの系で使うときは、周波数範囲が最も低い型が、系の周波数範囲を決める、と書きます。アダプタ自身の行も、別に見ます。両側のうち高い方まで使える部品だ、とは、その文は書いていません。ケーブル側で届かないこともあります。読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。開いた BNC のカタログのアダプタの節は、BNC 同士の中継です。SMA への型番は、その節にはありません。無い型番を、このページでは作りません。

<figure class="assembly">
  <svg viewBox="0 0 720 210" role="img" aria-labelledby="adaptTitle adaptDesc">
    <title id="adaptTitle">SMAとBNCは直接は嵌合せず、あいだに変換アダプタを置く</title>
    <desc id="adaptDesc">左のねじ側の胴と右のスタッド側の胴のあいだに、短い変換の胴がある概念図です。ねじの山とスタッドの形は描いていません。</desc>
    <rect x="36" y="62" width="150" height="48" rx="24" fill="#1f4d45"></rect>
    <rect x="186" y="74" width="36" height="24" fill="#1f4d45"></rect>
    <rect x="250" y="56" width="180" height="60" rx="6" fill="#e6d7bf" stroke="#1f4d45" stroke-width="3"></rect>
    <rect x="430" y="78" width="28" height="16" fill="#1f4d45"></rect>
    <rect x="486" y="62" width="150" height="48" rx="6" fill="#1f4d45"></rect>
    <text x="120" y="148" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA</text>
    <text x="120" y="168" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">1/4-36</text>
    <text x="340" y="148" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">変換アダプタ</text>
    <text x="340" y="168" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">両端と、自身の行</text>
    <text x="560" y="148" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">BNC</text>
    <text x="560" y="168" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">バヨネット</text>
    <text x="360" y="198" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">胴の太さは、4.13 mm と 6.5 mm の比には合わせていません</text>
  </svg>
  <figcaption>
    <p>直接はロックしません。変換は、アダプタの図面で両端の系列と、アダプタ自身の周波数と、両端の締め方を見てから使います。この絵は、製品の嵌合図でも、損失の保証図でもありません。</p>
  </figcaption>
</figure>

3.5 mm と SMA を嵌合するとき、二つの限界のうち低い方のトルクを使う、という 1MA99 の注は、ねじが合う側の話です。バヨネットへは写しません。ピン径の注意は [互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。

このページは、誤って押し当てたときの VSWR を数値にしていません。反射の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。

## 選定するときに見ること

- 図面で、SMA か BNC か、50 Ω か 75 Ω か、プラグかジャックか、を見ます。小さい同軸、という一語では注文しません。BNC の 50 Ω と 75 Ω は [別のページ]({{ '/learn/bnc-50-75/' | relative_url }}) です。
- 周波数は、資料の行のまま置きます。SMA は、IEC の 18 GHz と 12.4 GHz、Rosenberger の DC–18 GHz、1MA99 の 12 GHz と、メーカーによっては 18 GHz、です。BNC は、図の例の 4 GHz、Rosenberger の 1 GHz、4 GHz、10 GHz、カタログの 4 GHz と 11 GHz です。
- 結合は、1/4-36 のねじか、二本のスタッドの約四分の一回転か、です。直接はロックしません。変換アダプタは、両端の系列と、アダプタ自身の周波数と、両端の締め方をセットで見ます。
- 締付は、端の材料と系列の行です。SMA の 0.8–1.1 N·m、0.5 N·m、0.56 N·m、試験の 1.7 N·m と 0.6 N·m を、一つの値にはしません。製品案内の「以上」と、技術資料の「以下」も、一つの不等号にはしません。BNC の 0.25 N·m は、掛け外しがそれを超えない、というゲージの文です。四分の一回転の推奨トルクには読みません。
- 振動は、試験条件の文字を見ます。開いた資料では、SMA の技術資料と、BNC のカタログの仕様表が、どちらも Method 204 の Condition D です。この一致を、耐振動の順位にはしません。Rosenberger の BNC の製品案内に、その行はありません。
- SMA の先が 3.5 mm、2.92 mm、RP-SMA、QMA のときは、それぞれのページの確認が先です。

## 関連するページ

- 結合、用途、トルクの早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、上限の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- 5/8-24 との違いは [N型とSMA]({{ '/learn/n-sma/' | relative_url }})、ねじの N 型とバヨネットは [N型とBNC]({{ '/learn/n-bnc/' | relative_url }})、同じ 6.5 mm でねじにした系列は [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。
- 50 Ω と 75 Ω の見分けは [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }})、式と境目の 0.2 は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) と [電卓]({{ '/learn/calculator/#reflect' | relative_url }}) です。
- 3.5 mm、2.92 mm は [互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }})、中心の入れ替えは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }})、クイックロックは [QMAとSMA]({{ '/learn/qma-sma/' | relative_url }}) です。
- 締付の幅は [数値早見]({{ '/learn/quick-reference/' | relative_url }}) と [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。
- 名前の話は [第10話]({{ '/manga/10-bnc-name/' | relative_url }}) と [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。会話はフィクション演出です。短い定義は [用語集の BNC]({{ '/glossary/' | relative_url }}#bnc) です。

## 出典

結合、周波数、インピーダンス、用途、着脱、振動、トルクは、次の公開資料で確認しました。界面の図面と、規格の表そのものは転載していません。上の図は、このページで描いたものです。6.35 は 1/4 インチに 25.4 を掛けた計算、7.9375 は 5/16 インチに 25.4 を掛けた計算です。どちらも、規格の公差にはしていません。規格本文の有償版は、適用範囲と、ここへ転記した表の範囲で参照しています。IEC 61169-8 の 75 Ω の付録の本文と、Method 204 の加速度は、このページでは読んでいません。

- IEC 61169-15:2021 の公開プレビュー（外導体内径 4.13 mm（0.163 in）、ねじ結合、50 Ω、type SMA。マイクロ波の伝送系。動作周波数は 18 GHz まで。grade 1 は DC–18 GHz。フレキシブルのストレートとライトアングルは DC–12.4 GHz。セミリジッドとセミフレキのストレートは DC–18 GHz。プレビュー本文に 1/4-36 の文字は無い。図面は転載していない）: https://cdn.standards.iteh.ai/samples/101730/41a5144464e04f98bbd9f6f02635cb3d/IEC-61169-15-2021.pdf
- IEC 61169-15:2021（Webstore。題は type SMA。要旨は詳細仕様の規則までで、18 GHz の文は要旨に無い）: https://webstore.iec.ch/en/publication/62310
- IEC 61169-8:2007 の公開プレビュー（外導体内径 6.5 mm（0.256 in）、バヨネット、50 Ω、type BNC。低電力、着脱が速い用途。ゲージの節は、バヨネットの掛け外しのトルクは 0,25 Nm を超えない、長手方向の力は 20 N を超えない。地の文では 0.25 N·m と書く。適用範囲に GHz の数字は無い。目次は 75 Ω の界面寸法の付録を挙げる。付録の本文は、開いた範囲に無い。図面は転載していない）: https://cdn.standards.iteh.ai/samples/14183/27eb427a4fcc4257a1627436491e2e34/IEC-61169-8-2007.pdf
- IEC 61169-8:2007（Webstore。題は 50 Ω の BNC。要旨は、低電力、クイックな着脱、バヨネット）: https://webstore.iec.ch/en/publication/4753
- Rohde & Schwarz、アプリケーションノート 1MA99 英語版 1MA99_2e（2015 年 4 月。測定機器で使う同軸コネクタ。図の例は SMA が 12 GHz、BNC が 4 GHz。SMA の節は 50 Ω、PTFE、DC–12 GHz、嵌合 500 回。18 GHz まで出すメーカーもある、と書く。BNC だけの節は無い。系の周波数は、最も低い型が決める。トルクの表は SMA が 5 lb-inch、0.56 N·m、開口 5/16 インチと 8 mm、レンチは Not available。注は、表の値は同社供給品向けで SMA は除く。図と表は転載していない）: https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_application/application_notes/1ma99/1MA99_2E_CoaxConnectorHandling.pdf
- 同じノートの案内ページ: https://www.rohde-schwarz.com/us/applications/guidance-on-selecting-and-handling-coaxial-rf-connectors-used-with-rohde-schwarz-test-equipment_56280-33857.html
- Rohde & Schwarz、1MA99 日本語版（2012-12-12、Version 1.0。SMA の 12 GHz、メーカーによっては 18 GHz、嵌合 500 回、図の SMA 12 GHz と BNC 4 GHz、トルク表の 5 lb-inch と 0.56 N·m、SMA を除く注は、英語版の同じ箇所と揃う。二つの版の全文が同一だとは、このページでは確認していない）: https://rohde-schwarz-japan.com/download/jp/an/1MA99_1J.pdf
- Rosenberger、SMA シリーズ技術資料 32-000-000_TD（50 Ω、DC–18 GHz。オス列は 1/4-36 UNS-2B、K は hex 8。メス列は 1/4-36 UNS-2A。電力 200 W @ 2 GHz。誘電体 PTFE。嵌合回数は CuBe またはステンレスが 500 以上、CuZn が 100 以上。推奨トルクは前者が 0.8–1.1 N·m、後者が 0.5 N·m。試験トルクは前者が 1.7 N·m 以下、後者が 0.6 N·m 以下。振動は MIL-STD-202 Method 204 Condition D。値は用途などで異なりうる、と注。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- Rosenberger、SMA の製品案内（ねじ結合。規定された最大トルク。50 Ω、DC–18 GHz。界面は IEC 60169-15。嵌合回数は CuBe またはステンレスが 500 以上、CuZn が 100 以上。試験トルクは前者が 1.7 N·m 以上、後者が 0.6 N·m 以上。推奨は前者が 0.8–1.1 N·m、CuZn が 0.5 N·m 以上。用途に通信、移動体通信、計測、産業、機器、航空電子）: https://www.rosenberger.com/product/sma/
- Rosenberger、BNC 50 Ω / 75 Ω（二本のスタッド。実験室、データシステム、通信。無線、映像、音声、オシロスコープ。50 Ω は最大 10 GHz、最適 4 GHz。75 Ω は最大 4 GHz、最適 1 GHz。互いに嵌合する。界面の案内は IEC 61169-8。嵌合 500 回以上。ワットの行と、振動の行は、開いた案内には無い）: https://www.rosenberger.com/product/bnc-50-o-75-o/
- Amphenol、BNC カタログ（50 Ω と 75 Ω。メス側の二つのラグ、約四分の一回転。互いに嵌合する、と書く。50 Ω の説明は動作 11 GHz まで、低い反射は 4 GHz まで。仕様表の周波数範囲は 0–4 GHz、低い反射。結合は 2-stud bayonet。振動は MIL-Std. 202 method 204、test cond. D。75 Ω は Type 1 が 4 GHz まで、Type 2 が 1 GHz まで。特性は典型値で、すべてには当てはまらない、と注。アダプタの節は BNC 同士。図面は転載していない）: https://media.digikey.com/pdf/Data%20Sheets/Amphenol%20PDFs/BNC_Catalog.pdf
