---
layout: default
title: "RG-174・RG-316・RG-58の違いと選び方"
description: "RG-174、RG-316、RG-58の違いを、外径、減衰量、耐熱、誘電体と外被で整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-11
permalink: /learn/rg-174-316-58/
---

{% include learn-nav.html %}

# RG-174・RG-316・RG-58の違いと選び方

RG-174、RG-316、RG-58 は、いずれも柔軟な 50 Ω の同軸として名前が出ます。外被の太さ、1 GHz の減衰、温度の行は、三つで揃いません。細い二本は外径が近く、太い RG-58 とは別の寸法です。このページは、その読み分けと、選ぶときに見る順番です。

数字は、公開のデータシートと整理表から取った学習用の概数です。個別の製品が保証する値ではありません。同じ呼びでも、部品番号で外径と温度が分かれます。資料が違う行を、平均して一つの仕様にはしません。

呼びを広く並べた一覧は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) です。セミリジッドと LMR-400 は、そちらにあります。LMR-200、LMR-240、LMR-400 の三本は [LMR-200・LMR-240・LMR-400]({{ '/learn/lmr-200-240-400/' | relative_url }}) です。dB を長さへ掛ける手順は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }})、係数を入れて概算する電卓は [電卓]({{ '/learn/calculator/#cable' | relative_url }}) です。径と比誘電率の式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。ケーブルの呼びだけで端の系列は決まりません。N 型と SMA の例は [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。掃引の行を、コネクタの 18 GHz へ伸ばさない読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 項目 | RG-174 | RG-316 | RG-58 |
| --- | --- | --- | --- |
| このページが読んだ MIL の行 | Times の整理表の M17/119-RG174。掃引、0.05–1 GHz | 同じ表の M17/113-RG316。掃引、0.05–3 GHz。Times の選択表にも構造の行がある | 同じ整理表の M17/28-RG58。掃引、0.05–1 GHz |
| インピーダンス | 整理表も HUBER+SUHNER の RG_174_/U も 50 ±2 Ω。Belden 8216 は公称 50 Ω | 整理表も HUBER の RG_316_/U も 50 ±2 Ω。Belden 84316 は公称 50 Ω | 整理表も HUBER の RG_58_C/U も Alpha 9058C も 50 ±2 Ω。Belden 8262 は公称 50 Ω |
| 誘電体と外被 | 充実ポリエチレンと PVC。速度係数は、整理表も HUBER も Belden 8216 も 66% | PTFE と FEP。速度係数は、整理表が 69.5%、HUBER が 69%、Belden 84316 が 70% | 充実ポリエチレンと PVC。速度係数は、整理表も HUBER も Belden 8262 も Alpha 9058C も 66% |
| 外被の外径 | 整理表は 0.110 インチ（2.79 mm）。Belden 8216 の公称も 0.110 インチ（2.79 mm）。HUBER は 2.55 ±0.13 mm | 整理表は 0.098 インチ（2.49 mm）。Belden 84316 の公称は 0.098 インチ（2.5 mm）。HUBER は 2.5 ±0.1 mm | 整理表は 0.195 インチ（4.95 mm）。Belden 8262 の公称も 0.195 インチ（4.95 mm）。HUBER は 4.95 ±0.15 mm。Alpha 9058C は 0.195 ±0.004 インチ |
| 温度の行 | 整理表は −40 °C から +85 °C。HUBER の動作は −25 °C から 85 °C。Belden 8216 の動作は −30 °C から +75 °C で、UL の欄は 60 °C | 整理表は −55 °C から +200 °C。HUBER の動作は −65 °C から 200 °C。Belden 84316 の動作は −70 °C から +200 °C | 整理表は −40 °C から +85 °C。HUBER の動作は −25 °C から 85 °C。Belden 8262 の動作は −40 °C から +85 °C。Alpha 9058C は −20 °C から 60 °C |
| 1 GHz の減衰 | HUBER の公称 0.922 dB/m。Belden 8216 の公称 34.0 dB/100 ft | HUBER の公称 0.870 dB/m。Belden 84316 の公称 29.0 dB/100 ft。Times の選択表は 26 dB/100 ft。Harbour は typical 26.3、最大 38.0 dB/100 ft | HUBER の公称 0.583 dB/m。Belden 8262 の公称 21.5 dB/100 ft。Alpha 9058C の最大は 28 dB/100 ft |

</div>

2.79 mm と 2.55 mm、69.5% と 69% と 70%、75 °C と 85 °C と 200 °C、0.922 dB/m と 34.0 dB/100 ft を、一つの仕様にはしません。図面は転載していません。

## 外径

Times Microwave Systems の M17 整理表では、外被の外径が、M17/119-RG174 は 0.110 インチ（2.79 mm）、M17/113-RG316 は 0.098 インチ（2.49 mm）、M17/28-RG58 は 0.195 インチ（4.95 mm）です。インチのまま割ると、0.195 / 0.110 = 1.772727、0.195 / 0.098 = 1.989796、0.110 / 0.098 = 1.122449 です。小数第 2 位へ四捨五入すると、1.77 倍、1.99 倍、1.12 倍です。RG-58 の外被は、この表の RG-174 の 1.77 倍、RG-316 の 1.99 倍です。RG-174 と RG-316 は 1.12 倍で、外から見ると近い寸法です。

<figure class="assembly">
  <svg viewBox="0 0 720 230" role="img" aria-labelledby="odTitle odDesc">
    <title id="odTitle">外被の外径の比。左から 2.79 mm、2.49 mm、4.95 mm</title>
    <desc id="odDesc">三つの円は、Times の整理表が外被として置く 2.79 mm、2.49 mm、4.95 mm の比です。概念図で、製品の断面写真でも寸法図でもありません。</desc>
    <circle cx="130" cy="96" r="42.3" fill="#e6d7bf" stroke="#1f4d45" stroke-width="8"></circle>
    <circle cx="130" cy="96" r="6" fill="#c9843d"></circle>
    <text x="130" y="172" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">RG-174</text>
    <text x="130" y="192" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">2.79 mm</text>
    <circle cx="330" cy="96" r="37.7" fill="#e6d7bf" stroke="#1f4d45" stroke-width="8"></circle>
    <circle cx="330" cy="96" r="6" fill="#c9843d"></circle>
    <text x="330" y="172" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">RG-316</text>
    <text x="330" y="192" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">2.49 mm</text>
    <circle cx="560" cy="96" r="75" fill="#e6d7bf" stroke="#1f4d45" stroke-width="8"></circle>
    <circle cx="560" cy="96" r="10" fill="#c9843d"></circle>
    <text x="560" y="192" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">RG-58</text>
    <text x="560" y="212" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">4.95 mm</text>
  </svg>
  <figcaption>
    <p>円の直径の比だけを、整理表の外被 2.79 mm、2.49 mm、4.95 mm にしています。中心の点は、導体の径の比ではありません。HUBER+SUHNER の RG-174 は 2.55 mm で、この円には入っていません。</p>
  </figcaption>
</figure>

HUBER+SUHNER の RG_174_/U は、外被を 2.55 ±0.13 mm と書きます。題の外径も ø2.55 mm です。同じシートの MIL 参照は M17/196-00001（以前の参照は M17/119-RG174）です。Times の整理表で、M17/196-00001 の外被は 0.110 インチ（2.79 mm）のままです。参照先の外径と、その製品の 2.55 mm は、別の数字です。RG_316_/U は 2.5 ±0.1 mm、RG_58_C/U は 4.95 ±0.15 mm です。HUBER の外被だけで割ると、4.95 / 2.55 = 1.941176 で、小数第 2 位では 1.94 です。整理表の 1.77 を、この 2.55 mm の製品へは使いません。

Belden の公称外径は、8216（RG-174）が 0.110 インチ（2.79 mm）、84316（RG-316）が 0.098 インチ（2.5 mm）、8262（RG-58）が 0.195 インチ（4.95 mm）です。2.5 mm は、整理表の 2.49 mm と同じ文字ではありません。Alpha の 9058C（MIL-C-17/28B RG 58C/U）は、直径 0.195 ±0.004 インチです。

中心導体も、太さの族で分かれます。整理表では、RG-174 が銅被覆鋼の 7/.0063 インチ（0.48 mm）、RG-316 が銀めっき銅被覆鋼の 7/.0067 インチ（0.51 mm）、RG-58 がすずめっき銅の 19/.0072 インチ（0.90 mm）です。HUBER は、RG-174 を銅めっき鋼の 7 本よりで径の欄 0.48 mm、RG-316 を銀めっきを含む銅被覆鋼の 7 本よりで 0.54 mm、RG-58 をすずめっき銅の 19 本よりで 0.9 mm と書きます。0.51 mm と 0.54 mm は、一つの素線の束にはしません。

曲げの半径も、言葉が資料で違います。HUBER の静的な最小は、RG-174 と RG-316 が 15 mm 以上、RG-58 が 25 mm 以上です。繰り返しは 26 mm、25 mm、50 mm です。Belden の設置時の最小は、8216 が 1.1 インチ（28 mm）、84316 が 1 インチ（25 mm）、8262 が 2 インチ（51 mm）です。15 mm の静的と、28 mm の設置を、一つの半径にはしません。

## 減衰

比べるときは、同じ資料の、同じ周波数の行だけを使います。単位の換算は、1 ft = 0.3048 m なので 100 ft = 30.48 m です。dB/m は、dB/100 ft を 30.48 で割り、小数第 3 位へ四捨五入した値です。この換算を、別のメーカーの測定値にはしません。

HUBER+SUHNER の三枚は、いずれも海面、周囲 25 °C の公称減衰です。1.00 GHz は、RG_174_/U が 0.922 dB/m（0.281 dB/ft）、RG_316_/U が 0.870 dB/m（0.265 dB/ft）、RG_58_C/U が 0.583 dB/m（0.178 dB/ft）です。式は a×√f + b×f で、f は GHz、結果は dB/m です。1 GHz では、0.888 + 0.034 = 0.922、0.7727 + 0.0972 = 0.8699、0.3455 + 0.2373 = 0.5828 です。0.8699 と 0.5828 を小数第 3 位へ四捨五入すると、表の 0.870 と 0.583 です。

この三枚だけで割ると、0.922 / 0.583 = 1.581475、0.870 / 0.583 = 1.492281、0.922 / 0.870 = 1.059770 です。小数第 2 位では、1.58 倍、1.49 倍、1.06 倍です。同じシートの 1 GHz では、RG-58 が小さい側で、RG-174 と RG-316 の差は 1.06 倍です。1.06 を、すべてのメーカーの比にはしません。

同じ公称を 2 m に掛けます。残る電力の比は 10^(−L/10) で、比は小数第 4 位、百分率は小数第 2 位です。手順の置き場所は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) です。

<div class="table-scroll" markdown="1">

| ケーブル | 1 GHz の公称 | 2 m の減衰 | 残る電力の比 | 百分率 |
| --- | --- | --- | --- | --- |
| RG_58_C/U | 0.583 dB/m | 1.166 dB | 0.7645 | 76.45% |
| RG_316_/U | 0.870 dB/m | 1.740 dB | 0.6699 | 66.99% |
| RG_174_/U | 0.922 dB/m | 1.844 dB | 0.6540 | 65.40% |

</div>

この表は、HUBER の 1.00 GHz、海面、周囲 25 °C、整合を仮定したケーブル単体です。両端のコネクタは入っていません。2 m では、細い二本の残りが 66.99% と 65.40% で近く、RG-58 は 76.45% です。174 と 316 のどちらにするかを、この 2 m の差だけでは決めません。

Belden の公称は、1000 MHz で、8216 が 34.0 dB/100 ft、84316 が 29.0 dB/100 ft、8262 が 21.5 dB/100 ft です。30.48 で割ると、1.115 dB/m、0.951 dB/m、0.705 dB/m です。三つの公称だけで割ると、34.0 / 21.5 = 1.581395、29.0 / 21.5 = 1.348837、34.0 / 29.0 = 1.172414 です。小数第 2 位では、1.58 倍、1.35 倍、1.17 倍です。順序は HUBER と同じで、58 が小さく、316、174 の順に大きいです。174 と 316 の比は 1.17 で、HUBER の 1.06 とは違います。1.115 と 0.922 の割り算は、メーカーをまたぐので置きません。

8262 の軍事規格の欄は、商用、非 QPL、参照は M17/155-00001 です。Times の整理表は、M17/155-00001 を掃引しない M17/28-RG58 とし、400 MHz 未満で使う、と注記します。8262 の減衰表は、700 MHz、900 MHz、1000 MHz の公称を載せます。21.5 dB/100 ft は、その商用シートの公称です。掃引する M17/28 の典型値でも、Alpha の最大でもありません。

Times の選択表（カタログ）に、この三本が揃ってはいません。載っているのは M17/RG-316 で、1,000 MHz の減衰は 26 dB/100 ft です。同じ表の係数は k1 = 0.787、k2 = 0.00120 で、式は k1×√(F_MHz) + k2×F_MHz、結果は dB/100 ft です。1,000 MHz では 0.787×√1000 + 1.2 = 26.087125 で、小数第 1 位では 26.1 です。周波数の欄が印刷しているのは 26 です。26.1 を、欄の数字としては置きません。30.48 で割った 0.853 dB/m も、HUBER の 0.870 とは別です。

Harbour Industries の MIL-DTL-17 整理は、M17/113-RG316 の 1 GHz を typical 26.3、最大 38.0 dB/100 ft とします。最大は仕様が参照する値、typical はそれよりかなり低い、と同資料は書いています。このページは、slant sheet の本文は読んでいません。26、26.1、26.3、29.0 dB/100 ft、0.870 dB/m を、RG-316 の一つの 1 GHz にはしません。

Alpha の 9058C は、減衰の最大を 1 GHz で 28 dB/100 ft、400 MHz で 17、100 MHz で 5.8、50 MHz で 4 と書きます。電気特性の見出しは、技術検討用、です。28 は最大の行です。Belden 8262 の 21.5 は公称の行です。種類が違うので、21.5 と 28 の割り算はしません。30.48 で割った 0.919 dB/m は、この最大の単位換算です。

RG-174 の仕様上の最大は、このページでは置いていません。上に出したのは、HUBER と Belden の公称です。

## 耐熱と、周波数の行

温度は、動作、設置、UL の欄で分かれます。PTFE と FEP の RG-316 は、確認した三つの資料で、上限の側が 200 °C です。下限は、整理表が −55 °C、HUBER が −65 °C、Belden 84316 が −70 °C です。−55 と −65 と −70 を、一つの下限にはしません。

ポリエチレンと PVC の RG-174 と RG-58 を、同じ温度の組にはしません。整理表は、M17/119-RG174 も M17/28-RG58 も −40 °C から +85 °C です。華氏の欄は、どちらも −40 °F から +185 °F で、括弧の摂氏と対です。HUBER の動作は、RG-174 も RG-58 も −25 °C から 85 °C です。設置は、RG-174、RG-316、RG-58 の三枚とも −20 °C から 60 °C です。動作の 85 °C や 200 °C を、設置の上限には読みません。

Belden 8216 の動作は −30 °C から +75 °C で、UL の温度欄は 60 °C（AWM 1354）です。同じシートの電圧も、UL が 30 V、電圧定格の欄が 1100 V です。30 V を同軸の定格へ、1100 V を UL の欄へ、入れ替えません。8262 の動作は −40 °C から +85 °C、電圧定格は 1400 V です。Alpha 9058C が印刷している温度は −20 °C から 60 °C で、整理表の −40 °C から +85 °C とは端が違います。

周波数の行も、掃引する部品と、掃引しない部品で分かれます。整理表の掃引する行は、M17/119-RG174 と M17/28-RG58 が 0.05–1 GHz、M17/113-RG316 が 0.05–3 GHz です。掃引しない側は、M17/173-00001 が M17/119-RG174、M17/172-00001 が M17/113-RG316、M17/155-00001 が M17/28-RG58 で、注はいずれも 400 MHz 未満です。HUBER の使用周波数は、RG-174 と RG-58 が 1 GHz 以下、RG-316 が 3 GHz 以下です。Belden の減衰表は、8216 と 8262 が 1000 MHz まで、84316 が 3000 MHz までです。84316 の参照は、非 QPL の M17/113-RG316 です。

1 GHz の行を、3 GHz まで使える、とは読みません。コネクタの資料が 18 GHz までと書いてあっても、ケーブルの掲載範囲は伸びません。読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。

## 選び方

見る順番は、次です。

- 図面の呼びに、部品番号を足します。RG-174 の外被は、整理表と Belden 8216 では 2.79 mm、HUBER の RG_174_/U では 2.55 ±0.13 mm です。同じ呼びのまま、ダイスと通し穴を流用しません。
- 通る太さは、上の外径です。整理表の外被では、RG-58 が RG-174 の 1.77 倍、RG-316 の 1.99 倍です。RG-174 と RG-316 は 1.12 倍で、外から見ると近いです。HUBER の 2.55 mm を使うときは、倍率は 1.94 です。
- 温度で 200 °C の行が要るときは、確認した範囲では RG-316 の PTFE と FEP の側です。75 °C、85 °C、60 °C、UL の 60 °C は、RG-174 と RG-58 の資料が置く別々の上限です。設置の −20 °C から 60 °C は、動作の上限とは別欄です。
- 1 GHz を超える行をケーブル側に求めるときは、RG-316 の 3 GHz の行です。RG-174 と RG-58 の掃引する行は 1 GHz までです。掃引しない部品番号の注は 400 MHz 未満です。端のコネクタがそれより低いときは、低い方です。
- 減衰は、同じ資料の同じ周波数です。1 GHz では、HUBER の公称も Belden の公称も、RG-58 が小さい側、次が RG-316、RG-174 が大きい側です。RG-174 と RG-316 の比は、HUBER で 1.06、Belden で 1.17 です。細い二本の選択を、この比だけでは決めません。長さへの掛け算は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }})、HUBER の係数を入れた概算は [電卓]({{ '/learn/calculator/#cable' | relative_url }}) です。
- 中心は、RG-174 と RG-316 が銅被覆鋼、RG-58 がすずめっき銅です。Belden の導体の直流抵抗は、8216 が 97 Ω/1000 ft、8262 が 10.8 Ω/1000 ft です。97 / 10.8 = 8.981481 で、小数第 2 位では 8.98 です。同じ二枚の 1000 MHz の公称減衰の比は 1.58 です。直流の比を、1 GHz の減衰の比には使いません。圧着のダイスは、そのコネクタのケーブルグループです。
- 同じ条件で三本の電力が並んだのは、HUBER の 1 GHz の CW です。条件は海面、周囲 40 °C で、RG-174 が 37 W、RG-58 が 105 W、RG-316 が 135 W です。Times の選択表は RG-316 だけで、1,000 MHz の最大が 173 W です。条件は海面、周囲 +40 °C、VSWR 1:1 です。135 W と 173 W を、一つの電力にはしません。
- 編組の被覆率は、HUBER が 87%、95%、96%、Belden が 90%、95%、95% です。この百分率を、遮蔽の dB には読みません。dB の向きは [同軸ケーブルのシールド]({{ '/learn/shielding/' | relative_url }}) です。

アッセンブリとしての温度は、ケーブル、コネクタ、ブーツの重なる範囲です。置き場所は [アッセンブリの構造と製作工程]({{ '/learn/assembly-basics/' | relative_url }}) です。

## 関連するページ

- セミリジッド、LMR-400、RG-142 を含む一覧は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) です。LMR-200、LMR-240、LMR-400 の読み分けは [LMR-200・LMR-240・LMR-400]({{ '/learn/lmr-200-240-400/' | relative_url }}) です。dB/m の手順は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }})、係数の電卓は [電卓]({{ '/learn/calculator/#cable' | relative_url }}) です。
- 径と比誘電率は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }})、掃引の行とコネクタの上限は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- 端の系列の例は [N型とSMA]({{ '/learn/n-sma/' | relative_url }})、BNC に付く RG-58 は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。
- 遮蔽は [同軸ケーブルのシールド]({{ '/learn/shielding/' | relative_url }})、環境の重なりは [アッセンブリの構造と製作工程]({{ '/learn/assembly-basics/' | relative_url }}) です。

## 出典

外径、減衰、温度、周波数、電力は、次の公開資料で確認しました。倍率、30.48 での割り算、2 m の減衰、残る電力の比、係数を 1 GHz に入れた値は、本文に書いた式からの計算です。資料の表と図面の転載はしていません。上の円は、整理表の外被の比からこのページで描いたものです。規格の slant sheet 本文は、参照していません。

- Times Microwave Systems、M17/MIL-C-17 同軸ケーブル整理表（M17/119-RG174 は外被 0.110 インチ、ポリエチレン、PVC、50 ±2 Ω、速度係数 66%、−40 °C から +85 °C、掃引 0.05–1 GHz。M17/113-RG316 は外被 0.098 インチ、PTFE、FEP、速度係数 69.5%、−55 °C から +200 °C、掃引 0.05–3 GHz。M17/28-RG58 は外被 0.195 インチ、ポリエチレン、PVC、速度係数 66%、−40 °C から +85 °C、掃引 0.05–1 GHz。M17/173-00001、M17/172-00001、M17/155-00001 は 400 MHz 未満。M17/196-00001 の外被も 0.110 インチ）: https://hallaweb.jlab.org/tech/Detectors/public_html/manuals/data_sheets-manuals/S-T/T/times_microwave_systems/M17TABLE.PDF
- Times Microwave Systems、Complete Coaxial Cable Catalog & Handbook（選択する M17 の表。M17/113-RG316 の外被 0.098 インチ、−55 °C から +200 °C、0.05–3 GHz。減衰表の M17/RG-316 は 1,000 MHz で 26 dB/100 ft。k1 = 0.787、k2 = 0.00120。式は k1×√(F_MHz) + k2×F_MHz。電力は 1,000 MHz で 173 W。海面、周囲 +40 °C、VSWR 1:1。RG-174 と RG-58 の行は、この選択表には無い）: https://timesmicrowave.com/wp-content/uploads/2022/06/tl-16-complete-catalog-r.pdf
- HUBER+SUHNER、RG_174_/U データシート（文書 PIM-P977、公開日 2024-08-08。外被 2.55 ±0.13 mm、ポリエチレン、PVC、50 ±2 Ω、速度係数 66%、使用周波数 1 GHz 以下。動作温度 −25 °C から 85 °C、設置 −20 °C から 60 °C。a = 0.888、b = 0.034。1.00 GHz で 0.922 dB/m。1 GHz の CW は 37 W、海面、周囲 40 °C。MIL 参照は M17/196-00001、以前の参照は M17/119-RG174。静的曲げ 15 mm 以上、繰り返し 26 mm。情報であり保証ではない、と書く）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTY0NzIsInR5cGUiOiJhc3NldCJ9/LG12quwLMRpIecqQ/H%2BS_RG_174_U_EN.PDF
- HUBER+SUHNER、RG_316_/U データシート（文書 PIM-P959、公開日 2026-03-12。外被 2.5 ±0.1 mm、PTFE、FEP、50 ±2 Ω、速度係数 69%、使用周波数 3 GHz 以下。動作温度 −65 °C から 200 °C、設置 −20 °C から 60 °C。MIL 参照は M17/113-RG316。a = 0.7727、b = 0.0972。1.00 GHz で 0.870 dB/m。1 GHz の CW は 135 W。中心導体 0.54 mm。静的曲げ 15 mm 以上、繰り返し 25 mm）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTY0NjMsInR5cGUiOiJhc3NldCJ9/KZOV2UhPqfMt4ZH8/H%2BS_RG_316_U_EN.PDF
- HUBER+SUHNER、RG_58_C/U データシート（文書 PIM-P956、公開日 2025-06-13。外被 4.95 ±0.15 mm、ポリエチレン、PVC、50 ±2 Ω、速度係数 66%、使用周波数 1 GHz 以下。動作温度 −25 °C から 85 °C、設置 −20 °C から 60 °C。MIL 参照は M17/183-00001、以前の参照は M17/28-RG058。a = 0.3455、b = 0.2373。1.00 GHz で 0.583 dB/m。1 GHz の CW は 105 W。静的曲げ 25 mm 以上、繰り返し 50 mm）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTY0MTUsInR5cGUiOiJhc3NldCJ9/N1I5nD3cD9uwvHev/H%2BS_RG_58_CU_EN.PDF
- Belden 8216（RG-174。26 AWG の銅被覆鋼、ポリエチレン、すずめっき銅編組 90%、PVC。公称外径 0.110 インチ（2.79 mm）。公称インピーダンス 50 Ω、速度係数 66%。1000 MHz の公称減衰 34.0 dB/100 ft。動作温度 −30 °C から +75 °C。UL 温度 60 °C、UL 電圧 30 V、電圧定格 1100 V。導体の直流抵抗 97 Ω/1000 ft。設置時の最小曲げ 1.1 インチ（28 mm）。改訂日 2026-02-20）: https://catalog.belden.com/techdata/EN/8216_techdata.pdf
- Belden 84316（RG-316。商用、非 QPL、M17/113-RG316。銀めっき銅被覆鋼、PTFE、銀めっき銅編組 95%、FEP。公称外径 0.098 インチ（2.5 mm）。公称インピーダンス 50 Ω、速度係数 70%。1000 MHz の公称減衰 29.0 dB/100 ft。減衰表は 3000 MHz まで。動作温度 −70 °C から +200 °C。設置時の最小曲げ 1 インチ（25 mm）。改訂日 2026-02-20）: https://catalog.belden.com/techdata/EN/84316_techdata.pdf
- Belden 8262（RG-58。商用、非 QPL、M17/155-00001。すずめっき銅、ポリエチレン、すずめっき銅編組 95%、PVC。公称外径 0.195 インチ（4.95 mm）。公称インピーダンス 50 Ω、速度係数 66%。1000 MHz の公称減衰 21.5 dB/100 ft。動作温度 −40 °C から +85 °C。電圧定格 1400 V。導体の直流抵抗 10.8 Ω/1000 ft。設置時の最小曲げ 2 インチ（51 mm）。改訂日 2026-02-20）: https://catalog.belden.com/techdata/EN/8262_techdata.pdf
- Harbour Industries、MIL-DTL-17 同軸の整理（M17/113-RG316 の 1 GHz は typical 26.3、最大 38.0 dB/100 ft。最大は仕様が参照する値、typical はそれより低い、と書く。slant sheet 本文の転載ではない）: https://harbourind.com/assets/files/m17.pdf
- Alpha Wire 9058C（RG-58C/U、MIL-C-17/28B。直径 0.195 ±0.004 インチ、ポリエチレン、50 ±2 Ω、速度係数 66%、温度 −20 °C から 60 °C。減衰の最大は 1 GHz で 28 dB/100 ft。電気特性は技術検討用、と見出しがある）。Lapp Tannehill のカタログ転載: https://www.lapptannehill.com/media/wysiwyg/pdf/catalogs/LappTannehill/Section-13-Coaxial-Cable.pdf
- NIST、“U.S. Survey Foot”（1 foot = 0.3048 meter exactly。このページの 100 ft = 30.48 m は、その 100 倍）: https://www.nist.gov/pml/us-surveyfoot
