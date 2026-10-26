---
layout: default
title: 特性インピーダンス
description: 同軸の特性インピーダンスが内導体の外径、外導体の内径、誘電体の比誘電率で決まることと、50 Ω と 75 Ω の使い分け、混在時の反射を整理します。
permalink: /learn/impedance/
---

{% include learn-nav.html %}

# 特性インピーダンス

同軸ケーブルの特性インピーダンスが、どの寸法とどの材料で決まるか、50 Ω と 75 Ω がなぜ並ぶか、混ぜると何が起きるかを、公開資料の範囲で一ページにまとめます。個別の製品が保証する値ではありません。公差と、使う周波数の行は、各メーカーのデータシートが定めます。

短い定義は [用語集]({{ '/glossary/' | relative_url }}#impedance) です。断面の絵は [入門]({{ '/learn/beginner/' | relative_url }}) です。呼びごとの 50 Ω と損失の概数は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) です。系列が 50 Ω か 75 Ω かは [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。反射係数から VSWR、リターンロスへの読み替えは [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。

## 何を指すか

特性インピーダンスは、一様な線路を十分に長く伸ばしたとき、入ってきた信号から見て線路が持つインピーダンスです。負荷がその値と一致すると、境目で波は戻りません。途中でこの値が変わると、変わった点で一部が戻ります。戻る割合の式は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) に置いてあります。

同軸では、低損失の近似のもとで、この値は単位長さのインダクタンスと静電容量の比の平方根にほぼ等しくなります。Ellingson は、その近似を Z0 ≈ √(L′/C′) と書き、同軸では内導体の半径、外導体の内側の半径、あいだの誘電体の誘電率から直接書ける、としています。周波数そのものは、この近似の式には入りません。損失が大きいとき、または高い周波数で別のモードが立つときは、この実数だけでは読めません。断面が大きいほど、基本のモードで伝えられる周波数の上限は低くなりやすい、という見方は [深掘り]({{ '/learn/master/' | relative_url }}) です。

寸法の比が同じでも、誘電体の比誘電率が高いほど Z0 は下がります。低損失で比透磁率を 1 と置けるとき、位相速度はおよそ光速を、比誘電率の平方根で割った値です。呼びごとの速度係数の表は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) にあります。

## 近似式

記号を、次のように置きます。

- d は内導体の外径です。
- D は外部導体の内径です。外被の外径ではありません。
- εr は、内外の導体のあいだを満たす誘電体の比誘電率です。発泡や、空気と固体が混ざる構造では、実効の比誘電率を使います。充実の材料の公称値を、そのまま入れません。
- 比透磁率は 1 とします。通常の誘電体は、この置き方で扱います。

半径で書いても、比は同じです。出典の a を内導体の半径、b を外部導体の内側の半径とすると、b/a = D/d です。

比透磁率を 1 とした低損失の近似は、次です。ln は自然対数です。

Z0 ≈ (60 / √εr) × ln(D/d)

60 は、自由空間の波動インピーダンスを 120π Ω と置いて 2π で割った値です。120π はおよそ 377 Ω です。Steer は、この置き方のもとで、係数 60 は丸めではない、と書いています。376.73 を 2π で割るとおよそ 59.96 です。数値例は 60 で計算しています。

常用対数に直すと、ln(10) はおよそ 2.302585 なので、60 × ln(10) はおよそ 138.2 です。カタログで見る形は、これを 138 に丸めた次です。Microwaves101 の同軸計算も、138 × log10(D/d) / √εr です。

Z0 ≈ (138 / √εr) × log10(D/d)

二つの式は、係数の丸め以外は同じです。D と d は、比を取るので単位が揃っていれば相殺されます。このページの比の数値例は、60 の式から計算し、CERN の空気線路の比と揃えています。

空気（εr = 1）で 50 Ω にする比は、ln(D/d) = 50/60 なので、D/d = e^(50/60) ≈ 2.30 です。75 Ω では e^(75/60) ≈ 3.49 です。Carter と Cooper は、空気を満たした高電力の同軸について、b/a を 50 Ω で 2.3、75 Ω で 3.49 としています。

比誘電率を 2.25 と置いた充実ポリエチレンで 50 Ω にする比は、ln(D/d) = 50 × √2.25 / 60 = 1.25 なので、D/d ≈ 3.49 です。この例では、空気で 75 Ω にする比と同じです。外被の外径や、編組の実効内径が図面と違うときは、この逆算を製品の Z0 の代わりに使わないでください。

## 50 Ω と 75 Ω

外部導体の内径を固定したとき、小さくしたい量と大きくしたい量で、比の最適は分かれます。出典が置く数字は、次のとおりです。76.7 と 77、比 3.59 と 3.6 の差は、同じ極値をどの桁で書いたかの差です。

<div class="table-scroll" markdown="1">

| 見ている量 | 出典が置く値 |
| --- | --- |
| 空気誘電体で、外部導体の内径を固定したときの導体損失の最小 | 比およそ 3.59 から 3.6、Z0 およそ 76.7 Ω から 77 Ω。Young は外半径を固定して b/a = 3.6、77 Ω。Microwaves101 は外導体の内径を 10 mm とした例でおよそ 77 Ω、D/d およそ 3.5。BBC の WHP 126 は 76.7/√εr |
| ピーク電力の最大（絶縁破壊で制限される側） | 比は √e でおよそ 1.65。空気では Z0 = 30 Ω。一般には 30/√εr。BBC の WHP 126。Microwaves101 の電力の頁も、空気でおよそ 30 Ω |
| 耐電圧の最大 | 比は e でおよそ 2.718。空気では Z0 = 60 Ω。誘電体があると 60/√εr。Microwaves101 |
| 空気の 30 Ω と 77 Ω のあいだ | 算術平均は 53.5 Ω、幾何平均は 48 Ω。Microwaves101 は、空気誘電体の 50 Ω を、耐電力と損失の折り合いとして説明する |
| 充実誘電体で、導体損失が最小になる Z0 | ポリエチレンを εr = 2.25、D/d = 3.6 とするとおよそ 51.2 Ω（Microwaves101）。PTFE を εr = 2.1、比 3.59 とすると 52.9 Ω（Steer） |
| ケーブルの種類としての結論 | 低損失の空気絶縁は 75 Ω、熱可塑性の汎用は 50 Ω。Blackband（1955）の要旨 |

</div>

比 1.65 を 30.0 Ω、比 e を 60.0 Ω と置く特許の読みは [第12話]({{ '/manga/12-smith-chart/' | relative_url }}) です。会話はフィクション演出です。このページの 30 Ω と 60 Ω は、同じ比を損失と耐電力の説明に使うときの数字です。

50 Ω には、出典のある説明が二つ重なります。空気誘電体では、損失最小のおよそ 77 Ω と、ピーク電力最大の 30 Ω のあいだの、丸い基準であることです。充実のポリエチレンや PTFE では、損失が最小になる比の Z0 がおよそ 51 Ω から 53 Ω へ下がり、50 Ω がその近くにあることです。PTFE が広く使われるより前から 50 Ω の基準はあった、とも Microwaves101 は書いています。このページは、空気での折り合いと、充実誘電体での損失最小の近さを、どちらも出典のある説明として並べます。

75 Ω は、空気誘電体の損失最小（およそ 77 Ω）に近い基準として説明されます。電力よりも、長さあたりの減衰を優先する選択です。Blackband の要旨は、低損失の空気絶縁ケーブルには 75 Ω がよい、としています。Carter と Cooper は、高電力用の同軸で、75 Ω を最小減衰のために選んだ側、50 Ω を絶縁破壊と電力容量の折り合いの側、と書いています。

発泡誘電体では、最小の点が動きます。Microwaves101 は、比誘電率 1.43 の例で、損失最小がおよそ 64 Ω へずれる、と書いています。76.7 / √1.43 はおよそ 64 で、このページの計算でも同じです。発泡ケーブルの 75 Ω は、その製品の損失最小の点とは別に、系統として揃えた基準です。最小の付近は広く、Young は、空気誘電体で 77 Ω の前後 6% 程度なら減衰の変化は小さい、としています。中心導体を細くして曲げやすくする、という説明は、Microwaves101 が推測として置いている範囲です。

製品の 50 Ω や 75 Ω は、上の極値そのものではなく、系統として揃えた基準です。[ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) の 50 Ω には、±1 Ω や ±2 Ω の行があります。

## 用途の例

計測器のネットワークアナライザは、基準を 50 Ω に置くことが多いです。Keysight の説明は、システムの Z0 の初期値を 50 Ω とし、ポートの物理的なインピーダンスはおよそ 50 Ω のまま、と書いています。75 Ω の部品を測るときは、表示の基準を 75 Ω に変え、50 Ω から 75 Ω へ合わせる部品と、75 Ω の校正標準を使います。同社のインピーダンス測定の案内は、ケーブルテレビのケーブルは 75 Ω の系で測る、と書いています。

無線で広く見る N 型、SMA、7/16 は 50 Ω です。周波数と嵌合の注意は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) にあります。

受信と、宅内の分配と、ケーブルテレビは 75 Ω であることが多いです。F 型は 75 Ω のねじ結合で、ケーブルテレビや宅内の同軸に使われます。テレビのアンテナ線が同軸である話は [第4話]({{ '/manga/04-tv-coax/' | relative_url }}) です。会話はフィクション演出です。映像のシリアルデジタル（SDI）では、発生器の出力を 1 m の同軸を介して 75 Ω の抵抗負荷で測る、と Texas Instruments のスライドが SMPTE の同軸について書いています。

受信と宅内の 75 Ω とは別に、送信所の大電力フィーダには空気絶縁の 50 Ω が使われます。BBC の WHP 126 は、英国のアナログテレビ送信所の例として、呼び径 6⅛ インチの空気絶縁 50 Ω 同軸を書いています。

## 混ぜたときの不整合

50 Ω と 75 Ω を、実数の一つの境目でつなぐとき、入射側から見た電圧の反射係数は次です。式は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) と同じで、Microwaves101 が Γ = (ZL − Z0) / (ZL + Z0) と書く形です。

&#124;Γ&#124; = &#124;75 − 50&#124; / &#124;75 + 50&#124; = 0.2

向きを逆にしても、絶対値は同じです。VSWR とリターンロスは、同ページの式から次になります。

VSWR = (1 + 0.2) / (1 − 0.2) = 1.50

リターンロス = −20 log10(0.2) = 13.98 dB

電力の比は &#124;Γ&#124; の二乗で、0.04、つまり入射電力の 4% です。同ページの換算表で、VSWR 1.50 の行がこの数字です。換算表そのものは同ページにあります。

この 4% は、理想化した一つの境目で戻る割合です。ケーブルの中で熱になる分は、挿入損失の側です。戻らなかった分が、すべて先の負荷へ届くとは限りません。その区別は同ページにあります。一つの境目の式を、長さのある区間全体の成績表として固定しません。周波数で読む入口は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }})、円の上の点として見る入口は [第12話]({{ '/manga/12-smith-chart/' | relative_url }}) です。

形だけを合わせた変換では、この不整合が測定に残ります。Keysight は、50 Ω の測定器で 75 Ω を測るとき、機械的な変換アダプタでは不整合が校正と測定の確度に影響する、と書いています。反射を抑える一例が、抵抗で合わせる最小損失パッドです。同社の 11852B は、50 Ω と 75 Ω の変換で、挿入損失がおよそ 5.7 dB、周波数は DC から 3 GHz、と案内されています。反射が減る代わりに、先へ届く信号はパッドの分だけ減ります。表示の Z0 を 75 に変えても、ポートの物理的なおよそ 50 Ω は変わりません。

プラグの形が近くても、50 Ω と 75 Ω は別の指定です。75 Ω の N 型を 50 Ω と嵌合すると壊しうること、BNC が機械的には嵌合しうること、は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) に出典つきで書いてあります。

## 出典

式、最適の比、用途、不整合の扱いは、次の公開資料で確認しました。2.30、3.49、13.98 dB、4%、および 76.7/√1.43 は、本文に書いた式からの計算です。資料の図表と文章は転載していません。Blackband の論文は要旨の結論だけを採り、本文は参照していません。

- Steven W. Ellingson、Electromagnetics Vol. 1、3.10 節（LibreTexts 版。低損失で Z0 ≈ √(L′/C′)。同軸は Z0 ≈ (60 Ω / √εr) × ln(b/a)。位相速度はおよそ c/√εr。a と b は内導体と外導体の半径）: https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Electromagnetics_I_(Ellingson)/03%3A_Transmission_Lines/3.10%3A__Coaxial_Line
- Michael Steer、Microwave and RF Design II、2.9 節（LibreTexts 版。Z0 = 60 × √(μr/εr) × ln(b/a)。係数 60 は、自由空間のインピーダンスを 120π Ω と置くとき丸めではない、と書く。比 3.59 で空気は 76.7 Ω、εr = 2.1 の PTFE は 52.9 Ω。50 Ω はよい折り合い、とも書く）: https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/Microwave_and_RF_Design_II_-_Transmission_Lines_(Steer)/02%3A_Transmission_Lines/2.09%3A_Coaxial_Line
- Chris Gandy、BBC Research & Development White Paper WHP 126、Co-axial cables（2005年9月。導体損失の最小は比 3.591、Z0 = 76.7/√εr。絶縁破壊で制限される電力の最大は比 √e、Z0 = 30/√εr。英国のアナログテレビ送信所のフィーダに、呼び径 6⅛ インチの空気絶縁 50 Ω を使う例）: https://downloads.bbc.co.uk/rd/pubs/whp/whp-pdf-files/WHP126.pdf
- W. T. Blackband、“The choice of impedance for coaxial radio-frequency cables,” Proceedings of the IEE Part B, vol. 102, no. 6, Nov. 1955（要旨。低損失の空気絶縁は 75 Ω、熱可塑性の汎用は 50 Ω。本文は未見）: https://doi.org/10.1049/pi-b-1.1955.0160
- Microwaves101、“Why Fifty Ohms?”（空気で損失最小およそ 77 Ω、D/d およそ 3.5、外導体の内径 10 mm の例。ピーク電力最大 30 Ω。算術平均 53.5、幾何平均 48。ポリエチレン εr = 2.25、D/d = 3.6 で損失最小およそ 51.2 Ω。CATV の 75 Ω。発泡 εr = 1.43 では損失最小およそ 64 Ω。中心導体の太さの話は同頁の推測）: https://www.microwaves101.com/encyclopedias/why-fifty-ohms
- Microwaves101、“Coax Power Handling”（耐電圧の最大は b/a = e、空気で 60 Ω、一般に 60/√εr。ピーク電力の最大は b/a = √e、空気で 30 Ω、PTFE を εr = 2.2 とするとおよそ 20 Ω）: https://www.microwaves101.com/encyclopedias/coax-power-handling
- Microwaves101、Coax Calculator（Z0 = 138 × log10(D/d) / √εr）: https://www.microwaves101.com/calculators/863-coax-calculator
- R. G. Carter、R. K. Cooper、“High-power RF transmission,” CERN Accelerator School, 2005（空気を満たした線路の b/a は 50 Ω で 2.3、75 Ω で 3.49。50 Ω は絶縁破壊と電力容量の折り合い、75 Ω は最小減衰）: https://doi.org/10.5170/cern-2005-003.210
- Conrad Young、“Where Does 75 Ohms Come From, Anyway?”（RF Cafe が公開。空気で外半径を固定し b/a = 3.6 のとき Z0 = 77 Ω。最小の付近は広く、77 Ω の前後 6% 程度で減衰の変化は小さい）: https://www.rfcafe.com/references/articles/where-does-75-ohms-come-from-anyway-conrad-young.pdf
- Microwaves101、“Voltage standing wave ratio (VSWR)”（Γ = (ZL − Z0)/(ZL + Z0)。&#124;Γ&#124; の二乗は反射電力）: https://www.microwaves101.com/encyclopedias/voltage-standing-wave-ratio-vswr
- Keysight、E5061B の解説（RL = −20 log ρ。SWR = (1+ρ)/(1−ρ)）: https://helpfiles.keysight.com/csg/e5061b/measurement_with_options/option_010_time_domain_fault_location_analysis/fault_location_analysis/theory.htm
- Keysight、System Impedance（初期値 50 Ω。ポートは物理的におよそ 50 Ω。75 Ω の部品では Z0 を 75 にし、最小損失パッドと 75 Ω の校正標準を使う）: https://helpfiles.keysight.com/csg/NA520xA/System/System_Impedance.htm
- Keysight、75 Ω の被測定物を 50 Ω のアナライザで測る案内（11852B は挿入損失およそ 5.7 dB、DC–3 GHz）: https://docs.keysight.com/kkbopen/testing-75-ohm-devices-with-50-ohm-analyzer-589749452.html
- Keysight、50 Ω のネットワークアナライザで 75 Ω を測れるか（機械的な変換では不整合が確度に残る。最小損失パッドは別）: https://docs.keysight.com/kkbopen/8753-8510-8720-can-i-use-a-50-ohm-network-analyzer-to-measure-75-ohm-devices-589738619.html
- Keysight、Impedance and Network Analysis の案内（CATV のケーブルは 75 Ω の系で測る。E5061B の RF オプションは 75 Ω のテストセットに対応する、と書く頁）: https://hallaweb.jlab.org/tech/Detectors/public_html/manuals/data_sheets-manuals/J-L/K/keysight/measurement_techniques/Content/Power%20Meters%20and%20Power%20Sensors/9.Impedance%20and%20Network%20Analysis%20Catalog.pdf
- Texas Instruments、SMPTE SDI の電気仕様の解説スライド（同軸について、発生器の出力を 1 m の同軸を介した 75 Ω の抵抗負荷で測る、と書く）: https://www.ti.com/content/dam/videos/external-videos/en-us/10/3816841626001/smpte-sdi-electrical-specifications-equalizers-cable-drivers-retimers.mp4/subassets/smpte-sdi-electrical-specifications-equalizers-cable-drivers-retimers-presentation.pdf
