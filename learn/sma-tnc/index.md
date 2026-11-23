---
layout: default
title: "SMAとTNCの違いと使い分け"
description: "SMAの1/4-36とTNCの7/16-28、外導体内径4.13mmと6.5mm、直接は嵌合しないこと、変換アダプタ、出典ごとの周波数とトルク、確認できた50Ωと75Ωの範囲を整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-23
permalink: /learn/sma-tnc/
---

{% include learn-nav.html %}

# SMAとTNCの違いと使い分け

SMA と TNC は、どちらもねじ結合の同軸コネクタです。掛かる山は違います。IEC 61169-15:2021 の題は、外導体内径 4.13 mm（0.163 in）、ねじ結合、特性インピーダンス 50 Ω、type SMA です。IEC 61169-17:2022 の題は、外導体内径 6.5 mm（0.256 in）、ねじ結合、特性インピーダンス 50 Ω、type TNC です。Rosenberger の SMA の技術資料は、結合ねじを 1/4-36 UNS と書きます。TNC の呼びは、IEC 61169-26 の図と、Rosenberger の RPC-TNC が 7/16-28 UNEF と書きます。1/4-36 のナットは、7/16-28 には進みません。系列をまたぐときは、変換アダプタです。

Rosenberger の市販 TNC の案内は、BNC の特性と界面寸法に基づく、と書きます。続けて、ねじのロックにより、BNC に比べて高い環境負荷で使える、とも書きます。基づく、と、高い環境負荷、は、別の文です。SMA の題の 4.13 mm へ、その文は届いていません。同じ案内の注は、TNC の展開を二つ書きます。このページは、どちらの展開も採りません。

ここにある数字は、公開の規格のプレビューと、メーカーの技術資料、計測器メーカーのアプリケーションノートから取った学習用の目安です。個別の製品が保証する値ではありません。同じ名前でも、資料が複数の周波数と、複数のトルクを置きます。平均して一つの上限にはしません。

系列の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。ねじの SMA と、バヨネットの BNC は [SMAとBNC]({{ '/learn/sma-bnc/' | relative_url }}) です。同じ 6.5 mm の呼びで、バヨネットとねじを分ける組は [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。N 型の 5/8-24 との違いは [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。5/8-24 と 7/16-28 のあいだは [N型とTNC]({{ '/learn/n-tnc/' | relative_url }}) です。このページは、どちらもねじである SMA と TNC のあいだです。BNC の 50 Ω と 75 Ω の見分けは [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。TNC の 50 Ω と 75 Ω は、このページで確認できた範囲だけを書きます。BNC のピン径の見分けは写しません。上限を平均しない読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。帯域名との対応は [規格・周波数]({{ '/spectrum/' | relative_url }}) です。SMA も TNC も、コネクタの呼びです。帯域名ではありません。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 項目 | SMA | TNC |
| --- | --- | --- |
| このページが読んだ規格 | IEC 61169-15:2021。題は外導体内径 4.13 mm（0.163 in）、ねじ結合、50 Ω、type SMA | IEC 61169-17:2022。題は外導体内径 6.5 mm（0.256 in）、ねじ結合、50 Ω、type TNC。動作周波数は 11 GHz まで。別番号の IEC 61169-26:2013 は TNCA で、50 Ω、ねじ、18 GHz まで |
| 結合 | ねじ。Rosenberger のオス列は 1/4-36 UNS-2B、メス列は 1/4-36 UNS-2A。IEC のプレビュー本文に、この呼びの文字は無かった | ねじ。IEC 61169-26 のピン中心の図は 7/16-28UNEF-2B、ソケット中心の図は 7/16-28UNEF-2A。Rosenberger の RPC-TNC も、プラグが 2B、ジャックが 2A。IEC 61169-17 の開いたプレビューの表に、この呼びの文字は無かった |
| その資料の周波数 | IEC の適用範囲は 18 GHz まで。推奨表は grade 1 を DC–18 GHz、フレキシブルのストレートとライトアングルを DC–12.4 GHz。Rosenberger は DC–18 GHz。R&S の節と図の例は 12 GHz。18 GHz まで出すメーカーもある、と本文 | IEC 61169-17 は 11 GHz まで。Amphenol は DC–11 GHz、拡張は DC–18 GHz。Rosenberger の市販系列の 50 Ω は最大 DC–10 GHz、最適 DC–4 GHz。75 Ω は最大 DC–4 GHz、最適 DC–1.5 GHz。RPC-TNC と IEC 61169-26 は 18 GHz まで。R&S の図の例は 15 GHz。TNC だけの節は無い |
| インピーダンス | 確認した資料は 50 Ω | 50 Ω と 75 Ω。Amphenol は両方がある、と特徴に書く。電気の表のインピーダンスは 50 Ω。Rosenberger の市販系列は両方を置き、標準化された界面では完全な 75 Ω は実現できない、と書く |
| トルクの行 | Rosenberger の技術資料は、推奨が 0.8–1.1 N·m と 0.5 N·m。試験トルクは 1.7 N·m 以下と 0.6 N·m 以下。製品案内の不等号は別の向き。R&S の表は 5 lb-inch（0.56 N·m）で、注は SMA を例外にする | Amphenol は 4–6 inch-pounds（0.51–0.67 N·m）。Rosenberger の RPC-TNC は推奨 0.46–0.69 N·m、結合の試験トルク 1.70 N·m |

</div>

4.13 mm と 6.5 mm は、規格の題が置く外導体内径の呼びです。界面の表の公差として、このページが読み直した数字ではありません。12 GHz、12.4 GHz、18 GHz を、一つの SMA の上限にはしません。1.5 GHz、4 GHz、10 GHz、11 GHz、15 GHz、18 GHz を、一つの TNC の上限にはしません。0.46–0.69、0.51–0.67、0.5、0.56、0.8–1.1、1.7、1.70 も、一つの締付にはしません。図面は転載していません。

## ねじの呼びと、大きさ

IEC 61169-15:2021 の適用範囲は、外導体内径 4.13 mm（0.163 in）、ねじ結合、特性インピーダンス 50 Ω、type SMA です。SMA 形の高周波同軸コネクタは、あらゆる種類の高周波ケーブルとマイクロストリップに使い、マイクロ波の伝送系で使う、と続きます。動作周波数は 18 GHz まで、と書きます。Webstore の公開案内は、題と、詳細仕様を書くための規則までです。18 GHz の文は、その案内の要旨にはありません。周波数は、開いたプレビューの適用範囲と、推奨特性の表で置きます。

ねじの呼びは、そのプレビューから読んだ文字には、1/4-36 がありません。呼びは、Rosenberger の技術資料で置きます。オス列の F は 1/4-36 UNS-2B、メス列の F は 1/4-36 UNS-2A です。2B は内ねじ、2A は外ねじの等級です。オス列の K は hex 8 です。1/4 インチ × 25.4 = 6.35 mm です。これはねじの呼び径の換算であり、二面幅の 8 mm ではありません。外導体内径の題の 4.13 mm でもありません。

IEC 61169-17:2022 の適用範囲は、ねじ結合、特性インピーダンス 50 Ω の series TNC です。動作周波数は 11 GHz まで、と書きます。外導体内径の呼びは 6.5 mm（0.256 in）です。Webstore の公開案内は、題と、詳細仕様の規則までです。11 GHz の文は、その案内の要旨にはありません。開いたプレビューの表に、7/16-28 の文字はありません。

呼びは、別の資料で置きます。IEC 61169-26:2013 のピン中心の図は 7/16-28UNEF-2B、ソケット中心の図は 7/16-28UNEF-2A です。Rosenberger の RPC-TNC も、プラグの F が 7/16-28 UNEF-2B、ジャックの F が 7/16-28 UNEF-2A です。ピン中心の側に結合ナットの内ねじがある、という並びは、SMA の技術資料と同じ側です。山の数字が違います。

7/16 インチは 0.4375 インチです。0.4375 × 25.4 = 11.1125 mm です。これはねじの呼び径の換算であり、結合ナットの二面幅ではありません。外導体内径の題の 6.5 mm でもありません。RPC-TNC の技術資料で、このページが読んだ寸法の行に、レンチ開口の数字はありません。11.1125 を、開口のミリメートルには読みません。

5/16 インチは、さらに別の欄です。Rohde & Schwarz の 1MA99 のトルクの表は、SMA のナット開口を 5/16 インチ、8 mm と書きます。5/16 インチ × 25.4 = 7.9375 mm です。この計算は、同じ欄に 8 mm と並ぶ開口の換算であり、新しい公差ではありません。6.35 mm の呼び径とも、11.1125 mm とも、別です。hex 8 を、すべての SMA のナットへは写しません。TNC のナットへも写しません。

<figure class="assembly">
  <svg viewBox="0 0 720 240" role="img" aria-labelledby="coupTitle coupDesc">
    <title id="coupTitle">左は細い呼びのねじ、右は太い呼びのねじ、という概念図</title>
    <desc id="coupDesc">左右の胴には、ねじを示す横線があります。山のピッチも、外導体内径の比も描いていません。</desc>
    <rect x="70" y="58" width="160" height="56" rx="28" fill="none" stroke="#1f4d45" stroke-width="10"></rect>
    <line x1="88" y1="70" x2="212" y2="70" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="84" y1="86" x2="216" y2="86" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="88" y1="102" x2="212" y2="102" stroke="#1f4d45" stroke-width="3"></line>
    <circle cx="150" cy="86" r="8" fill="#c9843d"></circle>
    <text x="150" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA の例</text>
    <text x="150" y="178" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">1/4-36 のねじ</text>
    <rect x="470" y="44" width="190" height="80" rx="40" fill="none" stroke="#1f4d45" stroke-width="10"></rect>
    <line x1="490" y1="62" x2="640" y2="62" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="484" y1="84" x2="646" y2="84" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="490" y1="106" x2="640" y2="106" stroke="#1f4d45" stroke-width="3"></line>
    <circle cx="565" cy="84" r="10" fill="#c9843d"></circle>
    <text x="565" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">TNC の例</text>
    <text x="565" y="178" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">7/16-28 のねじ</text>
    <text x="360" y="214" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">胴の大きさは、4.13 mm と 6.5 mm の比にしていません。製品の嵌合図ではありません</text>
  </svg>
  <figcaption>
    <p>左右の横線は、ねじがある、という本文を目で追うための線です。左は Rosenberger が書く 1/4-36、右は 7/16-28 です。山の数も、ピンの径も、この絵の比ではありません。右を大きく描いたことも、11.1125 mm と 6.35 mm の比ではありません。</p>
  </figcaption>
</figure>

N 型は 5/8-24 です。F 型は、別のねじの 75 Ω です。1/4-36 も 7/16-28 も、その相手には進みません。読み分けは [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) と [N型とTNC]({{ '/learn/n-tnc/' | relative_url }}) と [F型コネクタ]({{ '/learn/f-type/' | relative_url }}) です。バヨネットのスタッドは、どちらのねじでもありません。[SMAとBNC]({{ '/learn/sma-bnc/' | relative_url }}) と [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。

## 周波数の目安

周波数は、学習用の目安です。製品が保証する上限ではありません。

SMA 側で、このページが並べる行は次です。IEC 61169-15:2021 の適用範囲は、18 GHz までです。推奨特性の表は、grade 1 を DC–18 GHz とします。同じ表は、フレキシブルのストレートと、ライトアングルを DC–12.4 GHz、セミリジッドとセミフレキのストレートを DC–18 GHz とします。Rosenberger の技術資料と、製品案内は、どちらも DC–18 GHz です。Rohde & Schwarz の 1MA99 は、節の見出しを最大 12 GHz とし、本文を DC から 12 GHz まで、と書きます。続けて、18 GHz まで動作する SMA を出すメーカーもある、と書きます。同じノートの図は、市販のコネクタの動作周波数の例として、SMA を 12 GHz に置きます。英語版（2015 年 4 月、1MA99_2e）と、日本語版（2012-12-12、Version 1.0）で、この 12 と、メーカーによっては 18、という並びは同じです。二つの版の全文が同一だとは、このページでは確認していません。12、12.4、18 を平均しません。18 を、12 の誤記には読みません。12 を、IEC と Rosenberger の 18 の更新にも読みません。

TNC 側の行は次です。IEC 61169-17:2022 の適用範囲は、11 GHz までです。Amphenol の現行ページは、DC–11 GHz、拡張設計は DC–18 GHz です。特徴の文は、11 GHz まで、ケーブルに依存する、とも書きます。仕様表の VSWR は、DC–11 GHz で最大 1.3 です。この電気の表のインピーダンスは 50 Ω です。FAQ は、標準を 11 GHz まで、拡張設計を 18 GHz まで、と書きます。11 と 18 を平均しません。特徴の「ケーブルに依存」を、表の拡張 18 GHz の注へは写しません。

Rosenberger の市販 TNC は、50 Ω が最大 DC–10 GHz、最適 DC–4 GHz、75 Ω が最大 DC–4 GHz、最適 DC–1.5 GHz です。導入の行は、50 Ω を最大 10 GHz、75 Ω を最大 4 GHz で依頼に応じて、と書きます。依頼に応じて、を、75 Ω の行が無い、とは読みません。10 と 11、4 と 1.5 を、一つの TNC の上限にはしません。

18 GHz は、さらに別の行です。IEC 61169-26:2013 の適用範囲は、TNCA、50 Ω、ねじ結合、動作周波数の限度は 18 GHz まで、です。11 GHz を超える用途に勧める、とも書きます。Webstore の公開案内の要旨には、18 GHz まで、はあります。11 GHz を超える、という文は、その要旨にはありません。Rosenberger の RPC-TNC は、界面を IEC 61169-26、周波数を DC–18 GHz とします。Amphenol の拡張設計の 18 GHz を、IEC 61169-17 の 11 GHz の更新には読みません。RPC-TNC の 18 GHz を、市販 TNC の最適 4 GHz の更新にも読みません。SMA の 18 GHz を、TNC の 18 GHz の同じ行にも読みません。系列が違います。

15 GHz は、図の例です。同じ 1MA99 の図は、TNC を 15 GHz、SMA を 12 GHz に置きます。英語版の図番号は Fig. 3-1、日本語版は図 1 です。どちらも、市販のコネクタの動作周波数の例、と前の文が書きます。TNC だけの節は、目次にも本文にもありません。図の 15 を、節で説明された上限には読みません。英語版と日本語版で、図の TNC が 15、SMA が 12、という並びは同じです。二つの版の全文が同一だとは、このページでは確認していません。15 を、IEC 61169-17 の 11 の更新には読みません。15 を、IEC 61169-26 の 18 の更新にも読みません。図の 12 を、SMA の 18 の更新にも読みません。

図の前の文は、より小さい同軸の形状ほど、使える上限が高くなる例がある、と書きます。SMA の題の 4.13 mm は、TNC の題の 6.5 mm より小さい側です。同じ図の棒は、TNC が 15、SMA が 12 です。小さい側の棒が、この図では高い側ではありません。径が小さい方が、その製品の定格まで自動で伸びる、とはその文は書いていません。同じノートは、具体の型の性能は、必ずメーカーに確認する、と書きます。カットオフの計算へ寸法を入れる読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。このページは、その計算を SMA と TNC の保証値にはしていません。

## インピーダンス

確認した SMA の資料は、50 Ω です。IEC 61169-15 の題、Rosenberger の技術資料と製品案内、1MA99 の節が、いずれも 50 Ω と書きます。このページは、SMA に 75 Ω が無い、とまでは書いていません。開いた資料の中心が 50 Ω だ、というところまでです。

TNC には、50 Ω と 75 Ω を置く資料があります。IEC 61169-17 の題と、IEC 61169-26 の適用範囲は、どちらも 50 Ω です。開いたプレビューと、Webstore の要旨に、75 Ω の TNC を定める文は、このページでは見つかっていません。無い文を、規格が 75 Ω を禁じた、とも読みません。

Amphenol の現行ページは、特徴に 50 Ω と 75 Ω がある、と書きます。電気の表のインピーダンスは 50 Ω です。VSWR の 1.3 は、DC–11 GHz の行です。75 Ω の周波数を、この 1.3 の行へは写しません。同じページに、75 Ω だけの周波数の行は、このページでは見つかっていません。無い行を、50 Ω の 11 GHz や 18 GHz で埋めません。

Rosenberger の市販 TNC は、50 Ω と 75 Ω の両方を置きます。50 Ω の界面の案内も、75 Ω の界面の案内も、IEC 60169-17、MIL-PRF-39012、DIN EN 122200 です。75 Ω 専用の別番号を、その案内は挙げていません。同じ案内は、国際的に標準化された TNC の界面寸法では、完全な 75 Ω は実現できない、と書きます。周波数は、前の節の 10 GHz、4 GHz、1.5 GHz のままです。

RPC-TNC の製品案内は、標準の TNC、50 Ω と 75 Ω の両方と相互嵌合する、と書きます。RPC-TNC 自身のインピーダンスの欄は 50 Ω です。嵌合できることを、電気的に同じ系統だ、とは読みません。18 GHz の行を、75 Ω の市販系列の最適 1.5 GHz へは写しません。

50 Ω か 75 Ω かは、ねじが見えることだけでは決まりません。部品番号、刻印、データシートで分けます。BNC でピン径や誘電体の見え方をどう読むかは、このページでは書きません。[BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。境目の反射係数 0.2 を欄へ入れるなら [電卓]({{ '/learn/calculator/#reflect' | relative_url }}) です。0.2 を、1/4-36 と 7/16-28 の違いを表す数字には使いません。

## 用途と、着脱と、振動

用途も、資料の文のまま置きます。一つの「SMA は計測、TNC は屋外」にはまとめません。

IEC の SMA は、マイクロ波の伝送系、と書きます。IEC 61169-17 の TNC も、マイクロ波の伝送系、と書きます。同じ語が両方に出ても、外導体内径の題は 4.13 mm と 6.5 mm のままです。Rosenberger の SMA の製品案内は、通信、移動体通信、計測機器、産業、機器、航空電子、と書きます。1MA99 の SMA の節の見出しは、Subminiature Version A（SMA）です。これは、そのノートのコネクタの呼びです。帯域名ではありません。節は、半精密の超小型で、高周波とマイクロ波で最も広く使われる型の一つ、と書きます。

Amphenol の TNC は、無線インフラ、産業、試験と計測、屋外、アンテナ、と書きます。Rosenberger の市販 TNC は、航空宇宙、通信、移動体、と書きます。RPC-TNC の製品案内は、18 GHz までの精密測定、セミリジッドとマイクロ波部品、航空と宇宙向けの品種、と書きます。屋外という語が TNC のページにあっても、すべての TNC が屋外用だ、とはその文は書いていません。Amphenol は、IP67 のシールを選べる、と書きます。すべての TNC が IP67 だ、とは書いていません。

着脱の速さも、一つの秒数にはしません。どちらもねじです。BNC の約四分の一回転を、どちらのナットへも使いません。Rosenberger の市販 TNC は、ねじのロックにより、確実で速く容易な接続ができ、BNC に比べて高い環境負荷で使える、と書きます。高い環境負荷の比較の相手は BNC です。速い、の秒数は、その文にはありません。SMA との時間の比較も、その文にはありません。1MA99 の取り扱いの節は、規定のトルクまで校正済みのトルクレンチで締める、と書きます。この手順を、TNC だけのものには読みません。開いた TNC のページに、四分の一回転で終わる、という文はありません。

電力の行も、条件が違います。Rosenberger の SMA は 200 W @ 2 GHz です。Amphenol の TNC の電気の表は 316 W @ 1 GHz @ 25 °C です。注は、これらの特性は典型値で、すべてのコネクタには当てはまらない、です。200 と 316 を、一つの耐電力の順位にはしません。周波数も、温度の書き方も違います。316 を 2 GHz へ、200 を 1 GHz へは写しません。

振動も、順位にはしません。資料が「ねじだから振動に強い」と書く文と、振動試験の条件の文字は、別です。Amphenol の TNC は、特徴の一つを、振動への抵抗のためのねじ結合、とします。環境の表は、振動を MIL-STD-202 Method 204 の Test Condition B とします。Rosenberger の SMA の技術資料は、振動を同じ Method 204 の Condition D とします。RPC-TNC も Condition D です。SMA の D と、RPC-TNC の D が同じ文字でも、耐振動が同じだ、という測定結果には読みません。Amphenol の標準 TNC の B を、その D の代わりにも読みません。B と D の加速度を順位にしない読み方は [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。このページは、Method 204 の加速度の本文を読んでいません。使う一本は、その図面の振動の行を見ます。

## トルク

推奨のレンチ設定として、一つの N·m にはしません。SMA の行を、TNC のナットへは使いません。逆も同じです。

Rosenberger の SMA の技術資料の推奨は、CuBe またはステンレスが 0.8–1.1 N·m、CuZn が 0.5 N·m です。結合の試験トルクは、前者が 1.7 N·m 以下、後者が 0.6 N·m 以下です。1.7 と 0.6 を、毎日のレンチ設定には読みません。同じ系列の製品案内は、試験トルクを CuBe またはステンレスが 1.7 N·m 以上、CuZn が 0.6 N·m 以上、と書きます。推奨の CuZn は 0.5 N·m 以上、と書きます。技術資料の「以下」と、製品案内の「以上」は、不等号の向きが違います。0.5 と 0.5 以上も、一つの真鍮値にはしません。製品案内の導入は、規定された最大トルクのあるねじ結合、と書きます。最大の数字は、その文にはありません。

1MA99 の表は、SMA を 5 lb-inch、0.56 N·m、ナット開口 5/16 インチ、8 mm とします。同じ行のトルクレンチは、Not available です。日本語版は、適用なし、と書きます。注は、表の値はローデ・シュワルツが供給するコネクタ向けで、SMA は除く、と書きます。ほかの同軸コネクタの正しい限界は、損傷を避けるためメーカーから得る、と続きます。0.56 を、Rosenberger の 0.5 や 0.8–1.1 の更新には読みません。英語版と日本語版で、5 lb-inch、0.56 N·m、SMA を除く、という注の並びは同じです。

TNC で確認できた推奨は、二つです。Amphenol の現行ページは 4–6 inch-pounds（0.51–0.67 N·m）です。単位の併記は、そのページにあります。このページで換算し直した数字ではありません。Rosenberger の RPC-TNC は 0.46–0.69 N·m です。同じ技術資料の結合の試験トルクは 1.70 N·m です。1.70 の前後に、以上とも以下とも書かれていません。1.70 を、毎日のレンチ設定には読みません。0.51–0.67 と 0.46–0.69 を、一つの幅にはしません。SMA の 0.8–1.1 を、このどちらの幅の更新にも読みません。

技術資料の末尾は、個々の値は用途、設計、ケーブル、組立、作業によって異なりうる、と書きます。上の幅を、すべての個体の設定値には読みません。締付の残りの読み方は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) と [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。

## 見分けのポイント

見るのは、ねじの呼びと、ナットの大きさです。どちらも、回し続けるナットです。スタッドが約四分の一回転で掛かる相手は、このページの対ではありません。

指で回し始めて、山が噛み合わない相手は、その対ではありません。1/4-36 は 7/16-28 に進みません。金色に見えること、白い樹脂が見えること、全体が小さいことは、SMA と TNC を分けません。中心がピンか穴かだけでも、決まりません。資料上のプラグは、どちらの系列も、結合の側にピンを置く形があります。外導体内径の題は、4.13 mm と 6.5 mm で違います。目視の太さを、その呼びの測定にはしません。

ねじがあることだけでも、どちらかには決まりません。N 型は 5/8-24 です。SMA の資料が書く二面幅の一例は hex 8、または 5/16 インチです。TNC の呼び径の換算 11.1125 mm を、その 8 mm のレンチが合う、とは読みません。8 mm のレンチを、TNC のナットの代わりにも使いません。

50 Ω か 75 Ω かも、このねじだけでは決まりません。TNC で確認できた書き方は、上の節です。BNC の見分けは [別のページ]({{ '/learn/bnc-50-75/' | relative_url }}) です。

同じ 1/4-36 でも、中心のピンとソケットを入れ替えた呼びは、標準の SMA と対になりません。[SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。極性という考えは、そのページへ任せます。TNC 側の有無は、次の節の短い注意です。3.5 mm と 2.92 mm が機械的に嵌合しうる、という組は、SMA のねじが合う側の話です。7/16-28 の TNC は、その組に入りません。[互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。クイックロックの QMA も、1/4-36 の相手ではありません。[QMAとSMA]({{ '/learn/qma-sma/' | relative_url }}) です。

## 直接は嵌合しない

1/4-36 の山と、7/16-28 の山は、掛かり合う相手ではありません。外導体内径の題が 4.13 mm と 6.5 mm で違うことと、どちらもねじであることは、ロックする、という意味にはなりません。山が掛からないところから、力でねじを作りません。

系列をまたぐときは、変換アダプタです。1MA99 は、違う型を一つの系で使うときは、周波数範囲が最も低い型が、系の周波数範囲を決める、と書きます。アダプタ自身の行も、別に見ます。両側のうち高い方まで使える部品だ、とは、その文は書いていません。ケーブル側で届かないこともあります。読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。

このページが開いた SMA の製品案内は、アダプタを製品の列に置きます。TNC の製品案内も、アダプタを列に置きます。Amphenol の TNC のページは、適合する TNC のアダプタがある、と書きます。SMA から TNC への型番は、その文にはありません。無い型番を、このページでは作りません。

<figure class="assembly">
  <svg viewBox="0 0 720 210" role="img" aria-labelledby="adaptTitle adaptDesc">
    <title id="adaptTitle">SMAとTNCは直接は嵌合せず、あいだに変換アダプタを置く</title>
    <desc id="adaptDesc">左のねじ側の胴と右のねじ側の胴のあいだに、短い変換の胴がある概念図です。ねじの山の形は描いていません。</desc>
    <rect x="36" y="68" width="140" height="40" rx="20" fill="#1f4d45"></rect>
    <rect x="176" y="78" width="36" height="20" fill="#1f4d45"></rect>
    <rect x="240" y="56" width="200" height="64" rx="6" fill="#e6d7bf" stroke="#1f4d45" stroke-width="3"></rect>
    <rect x="440" y="76" width="32" height="24" fill="#1f4d45"></rect>
    <rect x="500" y="58" width="170" height="60" rx="30" fill="#1f4d45"></rect>
    <text x="110" y="150" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA</text>
    <text x="110" y="170" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">1/4-36</text>
    <text x="340" y="150" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">変換アダプタ</text>
    <text x="340" y="170" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">両端と、自身の行</text>
    <text x="585" y="150" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">TNC</text>
    <text x="585" y="170" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">7/16-28</text>
    <text x="360" y="198" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">胴の太さは、4.13 mm と 6.5 mm の比には合わせていません</text>
  </svg>
  <figcaption>
    <p>直接はロックしません。変換は、アダプタの図面で両端の系列と、アダプタ自身の周波数と、両端の締め方を見てから使います。この絵は、製品の嵌合図でも、損失の保証図でもありません。</p>
  </figcaption>
</figure>

TNCA と、標準の TNC を混ぜる話は、SMA との変換とは別です。IEC 61169-26 は、ソケット中心のコネクタの誘電体が基準面を超えて伸びないとき、IEC 60169-17 と IEC 60169-26 に書かれた TNC と適合する、と書きます。適合させても、性能は保証されない、と続きます。Rosenberger の RPC-TNC の技術資料は、規格が違う相手を混ぜると、周波数の適合に問題が出うる、と書きます。メスの誘電体が基準面を超えると、外導体が接触しない嵌合になりうる、とも書きます。18 GHz の行を、その注の外側の混在へは写しません。見出しの番号の読み分けは [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。

このページは、誤って押し当てたときの VSWR を数値にしていません。反射の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。

## 逆極性の短い注意

RP-TNC は、資料にあります。極性という考えの説明は [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) へ任せます。このページは、有無と、誤嵌合への注意だけです。

Amphenol の RP-TNC のページは、逆極性の界面は標準の TNC と嵌合しない、と書きます。結合はねじのままです。ナットが回ることを、標準の TNC と対になった、とは読みません。周波数の表は、50 Ω、DC–11 GHz、拡張は DC–18 GHz です。この 11 と 18 を、標準の TNC のページの 11 と 18 の更新には読みません。別のページの行です。

Rosenberger の reverse の案内は、SMA、BNC、TNC の reverse を、規格化されていない版として置きます。TNC Reverse の行は、50 Ω、最大 DC–10 GHz、最適 DC–4 GHz、ねじ、中心を逆にする、嵌合 500 回以上、依頼に応じて、です。同じ案内の用途は、無線 LAN のルータだけ、と書きます。利益の行は、誤った接続は不可能、と書きます。この二つの文は、SMA と BNC の reverse と同じ案内にあります。すべての TNC に、この系列がある、とは読みません。10 GHz と 4 GHz を、市販の標準 TNC の 10 GHz と 4 GHz と、一つの行にはしません。標準と、reverse は、別の案内です。

## 選定するときに見ること

- 図面で、SMA か TNC か TNCA か、50 Ω か 75 Ω か、プラグかジャックか、標準か逆極性か、を見ます。小さいねじ、という一語では注文しません。
- 周波数は、資料の行のまま置きます。SMA は、IEC の 18 GHz と 12.4 GHz、Rosenberger の DC–18 GHz、1MA99 の 12 GHz と、メーカーによっては 18 GHz、です。TNC は、IEC 61169-17 の 11 GHz、Amphenol の 11 GHz と拡張の 18 GHz、Rosenberger の市販系列の 4 GHz と 10 GHz、75 Ω の 1.5 GHz と 4 GHz、図の例の 15 GHz、TNCA と RPC-TNC の 18 GHz です。
- 結合は、1/4-36 か、7/16-28 か、です。直接はロックしません。変換アダプタは、両端の系列と、アダプタ自身の周波数と、両端の締め方をセットで見ます。型番が案内の列に無いときは、作りません。
- 締付は、端の材料と系列の行です。SMA の 0.8–1.1 N·m、0.5 N·m、0.56 N·m、試験の 1.7 N·m と 0.6 N·m を、TNC の 0.46–0.69 N·m や 0.51–0.67 N·m と、一つの値にはしません。試験の 1.70 N·m を、推奨の嵌合トルクには読みません。製品案内の「以上」と、技術資料の「以下」も、一つの不等号にはしません。
- 振動は、ねじという言葉と、試験条件の文字を、別々に見ます。開いた資料では、SMA の技術資料と RPC-TNC が Method 204 の Condition D、Amphenol の標準 TNC が Condition B です。この文字を、耐振動の順位にはしません。
- 電力は、200 W @ 2 GHz と、316 W @ 1 GHz @ 25 °C を、別の行のまま見ます。一つの順位にはしません。
- SMA の先が 3.5 mm、2.92 mm、RP-SMA、QMA のときは、それぞれのページの確認が先です。TNC の 75 Ω は、開いた資料の行だけを見ます。BNC の見分けは写しません。

## 関連するページ

- 結合、用途、トルクの早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、上限の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- バヨネットとの違いは [SMAとBNC]({{ '/learn/sma-bnc/' | relative_url }}) と [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }})、5/8-24 との違いは [N型とSMA]({{ '/learn/n-sma/' | relative_url }})、5/8-24 と 7/16-28 は [N型とTNC]({{ '/learn/n-tnc/' | relative_url }}) です。
- 50 Ω と 75 Ω の式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }})、境目の 0.2 は [電卓]({{ '/learn/calculator/#reflect' | relative_url }})、BNC の見分けは [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。
- 3.5 mm、2.92 mm は [互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }})、中心の入れ替えの考えは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }})、クイックロックは [QMAとSMA]({{ '/learn/qma-sma/' | relative_url }})、別のねじの 75 Ω は [F型コネクタ]({{ '/learn/f-type/' | relative_url }}) です。
- 締付の幅は [数値早見]({{ '/learn/quick-reference/' | relative_url }}) と [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。
- 名前の話は [第10話]({{ '/manga/10-bnc-name/' | relative_url }}) と [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。会話はフィクション演出です。短い定義は [用語集の TNC]({{ '/glossary/' | relative_url }}#tnc) です。

## 出典

結合、径、周波数、インピーダンス、用途、着脱、振動、トルク、逆極性は、次の公開資料で確認しました。界面の図面と、規格の表そのものは転載していません。上の図は、このページで描いたものです。6.35 は 1/4 インチに 25.4 を掛けた計算、11.1125 は 7/16 インチに 25.4 を掛けた計算、7.9375 は 5/16 インチに 25.4 を掛けた計算です。どれも、規格の公差にはしていません。規格本文の有償版は、適用範囲と、ここへ転記した表の範囲で参照しています。Method 204 の加速度は、このページでは読んでいません。IEC 61169-17 と IEC 61169-26 の開いた範囲に、75 Ω の TNC を定める文は見つかっていません。

- IEC 61169-15:2021 の公開プレビュー（外導体内径 4.13 mm（0.163 in）、ねじ結合、50 Ω、type SMA。マイクロ波の伝送系。動作周波数は 18 GHz まで。grade 1 は DC–18 GHz。フレキシブルのストレートとライトアングルは DC–12.4 GHz。セミリジッドとセミフレキのストレートは DC–18 GHz。プレビュー本文に 1/4-36 の文字は無い。図面は転載していない）: https://cdn.standards.iteh.ai/samples/101730/41a5144464e04f98bbd9f6f02635cb3d/IEC-61169-15-2021.pdf
- IEC 61169-15:2021（Webstore。題は type SMA。要旨は詳細仕様の規則までで、18 GHz の文は要旨に無い）: https://webstore.iec.ch/en/publication/62310
- IEC 61169-17:2022 の公開プレビュー（外導体内径 6.5 mm（0.256 in）、ねじ結合、50 Ω、type TNC。マイクロ波の伝送系。動作周波数は 11 GHz まで。開いたプレビューの表に 7/16-28 の文字は無い。図面は転載していない）: https://cdn.standards.iteh.ai/samples/104754/87ebf1f4d7be44529fd3dbc5c2f7a35d/IEC-61169-17-2022.pdf
- IEC 61169-17:2022（Webstore。題は 6.5 mm、ねじ、50 Ω の type TNC。要旨に 11 GHz の文は無い）: https://webstore.iec.ch/en/publication/67903
- IEC 61169-26:2013 の公開プレビュー（TNCA、50 Ω、ねじ結合、動作周波数の限度は 18 GHz まで。11 GHz を超える用途に勧める。ソケット中心の誘電体が基準面を超えないとき、IEC 60169-17 と IEC 60169-26 の TNC と適合する。適合させても性能は保証されない。ピン中心の図は 7/16-28UNEF-2B、ソケット中心の図は 7/16-28UNEF-2A。図面は転載していない）: https://cdn.standards.iteh.ai/samples/18737/a619306920b04ab58dfc93a9b48e81cf/IEC-61169-26-2013.pdf
- IEC 61169-26:2013（Webstore。題は TNCA。要旨は 50 Ω、ねじ、動作周波数の限度は 18 GHz まで。11 GHz を超える、という文は要旨に無い）: https://webstore.iec.ch/en/publication/4732
- Rohde & Schwarz、アプリケーションノート 1MA99 英語版 1MA99_2e（2015 年 4 月。図の例は TNC が 15 GHz、SMA が 12 GHz。SMA の節は Subminiature Version A、50 Ω、PTFE、DC–12 GHz、嵌合 500 回。18 GHz まで出すメーカーもある、と書く。TNC だけの節は無い。系の周波数は、最も低い型が決める。トルクの表は SMA が 5 lb-inch、0.56 N·m、開口 5/16 インチと 8 mm、レンチは Not available。注は、表の値は同社供給品向けで SMA は除く。図と表は転載していない）: https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_application/application_notes/1ma99/1MA99_2E_CoaxConnectorHandling.pdf
- 同じノートの案内ページ（Version 2e、2015-04-09）: https://www.rohde-schwarz.com/us/applications/guidance-on-selecting-and-handling-coaxial-rf-connectors-used-with-rohde-schwarz-test-equipment_56280-33857.html
- Rohde & Schwarz、1MA99 日本語版（2012-12-12、Version 1.0。図 1 の TNC 15 GHz と SMA 12 GHz、SMA の 12 GHz、メーカーによっては 18 GHz、嵌合 500 回、トルク表の 5 lb-inch と 0.56 N·m、SMA を除く注は、英語版の同じ箇所と揃う。TNC だけの節は無い。二つの版の全文が同一だとは、このページでは確認していない）: https://rohde-schwarz-japan.com/download/jp/an/1MA99_1J.pdf
- Rosenberger、SMA シリーズ技術資料 32-000-000_TD（50 Ω、DC–18 GHz。オス列は 1/4-36 UNS-2B、K は hex 8。メス列は 1/4-36 UNS-2A。電力 200 W @ 2 GHz。誘電体 PTFE。嵌合回数は CuBe またはステンレスが 500 以上、CuZn が 100 以上。推奨トルクは前者が 0.8–1.1 N·m、後者が 0.5 N·m。試験トルクは前者が 1.7 N·m 以下、後者が 0.6 N·m 以下。振動は MIL-STD-202 Method 204 Condition D。値は用途などで異なりうる、と注。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- Rosenberger、SMA の製品案内（ねじ結合。規定された最大トルク。50 Ω、DC–18 GHz。界面は IEC 60169-15。嵌合回数は CuBe またはステンレスが 500 以上、CuZn が 100 以上。試験トルクは前者が 1.7 N·m 以上、後者が 0.6 N·m 以上。推奨は前者が 0.8–1.1 N·m、CuZn が 0.5 N·m 以上。用途に通信、移動体通信、計測、産業、機器、航空電子。アダプタを製品の列に置く）: https://www.rosenberger.com/product/sma/
- Rosenberger、TNC 50 Ω / 75 Ω（BNC の特性と界面寸法に基づく。ねじのロックにより、BNC より高い環境負荷で使える、と書く。注は、展開を二つ書く。このページはそのどちらも採らない。50 Ω は最大 10 GHz、最適 4 GHz。75 Ω は最大 4 GHz、最適 1.5 GHz。導入は 75 Ω を最大 4 GHz、依頼に応じて、と書く。界面は IEC 60169-17、MIL-PRF-39012、DIN EN 122200。標準化された寸法では完全な 75 Ω は実現できない。嵌合 500 回以上。アダプタを製品の列に置く）: https://www.rosenberger.com/product/tnc-50-o-75-o/
- Rosenberger、RPC-TNC の製品案内（ねじロック、18 GHz まで。BNC 系列の界面に基づき、標準の TNC、50 Ω と 75 Ω の両方と相互嵌合する。インピーダンス 50 Ω。界面は IEC 61169-26。嵌合 500 回以上。空気誘電体と PPE/PTFE のビーズ。精密測定、セミリジッド、航空と宇宙向けの品種）: https://www.rosenberger.com/product/rpc-tnc/
- Rosenberger、RPC-TNC 技術資料 06-000-000_TD（プラグの F は 7/16-28 UNEF-2B、ジャックは 7/16-28 UNEF-2A。界面は IEC 61169-26。50 Ω、DC–18 GHz。推奨トルク 0.46–0.69 N·m、結合の試験トルク 1.70 N·m。振動は MIL-STD-202 Method 204 Condition D。規格の混在は周波数の適合に問題が出うる。メスの誘電体が基準面を超えると、外導体が接触しないことがある、と注。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-TNC/06-000-000_TD.pdf
- Amphenol RF、TNC（ねじ。vibration resistance。50 Ω と 75 Ω。標準と逆極性。DC–11 GHz、拡張は DC–18 GHz。特徴の文は 11 GHz まで、ケーブルに依存。電気の表は 50 Ω、VSWR は DC–11 GHz で最大 1.3。電力は 316 W @ 1 GHz @ 25 °C。振動は MIL-STD-202 Method 204 Test Condition B。嵌合トルク 4–6 inch-pounds（0.51–0.67 N·m）。界面は MIL-STD-348。IP67 は選べる。ケーブルの例に RG-58、RG-142、RG-316。FAQ は標準を 11 GHz まで、拡張を 18 GHz まで、と書く。典型値で、すべてには当てはまらない、と注。適合する TNC のアダプタがある、と書く。SMA への型番は、その文には無い）: https://www.amphenolrf.com/en-us/products/rf-connectors/tnc-connectors/
- Amphenol RF、RP-TNC（逆極性の界面は標準の TNC と嵌合しない。ねじ。50 Ω、DC–11 GHz、拡張は DC–18 GHz）: https://www.amphenolrf.com/rf-connectors/rp-tnc-connectors.html
- Rosenberger、Reverse SMA / BNC / TNC（規格化されていない版。TNC Reverse は 50 Ω、最大 DC–10 GHz、最適 DC–4 GHz、ねじ、中心を逆にする、嵌合 500 回以上、依頼に応じて。用途の行は無線 LAN のルータだけ。利益の行は、誤った接続は不可能）: https://www.rosenberger.com/product/reverse-sma-bnc-tnc/
