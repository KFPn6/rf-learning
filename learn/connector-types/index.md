---
layout: default
title: コネクタの種類
description: SMA、N、BNC、TNC、7/16、2.92 mm など主要コネクタの結合、周波数の目安、用途を、メーカーと規格の公開資料で確認して整理します。
permalink: /learn/connector-types/
---

{% include learn-nav.html %}

# コネクタの種類

高周波で名前の出やすい同軸コネクタを、結合のしかた、周波数の目安、よくある用途で並べます。数字は、メーカーのシリーズ資料と IEC の適用範囲から取った学習用の目安です。個別の製品が保証する値ではありません。

嵌合トルクを数字にした行は、公開資料でその幅を確認できたものだけです。実際の値は、各メーカーの仕様に従ってください。材質やグレードが違うと、同じ系列でも指定が変わります。

コネクタの名前だけでは、中のケーブルも長さも決まりません。使用周波数の上限が寸法と誘電体から来る読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。断面からの見方は [入門]({{ '/learn/beginner/' | relative_url }}) です。ケーブルと組んだ一本の構成と、はんだ・圧着・クランプの違いは [アッセンブリの構造と製作工程]({{ '/learn/assembly-basics/' | relative_url }}) です。成績表の VSWR とリターンロスの読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。締め方、清掃、ピン深さ、嵌合寿命は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。

## 一覧

<div class="table-scroll" markdown="1">

| 系列 | 結合 | 周波数の目安 | よくある用途 | 嵌合トルクの例 |
| --- | --- | --- | --- | --- |
| SMA | ねじ | DC–18 GHz | 通信、計測、機器のあいだ | 0.8–1.1 N·m（ステンレスまたは CuBe）。レンチ設定の例は 0.90 N·m |
| N | ねじ | 標準は DC–11 GHz。精密・拡張は DC–18 GHz | 無線のインフラ、アンテナ、屋外、計測 | 0.7–1.1 N·m |
| BNC | バヨネット | 50 Ω は、低い反射で見るとおおよそ 4 GHz まで | 計測器、映像、実験室 | バヨネット |
| TNC | ねじ | 標準は DC–11 GHz。精密は DC–18 GHz | 振動のある無線、アンテナ、屋外 | 0.46–0.69 N·m。別資料では 0.51–0.67 N·m |
| 7/16（7-16） | ねじ | DC–7.5 GHz | 屋外の中〜大電力、移動通信 | 25–30 N·m |
| 2.92 mm（K） | ねじ | DC–40 GHz。一部は 43.5 GHz | 精密な計測 | 各メーカーの仕様 |
| 3.5 mm | ねじ | DC–26.5 GHz | 精密な計測 | 各メーカーの仕様 |
| 2.4 mm | ねじ | DC–50 GHz | 精密な計測 | 各メーカーの仕様 |
| F | ねじ | 75 Ω。多くの製品は DC–1 GHz、拡張で 3 GHz | ケーブルテレビ、宅内の同軸 | 各メーカーの仕様 |

</div>

帯域名の K と、コネクタの K（2.92 mm）は別の言葉です。帯域との対応は [規格・周波数]({{ '/spectrum/' | relative_url }}) にあります。

トルクの列が「各メーカーの仕様」の行は、推奨の幅を一つに固定していません。BNC の結合はバヨネットです。ねじ系列の推奨トルクは、その下の各節に書いた資料の範囲です。実際に締める値は、各メーカーの仕様に従ってください。

## SMA

ねじ結合の 50 Ω です。Rosenberger のシリーズ資料は、周波数を DC–18 GHz、界面を IEC 60169-15 としています。IEC 61169-15:2021 の適用範囲も、使用周波数は 18 GHz まで、と書いています。用途の例は、通信、計測、産業機器です。

推奨トルクは、材料で分かれます。Rosenberger は、ステンレス鋼または CuBe で 0.8–1.1 N·m、真鍮（CuZn）で 0.5 N·m と書いています。Cinch のトルクレンチ資料は、ステンレスを 8 inch-pounds（0.90 N·m）、真鍮を 5 inch-pounds（0.57 N·m）とし、IEEE P287 を参照しています。0.90 N·m は、ステンレス向けのレンチ設定の例です。真鍮の指定は、それより低い側にあります。

IEC 61169-15:2021 は、SMA が 3.5 mm および 2.92 mm と機械的に嵌合しうると書いています。精密側の界面を守る話は [深掘り]({{ '/learn/master/' | relative_url }}) です。

名前の移り変わりは [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。会話はフィクション演出で、BRM、OSM、SMA の展開と年は資料で一つに揃わず、発明者とは断定しません。

## N

ねじ結合です。広く使うのは 50 Ω です。Amphenol RF は、標準を DC–11 GHz、拡張を DC–18 GHz としています。IEC 61169-16 は、汎用（grade 2）をおよそ 12 GHz まで、反射の目安を 11 GHz までとしています。高精度（grade 1）の一部と、標準試験（grade 0）は、18 GHz までの使用を見込んでいます。用途の例は、無線インフラ、アンテナ、屋外、計測です。

嵌合トルクの例は、Rosenberger の RPC-N が 0.70–1.10 N·m、N と 7-16 のアダプタの N 側が 0.7–1.1 N·m です。Amphenol RF の標準 N は 8–12 inch-pounds と書き、同じ表に N·m を併記していません。系列が同じでも、資料ごとに単位と幅が違います。実際の値は、各メーカーの仕様に従ってください。

IEC 61169-16 は、75 Ω の N を強く非推奨としています。50 Ω と誤って嵌合すると、75 Ω 側を壊しうると同規格は書いています。75 Ω には、見分けが付く表示を付けて扱います。

名前の話は [第8話]({{ '/manga/08-paul-neill/' | relative_url }}) です。会話はフィクション演出で、開発が一人の仕事だったかは資料が分かれます。

## BNC

二本のスタッドで留めるバヨネットです。Rosenberger は、50 Ω の最適を DC–4 GHz、最大を 10 GHz、75 Ω の最適を DC–1 GHz、最大を 4 GHz としています。界面は IEC 61169-8 です。Amphenol のカタログは、動作を 11 GHz までとし、低い反射は 4 GHz まで、と書いています。用途の例は、実験室、オシロスコープ、映像、データと通信です。

Rosenberger は、50 Ω と 75 Ω が機械的に嵌合しうると書いています。インピーダンスが違うものを混ぜると、境目が反射点になります。

名前の話は [第10話]({{ '/manga/10-bnc-name/' | relative_url }}) です。会話はフィクション演出で、名前の展開は資料で一つに揃わず、発明者とは断定しません。

## TNC

BNC の接触部を、ねじ結合にしたものです。Amphenol RF は、標準を DC–11 GHz、拡張を DC–18 GHz、推奨トルクを 4–6 inch-pounds（0.51–0.67 N·m）としています。用途の例は、無線インフラ、アンテナ、産業、屋外です。Rosenberger の精密 RPC-TNC は、IEC 61169-26、周波数 DC–18 GHz、推奨トルク 0.46–0.69 N·m です。

このページで TNC の推奨として確認できたのは、0.46–0.69 N·m と 0.51–0.67 N·m です。0.7–1.1 N·m は、上の N 型の資料に書かれた幅です。

## 7/16（7-16）

ねじ結合の 50 Ω です。IEC の呼びは type 7-16 です。Rosenberger のシリーズ資料は、界面を IEC 61169-4、周波数を DC–7.5 GHz、推奨トルクを 25–30 N·m、試験トルクの上限を 35 N·m としています。IEC 61169-4 は、中電力で、使用周波数は 7.5 GHz まで、と書いています。用途の例は、屋外の中〜大電力と、移動通信です。

## 2.92 mm（K）

ねじ結合の 50 Ω で、空気を誘電体に使う精密系列です。Rosenberger の RPC-2.92 は、IEC 60169-35、周波数は DC–40 GHz で、一部の製品は 43.5 GHz までです。2.92 mm、3.5 mm、SMA、K と機械的に嵌合します。Amphenol RF も、DC–40 GHz、ねじ結合、SMA および 3.5 mm との嵌合、と書いています。Anritsu は、K コネクタを 2.92 mm として案内しています。帯域名の K とは別です。

経緯の話は [第11話]({{ '/manga/11-oldfield-k/' | relative_url }}) です。会話はフィクション演出で、1974年の MPC3 からの最適化・再発表・標準化の範囲で書き、発明者とは断定しません。40 GHz などの数字は、このページと同じく学習用の目安です。

## 3.5 mm

Rosenberger の RPC-3.50 は、空気誘電体、IEC 60169-23、DC–26.5 GHz、ねじ結合です。3.5 mm、SMA、2.92 mm、K と機械的に嵌合します。精密な計測に使われます。

経緯の話は [第14話]({{ '/manga/14-renihan-35mm/' | relative_url }}) です。会話はフィクション演出で、1970年代半ばの試作、1976年のシンポジウム発表、空気誘電体、のちの APC-3.5 という呼び名の範囲で書き、発明者とは断定しません。26.5 GHz は、このページが置く学習用の目安です。

## 2.4 mm

Rosenberger の RPC-2.40 は、IEC 60169-40、DC–50 GHz、ねじ結合です。2.4 mm、1.85 mm、V と機械的に嵌合します。同社の 2.92 mm と 2.4 mm のアダプタ資料は、2.92 mm 側の互換先を 3.5 mm と SMA、2.4 mm 側の互換先を 1.85 mm と分けて書いています。精密な計測で、50 GHz 付近までを見る系列です。

経緯の話は [第15話]({{ '/manga/15-botka-24mm/' | relative_url }}) です。会話はフィクション演出で、1980年代の開発、1986年の論文、50 GHz まで、という資料の範囲で書き、発明者とは断定しません。50 GHz は、このページが置く学習用の目安です。

## F

75 Ω のねじ結合です。ケーブルテレビや、宅内の同軸で使われます。Amphenol RF は、標準を DC–1 GHz、拡張を DC–3 GHz、界面を ANSI/SCTE としています。IEC 61169-24 は、75 Ω のケーブル網向けのねじ結合で、図面を直し、3 GHz までを見込んでいます。個別仕様には、用途によって 1 GHz、2 GHz、3 GHz、6 GHz までの区分があります。6 GHz は、衛星放送や精密用途向けの区分です。

## 嵌合できることと、してよいことは違う

SMA、3.5 mm、2.92 mm は、機械的には互いに差さることがあります。2.4 mm と 1.85 mm は、別の組み合わせです。差さることを、その周波数まで保証された、とは読みません。カットオフと、資料によって分かれる上限の数字は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。反射と、傷めやすい組み合わせは [深掘り]({{ '/learn/master/' | relative_url }}) に整理してあります。

50 Ω と 75 Ω も、プラグの形が近くても別の指定です。径と比誘電率、混ぜたときの反射は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。テレビの同軸を会話にしたのは [第4話]({{ '/manga/04-tv-coax/' | relative_url }}) です。

## 出典

周波数、結合、用途、トルクは、次の公開資料で確認しました。規格本文の有償版は、適用範囲と、ここへ転記した箇条の範囲で参照しています。

- Rosenberger、SMA シリーズ技術資料（DC–18 GHz、推奨トルク 0.8–1.1 N·m / CuZn 0.5 N·m）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- Rosenberger、SMA 製品案内: https://www.rosenberger.com/product/sma/
- IEC 61169-15:2021 の公開プレビュー（SMA、18 GHz、3.5 mm と 2.92 mm との嵌合）: https://www.en-standard.eu/publicdoc/iec_previews/1032466.pdf
- Cinch、SMA などのトルクレンチ資料（ステンレス 0.90 N·m、真鍮 0.57 N·m、IEEE P287 を参照）: https://media.digikey.com/pdf/Data%20Sheets/Cinch%20PDFs/141-0000-9xx_Ds.pdf
- Amphenol RF、N-Type（DC–11 GHz / 拡張 DC–18 GHz、ねじ、8–12 inch-pounds）: https://www.amphenolrf.com/en-us/products/rf-connectors/n-type-connectors/
- IEC 61169-16:2006（N 型。Webstore）: https://webstore.iec.ch/en/publication/4727
- IEC 61169-16:2006 の公開サンプル（grade と 11 / 12 / 18 GHz、75 Ω への注意）: https://cdn.standards.iteh.ai/samples/14184/32579e2bab614211b18c43b800c39e77/IEC-61169-16-2006.pdf
- Rosenberger、RPC-N 50 Ω 技術資料（DC–18 GHz、推奨トルク 0.70–1.10 N·m）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-N_50_75/05-000-000_TD.pdf
- Rosenberger、N–7-16 アダプタ 53S160-SIMN1（N 側 0.7–1.1 N·m、7-16 側 25–30 N·m）: https://products.rosenberger.com/_ocassets/db/53S160-SIMN1.pdf
- Rosenberger、BNC 50 Ω / 75 Ω: https://www.rosenberger.com/product/bnc-50-o-75-o/
- Amphenol、BNC カタログ（低い反射は 4 GHz まで、動作は 11 GHz までの記述）: https://media.digikey.com/pdf/Data%20Sheets/Amphenol%20PDFs/BNC_Catalog.pdf
- Amphenol RF、TNC（DC–11 GHz / 拡張 DC–18 GHz、ねじ、0.51–0.67 N·m）: https://www.amphenolrf.com/en-us/products/rf-connectors/tnc-connectors/
- Rosenberger、RPC-TNC 技術資料（DC–18 GHz、推奨トルク 0.46–0.69 N·m、IEC 61169-26）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-TNC/06-000-000_TD.pdf
- Rosenberger、RPC-TNC 製品案内: https://www.rosenberger.com/product/rpc-tnc/
- Rosenberger、7-16 シリーズ技術資料（DC–7.5 GHz、推奨トルク 25–30 N·m）: https://rin.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/7-16/60-000-000_TD_01.pdf
- Rosenberger、7-16 製品案内: https://www.rosenberger.com/product/7-16/
- IEC 61169-4 の公開プレビュー（7-16、中電力、7.5 GHz）: https://www.en-standard.eu/publicdoc/iec_previews/73980.pdf
- Rosenberger、RPC-2.92（DC–40 GHz、一部 43.5 GHz、SMA・3.5 mm と嵌合）: https://www.rosenberger.com/product/rpc-292/
- Amphenol RF、2.92 mm（DC–40 GHz、K という呼び、ねじ）: https://www.amphenolrf.com/en-us/products/rf-connectors/2-92-mm-connectors/
- Anritsu、Extended-K（K を 2.92 mm とし、43.5 GHz、SMA・3.5 mm との嵌合）: https://dl.cdn-anritsu.com/en-us/test-measurement/files/Brochures-Datasheets-Catalogs/datasheet/11410-01192B.pdf
- Rosenberger、RPC-3.50（DC–26.5 GHz、空気誘電体、SMA・2.92 mm と嵌合）: https://www.rosenberger.com/product/rpc-350/
- Rosenberger、RPC-2.40（DC–50 GHz、1.85 mm・V と嵌合）: https://www.rosenberger.com/product/rpc-240/
- Rosenberger、RPC-2.92 / RPC-2.40 アダプタ 02S109-K0BS3（互換先の分け）: https://products.rosenberger.com/_ocassets/db/02S109-K0BS3.pdf
- Amphenol RF、F-Type（75 Ω、DC–1 GHz / 拡張 DC–3 GHz、ねじ、ANSI/SCTE）: https://www.amphenolrf.com/en-us/products/rf-connectors/f-type-connectors/
- IEC 61169-24:2019（F 型。Webstore）: https://webstore.iec.ch/en/publication/61451
- IEC 61169-24:2019 の公開サンプル（75 Ω、ねじ、周波数区分）: https://cdn.standards.iteh.ai/samples/101346/e72508bcad3c4e07a30363b4aa10fbda/IEC-61169-24-2019.pdf
