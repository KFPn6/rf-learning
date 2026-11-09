---
layout: default
title: "BNCとTNCの違いと使い分け"
description: "BNCのバヨネットとTNCのねじ込みの違いを、外導体内径6.5mm、7/16-28、使用周波数の目安、振動試験の条件、混ぜたときの注意、50Ωと75Ωで整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-09
permalink: /learn/bnc-tnc/
---

{% include learn-nav.html %}

# BNCとTNCの違いと使い分け

BNC と TNC は、外導体の内径の呼びがどちらも 6.5 mm の同軸コネクタです。結合が違います。BNC は、二本のスタッドで留めるバヨネットです。TNC は、ねじです。IEC 60169-17 のプレビューは、市販名 TNC のねじ結合を、バヨネットの BNC から導かれたもの、と書きます。導かれた、は、そのまま嵌合する、ではありません。

ここにある数字は、公開の規格のプレビューと、メーカーの製品案内から取った学習用の目安です。個別の製品が保証する値ではありません。同じ名前でも、資料が複数の周波数と、複数の振動試験の条件を置きます。平均して一つの上限にはしません。

50 Ω と 75 Ω のピン径、誘電体の見え方、境目の 0.2 は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。オームの式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。4、10、11、12、18 を一つの上限にしない読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。系列の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。スナップオンの MCX や、基板へ押し込む U.FL は、この 6.5 mm の組ではありません。[小型RFコネクタ]({{ '/learn/small-rf-connectors/' | relative_url }}) です。名前の展開は [第10話]({{ '/manga/10-bnc-name/' | relative_url }}) です。会話はフィクション演出で、発明者とは断定しません。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 項目 | BNC | TNC |
| --- | --- | --- |
| このページが読んだ規格 | IEC 61169-8:2007。題は外導体内径 6.5 mm、バヨネット、50 Ω、type BNC。75 Ω は IEC 61169-63:2020 の type BNC75 | IEC 61169-17:2022。題は外導体内径 6.5 mm、ねじ結合、50 Ω、type TNC。動作周波数は 11 GHz まで。別番号の IEC 61169-26:2013 は TNCA で、50 Ω、ねじ、18 GHz まで |
| 結合 | 二本のスタッドのバヨネット。Amphenol のカタログは、メス側の二つのラグを、約四分の一回転で嵌合する、と書く | ねじ。IEC 61169-26 のピン中心の図は 7/16-28UNEF-2B、ソケット中心の図は 7/16-28UNEF-2A。Rosenberger の RPC-TNC も、プラグが 2B、ジャックが 2A。IEC 61169-17 の開いたプレビューの表に、この呼びの文字は無かった |
| ピンの径の行 | IEC 61169-8 と IEC 61169-63 の d は、どちらも 1.32–1.37 mm | IEC 61169-17 のピン中心の d は 1.32–1.37 mm。IEC 61169-26 の一般側の表の d も 1.32–1.37 mm。grade 0 の表の d は 1.34–1.37 mm |
| その資料の周波数 | Rosenberger の 50 Ω は最大 DC–10 GHz、最適 DC–4 GHz。75 Ω は最大 DC–4 GHz、最適 DC–1 GHz。Amphenol のカタログは、低い反射を 4 GHz まで、動作を 11 GHz まで。現行の製品ページは、標準を DC–4 GHz、拡張を DC–12 GHz | IEC 61169-17 は 11 GHz まで。Amphenol は DC–11 GHz、拡張は DC–18 GHz。Rosenberger の市販 TNC の 50 Ω は最大 DC–10 GHz、最適 DC–4 GHz。75 Ω は最大 DC–4 GHz、最適 DC–1.5 GHz。RPC-TNC と IEC 61169-26 は 18 GHz まで |
| 振動試験の行 | Amphenol の現行ページと、PDF のカタログは、MIL-STD-202 Method 204 の Condition D | Amphenol の現行ページは、同じ Method 204 の Condition B。Rosenberger の RPC-TNC は Condition D |
| 50 Ω と 75 Ω | 機械的に嵌合しうる、と複数の資料が書く。反射は残る | Connex は、50 Ω と 75 Ω が相互に嵌合する、と書く。Rosenberger は、標準化された界面では完全な 75 Ω は実現できない、と書く |

</div>

6.5 mm は、規格の題が置く外導体内径の呼びです。界面の表の公差として、このページが読み直した数字ではありません。4、10、11、12、18 を、一つの上限にはしません。1.32–1.37 と 1.34–1.37 も、一つのピン径にはしません。図面は転載していません。

## ねじ込みと、バヨネット

IEC 61169-8 の題は、バヨネット、特性インピーダンス 50 Ω、type BNC です。IEC 61169-17:2022 の適用範囲は、ねじ結合、特性インピーダンス 50 Ω の series TNC です。動作周波数は 11 GHz まで、と書きます。外導体内径の呼びは、どちらも 6.5 mm（0.256 in）です。

ANSI が公開する IEC 60169-17 第1版のプレビューは、この型を市販名 TNC のねじ結合とし、バヨネット結合の BNC（IEC 169-8）から導かれた、と書きます。Rosenberger の市販 TNC の案内も、BNC の特性と界面寸法に基づく、と書きます。続けて、ねじのロックにより、BNC に比べて高い環境負荷で使える、とも書きます。基づく、と、高い環境負荷、は、別の文です。バヨネットの相手にロックできる、とは、どちらも書いていません。同じ案内の注は、TNC の展開を Threaded Neill Concelman と Thread Navy Connector の二つ書きます。このページは、どちらの展開も採りません。名前の扱いの残りは [第10話]({{ '/manga/10-bnc-name/' | relative_url }}) です。

ねじの呼びは、IEC 61169-17 の開いたプレビューの寸法表には、文字としてありません。結合ナットを前に出した位置、という注はあります。呼びは、別の資料で置きます。IEC 61169-26:2013 のピン中心の図は 7/16-28UNEF-2B、ソケット中心の図は 7/16-28UNEF-2A です。Rosenberger の RPC-TNC も、プラグの F が 7/16-28 UNEF-2B、ジャックの F が 7/16-28 UNEF-2A です。Amphenol のカタログの結合の欄は、TNC を 7/16-28 threaded coupling、BNC を bayonet とします。

2B は内ねじ、2A は外ねじの等級です。ピン中心の側に結合ナットの内ねじがある、という並びは、N 型や SMA の技術資料と同じ側です。山の数字が違います。N 型は 5/8-24、SMA は 1/4-36 です。読み分けは [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。

7/16 インチは 0.4375 インチです。0.4375 × 25.4 = 11.1125 mm です。これはねじの呼び径の換算であり、結合ナットの二面幅ではありません。確認できたレンチの一例は、Rosenberger の RPC-TNC 用 06W021-000 が二面幅 15 mm です。11.1125 を、15 mm の開口には読みません。すべての TNC のナットが 15 mm、とも読みません。幅の残りは [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。

<figure class="assembly">
  <svg viewBox="0 0 720 240" role="img" aria-labelledby="coupTitle coupDesc">
    <title id="coupTitle">左は二本のスタッド、右はねじの結合ナット、という概念図</title>
    <desc id="coupDesc">左の胴には上下に短い突起があります。右の胴には、ねじを示す横線があります。外導体内径の比や、ピンの径は描いていません。</desc>
    <rect x="70" y="48" width="180" height="72" rx="8" fill="none" stroke="#1f4d45" stroke-width="10"></rect>
    <rect x="40" y="62" width="36" height="16" rx="3" fill="#1f4d45"></rect>
    <rect x="244" y="90" width="36" height="16" rx="3" fill="#1f4d45"></rect>
    <circle cx="160" cy="84" r="10" fill="#c9843d"></circle>
    <text x="160" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">BNC の例</text>
    <text x="160" y="178" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">二本のスタッド</text>
    <rect x="450" y="48" width="180" height="72" rx="36" fill="none" stroke="#1f4d45" stroke-width="10"></rect>
    <line x1="468" y1="62" x2="612" y2="62" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="462" y1="84" x2="618" y2="84" stroke="#1f4d45" stroke-width="3"></line>
    <line x1="468" y1="106" x2="612" y2="106" stroke="#1f4d45" stroke-width="3"></line>
    <circle cx="540" cy="84" r="10" fill="#c9843d"></circle>
    <text x="540" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">TNC の例</text>
    <text x="540" y="178" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">7/16-28 のねじ</text>
    <text x="360" y="214" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">胴の大きさは、6.5 mm の比にしていません。製品の嵌合図ではありません</text>
  </svg>
  <figcaption>
    <p>左の突起は、Amphenol のカタログが書く二本のラグの側です。右の横線は、7/16-28 のねじがある、という本文を目で追うための線です。山の数も、ピンの径も、この絵の比ではありません。</p>
  </figcaption>
</figure>

締付も違います。BNC のカタログは、四分の一回転のバヨネットです。ねじ系列の推奨トルクを、この回転へは使いません。TNC で確認できた推奨は、二つです。Amphenol の現行ページは 4–6 inch-pounds（0.51–0.67 N·m）です。Rosenberger の RPC-TNC は 0.46–0.69 N·m です。同じ技術資料の結合の試験トルクは 1.70 N·m です。1.70 を、毎日のレンチ設定には読みません。0.51–0.67 と 0.46–0.69 を、一つの幅にはしません。読み方は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。

## 使用周波数の目安

周波数は、学習用の目安です。製品が保証する上限ではありません。

BNC 側で、このページが並べる行は次です。Rosenberger は、50 Ω の最適を DC–4 GHz、最大を 10 GHz、75 Ω の最適を DC–1 GHz、最大を 4 GHz とします。Amphenol の PDF カタログは、動作を 11 GHz まで、低い反射を 4 GHz まで、と書きます。同じ社の現行の製品ページは、50 Ω も 75 Ω も、標準を DC–4 GHz、拡張設計を DC–12 GHz とします。50 Ω の VSWR の行は、DC–4 GHz で最大 1.3 です。75 Ω の同じ範囲は最大 1.5 で、12G の製品は 6 GHz までと 12 GHz までで別の行です。FAQ は、標準をおよそ 4 GHz、放送向けの精密な 75 Ω を 12 GHz まで、と書きます。仕様表の「50 Ω も拡張は 12 GHz」と、FAQ の「12 GHz は精密な 75 Ω」は、別の文です。4、10、11、12 を平均しません。ピン径と誘電体の読み分けは [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。

TNC 側の行は次です。IEC 61169-17:2022 の適用範囲は、11 GHz までです。Amphenol の現行ページは、DC–11 GHz、拡張設計は DC–18 GHz です。特徴の文は、11 GHz まで、ケーブルに依存する、とも書きます。仕様表の VSWR は、DC–11 GHz で最大 1.3 です。この電気の表のインピーダンスは 50 Ω です。同じページは、50 Ω と 75 Ω がある、と特徴に書きます。75 Ω の周波数を、この 1.3 の行へは写しません。Rosenberger の市販 TNC は、50 Ω が最大 DC–10 GHz、最適 DC–4 GHz、75 Ω が最大 DC–4 GHz、最適 DC–1.5 GHz です。10 と 11、4 と 1.5 を、一つの TNC の上限にはしません。

18 GHz は、さらに別の行です。IEC 61169-26:2013 の適用範囲は、TNCA、50 Ω、ねじ結合、動作周波数の限度は 18 GHz まで、です。11 GHz を超える用途に勧める、とも書きます。Rosenberger の RPC-TNC は、界面を IEC 61169-26、周波数を DC–18 GHz、リターンロスを DC–18 GHz で 23 dB より大きい、とします。Amphenol の拡張設計の 18 GHz を、IEC 61169-17 の 11 GHz の更新には読みません。RPC-TNC の 18 GHz を、市販 TNC の最適 4 GHz の更新にも読みません。

Connex は、50 Ω を 0–11 GHz、VSWR 最大 1.3、75 Ω を 0–1 GHz とします。75 Ω の VSWR は 1.05 + 0.1×f（f は GHz）で、DC から 1 GHz です。1 GHz では 1.15 です。同社が typical の SWR として書く 1.15:1 も、1 GHz の行です。この 1.15 は、標準化された嵌合面の中の 75 Ω のずれについて書かれた数字です。50 Ω と 75 Ω をつないだ境目の 1.50 ではありません。境目の計算は、あとの節です。

ケーブルとアダプタと、嵌合した相手の低い側で、系列の欄の数字まで届かないことがあります。読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。同軸と光ファイバー、同軸と USB-C で、コネクタの系列ごとに上限が分かれる、という並びは [同軸と光ファイバー]({{ '/learn/compare/coax-vs-fiber/' | relative_url }}) と [同軸と USB-C]({{ '/learn/compare/coax-vs-usbc/' | relative_url }}) です。

## 耐振動

資料が「ねじだから振動に強い」と書く文と、振動試験の条件の文字は、別です。

Amphenol の TNC の現行ページは、用途を、確実な嵌合と vibration resistance が要る場合、と書きます。特徴の一つは、振動への抵抗のためのねじ結合、です。環境の表は、振動を MIL-STD-202 Method 204 の Test Condition B とします。同じ社の BNC の現行ページは、結合をバヨネットとし、振動を同じ Method 204 の Test Condition D とします。PDF の BNC カタログも、method 204 の test cond. D です。Rosenberger の RPC-TNC は、振動を Method 204 の Condition D とします。精密の RPC-TNC の行であり、Amphenol の標準 TNC の Condition B と同じ文字ではありません。

1980年4月1日付の Method 204D では、Condition B の見出しは 15 g peak です。単純調和で、0.06 インチの両振幅か 15 g（peak）か、小さい方です。周波数は、およそ 10 Hz から 2,000 Hz です。Condition D の見出しは 20 g peak です。0.06 インチの両振幅か 20 g（peak）か、小さい方で、周波数もおよそ 10 Hz から 2,000 Hz です。15 と 20 を平均しません。この 15 g と 20 g は、その日付の Method 204D の文です。メーカーが MIL-STD-202 Method 204 とだけ書くとき、のちの改訂で数値が変わっていないかは、このページでは確かめていません。

Amphenol の現行の二ページだけを、この 1980年の文へ当てはめると、試験条件の文字は BNC が D、TNC が B です。D の 20 g は、B の 15 g より大きい側です。この並びを、TNC の方が厳しい振動試験を受けている、とは読みません。RPC-TNC の Condition D を、Amphenol の標準 TNC の Condition B の代わりにも読みません。

別の文として、耐振動を書く資料はあります。Amphenol のカタログの概要は、TNC を、航空機とミサイルで極端な振動が要因となる用途向けに開発された、と書きます。同じカタログの TNC の節は、屋外と、極端な振動が要因となる場所に向く、とも書きます。特徴の一つは、振動の強い用途で結合が外れないよう、ねじの界面がある、です。Rosenberger は、ねじのロックにより、BNC に比べて高い環境負荷で使える、と書きます。これらの文と、上の B と D の大小を、一つの順位にはしません。使う一本は、その図面の振動の行を見ます。系列の名前だけで、何 g まで、とは決まりません。

衝撃も、文字が揃いません。Amphenol の BNC と TNC の現行ページは、どちらも MIL-STD-202 Method 213 の Test Condition G で、不連続は許さない、と書きます。Rosenberger の RPC-TNC は Method 213 の Condition I です。G と I の加速度は、このページでは Method 213 の本文から読んでいません。振動の 15 g と 20 g を、衝撃へは写しません。

## 見分け方

見るのは、スタッドか、ねじか、です。

BNC は、二本のラグが四分の一回転で掛かるバヨネットです。ねじを、最後まで締め続ける系列ではありません。TNC は、7/16-28 のねじです。指で回し始めて、山が噛み合わない相手は、その対ではありません。金色に見えること、白い樹脂が見えること、全体が小さいことは、BNC と TNC を分けません。外導体内径の題は、どちらも 6.5 mm です。

ねじがあることだけでも、TNC とは決まりません。N 型は 5/8-24、SMA は 1/4-36、F 型は別のねじの 75 Ω です。7/16-28 のナットは、5/8-24 にも 1/4-36 にも進みません。F 型を、75 Ω の TNC とは呼びません。[F型コネクタ]({{ '/learn/f-type/' | relative_url }}) です。N を、大きい BNC とも呼びません。[N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。

中心がピンか穴かだけでは、BNC と TNC は分かれません。資料上のプラグは、どちらの系列も、結合の側にピンを置く形があります。ピン径の行は、IEC 61169-8 も IEC 61169-17 も 1.32–1.37 mm です。目視の太さを、その公差の測定にはしません。

50 Ω か 75 Ω かも、このピン径の行だけでは決まりません。BNC でそれをどう読むかは [別のページ]({{ '/learn/bnc-50-75/' | relative_url }}) です。TNC の 75 Ω は、次の節です。部品番号、刻印、データシートで分けます。

RP-TNC は、ねじが TNC のまま、中心の向きを入れ替える資料です。Amphenol の RP-TNC のページは、逆極性の界面は標準の TNC と嵌合しない、と書きます。逆極性のオスはメス型の接触子を持ち、その逆もそうである、とも書きます。標準の TNC と、ナットが回ることと、中心がつながることは別です。同じ 1/4-36 で中心を入れ替えた例は [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。ねじの呼びは、TNC の 7/16-28 とは違います。

## 互換性と、混ぜたとき

### BNC と TNC は、ロックの相手ではない

スタッドと、7/16-28 の山は、掛かり合う相手ではありません。山が掛からないところから、力でねじを作りません。中心のピンの行が 1.32–1.37 mm で揃うことと、外導体の呼びが 6.5 mm であることは、結合がロックする、という意味にはなりません。

系列をまたぐときは、変換アダプタです。アダプタ自身の周波数の行を見ます。両側のうち高い方まで使える部品だ、とは、案内の列があるだけでは読みません。嵌合したあとの上限は、低い側の行を超えて伸びません。読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。Amphenol の N の案内が、TNC への cross-series adapter を製品の列に置く、という文は [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) にあります。

### 50 Ω と 75 Ω

Connex は、75 Ω の TNC と 50 Ω の TNC は、すべて相互に嵌合する、と書きます。Rosenberger の RPC-TNC の製品案内は、標準の TNC と相互嵌合し、50 Ω と 75 Ω の両方、と書きます。RPC-TNC 自身のインピーダンスの欄は 50 Ω です。嵌合できることを、電気的に同じ系統だ、とは読みません。

Rosenberger の市販 TNC は、国際的に標準化された TNC の界面寸法では、完全な 75 Ω は実現できない、と書きます。50 Ω の界面の案内も、75 Ω の界面の案内も、IEC 60169-17、MIL-PRF-39012、DIN EN 122200 です。75 Ω 専用の別番号を、その案内は挙げていません。Connex も、標準化された嵌合面寸法の中では完全な 75 Ω は実現できない、と書きます。1000 MHz までは、その小さなずれは実用上無視できる、とも書きます。1 GHz の typical の SWR は 1.15:1 です。上の式の 1.15 と同じ側です。BNC で Connex が書いた「完全な 75 Ω は実現できない」と、この TNC の文を、一つの設計には読みません。系列が違います。

同じ Connex の部品表には、アスタリスクを付けた行があります。注は、中心コンタクトが 0.053 インチ、金めっき 30 µin で、true 75 Ω、と書きます。0.053 × 25.4 = 1.3462 mm です。この計算は、プラグの D の 1.32–1.37 mm の内側です。注の true 75 Ω を、標準の嵌合面では完全な 75 Ω は実現できない、という前の文の取り消しには読みません。二つの文は、同じカタログの別の場所です。0.053 インチを、75 Ω だからピンが細い、という見分けにも使いません。

実数の一つの境目で 50 Ω と 75 Ω をつなぐとき、入射側から見た電圧の反射係数の絶対値は 0.2、VSWR は 1.50、リターンロスは 13.98 dB です。計算の置き場所は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) と [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。欄へ入れるなら [電卓]({{ '/learn/calculator/#reflect' | relative_url }}) です。この 1.50 は、理想化した一つの境目の計算です。Connex の 1.15 でも、Amphenol の 1.3 でもありません。TNC のカタログがコネクタ自身に書く VSWR には読みません。

BNC の規格が、50 Ω と 75 Ω を非破壊で嵌合できる側へ置く文を、TNC へは写しません。N 型の 75 Ω が、50 Ω との誤嵌合で壊れうる、という IEC 61169-16 の警告も、TNC の文ではありません。N 型の注意は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。

### TNC と TNCA

IEC 61169-26 は、TNCA を、IEC 60169-17 と IEC 60169-26 に書かれた TNC と適合する、と書きます。条件は、ソケット中心のコネクタの誘電体が、基準面を超えて伸びないことです。適合させても、性能は保証されない、と続きます。注は、TNCA の界面は、耐電圧を上げるための重なる PTFE 誘電体を使わない、と書きます。

Rosenberger の RPC-TNC の技術資料は、規格が違う相手を混ぜると、周波数の適合に問題が出うる、と書きます。メスの誘電体が基準面を超えると、外導体が接触しない嵌合になりうる、とも書きます。試験用のコネクタとして特性を取り、誤差を補正する測定に限る、という注が続きます。18 GHz のリターンロスの行を、その注の外側の混在へは写しません。

IEC 61169-26 の適用範囲は、一般コネクタを grade 2、標準試験コネクタを grade 0 とします。開いたプレビューの寸法の見出し 3.1 は、General connectors – Grade 1 と読めます。適用範囲の grade 2 と、見出しの Grade 1 を、このページでは一つの番号に決めません。ピンの d は、表の幅のまま置きます。一般側として読んだ Table 1 の d は 1.32–1.37 mm です。見出しが Grade 0 の Table 4 の d は 1.34–1.37 mm です。

### 逆極性

Amphenol の TNC の現行ページは、標準と逆極性の両方がある、と書きます。RP-TNC のページは、逆極性の界面が標準の TNC との嵌合を防ぐ、と書きます。周波数の表は、50 Ω、DC–11 GHz、拡張は DC–18 GHz です。ねじが回ることを、標準の TNC と対になった、とは読みません。中心のピンと穴を、図面で見ます。

Connex のカタログは、逆極性は部品番号に RP、逆ねじは RT を足す、と書きます。RP と RT を、一つの呼びにはしません。入手できるかは、同社へ問い合わせる、と続きます。すべての TNC に、この二つの系列がある、とは読みません。左ねじの例が別の系列にある、という話は [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。TNC の RT を、その SMA の図面へは写しません。

## 選定するときに見ること

- 図面で、BNC か TNC か TNCA か、50 Ω か 75 Ω か、プラグかジャックか、標準か逆極性か、を見ます。小さいバヨネット、という一語では注文しません。
- 周波数は、資料の行のまま置きます。BNC は、Rosenberger の 4 GHz と 10 GHz、カタログの 4 GHz と 11 GHz、現行ページの 4 GHz と 12 GHz です。TNC は、IEC 61169-17 の 11 GHz、Amphenol の 11 GHz と拡張の 18 GHz、Rosenberger の市販系列の 4 GHz と 10 GHz、75 Ω の 1.5 GHz と 4 GHz、Connex の 75 Ω の 1 GHz、TNCA と RPC-TNC の 18 GHz です。
- 振動は、ねじという言葉と、試験条件の文字を、別々に見ます。Amphenol の現行ページでは、BNC が Method 204 の Condition D、TNC が Condition B です。RPC-TNC は Condition D です。1980年の Method 204D では、B が 15 g peak、D が 20 g peak です。この大小を、系列全体の耐振動の順位にはしません。
- 締付は、端の系列の行です。TNC の 0.46–0.69 N·m と 0.51–0.67 N·m を、BNC の四分の一回転へは使いません。試験トルクの 1.70 N·m を、推奨の嵌合トルクには読みません。
- 屋外は、カタログの weatherproof という語だけでは決めません。Amphenol の TNC は、IP67 のシールを選べる、と書きます。すべての TNC が IP67 だ、とは書いていません。ガスケットの有無は、その製品の図面です。
- 変換アダプタは、両端の系列と、アダプタ自身の周波数と、両端の締め方をセットで見ます。スナップオンの小型系列へは、さらに [小型RFコネクタ]({{ '/learn/small-rf-connectors/' | relative_url }}) の保持の確認が先です。

## 関連するページ

- ピン径、誘電体、境目の 0.2 は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }})、式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。
- 上限の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }})、結合の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。
- 5/8-24 と 1/4-36 は [N型とSMA]({{ '/learn/n-sma/' | relative_url }})、中心を入れ替えた呼びは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }})、75 Ω の別のねじは [F型コネクタ]({{ '/learn/f-type/' | relative_url }}) です。
- スナップオンと押し込みは [小型RFコネクタ]({{ '/learn/small-rf-connectors/' | relative_url }}) です。系列ごとに上限が分かれる並びは [同軸と光ファイバー]({{ '/learn/compare/coax-vs-fiber/' | relative_url }}) と [同軸と USB-C]({{ '/learn/compare/coax-vs-usbc/' | relative_url }}) です。
- 締付の幅は [数値早見]({{ '/learn/quick-reference/' | relative_url }}) と [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。嵌合の注意の並びは [深掘り]({{ '/learn/master/' | relative_url }}) です。
- 短い定義は [用語集の BNC]({{ '/glossary/' | relative_url }}#bnc) と [用語集の TNC]({{ '/glossary/' | relative_url }}#tnc) です。名前の展開は [第10話]({{ '/manga/10-bnc-name/' | relative_url }}) です。

## 出典

結合、径、周波数、振動、嵌合、75 Ω は、次の公開資料で確認しました。界面の図面と、規格の表そのものは転載していません。上の図は、このページで描いたものです。11.1125 は、7/16 インチに 25.4 を掛けた計算です。0.2、1.50、13.98 dB の置き場所は、関連するページに書いた式です。1.15 は、Connex の式へ 1 GHz を入れた値と、同社が typical と書く値の両方です。1.3462 は、0.053 インチに 25.4 を掛けた計算です。規格本文の有償版は、適用範囲と、ここへ転記した表の範囲で参照しています。Method 213 の Condition G と I の加速度は、このページでは読んでいません。

- IEC 61169-17:2022 の公開プレビュー（外導体内径 6.5 mm（0.256 in）、ねじ結合、50 Ω、type TNC。動作周波数は 11 GHz まで。ピン中心の d は 1.32–1.37 mm。注に、結合ナットを前に出した位置。ソケット側の注は、1.32 mm から 1.37 mm のゲージピンと嵌合したときの要求。開いたプレビューの表に 7/16-28 の文字は無い。図面は転載していない）: https://cdn.standards.iteh.ai/samples/104754/87ebf1f4d7be44529fd3dbc5c2f7a35d/IEC-61169-17-2022.pdf
- IEC 61169-17:2022（Webstore。題は type TNC）: https://webstore.iec.ch/en/publication/67903
- IEC 60169-17 第1版の公開プレビュー（ANSI。ねじ結合、外導体内径 6.5 mm、50 Ω、type TNC。市販名 TNC は、バヨネットの BNC、IEC 169-8 から導かれた、と書く）: https://webstore.ansi.org/preview-pages/IEC/preview_iec60169-17%7Bed1.0%7Db.img.pdf
- IEC 61169-26:2013 の公開プレビュー（TNCA、50 Ω、ねじ結合、動作周波数の限度は 18 GHz まで。11 GHz を超える用途に勧める。ソケット中心の誘電体が基準面を超えないとき、IEC 60169-17 と IEC 60169-26 の TNC と適合する。適合させても性能は保証されない。重なる PTFE は使わない、と注。ピン中心の図は 7/16-28UNEF-2B、ソケット中心の図は 7/16-28UNEF-2A。適用範囲は一般を grade 2、標準試験を grade 0。寸法の見出し 3.1 は Grade 1 と読める。Table 1 の d は 1.32–1.37 mm。Grade 0 の Table 4 の d は 1.34–1.37 mm。図面は転載していない）: https://cdn.standards.iteh.ai/samples/18737/a619306920b04ab58dfc93a9b48e81cf/IEC-61169-26-2013.pdf
- Rosenberger、TNC 50 Ω / 75 Ω（BNC の特性と界面寸法に基づく。ねじのロックにより、BNC より高い環境負荷で使える、と書く。注は、展開を Threaded Neill Concelman と Thread Navy Connector の二つ書く。このページはそのどちらも採らない。50 Ω は最大 10 GHz、最適 4 GHz。75 Ω は最大 4 GHz、最適 1.5 GHz。界面は IEC 60169-17、MIL-PRF-39012、DIN EN 122200。標準化された寸法では完全な 75 Ω は実現できない。嵌合 500 回以上）: https://www.rosenberger.com/product/tnc-50-o-75-o/
- Rosenberger、RPC-TNC の製品案内（ねじロック、18 GHz まで。BNC 系列の界面に基づき、標準の TNC、50 Ω と 75 Ω の両方と相互嵌合する。インピーダンス 50 Ω。界面は IEC 61169-26。リターンロスは DC–18 GHz で 23 dB より大きい。嵌合 500 回以上。空気誘電体と PPE/PTFE のビーズ）: https://www.rosenberger.com/product/rpc-tnc/
- Rosenberger、RPC-TNC 技術資料 06-000-000_TD（プラグの F は 7/16-28 UNEF-2B、ジャックは 7/16-28 UNEF-2A。界面は IEC 61169-26。50 Ω、DC–18 GHz。推奨トルク 0.46–0.69 N·m、結合の試験トルク 1.70 N·m。振動は MIL-STD-202 Method 204 Condition D。衝撃は Method 213 Condition I。規格の混在は周波数の適合に問題が出うる。メスの誘電体が基準面を超えると、外導体が接触しないことがある、と注。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-TNC/06-000-000_TD.pdf
- Amphenol RF、TNC（ねじ。vibration resistance。50 Ω と 75 Ω。標準と逆極性。DC–11 GHz、拡張は DC–18 GHz。特徴の文は 11 GHz まで、ケーブルに依存。電気の表は 50 Ω、VSWR は DC–11 GHz で最大 1.3。振動は MIL-STD-202 Method 204 Test Condition B。衝撃は Method 213 Test Condition G。嵌合トルク 4–6 inch-pounds（0.51–0.67 N·m）。界面は MIL-STD-348。IP67 は選べる。ケーブルの例に RG-58、RG-142、RG-316。典型値で、すべてには当てはまらない、と注）: https://www.amphenolrf.com/en-us/products/rf-connectors/tnc-connectors/
- Amphenol RF、RP-TNC（逆極性の界面は標準の TNC と嵌合しない。逆極性のオスはメス型の接触子。50 Ω、DC–11 GHz、拡張は DC–18 GHz。ねじ。嵌合トルク 4–6 inch-pounds（0.51–0.67 N·m）。振動は Method 204 Test Condition B）: https://www.amphenolrf.com/rf-connectors/rp-tnc-connectors.html
- Amphenol RF、BNC（バヨネット。50 Ω と 75 Ω。標準は DC–4 GHz、拡張は DC–12 GHz。50 Ω の VSWR は DC–4 GHz で最大 1.3。75 Ω は DC–4 GHz で最大 1.5。12G 製品は別の行。振動は Method 204 Test Condition D。衝撃は Method 213 Test Condition G。結合は Bayonet。界面は MIL-STD-348。FAQ は、標準をおよそ 4 GHz、放送向けの精密な 75 Ω を 12 GHz まで、と書く。典型値で、すべてには当てはまらない、と注）: https://www.amphenolrf.com/en-us/products/rf-connectors/bnc-connectors/
- Amphenol、BNC カタログ（二本のスタッド、約四分の一回転。低い反射は 4 GHz まで、動作は 11 GHz まで。振動は MIL-STD-202 method 204、test cond. D）: https://media.digikey.com/pdf/Data%20Sheets/Amphenol%20PDFs/BNC_Catalog.pdf
- Amphenol RF カタログ（結合の欄は、TNC が 7/16-28、BNC が bayonet。概要は、航空機とミサイルで極端な振動が要因となる用途向けに開発された、と書く。TNC の節は、50 Ω、DC–11 GHz、屋外と極端な振動。ねじの界面は、振動の強い用途で結合が外れないため、と書く）: https://amphenol.com.ar/wp-content/uploads/2020/11/Amphenol-RF-1.pdf
- Rosenberger、BNC 50 Ω / 75 Ω（50 Ω は最大 10 GHz、最適 4 GHz。75 Ω は最大 4 GHz、最適 1 GHz）: https://www.rosenberger.com/product/bnc-50-o-75-o/
- Connex、TNC カタログ（ねじ結合。50 Ω は 0–11 GHz、VSWR 最大 1.3。75 Ω は 0–1 GHz、VSWR は 1.05 + 0.1×f(GHz)。標準化された嵌合面では完全な 75 Ω は実現できない。1 GHz まではずれが実用上小さい。typical の SWR は 1 GHz で 1.15:1。50 Ω と 75 Ω は相互に嵌合する。プラグの D は 1.32–1.37 mm。アスタリスクの注は、中心コンタクト 0.053 インチ、true 75 Ω。逆極性は RP、逆ねじは RT。図面は転載していない）: https://www.farnell.com/datasheets/1681611.pdf
- MIL-STD-202 Method 204D（1980年4月1日。Condition B は 15 g peak、およそ 10 Hz から 2,000 Hz、0.06 インチの両振幅か 15 g か小さい方。Condition D は 20 g peak、およそ 10 Hz から 2,000 Hz、0.06 インチの両振幅か 20 g か小さい方）: https://q-tech.com/wp-content/uploads/STD-202-204.pdf
- Rosenberger、RPC-TNC トルクレンチ 06W021-000（二面幅 15 mm。ねじの呼び径の換算ではない）: https://products.rosenberger.com/_ocassets/db/06W021-000_DB.pdf
- IEC 61169-8:2007（Webstore。題は 50 Ω の BNC。ピンの d は 1.32–1.37 mm。読みの詳細は、このサイトの BNC の 50 Ω と 75 Ω のページ）: https://webstore.iec.ch/en/publication/4753
- IEC 61169-16:2006 の公開サンプル（N 型。75 Ω を強く非推奨とし、50 Ω との誤結合は 75 Ω 側を壊しうる、と書く。TNC の文ではない）: https://cdn.standards.iteh.ai/samples/14184/32579e2bab614211b18c43b800c39e77/IEC-61169-16-2006.pdf
