---
layout: default
title: ツールと数値の早見
description: 高周波アッセンブリで使うトルクレンチ、ピン深さゲージ、VNA、ストリップ工具、かしめ工具と、嵌合トルク、確認できた二面幅、VSWR とリターンロスの対応です。
permalink: /learn/quick-reference/
---

{% include learn-nav.html %}

# ツールと数値の早見

高周波コネクタと同軸ケーブルのアッセンブリを見るときに、名前の出やすい工具と、公開資料で幅を確認できた数字の早見です。作業手順の社内標準ではありません。嵌合トルクも二面幅も、材質とグレードと相手ポートで変わります。ここに無い系列は、空欄のままにしてあります。実際の値は、各メーカーの仕様が定めます。

系列ごとの周波数と、トルクの出典の読み分けは [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。ケーブル側の損失は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }})、特性インピーダンスの式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。

## 工具

### トルクレンチ

ねじ結合の系列は、手の感覚ではなくトルクレンチで締めます。Keysight のコネクタケアは、ナットだけを回し、本体は回さず、レンチが折れ始める点で止める、と書いています。締め不足は接触の不安定や PIM、締めすぎは界面の変形になります。設定が違うレンチを、開口が同じだからといって代用しません。精密系列の目安と、資料のあいだの差、清掃とピン深さは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。

### ピン深さゲージ

中心導体が、相手の合わせ面に対して引っ込みすぎているか、突き出しすぎているかを見るダイヤルゲージです。Keysight は、ピン深さを合わせ面（基準面）から中心導体の端、または段付きピンの肩までの距離、と定義しています。突き出しは相手を傷つけます。使う前、電気の様子がおかしいとき、使い方により 100 回の嵌合ごと、が同資料の目安です。

ゼロは、そのゲージのマスタで取ります。N 型は、中心導体の合わせ面がコネクタの基準面からずれているので、マスタもその分を織り込んでいる、と同資料は書いています。校正キット付属のゲージは、損傷を避けるための粗い確認です。ピン深さの許容は、そのコネクタの仕様を見ます。この早見に、ピン深さのミリメートルは置きません。

### ベクトルネットワークアナライザ（VNA）

入射波と反射波、透過波の大きさと位相を測り、S パラメータにします。反射は VSWR やリターンロス、透過は挿入損失として読みます。Keysight の解説は、ネットワーク解析を、部品が信号の振幅と位相に与える影響を測ること、としています。導通があることと、高周波で反射が小さいことは別です。

校正で置く基準面は、ポートと標準器の合わせ面です。ケーブルを動かしたあとの位相は、ケーブルの種類によって変わります。試験用ケーブルの話は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) の位相安定の節です。

### ストリップ工具

ケーブルの外被、外部導体、誘電体を、コネクタが指定する長さにむく工具です。長さはコネクタごとに違うので、この早見には書きません。組立図が定めます。むきの前後を、切断から検査までの流れのどこに置くかは [アッセンブリの構造と製作工程]({{ '/learn/assembly-basics/' | relative_url }}) です。

工具の名前の例は、Times Microwave Systems の LMR-400 のデータシートです。CST-400 は、かしめとクランプの両方に使う前処理工具、ST-400C-2 は EZ-400-NMC-2 用、と書かれています。ほかのケーブルのむき寸法には使いません。

### かしめ工具

外部導体やフェルールを、指定のダイスで塑性変形させて止める工具です。ダイスの対辺は、コネクタとケーブルの組み合わせで決まります。系列の名前だけでは決まりません。

同じ LMR-400 の工具表では、かしめ工具 CT-400/300 と、六角ダイス Y1719（.429 インチ）が組です。この .429 インチを、SMA 一般のダイス寸法としては読みません。

受入の規格として図面が IPC/WHMA-A-620 を指定することがあります。同軸の章がある、という案内までが公開情報です。規格本文は有償なので、ここへ手順は転記しません。

## 嵌合トルク

<div class="table-scroll" markdown="1">

| 系列 | 嵌合トルク | 読み方 |
| --- | --- | --- |
| SMA、ステンレス鋼または CuBe | 0.8–1.1 N·m | Rosenberger のシリーズ資料。レンチ設定の例は 0.90 N·m |
| SMA、真鍮（CuZn） | 0.5 N·m | 同じ資料。ステンレス用のレンチを真鍮に使わない |
| N | 各メーカーの仕様 | 一つの幅にまとめない。下の例を参照 |
| TNC | 0.46–0.69 N·m | Rosenberger の精密 RPC-TNC。別資料は 0.51–0.67 N·m |
| 7/16（7-16） | 25–30 N·m | Rosenberger。試験トルクの上限 35 N·m は、推奨の嵌合トルクではない |

</div>

SMA の 0.90 N·m は、Cinch がステンレス向けに書く 8 inch-pounds です。同じ資料は真鍮を 5 inch-pounds（0.57 N·m）とし、IEEE P287 を参照しています。Rosenberger の真鍮は 0.5 N·m で、Cinch の 0.57 N·m と完全には一致しません。真鍮側は、0.5 N·m から 0.57 N·m の資料がある、と覚え、使う製品の仕様を見ます。

Keysight は、SMA 用トルクレンチ 8710-1582 を 56 N·cm（5 inch-pounds、0.56 N·m）、3.5 mm 用 8710-1765 を 90 N·cm（8 inch-pounds、0.90 N·m）としています。開口はどちらも 5/16 インチです。開口が同じでも、設定トルクは別の工具です。SMA のオスを 3.5 mm のメスへ締めるときは SMA 用、3.5 mm のオスを SMA のメスへ締めるときは 3.5 mm 用、と同社は書いています。

N 型は、資料が一つに揃いません。Rosenberger の RPC-N は 0.70–1.10 N·m、N と 7-16 のアダプタの N 側は 0.7–1.1 N·m です。Amphenol RF の標準 N は 8–12 inch-pounds と書き、同じ表に N·m を併記していません。インチポンドを、この早見で N·m に換算して推奨値にはしません。

TNC の 0.46–0.69 N·m は RPC-TNC です。Amphenol RF の標準 TNC は 4–6 inch-pounds（0.51–0.67 N·m）です。0.7–1.1 N·m は N 型の資料の幅であり、TNC の推奨ではありません。

7/16 の 25–30 N·m は、屋外などで使う系列の推奨です。計測器のポートに、このトルクをかけない工具があります。レンチの節に分けて書いてあります。

## レンチの二面幅

確認できたのは、次の工具データシートに書かれた開口だけです。その系列のすべてのナットがこの寸法、とは読みません。

<div class="table-scroll" markdown="1">

| 工具 | 二面幅 | 設定トルク | 対象としてシートが書くもの |
| --- | --- | --- | --- |
| Rosenberger 32W100-016 | 8 mm | 0.90 N·m（90 N·cm） | SMA。真鍮の 0.5 N·m 用ではない |
| Keysight 8710-1582 | 5/16 インチ | 0.56 N·m（56 N·cm） | SMA |
| Keysight 8710-1765 | 5/16 インチ | 0.90 N·m（90 N·cm） | 3.5 mm。SMA 用レンチとは設定が違う |
| Rosenberger 06W021-000 | 15 mm | 0.55 N·m ± 0.05 N·m | RPC-TNC。推奨幅 0.46–0.69 の中の設定 |
| Rosenberger 53W009-000 | 20 mm | 1.10 N·m ± 0.05 N·m | RPC-N。標準 N の唯一の開口ではない |
| Rosenberger 53W011-000 | 13、14、15、16 mm | トルク設定の記載なし | RPC-N のコンビレンチ。開口は複数 |
| Rosenberger 60W000-002 | 32 mm | 220 inch-pounds（シートは 25 N/m と併記） | 7-16。推奨 25–30 N·m の下限側 |
| Rosenberger 60W000-003 | 32 mm | 2.26 N·m ± 0.2 N·m | 7-16 の、VNA と校正キット向け。屋外・大電力・低 PIM には使わない |

</div>

5/16 インチは 7.9375 mm です。8 mm と呼ぶ SMA 用レンチと、呼びの上では同じ開口の族です。設定トルクは、上の表のとおり工具ごとに違います。

7-16 の 60W000-002 について、220 inch-pounds は 1 inch-pound = 0.112984829 N·m として約 24.9 N·m です。シートの「25 N/m」は、この換算と系列の 25–30 N·m に合う数字です。力のモーメントの単位は、通常 N·m と書きます。同じ 32 mm の 60W000-003 は 2.26 N·m で、シートは、通常の 7-16 の高いトルクは VNA のテストポートを壊しうる、屋外の恒久接続や大電力や低 PIM にはこの低い設定を使わない、と書いています。開口が同じ二本を、取り違えないでください。

標準の N と、TNC のすべてについて、一つの二面幅には固定できません。RPC-N だけでも、トルクレンチの 20 mm と、コンビレンチの 13–16 mm が同じメーカーの資料にあります。

## VSWR とリターンロス

反射係数の絶対値を Γ とします。資料によっては ρ や |S11| と書きます。Keysight は、リターンロスを RL = −20 log ρ、定在波比を SWR = (1+ρ)/(1−ρ) と書いています。ここでの log は、デシベルの定義に合わせて 10 を底にします。

向きを逆にすると、次です。

Γ = (VSWR − 1) / (VSWR + 1)

リターンロス（dB）= −20 log10(Γ)

VSWR が 1 のとき Γ は 0 で、リターンロスは無限大に相当します。表には入れていません。Γ は小数第 4 位、リターンロスは小数第 2 位で、四捨五入しています。計算の元は上の式だけです。

<div class="table-scroll" markdown="1">

| VSWR | Γ | リターンロス（dB） |
| --- | --- | --- |
| 1.05 | 0.0244 | 32.26 |
| 1.10 | 0.0476 | 26.44 |
| 1.15 | 0.0698 | 23.13 |
| 1.20 | 0.0909 | 20.83 |
| 1.25 | 0.1111 | 19.08 |
| 1.30 | 0.1304 | 17.69 |
| 1.50 | 0.2000 | 13.98 |
| 1.75 | 0.2727 | 11.29 |
| 2.00 | 0.3333 | 9.54 |
| 2.50 | 0.4286 | 7.36 |
| 3.00 | 0.5000 | 6.02 |

</div>

リターンロスは、数字が大きいほど反射が小さいです。VSWR 1.50 は 13.98 dB なので、用語集の「およそ 14 dB」と揃います。成績表の欄が、リターンロスを正の dB で書いているか、S11 を負の dB で書いているかは、その欄名で確認します。式の意味、反射電力の割合、挿入損失との切り分けは [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。重なる行の絶対値とリターンロスは、同じ丸めです。

この表は、一つの周波数での反射の読み替えです。ケーブルの長さによる挿入損失とは別の数字です。円の上で反射の大きさと位相を見る入口は [第12話]({{ '/manga/12-smith-chart/' | relative_url }}) です。会話はフィクション演出です。この表の Γ は絶対値です。

## 出典

トルク、二面幅、工具の役割、式は、次の公開資料で確認しました。インチポンドから N·m への換算係数は、ポンド力とインチの SI 定義によるものです。VSWR の表は、Keysight が書いている関係式から計算しました。

- Rosenberger、SMA シリーズ技術資料（ステンレスまたは CuBe で 0.8–1.1 N·m、CuZn で 0.5 N·m）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- Cinch、トルクレンチ資料（ステンレス 0.90 N·m、真鍮 0.57 N·m、IEEE P287）: https://media.digikey.com/pdf/Data%20Sheets/Cinch%20PDFs/141-0000-9xx_Ds.pdf
- Keysight、SMA 用と 3.5 mm 用のトルクレンチは別（8710-1582 は 56 N·cm、8710-1765 は 90 N·cm、開口はいずれも 5/16 インチ）: https://docs.keysight.com/kkbopen/is-an-sma-torque-wrench-equivalent-to-a-3-5-mm-torque-wrench-589746928.html
- Rosenberger、SMA 用トルクレンチ 32W100-016（metric size 8、90 N·cm）: https://products.rosenberger.com/_ocassets/db/32w100-016_DB.pdf
- Amphenol RF、N-Type（8–12 inch-pounds）: https://www.amphenolrf.com/en-us/products/rf-connectors/n-type-connectors/
- Rosenberger、RPC-N 50 Ω 技術資料（推奨トルク 0.70–1.10 N·m）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-N_50_75/05-000-000_TD.pdf
- Rosenberger、N–7-16 アダプタ 53S160-SIMN1（N 側 0.7–1.1 N·m、7-16 側 25–30 N·m）: https://products.rosenberger.com/_ocassets/db/53S160-SIMN1.pdf
- Amphenol RF、TNC（0.51–0.67 N·m）: https://www.amphenolrf.com/en-us/products/rf-connectors/tnc-connectors/
- Rosenberger、RPC-TNC 技術資料（推奨トルク 0.46–0.69 N·m）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-TNC/06-000-000_TD.pdf
- Rosenberger、7-16 シリーズ技術資料（推奨 25–30 N·m、試験の上限 35 N·m）: https://rin.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/7-16/60-000-000_TD_01.pdf
- Rosenberger、RPC-TNC トルクレンチ 06W021-000（二面幅 15 mm、0.55 N·m）: https://products.rosenberger.com/_ocassets/db/06W021-000_DB.pdf
- Rosenberger、RPC-N トルクレンチ 53W009-000（二面幅 20 mm、1.10 N·m）: https://products.rosenberger.com/_ocassets/db/53W009-000_DB.pdf
- Rosenberger、RPC-N コンビレンチ 53W011-000（二面幅 13、14、15、16 mm）: https://products.rosenberger.com/_ocassets/db/53W011-000_DB.pdf
- Rosenberger、7-16 トルクレンチ 60W000-002（二面幅 32 mm、220 inch-pounds）: https://products.rosenberger.com/_ocassets/db/60W000-002_DB.pdf
- Rosenberger、7-16 トルクレンチ 60W000-003（二面幅 32 mm、2.26 N·m。VNA 向けである旨）: https://products.rosenberger.com/_ocassets/db/60W000-003_DB.pdf
- Keysight、Connector Care（トルクレンチ、ピン深さゲージ、合わせ面）: https://helpfiles.keysight.com/csg/e5080a/tutorials/connector_care.htm
- Keysight、E5061B の解説（RL = −20 log ρ、SWR = (1+ρ)/(1−ρ)）: https://helpfiles.keysight.com/csg/e5061b/measurement_with_options/option_010_time_domain_fault_location_analysis/fault_location_analysis/theory.htm
- Keysight、ベクトルネットワーク解析の基礎（振幅と位相）: https://www.keysight.com/us/en/assets/7018-06841/application-notes/5989-4840.pdf
- Times Microwave Systems、LMR-400 データシートの工具表（CST-400、CT-400/300、Y1719 の .429 インチ）: https://timesmicrowave.com/wp-content/uploads/2022/06/lmr-400-datasheet-1.pdf
- IPC（A-620 の案内。本文は有償）: https://www.ipc.org/
