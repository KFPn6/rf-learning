---
layout: default
title: コネクタの使用周波数の上限
description: 同軸の TEM と TE11 のカットオフの概算、主要コネクタの使用周波数の早見、ケーブルとアダプタと嵌合で定格の上限まで使えないことがある点を、公開資料の範囲で整理します。
permalink: /learn/frequency-limit/
---

{% include learn-nav.html %}

# コネクタの使用周波数の上限

コネクタと同軸ケーブルの「何 GHz まで」が、何で頭打ちになるかを、一ページにまとめます。基本の TEM モード、次に現れる TE11 のカットオフの概算、主要系列の資料が書く上限、定格の数字をそのまま使えない場合です。公開資料の式と、データシートの行から組み立てた学習用の読み方であり、個別の製品が保証する値ではありません。条件と、使う周波数の行は、各メーカーのデータシートが定めます。

短い定義は [用語集の遮断周波数]({{ '/glossary/' | relative_url }}#cutoff) です。系列の結合と用途は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。径と比誘電率の式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。反射の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }})、減衰の dB は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) です。工具の早見は [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。帯域名との対応は [規格・周波数]({{ '/spectrum/' | relative_url }}) です。

## 基本のモードと、次のモード

同軸がふだん運ぶのは、TEM モードです。電界と磁界が、進む方向に対して横を向く形です。このモードには、中空の導波管のような遮断がありません。直流から伝わります。

周波数が上がると、TE11 という次のモードも伝われるようになります。Microwaves101 は、これを最初の高次モードと呼び、遮断より上では損失と VSWR を乱し、TEM とは速さが違うので干渉する、と書いています。曲がりの小さな乱れで励振されうる、とも書いています。遮断より下では、まっすぐな区間を進むうちに速やかに消える、とも書いています。一つのモードだけに保つには、この遮断より下にいます。

高い周波数で性能を保つために、径の小さいケーブルが要る、という説明も同じページにあります。精密な空気誘電体の系列が、3.5 mm、2.92 mm、2.4 mm、1.85 mm、1 mm と小さくなってきた背景として、そのページは書いています。名前の経緯は [第14話]({{ '/manga/14-renihan-35mm/' | relative_url }})、[第11話]({{ '/manga/11-oldfield-k/' | relative_url }})、[第15話]({{ '/manga/15-botka-24mm/' | relative_url }}) です。会話はフィクション演出で、発明者とは断定しません。

Keysight の技術概要は、コネクタの周波数範囲が、同軸構造の中で最初の円形導波モードが励振されることで限られる、と書いています。外部導体の径を小さくすると、使える上限は上がります。空気の部分を誘電体で満たすと、上限は下がり、損失は増えます。損失の dB そのものの読み方は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) です。カットオフより下でも、減衰は周波数とともに増えます。カットオフの内側であることが、損失が小さいことにはなりません。

## カットオフの概算

目安は、誘電体の中ほどを回る円周が、その誘電体の中での波長と等しくなる周波数です。Microwaves101 は、平均の円周が、内径と外径の平均に π を掛けた値だ、と書いています。この置き方は、数値で解く超越方程式の近似です。正確な根は、ベッセル関数の境界条件を解く側にあります。その式は、このページには写しません。

記号は、[特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) と揃えます。

- d は内導体の外径です。
- D は外部導体の内径です。外被の外径ではありません。
- εr は、内外のあいだの比誘電率です。発泡では、充実材料の公称値をそのまま入れません。
- 比透磁率は 1 とします。

中ほどの直径は (D + d) / 2 です。円周は、その直径に π を掛けた長さです。誘電体の中での遮断波長の概算は、次です。

λc ≈ π (D + d) / 2

真空中の光速を c とすると、周波数は次です。

fc = c / (λc √εr) = 2c / (π (D + d) √εr)

D と d の単位は、c と揃えます。メートルと、299792458 m/s です。Steer は、単一モードになるように上限と寸法を選ぶ、と書き、外導体の半径が上限を大きく左右する、とも書いています。b が a の数倍ある、というその説明の向きです。

例は、Microwaves101 が空気線路で解として置く寸法です。D = 5 mm、d = 1 mm、εr = 1。D + d = 6 mm = 0.006 m です。c を λc で割ると 31.808967728 GHz で、小数第 2 位へ四捨五入すると 31.81 GHz です。同じページが書く 31.81 GHz と揃います。この 31.81 は、その計算例との突き合わせです。ある製品の測定値ではありません。

同じ寸法へ、Steer がテフロン充填の典型として置く εr = 2.1 を入れます。√2.1 = 1.44913767 です。31.808967728 / 1.44913767 = 21.95027311 GHz で、小数第 2 位へ四捨五入すると 21.95 GHz です。比誘電率が高いほど、同じ寸法の遮断は低い側へ動きます。2.1 は、その本が典型として置く値です。すべての PTFE の比誘電率ではありません。速度係数 69.5% からの逆算は、この 2.1 には読み替えません。

<figure class="assembly">
  <svg viewBox="0 0 680 200" role="img" aria-labelledby="coaxTitle coaxDesc">
    <title id="coaxTitle">外導体内径 5 mm、内導体外径 1 mm の比を描いた断面</title>
    <desc id="coaxDesc">外側の円の直径と内側の円の直径の比は 5 対 1 です。製品の寸法図ではなく、本文の例の比です。</desc>
    <circle cx="150" cy="96" r="70" fill="none" stroke="#1f4d45" stroke-width="8"></circle>
    <circle cx="150" cy="96" r="14" fill="#c9843d"></circle>
    <line x1="150" y1="26" x2="150" y2="166" stroke="#5e584e" stroke-width="1" stroke-dasharray="3 3"></line>
    <text x="168" y="100" fill="#1c1915" font-size="13" font-family="sans-serif">d = 1 mm</text>
    <text x="228" y="40" fill="#1c1915" font-size="13" font-family="sans-serif">D = 5 mm</text>
    <text x="470" y="88" fill="#1c1915" font-size="14" font-family="sans-serif">空気なら 31.81 GHz</text>
    <text x="470" y="112" fill="#1c1915" font-size="14" font-family="sans-serif">εr = 2.1 なら 21.95 GHz</text>
  </svg>
  <figcaption>
    <p>外側の円の半径は 70、内側は 14 です。5 mm と 1 mm の比を、1 mm あたり 28 として描いています。製品の断面図ではありません。</p>
  </figcaption>
</figure>

<figure class="assembly">
  <svg viewBox="0 0 680 168" role="img" aria-labelledby="cutTitle cutDesc">
    <title id="cutTitle">同じ寸法で、空気と比誘電率 2.1 のカットオフを比べた図</title>
    <desc id="cutDesc">D が 5 mm、d が 1 mm のとき、空気は 31.81 GHz、比誘電率 2.1 は 21.95 GHz です。本文の割り算から描いています。</desc>
    <text x="118" y="52" text-anchor="end" fill="#1c1915" font-size="14" font-family="sans-serif">空気</text>
    <rect x="130" y="34" width="381.7" height="28" fill="#1f4d45"></rect>
    <text x="522" y="53" fill="#1c1915" font-size="13" font-family="sans-serif">31.81 GHz</text>
    <text x="118" y="112" text-anchor="end" fill="#1c1915" font-size="14" font-family="sans-serif">εr 2.1</text>
    <rect x="130" y="94" width="263.4" height="28" fill="#c9843d"></rect>
    <text x="404" y="113" fill="#1c1915" font-size="13" font-family="sans-serif">21.95 GHz</text>
    <text x="340" y="152" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">1 GHz を幅 12 として積んでいます。D = 5 mm、d = 1 mm</text>
  </svg>
  <figcaption>
    <p>31.81 × 12 = 381.7、21.95 × 12 = 263.4 です。棒の長さは、本文の二つの周波数の比です。データシートのグラフではありません。</p>
  </figcaption>
</figure>

## 50 Ω の空気線路に、呼びの径を入れた概算

Keysight の嵌合の表は、表の先頭側の系列が空気誘電体で、1.85 mm のような名前が空気誘電体の径で決まる、と書いています。この節では、その読み方で、呼びのミリメートルを外部導体の内径 D に置きます。コネクタの界面図面から測った値ではありません。

50 Ω、空気のときの D/d は、[特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) が置くおよそ 2.30 です。e^(50/60) を小数第 2 位へ四捨五入した値です。d = D / 2.30 とし、fc は丸める前の d から計算します。

一つだけ、式を通します。D = 3.5 mm = 0.0035 m のとき、d = 0.0035 / 2.30 = 0.001521739 m です。D + d = 0.005021739 m です。c を λc で割ると 38.00552 GHz で、小数第 1 位へ四捨五入すると 38.0 GHz です。

<div class="table-scroll" markdown="1">

| 呼びを D と置いた値 | d = D/2.30 | 概算の fc |
| --- | --- | --- |
| 7.00 mm | 3.043 mm | 19.0 GHz |
| 3.50 mm | 1.522 mm | 38.0 GHz |
| 2.92 mm | 1.270 mm | 45.6 GHz |
| 2.40 mm | 1.043 mm | 55.4 GHz |
| 1.85 mm | 0.804 mm | 71.9 GHz |
| 1.00 mm | 0.435 mm | 133.0 GHz |

</div>

d の列は、D/2.30 を 0.001 mm 単位で四捨五入した表示です。fc は、丸める前の d から計算し、0.1 GHz 単位で四捨五入しています。ビーズも、接触のスロットも、公差も無い、まっすぐな空気線路の概算です。コネクタの定格そのものではありません。

支持のビーズは誘電体です。その付近の遮断は、空気の区間より低い側になります。Rosenberger の RPC-1.85 は、空気誘電体で、PEEK のビーズ、と書いています。定格が、上の概算より低い側に置かれる理由の一つです。

3.5 mm の行の 38.0 GHz と、次の節の DC–26.5 GHz は、別の数字です。Pino は、3.5 mm の定格を 26.5 GHz、理論上の上限を 34 GHz、と書いています。34 は 38.0 より低いです。理想化した直線の概算を、その記事の理論上の上限としては読みません。

径を大きくすると、導体の損失は下がりやすい、と Microwaves101 は書いています。同じページは、7 mm の空気線路が 19 GHz より上で二つのモードを伝える、とも書いています。上の表の 7.00 mm の 19.0 GHz は、その文と同じ側です。Keysight の技術概要が APC-7（7 mm）に書く動作は、18 GHz までです。IEEE 287-2007 の販売ページが掲げる附属書 D の題も、7 mm、DC から 18 GHz です。19.0 を、そのコネクタの定格には読みません。損失を下げるために太くすることと、一つのモードに保つために細くすることは、反対の向きです。使う周波数の行で、両方を見ます。

## 資料が書く上限の早見

次の表は、公開資料が書く使用周波数の例です。同じ系列でも、資料が複数の数字を置きます。一つのセルに並べた数字を、平均して一つの上限にはしません。確認できなかった数字は、この表に置いていません。

<div class="table-scroll" markdown="1">

| 系列 | 資料が書く例 | 嵌合の組 |
| --- | --- | --- |
| BNC（50 Ω） | 低い反射は 4 GHz まで、動作は 11 GHz まで、と書くカタログがある。別資料は最適を DC–4 GHz、最大を 10 GHz | バヨネット。下のねじの組とは別 |
| TNC | 標準は DC–11 GHz。拡張と、精密の RPC-TNC は DC–18 GHz | BNC の接触をねじにしたもの |
| N（50 Ω） | 標準は DC–11 GHz。拡張と精密は DC–18 GHz。IEC の grade 2 はおよそ 12 GHz まで、反射の目安は 11 GHz まで。grade 1 の一部と grade 0 は 18 GHz まで | 75 Ω の N とは混ぜない |
| SMA | シリーズ資料と IEC 61169-15 は 18 GHz まで。別の嵌合表は 24 GHz まで | 3.5 mm、2.92 mm |
| 3.5 mm | RPC-3.50 は DC–26.5 GHz。技術概要は 33 GHz まで。嵌合表は 34 GHz まで。記事は定格 26.5 GHz、理論上の上限 34 GHz | SMA、2.92 mm |
| 2.92 mm（K） | DC–40 GHz。一部の製品は 43.5 GHz | SMA、3.5 mm。帯域名の K とは別 |
| 2.4 mm | DC–50 GHz | 1.85 mm。SMA 側へはアダプタ |
| 1.85 mm（V） | RPC-1.85 は DC–70 GHz。2025 年の V の案内は 70 GHz まで。2003 年のキットは、保証が 60 GHz まで、使用が 65 GHz まで。IEEE 287-2007 の附属書題は DC–65 GHz | 2.4 mm |
| 1.0 mm | 嵌合表は 110 GHz まで。嵌合先は、その系列だけ | 上の二つの組とは別 |

</div>

BNC の 4 GHz は、カタログが低い反射として書く範囲です。上の TE11 の概算を、BNC の寸法へ入れた値ではありません。このページは、BNC の外導体内径を確認していないので、その概算は置きません。4 と 10 と 11 も、一つの上限にはまとめません。

SMA の 18 GHz は、Rosenberger のシリーズ資料と、IEC 61169-15:2021 の適用範囲です。24 GHz は、Keysight の嵌合表の行です。技術概要は、24 GHz まで使えるほかのコネクタに比べ、多くの SMA の反射が大きい、と書いています。24 GHz まで使える、と 18 GHz まで、を一つの文にはしません。SMA は PTFE の誘電体であることが多く、3.5 mm 以降の精密系列は空気誘電体です。名前の移り変わりは [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。

3.5 mm の 26.5、33、34 は、それぞれ RPC-3.50、Keysight の技術概要、同じ社の嵌合表、および Pino の記事の数字です。IEEE 287-2007 の販売ページが掲げる附属書 F の題は、3.5 mm、DC から 33 GHz です。Pino の 34 GHz は、定格ではなく理論上の上限として書かれた行です。定格の 26.5 と、同じ欄には置きません。経緯は [第14話]({{ '/manga/14-renihan-35mm/' | relative_url }}) です。

2.92 mm の 40 GHz は、Rosenberger、Amphenol RF、Keysight の技術概要が揃えて書く側です。IEEE 287-2007 の附属書 G の題も、2.92 mm、DC から 40 GHz です。43.5 GHz は、Rosenberger が一部の製品に書く行と、Anritsu の Extended-K の資料です。すべての 2.92 mm の定格ではありません。帯域名の K とは別です。経緯は [第11話]({{ '/manga/11-oldfield-k/' | relative_url }}) です。

2.4 mm の 50 GHz は、Rosenberger の RPC-2.40 と、Keysight の技術概要です。IEEE 287-2007 の附属書 H の題も、2.4 mm、DC から 50 GHz です。経緯は [第15話]({{ '/manga/15-botka-24mm/' | relative_url }}) です。

1.85 mm は、一つの数字に揃いません。Rosenberger の RPC-1.85 と、Anritsu の 2025 年 4 月印刷の案内（11410-02930、Rev. A）は、70 GHz までと書いています。Anritsu の 2003 年 8 月印刷のキット資料（10300-00020、Revision D）は、V コネクタの保証を 60 GHz まで、使用を 65 GHz まで、と書いています。IEEE 287-2007 の販売ページが掲げる附属書 I の題は、1.85 mm、DC から 65 GHz です。規格の本文は未見です。70 を、2003 年のキットの保証には読みません。60 を、2025 年の案内の上限には読みません。V は、Anritsu が 1.85 mm に付ける呼びです。帯域名の V とは、[規格・周波数]({{ '/spectrum/' | relative_url }}) で分けて読んでください。

1.0 mm の 110 GHz は、Keysight の嵌合表の行です。IEEE 287-2007 の販売ページは、適用範囲を 110 GHz までとし、市販の 1 mm の定格の上限が 110 GHz である、として範囲を 65 GHz から広げた、と書いています。附属書 J の題は、1 mm、DC から 110 GHz です。上の理想化した空気線路の 133.0 GHz は、別の計算です。110 を 133 には読み替えません。

N と TNC の 11 GHz と 18 GHz は、標準と、拡張または精密の分かれです。IEC 61169-16 の grade の 11、12、18 も、一つの上限にはしません。IEEE 287-2007 の販売ページが掲げる附属書 E の題は、精密の N 型、DC から 18 GHz です。75 Ω の N を 50 Ω と嵌合すると、75 Ω 側を壊しうる、と IEC 61169-16 は書いています。オームの式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。

## 定格の上限まで、そのまま使えるとは限らない

系列の欄に 40 GHz とあっても、組み上がった一本が 40 GHz まで仕様を満たすとは限りません。見る行は、少なくとも三つです。ケーブルの使用周波数、アダプタ自身の行、嵌合した相手の低い側です。

### ケーブル側

Times Microwave Systems の整理表では、M17/28-RG58 の掃引範囲は 0.05–1 GHz です。N 型の精密側が 18 GHz までと書いてあっても、このケーブルの掲載範囲を 18 GHz には読みません。呼びの詳細は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) です。

HUBER+SUHNER の SUCOFORM 141 Cu は、使用周波数の上限を 33 GHz と書いています。端の系列を、SMA のシリーズ資料が書く 18 GHz にすると、コネクタ側の数字の方が低いです。端を 2.92 mm の 40 GHz にすると、ケーブル側の 33 GHz の方が低いです。これは、別々の公開仕様を並べた読み方です。その組み合わせを測った値でも、保証値でもありません。

Rosenberger の RPC-1.85 ストレートプラグ 08S141-270L5 は、周波数を DC–70 GHz と書き、使用するケーブルの種類によって制限がありうる、と注記しています。適合ケーブルの行は、RTK 047 と UT 047 です。70 GHz を、別のケーブルへ写しません。部品番号の 141 を、0.141 インチのケーブルの指定としては読みません。

減衰が予算に入るかは、カットオフとは別の計算です。手順は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) です。

### アダプタ

アダプタは、両側の系列のうち高い方まで使える部品ではありません。アダプタ自身の周波数の行を見ます。Keysight の技術概要は、2.4 mm が SMA、3.5 mm、2.92 mm と嵌合するのは、精密アダプタを介して、と書いています。ねじが直接合う話とは別です。計測器のポートを守る短いアダプタの位置づけは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。

### 嵌合の二つの組

機械的に差さる組み合わせは、二つに分かれます。

一つ目は、SMA、3.5 mm、2.92 mm です。IEC 61169-15:2021 は、SMA が 3.5 mm および 2.92 mm と機械的に嵌合しうる、と書いています。Keysight の嵌合表も、この三つを同じ組に置きます。嵌合したあとの上限は、低い側の定格を超えて伸びません。Pino は、良い品質の SMA と 3.5 mm の嵌合で、18 GHz まで悪い電気的結果は予期しない、と書いています。3.5 mm の 26.5 GHz が、SMA を嵌合したあともそのまま残る、とは読みません。寸法の甘い SMA のピンが、空気誘電体の精密側を傷めうる話は [深掘り]({{ '/learn/master/' | relative_url }}) です。

二つ目は、2.4 mm と 1.85 mm です。Rosenberger の RPC-2.40 は、1.85 mm および V と機械的に嵌合する、と書いています。RPC-1.85 は、RPC-2.40 と機械的に互換、と技術資料に書いています。Anritsu の 2003 年のキット資料も、V が 2.4 mm と機械的および電気的に互換、と書いています。この組と、SMA の組は、直接は合いません。力で回して入れません。Rosenberger の 2.92 mm と 2.4 mm のアダプタ資料は、2.92 mm 側の互換先を 3.5 mm と SMA、2.4 mm 側の互換先を 1.85 mm と分けて書いています。

<figure class="assembly">
  <svg viewBox="0 0 680 150" role="img" aria-labelledby="mateTitle mateDesc">
    <title id="mateTitle">機械的に嵌合しうる二つの組と、あいだのアダプタ</title>
    <desc id="mateDesc">左は SMA、3.5 mm、2.92 mm。右は 2.4 mm と 1.85 mm。あいだは破線で、アダプタと書いています。製品の嵌合図ではありません。</desc>
    <rect x="36" y="28" width="250" height="78" rx="10" fill="#1f4d45"></rect>
    <rect x="394" y="28" width="250" height="78" rx="10" fill="#c9843d"></rect>
    <text x="161" y="62" text-anchor="middle" fill="#f4efe6" font-size="15" font-family="sans-serif">SMA・3.5 mm・2.92 mm</text>
    <text x="161" y="86" text-anchor="middle" fill="#f4efe6" font-size="13" font-family="sans-serif">ねじが直接合う組</text>
    <text x="519" y="62" text-anchor="middle" fill="#1c1915" font-size="15" font-family="sans-serif">2.4 mm・1.85 mm</text>
    <text x="519" y="86" text-anchor="middle" fill="#1c1915" font-size="13" font-family="sans-serif">別の組</text>
    <line x1="286" y1="67" x2="394" y2="67" stroke="#5e584e" stroke-width="2" stroke-dasharray="5 4"></line>
    <text x="340" y="54" text-anchor="middle" fill="#5e584e" font-size="13" font-family="sans-serif">アダプタ</text>
    <text x="340" y="132" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">1.0 mm は、この二つの組のどちらにも入りません</text>
  </svg>
  <figcaption>
    <p>枠は、本文で確認した嵌合の組を分けただけです。寸法図でも、互換の保証図でもありません。左の組の中でも、定格の周波数は系列ごとに違います。</p>
  </figcaption>
</figure>

50 Ω と 75 Ω も、形が近くても別の指定です。N 型の注意は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) にあります。

## 仕様の欄の読み方

見る順番は、次です。

- 系列のカタログの幅と、その製品の行と、ケーブルの行と、アダプタの行を分けます。一番低い行が、その一本の入口です。
- 同じ系列の 18 と 24、26.5 と 33 と 34、40 と 43.5、60 と 65 と 70 は、資料の違いとして残します。平均しません。
- 定格は、理想化した TE11 の概算より低い側にあることが多いです。概算を、保証の上限にはしません。
- 機械的に差さることと、その周波数まで仕様を満たすことは別です。
- カットオフより下でも、挿入損失は長さと周波数で増えます。反射が小さくても、別の予算です。
- 位相が動きにくいかは、さらに別の指定です。読み方は [同軸ケーブルの位相安定性]({{ '/learn/phase-stability/' | relative_url }}) です。
- 測る範囲が、その一本の上限の外だと、反射の読みに別のモードが混ざります。測定の置き場所は [検査と測定]({{ '/learn/assembly-testing/' | relative_url }}) です。

成績表の周波数範囲は、その一本を、指定の端のコネクタとケーブルで見た値を参照してください。このページの概算は、カタログの「何 GHz まで」が寸法と誘電体から来る、という入口です。

## 出典

モード、概算、系列の数字、嵌合は、次の公開資料で確認しました。31.81 GHz、21.95 GHz、38.0 GHz、表の fc は、本文に書いた式からの計算です。資料のグラフ、表、図面の転載はしていません。上の図は、このページで描いたものです。規格本文の有償版は、適用範囲と、ここへ転記した箇条の範囲で参照しています。IEEE 287-2007 の本文は未見で、販売ページが掲げる附属書題の範囲です。

- Microwaves101、“Coax cutoff frequency”（TEM は直流から伝わる。最初の高次モードは TE11。遮断より上では損失と VSWR を乱し、速さが違う。乱れで励振され、遮断より下ではまっすぐな区間で消える。中ほどの円周が波長に等しくなる、という近似。平均の円周は、内外の径の平均に π を掛けた値。超越方程式の近似である、と書く。D = 5 mm、d = 1 mm、空気で 31.81 GHz。7 mm の空気線路は 19 GHz より上で二つのモード。径を大きくすると導体損失は下がる。精密系列が小さくなってきた背景。式の図は転載していない）: https://www.microwaves101.com/encyclopedias/coax-cutoff-frequency
- Michael Steer、Microwave and RF Design II、2.9 節（LibreTexts 版。単一モードになるように上限と寸法を選ぶ。外導体の半径が上限を大きく左右する。テフロン充填の典型として εr = 2.1。印刷された遮断波長の式は、半径の定義と円周の説明が因子 2 で揃わないため、このページの λc には採用していない）: https://eng.libretexts.org/Bookshelves/Electrical\_Engineering/Electronics/Microwave\_and\_RF\_Design\_II\_-\_Transmission\_Lines\_(Steer)/02:\_Transmission\_Lines/2.09:\_Coaxial\_Line
- Keysight、“Coaxial Connectors”、文書 5992-0118（最初の円形導波モードで周波数範囲が限られる。外部導体を細くすると上限が上がり、誘電体で満たすと上限が下がり損失が増える。APC-7 は 18 GHz。3.5 mm は 33 GHz まで。2.92 mm は 40 GHz まで、SMA および 3.5 mm と嵌合。2.4 mm は 50 GHz まで。SMA、3.5 mm、2.92 mm とは精密アダプタ経由。多くの SMA は、24 GHz まで使えるほかのコネクタより反射が大きい、と書く）: https://www.keysight.com/us/en/assets/7018-04561/technical-overviews/5992-0118.pdf
- Keysight、ナレッジセンタ “What RF Connectors are Mateable?”（2022-08-29 更新。1.0 mm は 110 GHz まで、嵌合先は 1.0 mm。1.85 mm は 70 GHz まで、2.4 mm と嵌合。2.4 mm は 50 GHz まで、1.85 mm と嵌合。2.92 mm は 40 GHz まで、3.5 mm と SMA。3.5 mm は 34 GHz まで、2.92 mm と SMA。SMA は 24 GHz まで、PTFE、2.92 mm と 3.5 mm。名前は空気誘電体の径。表の先頭側は空気誘電体）: https://docs.keysight.com/kkbopen/what-rf-connectors-are-mateable-749648236.html
- Paul Pino、“Intermateability of SMA, 3.5 mm and 2.92 mm Connectors,” Microwave Journal, 2007-03-14（3.5 mm の定格 26.5 GHz、理論上の上限 34 GHz。良い品質の SMA と 3.5 mm の嵌合で、18 GHz まで悪い電気的結果は予期しない、と書く。図は転載していない）: https://www.microwavejournal.com/articles/4457-intermateability-of-sma-3-5-mm-and-2-92-mm-connectors
- Rosenberger、SMA シリーズ技術資料（DC–18 GHz）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- IEC 61169-15:2021 の公開プレビュー（SMA、18 GHz、3.5 mm と 2.92 mm との機械的な嵌合）: https://www.en-standard.eu/publicdoc/iec_previews/1032466.pdf
- Amphenol RF、N-Type（標準 DC–11 GHz、拡張 DC–18 GHz）: https://www.amphenolrf.com/en-us/products/rf-connectors/n-type-connectors/
- IEC 61169-16:2006 の公開サンプル（grade と 11 / 12 / 18 GHz。75 Ω の N への注意）: https://cdn.standards.iteh.ai/samples/14184/32579e2bab614211b18c43b800c39e77/IEC-61169-16-2006.pdf
- Rosenberger、RPC-N 50 Ω 技術資料（DC–18 GHz）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-N_50_75/05-000-000_TD.pdf
- Rosenberger、BNC 50 Ω / 75 Ω（50 Ω の最適 DC–4 GHz、最大 10 GHz）: https://www.rosenberger.com/product/bnc-50-o-75-o/
- Amphenol、BNC カタログ（低い反射は 4 GHz まで、動作は 11 GHz まで）: https://media.digikey.com/pdf/Data%20Sheets/Amphenol%20PDFs/BNC_Catalog.pdf
- Amphenol RF、TNC（標準 DC–11 GHz、拡張 DC–18 GHz）: https://www.amphenolrf.com/en-us/products/rf-connectors/tnc-connectors/
- Rosenberger、RPC-TNC 技術資料（DC–18 GHz）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-TNC/06-000-000_TD.pdf
- Rosenberger、RPC-3.50（DC–26.5 GHz、空気誘電体、SMA と 2.92 mm と嵌合）: https://www.rosenberger.com/product/rpc-350/
- Rosenberger、RPC-2.92（DC–40 GHz、一部 43.5 GHz、SMA と 3.5 mm と嵌合）: https://www.rosenberger.com/product/rpc-292/
- Amphenol RF、2.92 mm（DC–40 GHz）: https://www.amphenolrf.com/en-us/products/rf-connectors/2-92-mm-connectors/
- Anritsu、Extended-K（43.5 GHz）: https://dl.cdn-anritsu.com/en-us/test-measurement/files/Brochures-Datasheets-Catalogs/datasheet/11410-01192B.pdf
- Rosenberger、RPC-2.40（DC–50 GHz、1.85 mm および V と嵌合）: https://www.rosenberger.com/product/rpc-240/
- Rosenberger、RPC-2.92 / RPC-2.40 アダプタ 02S109-K0BS3（2.92 mm 側の互換先と、2.4 mm 側の互換先を分ける）: https://products.rosenberger.com/_ocassets/db/02S109-K0BS3.pdf
- Rosenberger、RPC-1.85（50 Ω、外導体径 1.85 mm、DC–70 GHz、空気誘電体と PEEK のビーズ、1.85 mm、V、RPC-2.40 と嵌合。製品ページの界面は IEC 60169-32）: https://www.rosenberger.com/product/rpc-185/
- Rosenberger、RPC-1.85 技術資料 08-000-000_TD（DC–70 GHz。界面は IEC 61169-32。RPC-2.40 と機械的に互換。番号の世代は、このページでは決めない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-1.85/08-000-000_TD.pdf
- Rosenberger、08S141-270L5（RPC-1.85 ストレートプラグ。DC–70 GHz。使用するケーブルによる制限がありうる、と注記。適合ケーブルは RTK 047 と UT 047。承認日の記載は 2024-03-25）: https://products.rosenberger.com/_ocassets/db/08S141-270L5.pdf
- Anritsu、V コネクタの案内 11410-02930、Rev. A（2025-04 印刷。一覧の改訂日の記載は 20241028。V は 1.85 mm で、70 GHz まで動作する、と書く）: https://dl.cdn-anritsu.com/en-us/test-measurement/files/Brochures-Datasheets-Catalogs/Leaflet/11410-02930A.pdf
- Anritsu、Model 01-301 の説明 10300-00020、Revision D（2003-08 印刷。V は 2.4 mm と機械的および電気的に互換。保証は 60 GHz まで、使用は 65 GHz まで、と書く）: https://dl.cdn-anritsu.com/en-us/test-measurement/files/Manuals/Instruction-Sheet/10300-00020.pdf
- IEEE 287-2007 の販売ページが掲げる適用範囲と附属書題（精密同軸、110 GHz まで。附属書 D は 7 mm、DC–18 GHz。E は N 型、DC–18 GHz。F は 3.5 mm、DC–33 GHz。G は 2.92 mm、DC–40 GHz。H は 2.4 mm、DC–50 GHz。I は 1.85 mm、DC–65 GHz。J は 1 mm、DC–110 GHz。本文と図面は未見）: https://store.accuristech.com/standards/ieee-287-2007?product_id=1744987
- Times Microwave Systems、M17/MIL-C-17 同軸ケーブル整理表（M17/28-RG58 の掃引範囲は 0.05–1 GHz）: https://hallaweb.jlab.org/tech/Detectors/public_html/manuals/data_sheets-manuals/S-T/T/times_microwave_systems/M17TABLE.PDF
- HUBER+SUHNER、SUCOFORM_141_CU_LSFH-01 データシート（使用周波数の上限は 33 GHz）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTYzODQsInR5cGUiOiJhc3NldCJ9/oY2lirjkWRT8u-dB/H%2BS_SUCOFORM_141_CU_LSFH-01_EN.PDF
