---
layout: default
title: "N型とSMAの違いと見分け方"
description: "N型とSMAの違いを、ねじの呼び、外導体内径、結合ナットの二面幅、周波数と電力の目安、屋外のシール、変換アダプタで整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-10
permalink: /learn/n-sma/
---

{% include learn-nav.html %}

# N型とSMAの違いと見分け方

N 型と SMA は、どちらもねじ結合の同軸コネクタです。確認した 50 Ω の資料では、インピーダンスの呼びは同じです。嵌合面は違います。IEC 61169-16 の題は、外導体内径 7 mm の type N です。IEC 61169-15 の題は、外導体内径 4.13 mm の type SMA です。結合ねじは、N の表が 5/8-24 UNEF、SMA の技術資料が 1/4-36 UNS です。山の呼びが違うので、ナットは相手に掛かりません。

ここにある数字は、公開の規格のプレビューと、メーカーの技術資料から取った学習用の目安です。個別の製品が保証する値ではありません。同じ名前でも、資料が複数の周波数と、複数の電力と、複数のトルクを置きます。平均して一つの仕様にはしません。

系列の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。SMA が 3.5 mm、2.92 mm と機械的に嵌合しうることと、ピン径は [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。同じ 1/4-36 でも中心を入れ替えた呼びは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。上限の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }})、締付の幅は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) と [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。名前の話は [第8話]({{ '/manga/08-paul-neill/' | relative_url }}) と [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。会話はフィクション演出です。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 項目 | N 型 | SMA |
| --- | --- | --- |
| このページが読んだ規格 | IEC 61169-16:2006。題は外導体内径 7 mm（0.276 in）、ねじ結合、50 Ω（75 Ω）、type N | IEC 61169-15:2021。題は外導体内径 4.13 mm（0.163 in）、ねじ結合、50 Ω、type SMA |
| 結合ねじ | ピン中心の表は 5/8-24 UNEF-2B。ソケット中心の表は 5/8-24 UNEF-2A。Rosenberger の RPC-N も、プラグが 2B、ジャックが 2A。Amphenol の概要は 5/8-24 | Rosenberger のオス列は 1/4-36 UNS-2B、メス列は 1/4-36 UNS-2A。Amphenol の概要は 1/4-36。IEC のプレビュー本文に、この呼びの文字は無かった |
| 外導体の内径の行 | 題は 7 mm（0.276 in）。ピン中心の a は 7.00 nom、インチ欄は 0.2756 nom。ソケットの注は公称 7.0 mm（0.2756 in）。Rosenberger の B は 6.99–7.01 mm | 題は 4.13 mm（0.163 in）。グレード 0 のソケットの p は公称 4.13 mm（0.1627 in）。Rosenberger の B は最大 Ø 4.178 mm |
| 中心の径の行 | ピン中心の表の p は 1.600–1.676 mm で、注は直径。Rosenberger のプラグの E は 1.64–1.66 mm。注は、計測用で変わりうる | IEC のピンの s は 0.902–0.940 mm。Rosenberger のオス列の E も Ø 0.902–0.940 mm |
| 結合ナットの例 | Rosenberger の RPC-N プラグの G は hex 19。ジャックの欄は無い | IEC のピン側の注は、二面幅 7.85/8.00 mm。ほかの構造も可、と続く。Rosenberger のオス列の K は hex 8 |
| その資料の周波数 | Amphenol の標準は DC–11 GHz、拡張は DC–18 GHz。IEC の grade 2 はおよそ 12 GHz。grade 1 の一部と grade 0 は 18 GHz まで。RPC-N の 50 Ω は DC–18 GHz、75 Ω は DC–4 GHz | IEC の grade 1 は DC–18 GHz。同じ表は、フレキシブルのストレートと、ライトアングルを DC–12.4 GHz とする。Rosenberger は DC–18 GHz。Amphenol は DC–18 GHz、拡張は 34 GHz まで、と書く |
| 電力の行 | IEC の適用範囲は、低から中の電力。Amphenol の仕様表は 300 W @ 10 GHz @ 25 °C。典型値で、すべてには当てはまらない、と注 | Rosenberger は 200 W @ 2 GHz。Amphenol の仕様表は 75 W @ 10 GHz @ 25 °C。同じ注が付く。2 GHz の 200 W と、10 GHz の 75 W は別の行 |

</div>

11 GHz、12 GHz、12.4 GHz、18 GHz、34 GHz を、一つの上限にはしません。7.00 と 6.99–7.01、4.13 と 4.178 も、一つの径にはしません。0.276 in と 0.2756 in は、7 mm の書き方の差として置きます。図面は転載していません。

## ねじと、外導体の径

IEC 61169-16:2006 の適用範囲は、ピンとソケットの高周波同軸コネクタで、結合はねじ、用途の文は低から中の電力です。通称は type N、と書きます。50 Ω には三つの grade があり、互いに嵌合しうる、と続きます。grade 2 は汎用で、MIL-C-17B と MIL-C-39012 から来て、ケーブル 60096 IEC 50-7 とあわせて、最大周波数はおよそ 12 GHz まで、と書きます。grade 1 は、汎用より低い反射が要るときの高精度です。この仕様に合う grade 1 の一部は、最大 18 GHz まで使える、と書きます。grade 0 は標準試験コネクタで、界面を狭く管理し、最も精密な界面として 18 GHz まで使う場合もある、と書きます。開いたプレビューには、反射係数の数値表はありません。11 GHz を、このプレビューの文からは置いていません。

ピン中心の表で、a は 7.00 nom、インチは 0.2756 nom、注は直径です。c は 5/8-24 UNEF-2B で、注は ISO 263 のねじです。p は 1.600–1.676 mm で、注は直径です。ソケット中心の c は 5/8-24 UNEF-2A です。ソケットの注は、外導体の内径の公称を 7.0 mm（0.2756 in）とします。題の括弧は 0.276 in です。0.276 × 25.4 = 7.0104、0.2756 × 25.4 = 7.00024 です。この計算を、表の公差にはしません。5/8 インチは 0.625 インチで、0.625 × 25.4 = 15.875 mm です。これはねじの呼び径の換算であり、結合ナットの二面幅ではありません。

2B は内ねじ、2A は外ねじの等級です。ピン中心の側に結合ナットの内ねじがある、という並びです。SMA の技術資料も、オス列が 2B、メス列が 2A です。等級の側は似て、呼びの数字が違います。

Rosenberger の RPC-N 50 Ω は、界面を IEC 61169-16 とします。プラグの F は 5/8-24UNEF-2B、ジャックの F は 5/8-24UNEF-2A です。B は両列とも 6.99–7.01 mm です。プラグの E は 1.64–1.66 mm、ジャックの E は 1.68–1.71 mm で、注は中心コンタクトの設計は任意、計測用では異なりうる、と書きます。IEC の p の 1.600–1.676 mm と、プラグの E の 1.64–1.66 mm は、端が違います。一つのピン径にはしません。プラグの G は hex 19 です。ジャックの G は、その表にありません。

IEC 61169-15:2021 の適用範囲は、外導体内径 4.13 mm（0.163 in）、ねじ結合、特性インピーダンス 50 Ω、type SMA です。動作周波数は 18 GHz まで、と書きます。ピンの s は 0.902–0.940 mm です。ピン側の図の注は、結合ナットを前に出した位置、と書きます。同じ注は、二面幅を 7.85/8.00 mm（0.309/0.315 in）とし、ほかの構造も可、と続きます。ソケットの表の b は最小 4.32 mm で、備考は全ねじです。プレビューから読んだ文字に、1/4-36 という呼びはありません。ねじの呼びは、Rosenberger と Amphenol の資料で置きます。

Rosenberger の SMA 系列は、界面を IEC 60169-15、EN 122110、MIL-STD-348 とし、インピーダンス 50 Ω、周波数 DC–18 GHz です。オス列のねじは 1/4-36 UNS-2B、メス列は 1/4-36 UNS-2A です。オス列の E は Ø 0.902–0.940 mm です。B の最大は Ø 4.178 mm で、IEC の題の 4.13 mm と同じ文字ではありません。オス列の K は hex 8 です。1/4 インチ × 25.4 = 6.35 mm です。これもねじの呼び径の換算であり、二面幅の 8 mm ではありません。

Amphenol RF の N の概要は、結合を 5/8-24 のねじとします。SMA の概要は、1/4-36 のねじ結合とします。界面仕様の欄は、どちらの仕様表も MIL-STD-348 です。同じ規格名であることが、同じ嵌合面だという意味にはなりません。MIL-STD-348 の図そのものは、このページでは読んでいません。

5/8-24 のナットは、1/4-36 の外ねじには進みません。1/4-36 のナットも、5/8-24 の外ねじには掛かりません。山が合わない相手を、力で回しません。

<figure class="assembly">
  <svg viewBox="0 0 720 250" role="img" aria-labelledby="faceTitle faceDesc">
    <title id="faceTitle">結合ナットの二面幅の例。左は hex 19、右は hex 8</title>
    <desc id="faceDesc">左の大きい円は N 型のプラグ側の例、右の小さい円は SMA のオス側の例です。直径の比は 19 対 8 です。概念図で、製品の写真でも寸法図でもありません。</desc>
    <circle cx="200" cy="104" r="70" fill="none" stroke="#1f4d45" stroke-width="14"></circle>
    <circle cx="200" cy="104" r="40" fill="#e6d7bf"></circle>
    <circle cx="200" cy="104" r="8" fill="#c9843d"></circle>
    <text x="200" y="198" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">N 型のプラグの例</text>
    <text x="200" y="218" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">hex 19・5/8-24</text>
    <circle cx="520" cy="104" r="29.5" fill="none" stroke="#1f4d45" stroke-width="8"></circle>
    <circle cx="520" cy="104" r="16" fill="#e6d7bf"></circle>
    <circle cx="520" cy="104" r="4" fill="#c9843d"></circle>
    <text x="520" y="198" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA のオスの例</text>
    <text x="520" y="218" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">hex 8・1/4-36</text>
    <text x="360" y="242" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">円の直径の比だけを、19 対 8 にしています。ピンの径は、規格の比にしていません</text>
  </svg>
  <figcaption>
    <p>Rosenberger の RPC-N プラグが書く hex 19 と、同社の SMA オス列が書く hex 8 の比です。IEC の SMA は二面幅 7.85/8.00 mm とし、ほかの構造も可、と注記します。N のジャックの欄に、hex 19 はありません。この絵の円を、すべての個体の外形には使いません。</p>
  </figcaption>
</figure>

## 周波数の目安

周波数は、学習用の目安です。製品が保証する上限ではありません。

N 側で、このページが並べる行は次です。Amphenol の標準は DC–11 GHz、拡張は DC–18 GHz です。IEC の grade 2 はおよそ 12 GHz、grade 1 の一部と grade 0 は 18 GHz までです。Rosenberger の RPC-N は、50 Ω が DC–18 GHz、75 Ω が DC–4 GHz です。Keysight の技術概要は、1940年代に 4 GHz 未満の軍用として設計され、1960年代の改良で 12 GHz へ伸び、のちに動作周波数が 18 GHz まで、と書きます。同社の一部の製品は、スロットレスの中心導体で 18 GHz まで、とも書きます。4、11、12、18 を平均しません。

SMA 側の行は次です。IEC の推奨表は、grade 1 を DC–18 GHz とします。同じ表は、フレキシブルのストレートと、ライトアングルを DC–12.4 GHz、セミリジッドとセミフレキのストレートを DC–18 GHz とします。Rosenberger の系列は DC–18 GHz です。Amphenol のページは、DC–18 GHz、拡張設計は 34 GHz まで、と書きます。周波数はコネクタとケーブルに依存する、とも書きます。Keysight の技術概要は、24 GHz まで使えるほかのコネクタに比べ、多くの SMA は反射が大きい、と書きます。12.4、18、24、34 を、一つの上限にはしません。24 を、Amphenol の 34 の誤記には読みません。34 を、IEC と Rosenberger の 18 の更新にも読みません。

Keysight の同じ概要は、コネクタ一般について、外部導体の径を小さくすると使える周波数の上限が上がり、空気の部分を誘電体で満たすと上限が下がり、損失が増える、と書きます。N の題の 7 mm と、SMA の題の 4.13 mm は、この文の大小の側にあります。径が小さい方が、その製品の定格まで自動で伸びる、とはその文は書いていません。定格は、上の行のまま見ます。カットオフの計算へ寸法を入れる読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。このページは、その計算を N と SMA の保証値にはしていません。

## 用途として、資料が書くこと

用途も、資料の文のまま置きます。一つの「N は屋外、SMA は室内」にはまとめません。

Amphenol の N の見出しは、無線インフラ、産業、屋外向けの、丈夫で耐候性のある中型の接続、です。用途の列には、携帯電話の基地局、衛星通信、放送、計測、レーダ、屋外のアンテナがあります。概要は weatherproof と書きます。IP67 は、選択モデルの行です。例として、現場で取り付ける LMR-400 のプラグを挙げます。FAQ は、多くの設計が耐候または IP のシールを選べる、と書きます。すべての N が IP67 だ、とは書いていません。

同じ社の SMA の見出しは、産業、車載、無線で、18 GHz まで、拡張は 34 GHz まで、です。用途の列には、計測、アンテナの給電線、基地局の無線、航空宇宙、レーダ、実験室の接続があります。シリーズの仕様表に、IP67 の行はありません。同じ製品ページの告知欄には、IP67 の SMA を追加する題が並びます。告知の本文は、このページでは開いていません。防水の SMA が無い、とは読みません。シリーズ全体の定格でもありません。

Rosenberger の SMA の用途の文は、通信、計測、産業、機器、航空電子です。RPC-N の用途の文は、50 Ω で 18 GHz まで、75 Ω で 4 GHz までの精密測定、セミリジッドとマイクロ波部品、航空宇宙向けの品種、です。屋外の基地局だけ、とは書いていません。

電力も、行のままです。IEC 61169-16 の適用範囲は、低から中の電力、と書きます。高電力の系列だ、とは書いていません。このサイトが中〜大電力の例に置く 7/16 は、別のねじと、別のトルクです。[コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) の 25–30 N·m を、N に使いません。

Amphenol の仕様表は、同じ書き方で、N を 300 W @ 10 GHz @ 25 °C、SMA を 75 W @ 10 GHz @ 25 °C とします。注は、典型値であり、すべてのコネクタには当てはまらない、です。300 と 75 を、系列全体の倍率にはしません。Rosenberger の SMA は 200 W @ 2 GHz です。周波数の条件が違うので、75 W と一つの SMA の電力にはしません。RPC-N の技術資料には、電力の行がありません。無い行を、300 W で埋めません。

電圧も分かれます。Amphenol の N は連続 500 V rms、耐電圧 1500 V rms です。同じ社の SMA は連続 335 V rms、耐電圧 1000 V rms です。Rosenberger の RPC-N は、試験電圧 2500 V rms、動作電圧 1000 V rms、またはケーブルの制限、です。SMA 系列は、試験電圧 1000 V rms、動作電圧 480 V rms です。IEC の SMA の推奨定格電圧は、ケーブルの誘電体外径で 335 V、250 V、170 V に分かれます。500 と 335、1000 と 480 を、一つの比にはしません。

誘電体も、一つにしません。Amphenol の N の構造欄は PTFE です。Rosenberger の SMA の材料欄も PTFE です。RPC-N の製品案内は、空気誘電体と PPE のビーズ、と書きます。精密の N の空気を、市販の N 全体の誘電体には読みません。

ケーブルの例も、系列を一つに決めません。Amphenol の N の概要は、RG-213、LMR-400、RG-55、RG-174 を例にします。SMA の案内は、RG-58、RG-142、RG-174、RG-178、RG-316 を例にします。RG-174 は、両方の文に出ます。ケーブルの呼びだけで、端の系列は決まりません。174、316、58 の外径と温度の行は [RG-174・RG-316・RG-58]({{ '/learn/rg-174-316-58/' | relative_url }}) です。

## 見分けのポイント

見るのは、ナットの大きさと、ねじの呼びです。

Rosenberger の RPC-N プラグは hex 19、SMA のオス列は hex 8 です。IEC の SMA は二面幅 7.85/8.00 mm で、ほかの構造も可、と書きます。8 mm のレンチがすっと合う小さい六角と、それより一回り大きい六角は、この二つの資料の側にあります。hex 19 を、N のジャックや、ほかのメーカーの全部へは写しません。図面の二面幅を見ます。

ねじは、5/8-24 と 1/4-36 です。指で回し始めて、山が噛み合わない相手は、その系列の対ではありません。金色に見えること、白い樹脂が見えること、六角があることだけでは決まりません。両方ともねじ結合で、資料上のプラグは結合ナットの側にピンを置きます。中心がピンか穴かだけでは、N と SMA は分かれません。ピン径の行は 1.600–1.676 mm と 0.902–0.940 mm で違います。目視の太さを、その公差の測定にはしません。

バヨネットの BNC は、ねじで締め続ける系列ではありません。N を、大きい BNC とは呼びません。同じ 6.5 mm の呼びでねじにした系列は TNC で、山は 7/16-28 です。5/8-24 とも、BNC のスタッドとも、掛かり合う相手ではありません。読み分けは [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。BNC の 50 Ω と 75 Ω は [別のページ]({{ '/learn/bnc-50-75/' | relative_url }}) です。

RP-SMA は、SMA の 1/4-36 のまま、中心のピンとソケットを入れ替える資料と、左ねじを指定する部品図があります。N を小さくした系列ではありません。中心の入れ替えは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。SMA のねじが 3.5 mm や 2.92 mm に合う話も、N の 5/8-24 には写しません。

75 Ω の N は、同じ type N という名前の中の別の指定です。IEC 61169-16 は、75 Ω の使用を強く非推奨とし、50 Ω と誤って結合すると 75 Ω 側を壊しうる、と書きます。はっきり識別する、とも書きます。Keysight は、一部の 75 Ω 製品が、より細い中心導体の N 型で、50 Ω とは適合しない、と書きます。Rosenberger は、同じインピーダンス同士だけが嵌合する、と書きます。RPC-N の 75 Ω は DC–4 GHz です。50 Ω の 18 GHz を、この行へ写しません。開いたプレビューに、75 Ω の付録の寸法表はありません。ピン径の差のミリメートルは、このページでは Keysight の「より細い」という文のままにします。

## 誤って混ぜたとき

N と SMA は、ねじが掛かり合う相手ではありません。RP-SMA のように、ナットが回って中心だけが合わない、という組み合わせにはなりません。山が掛からないところから、力でねじを作りません。

系列をまたぐときは、変換アダプタです。Amphenol の N の案内は、SMA、TNC、F 型などへの cross-series adapter を、製品の列に置きます。アダプタ自身の周波数の行を見ます。両側のうち高い方まで使える部品だ、とは、その案内は書いていません。嵌合したあとの上限は、低い側の行を超えて伸びません。読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。

<figure class="assembly">
  <svg viewBox="0 0 720 210" role="img" aria-labelledby="adaptTitle adaptDesc">
    <title id="adaptTitle">N型とSMAは直接は噛み合わず、あいだに変換アダプタを置く</title>
    <desc id="adaptDesc">左の大きい胴と右の小さい胴のあいだに、短い変換の胴がある概念図です。ねじの山は描いていません。</desc>
    <rect x="36" y="48" width="150" height="64" rx="6" fill="#1f4d45"></rect>
    <rect x="186" y="64" width="36" height="32" fill="#1f4d45"></rect>
    <rect x="250" y="56" width="180" height="48" rx="6" fill="#e6d7bf" stroke="#1f4d45" stroke-width="3"></rect>
    <rect x="458" y="68" width="28" height="24" fill="#1f4d45"></rect>
    <rect x="486" y="62" width="110" height="36" rx="6" fill="#1f4d45"></rect>
    <text x="120" y="140" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">N 型</text>
    <text x="120" y="160" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">5/8-24</text>
    <text x="340" y="140" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">変換アダプタ</text>
    <text x="340" y="160" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">両端の行を見る</text>
    <text x="560" y="140" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA</text>
    <text x="560" y="160" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">1/4-36</text>
    <text x="360" y="196" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">胴の太さは、hex 19 と hex 8 の比には合わせていません</text>
  </svg>
  <figcaption>
    <p>直接は山が合いません。変換は、アダプタの図面で両端の系列を見てから使います。この絵は、製品の嵌合図でも、損失の保証図でもありません。</p>
  </figcaption>
</figure>

締付も、両端で別です。Rosenberger の RPC-N は、推奨 0.70–1.10 N·m、結合の試験トルク 1.70 N·m です。1.70 を、毎日のレンチ設定には読みません。Amphenol の標準 N は、Mating Torque, Min Working の欄が 8–12 inch-pounds で、同じ表に N·m はありません。インチポンドを、このページで換算して推奨値にはしません。SMA は、Rosenberger がステンレスまたは CuBe で 0.8–1.1 N·m、真鍮で 0.5 N·m です。Amphenol の SMA は、ステンレス 0.8–1.1 N·m（7–10 in-lbs）、真鍮 0.3–0.6 N·m（3–5 in-lbs）です。0.5 と 0.3–0.6 を、一つの真鍮値にはしません。N の 0.70–1.10 N·m を、SMA の真鍮へ写しません。逆も同じです。幅の残りは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) と [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。

開口も違います。SMA の資料が書く二面幅は 8 mm、または 5/16 インチです。RPC-N のプラグは hex 19 です。8 mm の SMA 用レンチを、hex 19 のナットへは掛けません。掛けてから、設定トルクが近いから代用する、という順にはしません。

シールは、ねじが締まったことの結果ではありません。IEC の N の寸法注は、ガスケットが無いときの寸法だ、と書きます。シールが要るときは、選んだガスケットで相手の前面に圧力がかかるよう、寸法 f を決める、と続きます。Amphenol が N を weatherproof と書くことと、IP67 を選択モデルに限ることは、別の文です。SMA の IP67 は、シリーズの仕様表の行ではなく、同じ製品ページに並ぶ告知の題です。屋外で使う一本は、その図面の IP と、ガスケットの有無を見ます。

75 Ω の N を 50 Ω の N へ嵌合する事故は、SMA とのねじ違いとは別です。IEC は、75 Ω 側を壊しうる、と書きます。表示が無いから 50 Ω、とは読みません。

このページは、誤って押し当てたときの VSWR を数値にしていません。反射の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。

## 選定するときに見ること

- 図面で、N か SMA か、50 Ω か 75 Ω か、プラグかジャックか、を見ます。大きい六角、という一語では注文しません。
- 周波数は、資料の行のまま置きます。N は、Amphenol の DC–11 GHz と DC–18 GHz、IEC のおよそ 12 GHz と 18 GHz、RPC-N の 50 Ω の DC–18 GHz と 75 Ω の DC–4 GHz です。SMA は、IEC の 18 GHz と 12.4 GHz、Rosenberger の DC–18 GHz、Amphenol の DC–18 GHz と拡張の 34 GHz、Keysight が反射の比較に置く 24 GHz です。
- 電力は、Amphenol の 10 GHz、25 °C の行では N が 300 W、SMA が 75 W です。Rosenberger の SMA は 2 GHz で 200 W です。IEC は N を、低から中の電力、と書きます。300 W を、すべての N の定格にはしません。
- 締付は、端の材料と系列の行です。試験トルクの 1.70 N·m や 1.7 N·m を、推奨の嵌合トルクには読みません。
- 屋外は、概要の weatherproof という語だけでは決めません。IP の等級と、ガスケットの有無は、その製品の図面です。
- 変換アダプタは、両端の系列と、アダプタ自身の周波数と、両端のトルクをセットで見ます。SMA の先が 3.5 mm や 2.92 mm のときは、さらに [互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }}) のピンの確認が先です。

## 関連するページ

- 結合、用途、トルクの早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、上限の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- SMA と 3.5 mm、2.92 mm のピン径と誘電体は [互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }})、中心を入れ替えた呼びは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。
- 締付の幅は [数値早見]({{ '/learn/quick-reference/' | relative_url }}) と [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。
- 75 Ω の別の例は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) と [F型コネクタ]({{ '/learn/f-type/' | relative_url }})、オームの式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。
- 短い定義は [用語集の N 型]({{ '/glossary/' | relative_url }}#n-type) です。名前の経緯は [第8話]({{ '/manga/08-paul-neill/' | relative_url }}) と [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。

## 出典

ねじ、径、周波数、電力、電圧、シール、トルクは、次の公開資料で確認しました。界面の図面と、規格の表そのものは転載していません。上の図は、このページで描いたものです。円の直径の比は、本文の hex 19 と hex 8 だけを使っています。15.875、6.35、7.0104、7.00024 は、インチの表記に 25.4 を掛けた計算です。規格本文の有償版は、適用範囲と、ここへ転記した表の範囲で参照しています。IEC 61169-16 の反射係数の表と、75 Ω の付録の寸法は、開いたプレビューの範囲にはありません。

- IEC 61169-16:2006 の公開プレビュー（外導体内径 7 mm（0.276 in）、ねじ結合、50 Ω（75 Ω）、type N。低から中の電力。grade 2 はおよそ 12 GHz、grade 1 の一部と grade 0 は 18 GHz まで。ピン中心の a は 7.00 nom、インチは 0.2756 nom。c は 5/8-24 UNEF-2B。p は 1.600–1.676 mm。ソケットの c は 5/8-24 UNEF-2A。ソケットの注の公称内径は 7.0 mm（0.2756 in）。寸法はガスケット無しを仮定し、シールが要るときは寸法 f を合わせる、と注。75 Ω は強く非推奨で、50 Ω との誤結合は 75 Ω 側を壊しうる。図面は転載していない）: https://cdn.standards.iteh.ai/samples/14184/32579e2bab614211b18c43b800c39e77/IEC-61169-16-2006.pdf
- IEC 61169-16:2006（Webstore。題は type N）: https://webstore.iec.ch/en/publication/4727
- Rosenberger、RPC-N 50 Ω 技術資料 05-000-000_TD（界面は IEC 61169-16。プラグの F は 5/8-24UNEF-2B、ジャックは 5/8-24UNEF-2A。B は 6.99–7.01 mm。プラグの E は 1.64–1.66 mm。G はプラグが hex 19。50 Ω、DC–18 GHz。試験電圧 2500 V rms、動作電圧 1000 V rms。推奨トルク 0.70–1.10 N·m、結合の試験トルク 1.70 N·m。嵌合回数 500 以上。電力の行は無い。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-N_50_75/05-000-000_TD.pdf
- Rosenberger、RPC-N の製品案内（50 Ω は DC–18 GHz、75 Ω は DC–4 GHz。同じインピーダンス同士だけが嵌合する。空気誘電体と PPE のビーズ。精密測定、セミリジッド、航空宇宙向けの品種）: https://www.rosenberger.com/product/rpc-n/
- Amphenol RF、N-Type（5/8-24。標準 DC–11 GHz、拡張 DC–18 GHz。連続 500 V rms、耐電圧 1500 V rms。電力 300 W @ 10 GHz @ 25 °C。嵌合 500 回以上。トルクの欄は 8–12 inch-pounds で、同じ表に N·m は無い。界面は MIL-STD-348。構造欄は PTFE。概要は weatherproof。IP67 は選択モデルで、例は現場取付の LMR-400 プラグ。ケーブルの例に RG-213、LMR-400、RG-55、RG-174。cross-series adapter に SMA、TNC、F 型。典型値で、すべてには当てはまらない、と注。図面は転載していない）: https://www.amphenolrf.com/en-us/products/rf-connectors/n-type-connectors/
- IEC 61169-15:2021 の公開プレビュー（外導体内径 4.13 mm（0.163 in）、ねじ結合、50 Ω、type SMA。動作周波数は 18 GHz まで。ピンの s は 0.902–0.940 mm。ピン側の注に結合ナットと、二面幅 7.85/8.00 mm、ほかの構造も可。grade 1 は DC–18 GHz。フレキシブルのストレートとライトアングルは DC–12.4 GHz。セミリジッドのストレートは DC–18 GHz。定格電圧は誘電体外径で 335 V、250 V、170 V。プレビュー本文に 1/4-36 の文字は無い。図面は転載していない）: https://cdn.standards.iteh.ai/samples/101730/41a5144464e04f98bbd9f6f02635cb3d/IEC-61169-15-2021.pdf
- IEC 61169-15:2021（Webstore。題は type SMA）: https://webstore.iec.ch/en/publication/62310
- Rosenberger、SMA シリーズ技術資料 32-000-000_TD（50 Ω、DC–18 GHz。オス列は 1/4-36 UNS-2B、E は Ø 0.902–0.940 mm、K は hex 8。メス列は 1/4-36 UNS-2A。B の最大は Ø 4.178 mm。電力 200 W @ 2 GHz。試験電圧 1000 V rms、動作電圧 480 V rms。誘電体 PTFE。推奨トルクはステンレスまたは CuBe が 0.8–1.1 N·m、CuZn が 0.5 N·m。試験トルクの上限は前者が 1.7 N·m、後者が 0.6 N·m。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- Rosenberger、SMA の製品案内（DC–18 GHz。用途に通信、計測、産業、機器、航空電子）: https://www.rosenberger.com/product/sma/
- Amphenol RF、SMA（1/4-36。DC–18 GHz、拡張は 34 GHz まで。コネクタとケーブルに依存。連続 335 V rms、耐電圧 1000 V rms。電力 75 W @ 10 GHz @ 25 °C。誘電体 PTFE。トルクはステンレス 0.8–1.1 N·m、真鍮 0.3–0.6 N·m。界面は MIL-STD-348。ケーブルの例に RG-58、RG-142、RG-174、RG-178、RG-316。仕様表に IP67 の行は無い。同じページの告知欄に、IP67 の SMA を追加する題が並ぶ。告知の本文は開いていない。典型値で、すべてには当てはまらない、と注）: https://www.amphenolrf.com/en-us/products/rf-connectors/sma-connectors/
- Keysight、“Coaxial Connectors”、文書 5992-0118（外部導体を細くすると上限が上がり、誘電体で満たすと上限が下がり損失が増える。N 型は1940年代に 4 GHz 未満、のちに 12 GHz、さらに 18 GHz。一部の 75 Ω は中心導体が細く、50 Ω と適合しない。多くの SMA は、24 GHz まで使えるほかのコネクタより反射が大きい、と書く）: https://www.keysight.com/us/en/assets/7018-04561/technical-overviews/5992-0118.pdf
