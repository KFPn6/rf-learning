---
layout: default
title: "小型RFコネクタの比較と見分け方（MCX・MMCX・U.FL・SMP）"
description: "MCX、MMCX、U.FL、IPEX（MHF）、SMP、Mini-SMP（SMPM）の寸法感、スナップオンと押し込み、基板実装の呼び方、中心のピンと穴、周波数の目安を比べます。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-09
permalink: /learn/small-rf-connectors/
---

{% include learn-nav.html %}

# 小型RFコネクタの比較と見分け方（MCX・MMCX・U.FL・SMP）

MCX、MMCX、U.FL、市場で IPEX と呼ばれる MHF、SMP、Mini-SMP は、いずれも SMA より小さい同軸の界面です。結合はねじではなく、スナップオンか押し込みです。名前が近いこと、基板に直接付くこと、金色に見えることは、同じ嵌合面だという意味にはなりません。中心がピンか穴か、50 Ω か 75 Ω か、保持の強さは、図面の行で分かれます。

ここにある数字は、公開の規格のプレビューと、メーカーの技術資料から取った学習用の目安です。個別の製品が保証する値ではありません。同じ名前でも、資料が複数の周波数と、複数の高さを置きます。平均して一つの仕様にはしません。

ねじ系列の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。SMA のねじと中心コンタクトは [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }})、中心を入れ替えた呼びは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。形が近くてオームが違う例は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。外導体内径の呼びが同じでも、バヨネットとねじで分かれる組は [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }}) です。カタログの上限を、カットオフの計算へ写す読み方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 系列 | 寸法感 | 嵌合 | 用途として資料が書く例 | 周波数の行 |
| --- | --- | --- | --- | --- |
| MCX | IEC 61169-36 のプラグの A は直径 0.48–0.53 mm。ソケットの C は直径 3.60–3.75 mm。Amphenol の案内は、SMB よりおよそ 30% 小さい、と書く | スナップオン。Amphenol の表は Push-On。ねじのトルクは無い | 無線、車載のインフォテインメント、計測。75 Ω の列は映像も含む | IEC の適用範囲は 3 GHz。Amphenol の 50 Ω の表は DC–6 GHz。同じ製品ページの特徴文は 12 GHz まで、と書く |
| MMCX | IMS の一般データシートは、界面を IEC 61169-52 とし、オス側の A を 2.35–2.40 mm、G を 0.38–0.42 mm、メス側の E を 3.00–3.04 mm と置く | スナップオン。Amphenol は、MCX を小さくした系列、と書く | 基板が混む機器。ケーブルと基板 | IEC の Webstore は 6 GHz まで。Amphenol の表も、IMS も DC–6 GHz |
| U.FL | 嵌合高さはプラグで分かれる。注記に 2.0 mm max（1.9 mm 公称）と 2.5 mm max（2.4 mm 公称）。レセプタクルの占有面積は 7.7 mm² | 押し込み。ケーブル側の中心はメス、基板側の中心はオス | 無線 LAN、Bluetooth、GPS、ドローン、車載ナビ、計測器 | シリーズ定格は 0–8 GHz。VSWR の行は、ケーブルにより 8 GHz より先へ続く |
| MHF I | ロック無しの基本行は 2.5 mm max。ロック付きは 2.9 mm max。外径 2.0 mm のケーブルは 3.0 mm max。SMT は 3.1 × 3.0 mm。MHF 4 の見出しは 1.2 mm max | 押し込み。流通名の IPEX は、この系列名そのものではない | カタログが参照として挙げるのは、5G sub6、Wi-Fi、LTE、LPWA、Bluetooth、GPS | MHF I は 9 GHz まで。MHF 4 の見出しも 9 GHz まで |
| SMP | Rosenberger のオスのピン A は Ø 0.36–0.41 mm。オスの B は、smooth bore が Ø 3.12–3.23 mm、limited detent が Ø 3.00–3.10 mm、full detent が Ø 2.90–3.00 mm。基板間隔の最小は 9.05 mm。IEC 61169-44 のピン中心の d は 0.38–0.41 mm | スナップオン。保持は full、limited、smooth bore、catchers mitt | 基板間、ケーブルから基板、通信、計測、航空宇宙。IEC はマイクロ波、通信、無線、とも書く | IEC 61169-44 は 40 GHz まで。Rosenberger も DC–40 GHz |
| Mini-SMP | 標準の SMP のおよそ 70%。技術資料のプラグ側の A は Ø 0.28–0.33 mm。基板間隔は製品案内が 7.94 mm、別の概要が 7.95 mm 以上 | スナップオン。smooth bore と full detent | バックプレーン、高速の信号、負荷の大きい航空宇宙。Fig. 328 を SMPM、GPPO、SSMP と書く資料がある | DC–65 GHz |

</div>

3 GHz、6 GHz、8 GHz、9 GHz、12 GHz、40 GHz、65 GHz を、一つの上限にはしません。2.0 mm と 2.5 mm も、一つの嵌合高さにはしません。図面は転載していません。

## スナップオンの MCX と MMCX

IEC 61169-36:1996 の適用範囲は、フレキシブルとセミリジッドの高周波ケーブルに使う極小の同軸コネクタです。結合はスナップオン、特性インピーダンスは 50 Ω、動作周波数の範囲は 3 GHz、商用の呼びは MCX、と書きます。一般用プラグの表で、直径の A は 0.48–0.53 mm です。ソケットの表で、直径の C は 3.60–3.75 mm、直径の D は 3.42–3.48 mm です。プラグの P は、スロットとフレアの前で、直径の最大 3.60 mm です。

Amphenol RF の MCX 製品案内は、50 Ω と 75 Ω を置きます。仕様表の 50 Ω は DC–6 GHz、連続定格 225 V rms、耐久 500 回以上、結合は Push-On、界面の仕様は CECC 22220、嵌合力は 20 N 以下、離脱力は 10 N 以上です。75 Ω の周波数のマスは DC–6 GHz で、12G の製品では 0–18 GHz、と続きます。同じページの特徴文は、帯域を 12 GHz まで、と書きます。50 Ω の表の 6 GHz と、特徴文の 12 GHz は、別の文です。シリーズ案内は、SMB の界面よりおよそ 30% 小さい、とも書きます。仕様は典型値で、部品ごとに変わりうる、と注が付きます。

Rosenberger の部品図 29S211-303L5 は、MCX のライトアングルプラグです。界面は CECC 22220 と IEC 61169-36、インピーダンスは 50 Ω、周波数は DC–6 GHz、嵌合回数は 500 以上、嵌合力は 25 N 以下、離脱力は 8 N 以上 20 N 以下です。このシートは、その部品の行です。系列のすべての上限には読みません。IEC の 3 GHz と、このシートの 6 GHz も、一つの数字にはしません。

IEC 61169-52:2015 の Webstore は、スナップオンの MMCX の分仕様で、主に 50 Ω のケーブル網、動作周波数の限度は 6 GHz まで、と書きます。嵌合面のミリメートルは、このページでは IMS Connector Systems の一般データシートで読みました。そのシートは、界面を IEC 61169-52 とし、オス側の A を 2.35–2.40 mm、G を 0.38–0.42 mm、メス側の E を 3.00–3.04 mm、中心の公称を 0.70 mm と置きます。文字がどの縁を指すかは、そのシートの図の記号のままです。MCX の IEC の表が A を直径と書くことと、MMCX の G の行を、このページは一つのピン径にはまとめません。同じシートは、50 Ω、DC–6 GHz、耐久 500 回以上、嵌合力 18 N 以下、離脱力 6 N 以上 18 N 以下です。一部のコネクタは、このデータと違う仕様を持ちうる、と注があります。

Amphenol RF の MMCX の案内は、MCX を小さくした 50 Ω、IEC 61169-52、周波数 DC–6 GHz、スナップオン、耐久 500 回以上、と書きます。周波数はケーブルに依存する、とも書きます。VSWR の行は、DC–4 GHz で 1.25 以下、4–6 GHz で 1.40 以下です。嵌合力の 18 N は、IMS の行です。Amphenol のこの案内へは写しません。

MCX のソケットの C が 3.60 mm を超え、MMCX のメス側の E が 3.04 mm まで、という並びは、外から見える筒の太さが同じ、という文ではありません。参照の文字も、規格の番号も違います。小さい方が大きい方へ入るかどうかは、このページでは嵌合試験にしていません。指定の相手は、図面の系列です。

50 Ω と 75 Ω の MCX は、Amphenol の表が両方を置きます。IEC 61169-36 としてこのページが読んだ適用範囲は、50 Ω です。スナップオンであることだけでは、オームは決まりません。電圧の行も、50 Ω が 225 V rms、75 Ω が 170 V rms と、その表では分かれます。BNC でピン径の行が揃っていた、という読みを、この系列へ写しません。オームは図面で見ます。混ぜたときの反射の入口は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) と [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。

## 基板に付く U.FL と、MHF

Hirose の U.FL シリーズカタログ（2024年9月）の定格は、公称インピーダンス 50 Ω、定格周波数 0–8 GHz です。レセプタクルの質量は 15.7 mg、基板の占有面積は 7.7 mm² です。嵌合耐久の条件は 30 回で、そのあと接触抵抗は初期に 5 mΩ を足した値、と書きます。材料の表は、ライトアングルプラグの中心を female center contact、レセプタクルの中心を male center contact とします。メス側の保持力は、直径 0.475 mm のピンゲージで測る、と条件にあります。

嵌合高さは、プラグとケーブルで分かれます。注記には、2.0 mm max（1.9 mm 公称）と、2.5 mm max（2.4 mm 公称）があります。ケーブル外径の行には、0.81 mm、0.95 mm、1.13 mm、1.32 mm、1.37 mm が出ます。プラグは、ケーブルハーネスの仕様に従って注文する、と注があります。シリーズの題は嵌合高さ 1.9 mm から 2.4 mm です。VSWR の表は、ケーブルによって 6 GHz より上のマスを持ち、U.FL(A) の一部は 18 GHz の行まで続きます。定格周波数の 8 GHz と、その先の VSWR のマスは、別の行です。

用途の列は、無線 LAN（Wi-Fi 6 に対応するもの）、Bluetooth、カーナビ、ドローン、PDA、GPS、無線機器、電子計測器です。すべての小型無線機がこの系列だ、とは書いていません。

I-PEX の MHF I のカタログは、周波数を 9 GHz まで、特性インピーダンスを 50 Ω、レセプタクルの SMT を 3.1 × 3.0 mm とします。嵌合高さは、ロック無しの基本を 2.5 mm max、ロック付きを 2.9 mm max、外径 2.0 mm のケーブルを 3.0 mm max と分けます。ケーブル外径の例は、0.81 mm、1.13 mm、1.32 mm、1.37 mm、1.80 mm、2.00 mm です。VSWR は長さ 100 mm の条件で、DC–3 GHz が 1.3 以下、3–6 GHz が 1.5 以下、6–9 GHz はケーブルで 1.9 以下または 1.6 以下です。参照として挙げる規格の名は、5G sub6、Wi-Fi、LTE / LTE-Advanced、LPWA、Bluetooth、GPS です。

同じ社の製品仕様 PRS-1726 は、MHF I の周波数を DC–9.0 GHz とし、耐久の試験を 30 回の嵌合と離脱で書きます。離脱力の合格は、初期 5 N 以上、30 回のあと 3 N 以上です。ロック付きの別仕様は、力の行が違います。5 N を、ロック付きへ写しません。

流通の文は、この背の高さを IPEX と呼ぶことがあります。IPEX は、IEC の型名としては、このページが読んだ規格に出てきません。I-PEX のカタログの系列名は MHF です。高さが U.FL の 2.5 mm の行に近いのは、このページでは MHF I です。

MHF 4 のカタログの見出しは、嵌合高さ 1.2 mm max、周波数 9 GHz まで、SMT は 2.0 × 2.0 mm、ケーブルは外径 0.81 mm です。同じカタログは MHF 4L を並べ、嵌合高さのマスに 1.7 mm max と 1.4 mm max を置きます。周波数のマスには 12 GHz と 9 GHz があります。どのマスがどの組み合わせかは、その表の列で見ます。1.2 mm を、MHF I の 2.5 mm と一つの高さにはしません。

Hirose のカタログは、相手を自系列のレセプタクルとして書きます。I-PEX の MHF I のカタログも、相手を自系列のレセプタクルとして書きます。相互に嵌合する、という文は、この二つのカタログの定格欄からは読んでいません。Grand-Tek の比較記事は、MHF I は Hirose の標準的な U.FL ケーブルと適合し、MHF 4L は適合しない、と書きます。GCT の記事は、I-PEX が四つの組み合わせを 30 回まで試験し、異常は無かった、と書きます。記事の文と、両社のカタログの定格文は、別です。注文は、図面の系列と世代でします。

<figure class="assembly">
  <svg viewBox="0 0 720 250" role="img" aria-labelledby="uflFaceTitle uflFaceDesc">
    <title id="uflFaceTitle">U.FLの基板側のピンと、ケーブル側の穴</title>
    <desc id="uflFaceDesc">左は基板上のレセプタクルで中心がピン、右はケーブルのプラグで中心が穴、という概念図です。寸法図でも製品の写真でもありません。</desc>
    <rect x="70" y="168" width="160" height="16" rx="2" fill="#1f4d45"></rect>
    <rect x="118" y="78" width="64" height="90" rx="6" fill="none" stroke="#1f4d45" stroke-width="8"></rect>
    <circle cx="150" cy="118" r="7" fill="#c9843d"></circle>
    <text x="150" y="210" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">基板のレセプタクル</text>
    <text x="150" y="230" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">中心はピン</text>
    <rect x="430" y="48" width="180" height="28" rx="4" fill="#1f4d45"></rect>
    <rect x="478" y="76" width="84" height="78" rx="8" fill="none" stroke="#1f4d45" stroke-width="8"></rect>
    <circle cx="520" cy="118" r="10" fill="#f7f4ee" stroke="#1c1915" stroke-width="2"></circle>
    <text x="520" y="186" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">ケーブルのプラグ</text>
    <text x="520" y="206" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">中心は穴</text>
    <text x="520" y="226" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">上の帯はケーブルの向き</text>
  </svg>
  <figcaption>
    <p>Hirose の U.FL の材料表が書く、中心コンタクトの側です。プラグという語はケーブル側、レセプタクルは基板側です。中心のオス・メスは、その語とは逆に見えます。めっきの色と樹脂の白さは描いていません。</p>
  </figcaption>
</figure>

W.FL は、別の Hirose の系列です。カタログは、公称の嵌合高さを 1.4 mm または 1.65 mm（最大 1.55 mm または 1.85 mm）、U.FL よりおよそ 55% 小さく、基板の占有は 3.4 mm²、インピーダンス 50 Ω、周波数は DC–6 GHz、と書きます。互換の注は、W.FL2 および X.FL とは適合しない、です。基板のパターンは W.FL2 と X.FL と同じ、とも書きます。パターンが同じことと、嵌合することが同じだとは、その注は書いていません。U.FL の挿入工具の図には、W.FL-LP-IN と区別する穴、とあります。工具が分かれていることを、界面が同じだという文には読みません。この W.FL のカタログは、廃止予定、と題に書いています。

<figure class="assembly">
  <svg viewBox="0 0 720 250" role="img" aria-labelledby="heightTitle heightDesc">
    <title id="heightTitle">カタログに出る嵌合高さの最大の例</title>
    <desc id="heightDesc">六本の棒は、U.FLの2.0mmと2.5mm、W.FLの1.55mmと1.85mm、MHF Iの2.5mm、MHF 4の1.2mmです。選んだ最大値の比較で、すべての品種ではありません。</desc>
    <line x1="48" y1="190" x2="690" y2="190" stroke="#1c1915" stroke-width="1"></line>
    <rect x="70" y="62" width="48" height="128" fill="#1f4d45"></rect>
    <rect x="160" y="30" width="48" height="160" fill="#1f4d45"></rect>
    <rect x="250" y="90.8" width="48" height="99.2" fill="#c9843d"></rect>
    <rect x="340" y="71.6" width="48" height="118.4" fill="#c9843d"></rect>
    <rect x="430" y="30" width="48" height="160" fill="#5e584e"></rect>
    <rect x="520" y="113.2" width="48" height="76.8" fill="#5e584e"></rect>
    <text x="94" y="54" text-anchor="middle" fill="#1c1915" font-size="12" font-family="sans-serif">2.0</text>
    <text x="184" y="22" text-anchor="middle" fill="#1c1915" font-size="12" font-family="sans-serif">2.5</text>
    <text x="274" y="82" text-anchor="middle" fill="#1c1915" font-size="12" font-family="sans-serif">1.55</text>
    <text x="364" y="63" text-anchor="middle" fill="#1c1915" font-size="12" font-family="sans-serif">1.85</text>
    <text x="454" y="22" text-anchor="middle" fill="#1c1915" font-size="12" font-family="sans-serif">2.5</text>
    <text x="544" y="105" text-anchor="middle" fill="#1c1915" font-size="12" font-family="sans-serif">1.2</text>
    <text x="94" y="210" text-anchor="middle" fill="#5e584e" font-size="11" font-family="sans-serif">U.FL</text>
    <text x="184" y="210" text-anchor="middle" fill="#5e584e" font-size="11" font-family="sans-serif">U.FL</text>
    <text x="274" y="210" text-anchor="middle" fill="#5e584e" font-size="11" font-family="sans-serif">W.FL</text>
    <text x="364" y="210" text-anchor="middle" fill="#5e584e" font-size="11" font-family="sans-serif">W.FL</text>
    <text x="454" y="210" text-anchor="middle" fill="#5e584e" font-size="11" font-family="sans-serif">MHF I</text>
    <text x="544" y="210" text-anchor="middle" fill="#5e584e" font-size="11" font-family="sans-serif">MHF 4</text>
    <text x="360" y="238" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">単位は mm。棒の長さは、本文に書いた最大の例だけです</text>
  </svg>
  <figcaption>
    <p>選んだ最大値の棒です。U.FL には、この二本のあいだのプラグもあります。MHF I には、ロック付きの 2.9 mm max と、太いケーブルの 3.0 mm max があります。製品の外形図ではありません。</p>
  </figcaption>
</figure>

## SMP と Mini-SMP

IEC 61169-44:2012 は、SMP の押し込み系列の分仕様です。特性インピーダンスは 50 Ω、動作周波数の限度は 40 GHz まで、用途の文はマイクロ波、通信、無線、とその他の分野、と書きます。一般用グレード 1 のピン中心で、limited detent と full detent を分けます。その表の d は 0.38–0.41 mm、limited detent の c は 3.02–3.07 mm、full detent の c は 2.92–2.97 mm です。図面は転載していません。

Rosenberger の SMP は、界面を MIL-STD-348A の Fig. 326、インピーダンスを 50 Ω、周波数を DC–40 GHz、結合をスナップオンとします。GPO と嵌合しうる、と書きます。保持は smooth bore、catchers mitt、limited detent、full detent です。嵌合回数は、full が 100 以上、limited が 500 以上、smooth bore と catchers mitt が 1000 以上です。嵌合力は、full が 68 N 以下、limited が 45 N 以下、smooth bore と catchers mitt が 9 N 以下です。離脱力は、full が 22 N 以上、limited が 9 N 以上、smooth bore と catchers mitt が 2.2 N 以上です。オスのピン A は、どの保持でも Ø 0.36–0.41 mm です。IEC の d の 0.38–0.41 mm と、最小側が違います。一つのピン径にはまとめません。オスの外径 B は、保持で変わります。limited の Ø 3.00–3.10 mm と full の Ø 2.90–3.00 mm は、IEC の c の 3.02–3.07 mm および 2.92–2.97 mm と、参照の文字も端の数字も違います。基板間の最小は 9.05 mm、軸方向のずれは ±0.3 mm、半径方向は界面で 4° です。用途の文は、基板間と、ケーブルから基板、通信、計測、航空宇宙です。

Mini-SMP の製品案内は、標準の SMP のおよそ 70% の大きさ、周波数 DC–65 GHz、インピーダンス 50 Ω、界面は MIL-STD-348A の Fig. 328、と書きます。GPPO および SSMP と嵌合しうる、とも書きます。保持は smooth bore と full detent です。嵌合回数は、full が 100 以上、smooth bore が 500 以上です。基板間の最小は、この案内が 7.94 mm です。別の基板間コネクタの概要は、Mini-SMP を 7.95 mm 以上と書きます。0.01 mm は、資料の書き方の差として置きます。一つの最小にはまとめません。軸方向のずれは ±0.1 mm、半径方向は 4° です。技術資料 18-000-000 の A の行は、プラグ側の列で Ø 0.28–0.33 mm です。SMP のピン A の Ø 0.36–0.41 mm と、この行は違います。

smooth bore は、差し込みとバックプレーン向け、full detent は機械的な負荷の大きい用途向け、と製品案内が分けます。高速の信号は、典型として 10 Gbit/s または 40 Gbit/s、と書きます。Fig. 326 と Fig. 328 は、別の図です。70% という大きさと、ピンの A の行が違うことを、同じ界面の保持違いには読みません。

Hytem の SMPM の案内は、SMPM を Mini SMP、SSMP、GPPO と並べ、MIL-STD-348A の Fig. 328 として標準化された、と書きます。SMP より 30% 小さい、とも書きます。Rosenberger の「およそ 70%」と、この「30% 小さい」は、向きの近い文です。測り方まで同じだとは、このページでは決めていません。寸法と回数は、上の Rosenberger の行を使います。

<figure class="assembly">
  <svg viewBox="0 0 720 220" role="img" aria-labelledby="coupleTitle coupleDesc">
    <title id="coupleTitle">スナップオン、基板への押し込み、基板間のバレット</title>
    <desc id="coupleDesc">左は筒がピンを包む断面、中央は基板のピンへケーブルの穴が被さる断面、右は二枚の基板のあいだに短い中継がある断面です。概念図です。</desc>
    <rect x="36" y="58" width="70" height="44" rx="4" fill="#1f4d45"></rect>
    <rect x="106" y="74" width="28" height="12" fill="#c9843d"></rect>
    <rect x="128" y="52" width="78" height="56" rx="6" fill="none" stroke="#1f4d45" stroke-width="8"></rect>
    <text x="118" y="140" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">MCX・MMCX</text>
    <text x="118" y="160" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">スナップオン</text>
    <rect x="268" y="96" width="120" height="14" rx="2" fill="#1f4d45"></rect>
    <rect x="314" y="70" width="28" height="26" fill="#c9843d"></rect>
    <rect x="300" y="40" width="56" height="36" rx="6" fill="none" stroke="#1f4d45" stroke-width="8"></rect>
    <text x="328" y="140" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">U.FL・MHF</text>
    <text x="328" y="160" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">基板へ押し込む</text>
    <rect x="470" y="36" width="150" height="12" rx="2" fill="#1f4d45"></rect>
    <rect x="470" y="112" width="150" height="12" rx="2" fill="#1f4d45"></rect>
    <rect x="524" y="48" width="42" height="64" rx="6" fill="#e6d7bf" stroke="#1f4d45" stroke-width="3"></rect>
    <text x="545" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMP</text>
    <text x="545" y="176" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">基板のあいだ</text>
    <text x="360" y="206" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">筒の太さとピンの長さは、規格の寸法には合わせていません</text>
  </svg>
  <figcaption>
    <p>結合の種類を分けるための形です。MCX と MMCX が互いに入ること、U.FL と MHF 4 が同じ高さであること、SMP と Mini-SMP が同じピンであることは、描いていません。</p>
  </figcaption>
</figure>

## 取り違えやすい呼び

オスとメスは、中心コンタクトの語と、どちらが相手へ被さるかの語が、ずれます。U.FL では、ケーブルに付く側がプラグで、中心は穴です。基板に付く側がレセプタクルで、中心はピンです。ケーブルが差さるからオス、とだけ読むと、中心が穴の部品を、ピンのある部品として注文します。Hirose の材料表は、その二つを female と male に分けています。

MCX と MMCX の規格は、plug と socket、またはピン中心とソケット中心、と分けます。基板用のカタログが jack と書いてあっても、中心がピンか穴かは、その図面の別の行です。スナップの筒が外側に見えることだけでは、ピンの有無は決まりません。

IPEX という一語は、MHF I も MHF 4 も MHF 4L も指せます。U.FL という一語も、嵌合高さ 2.0 mm のプラグと 2.5 mm のプラグと、VSWR の行が 18 GHz まで続く U.FL(A) を含みます。W.FL は、さらに別の高さと、別の工具です。世代とケーブル外径は、ニックネームの外で指定します。

SMP の基板側は、full detent、limited detent、smooth bore のどれかです。界面の図番号は同じ Fig. 326 でも、オスの B の径と、回数と、力は違います。100 回と 1000 回を平均しません。基板と基板のあいだに入れるバレットは、両端の保持と、長さを図面で見ます。Mini-SMP は Fig. 328 です。SMP のポートへ、Mini-SMP を同じ相手としては扱いません。

MCX の 50 Ω と 75 Ω は、スナップの形が近くても、Amphenol の表では電圧と周波数の書き方が違います。金色、白い樹脂、基板に直付け、という見え方は、系列を一つに決めません。

2000年の FCC の公開通知 DA 00-1087 は、MCX と MMCX を、以前は非標準のアンテナ結合として扱っていた名前の中に挙げます。その通知の読み分けは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) にあります。このページは、MCX をアンテナ専用のコネクタだとは読みません。

## 選定するときに見ること

- 図面で、系列、世代、50 Ω か 75 Ω か、中心がピンか穴か、を見ます。IPEX、メス、ジャック、の一語では注文しません。
- ケーブル外径で、プラグの行が変わります。U.FL は 0.81 mm から 1.37 mm の行があり、プラグはハーネスの仕様で注文する、とカタログが書きます。MHF I は 2.00 mm の行で嵌合高さが 3.0 mm max になります。
- 周波数は、資料の行のまま置きます。MCX は、IEC の 3 GHz、Amphenol の 50 Ω の表の DC–6 GHz、同じページの特徴文の 12 GHz、部品図 29S211-303L5 の DC–6 GHz です。U.FL の定格は 0–8 GHz で、VSWR の行はケーブルによりその先があります。MHF I は 9 GHz までです。SMP は DC–40 GHz、Mini-SMP は DC–65 GHz です。
- 嵌合回数も、一つにしません。MCX と MMCX で確認した表は 500 回以上です。U.FL の耐久条件は 30 回です。MHF I の PRS-1726 の耐久試験も 30 回です。SMP は保持で 100、500、1000 回以上に分かれ、Mini-SMP は 100 回以上と 500 回以上です。毎日外す計測器の BNC の回数を、30 回の系列へ写しません。
- U.FL を外す手順は、カタログが工具を示しています。挿入工具の図は、W.FL 用と区別する穴を持ちます。ケーブルを引いて外す手順は、このページには置きません。
- ねじのトルクは、この系列の表にありません。SMA の 0.8–1.1 N·m を、スナップオンへ写しません。力の行は、MCX の案内が嵌合 20 N 以下、離脱 10 N 以上です。部品図 29S211-303L5 は嵌合 25 N 以下、離脱 8–20 N です。MMCX の IMS のシートは、嵌合 18 N 以下、離脱 6–18 N です。SMP は保持ごとに、上のニュートンです。
- 基板間の SMP は、最小間隔 9.05 mm と、保持の種類と、バレットの長さをセットで見ます。Mini-SMP の 7.94 mm と 7.95 mm は、資料のまま併記します。
- 反射を測るときの入口は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。このページは、誤って押し当てたときの VSWR を数値にしていません。

## 関連するページ

- ねじ系列の結合と周波数の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、上限の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- 中心コンタクトの入れ替えは [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }})、ピン径と誘電体は [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。
- 50 Ω と 75 Ω で形が近い例は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }})、バヨネットとねじの組は [BNCとTNC]({{ '/learn/bnc-tnc/' | relative_url }})、オームの式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。
- 締付トルクの早見に、このスナップオンのニュートンは入れていません。[数値早見]({{ '/learn/quick-reference/' | relative_url }}) と [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。
- 嵌合の注意の並びは [深掘り]({{ '/learn/master/' | relative_url }})、短い定義は [用語集]({{ '/glossary/' | relative_url }}#small-rf) です。

## 出典

寸法、結合、周波数、中心コンタクトの側、回数、力は、次の公開資料で確認しました。界面の図面と、規格の表そのものは転載していません。上の図は、このページで描いたものです。棒の長さは、本文に書いた最大のミリメートルを、2.5 mm が同じ高さになるよう並べたものです。規格本文の有償版は、適用範囲と、ここへ転記した表の範囲で参照しています。相互嵌合を両社が保証する、という文は、Hirose の U.FL カタログと I-PEX の MHF I カタログの定格欄には見つけていません。

- IEC 61169-36:1996 の公開プレビュー（スナップオン、50 Ω、動作周波数の範囲は 3 GHz、商用名 MCX。プラグの A は直径 0.48–0.53 mm。P はスロットとフレアの前で直径最大 3.60 mm。ソケットの C は直径 3.60–3.75 mm、D は直径 3.42–3.48 mm。図面は転載していない）: https://cdn.standards.iteh.ai/samples/7757/3caea0c15f0d4041a5d0935332af0c4f/SIST-EN-61169-36-1998.pdf
- IEC 61169-36:1996（Webstore。題は 50 Ω の type MCX）: https://webstore.iec.ch/en/publication/4738
- Amphenol RF、MCX の製品ページ（50 Ω と 75 Ω。仕様表の 50 Ω は DC–6 GHz、225 V rms、耐久 500 回以上、Push-On、界面 CECC 22220、嵌合 20 N 以下、離脱 10 N 以上。75 Ω の周波数マスは DC–6 GHz、12G 製品は 0–18 GHz、170 V rms。特徴文は 12 GHz まで。図面は転載していない）: https://www.amphenolrf.com/en-us/products/rf-connectors/mcx-connectors/
- Amphenol RF、MCX シリーズ案内（SMB よりおよそ 30% 小さい。50 Ω は DC–6 GHz、75 Ω は DC–6 GHz で 12G 製品は 0–18 GHz。CECC 22220、500 回以上、Push-on、嵌合 20 N 以下、離脱 10 N 以上。典型値で、部品ごとに変わりうる、と注）: https://www.amphenolrf.com/zh-cn/assets/file/4074582308/
- Rosenberger、部品図 29S211-303L5（MCX ライトアングルプラグ。界面は CECC 22220、IEC 61169-36。50 Ω、DC–6 GHz、嵌合回数 500 以上、嵌合力 25 N 以下、離脱力 8 N 以上 20 N 以下。その部品の行）: https://products.rosenberger.com/_ocassets/db/29S211-303L5.pdf
- IEC 61169-52:2015（Webstore。スナップオンの MMCX。50 Ω、動作周波数の限度は 6 GHz まで。嵌合面のミリメートルは、このページでは下の IMS のシートで読んだ）: https://webstore.iec.ch/en/publication/22587
- IMS Connector Systems、MMCX 一般データシート（2019年12月4日。界面は IEC 61169-52。50 Ω、DC–6 GHz、耐久 500 回以上、嵌合力 18 N 以下、離脱力 6 N 以上 18 N 以下。オス側の A は 2.35–2.40 mm、G は 0.38–0.42 mm。メス側の E は 3.00–3.04 mm、中心の公称は 0.70 mm。一部のコネクタは異なりうる、と注。図面は転載していない）: https://prod.imscs.com/sites/default/files/2023-05/mmcx_datasheet.pdf
- Amphenol RF、MMCX（MCX を小さくした 50 Ω。IEC 61169-52。DC–6 GHz、ケーブルに依存。スナップオン、耐久 500 回以上。VSWR は DC–4 GHz で 1.25 以下、4–6 GHz で 1.40 以下）: https://www.amphenolrf.com/en-us/products/rf-connectors/mmcx-connectors/
- Hirose、U.FL シリーズカタログ（2024年9月。50 Ω、定格周波数 0–8 GHz。レセプタクル 15.7 mg、占有 7.7 mm²。耐久 30 回。プラグの中心は female、レセプタクルの中心は male。メスの保持は直径 0.475 mm のピンゲージ。嵌合高さの注に 2.0 mm max と 2.5 mm max。ケーブル外径 0.81–1.37 mm。プラグはハーネス仕様で注文。用途に無線 LAN、Bluetooth、カーナビ、ドローン、PDA、GPS、無線機器、計測器。挿入工具に、W.FL-LP-IN と区別する穴。VSWR の行はケーブルにより 8 GHz より先がある。図面は転載していない）: https://www.hirose.com/en/product/document?clcode=&documentid=ed_U.FL_CAT&documenttype=Catalog&lang=en&productname=&series=U.FL
- Hirose、W.FL シリーズカタログ（嵌合高さの公称 1.4 mm または 1.65 mm、最大 1.55 mm または 1.85 mm。U.FL よりおよそ 55% 小さく、占有 3.4 mm²。50 Ω、DC–6 GHz。W.FL2 と X.FL とは適合しない。パターンはそれらと同じ、と注。廃止予定。図面は転載していない）: https://www.hirose.com/product/document?documentid=D31665_en&documenttype=Catalog&lang=en&series=W.FL
- Hirose、W.FL シリーズの案内（廃止予定。DC–6 GHz、嵌合高さ 1.4 mm / 1.65 mm）: https://www.hirose.com/product/en/products/W.FL
- I-PEX、MHF I カタログ（9 GHz まで、50 Ω、SMT 3.1 × 3.0 mm。嵌合高さは 2.5 mm max、ロック付き 2.9 mm max、外径 2.0 mm のケーブルは 3.0 mm max。VSWR は長さ 100 mm。参照として 5G sub6、Wi-Fi、LTE、LPWA、Bluetooth、GPS）: https://www.i-pex.com/sites/default/files/downloads/pdf/CATALOG_MHF_I_E.pdf
- I-PEX、製品仕様 PRS-1726-07EN（MHF I。DC–9.0 GHz、50 Ω。耐久試験は 30 回。離脱力は初期 5 N 以上、30 回後 3 N 以上。ロック付きの別仕様ではない）: https://www.i-pex.com/sites/default/files/downloads/pdf/PRODSPEC_MHF_I_PRS-1726-07EN.pdf
- I-PEX、MHF 4 カタログ（見出しは 1.2 mm max、9 GHz まで、SMT 2.0 × 2.0 mm、ケーブル外径 0.81 mm。同じカタログが MHF 4L を並べ、嵌合高さに 1.7 mm max と 1.4 mm max、周波数のマスに 12 GHz と 9 GHz）: https://www.i-pex.com/sites/default/files/downloads/pdf/CATALOG_MHF_4_E.pdf
- Grand-Tek、U.FL と MHF の比較記事（MHF I は Hirose の標準的な U.FL ケーブルと適合する。MHF 4L は適合しない、と書く。両社の保証文ではない）: https://www.grand-tek.com/en/ipex-mhf-vs-hrs-u%28w%29fl-series-comparison.aspx
- GCT、U.FL と MHF の相互嵌合の記事（I-PEX の試験として、四つの組み合わせを 30 回まで見て異常は無かった、と書く。両社のカタログの定格文ではない）: https://gct.co/rf-products/demystifying-coaxial-micro-connector-intermatability-hirose-ufl-ipex-mhf
- IEC 61169-44:2012 の公開プレビュー（SMP の押し込み、50 Ω、動作周波数の限度は 40 GHz まで。グレード 1 のピン中心で limited detent と full detent を分ける。d は 0.38–0.41 mm。c は limited が 3.02–3.07 mm、full が 2.92–2.97 mm。図面は転載していない）: https://cdn.standards.iteh.ai/samples/18178/a02126809978479d8d7b820a608e8dab/IEC-61169-44-2012.pdf
- Rosenberger、SMP の章（MIL-STD-348A Fig. 326。50 Ω、DC–40 GHz、スナップオン、GPO と嵌合しうる。回数と力は保持で分かれる。オスの A は Ø 0.36–0.41 mm。オスの B は保持で Ø 2.90–3.23 mm の幅。基板間隔の最小 9.05 mm。図面は転載していない）: https://rin.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMP/Chapter_SMP.pdf
- Rosenberger、SMP の製品案内（基板間とケーブルから基板、DC–40 GHz、5G、計測、航空宇宙。回数は full 100 以上、limited 500 以上、smooth bore 1000 以上）: https://www.rosenberger.com/product/smp/
- Rosenberger、Mini-SMP の製品案内（標準 SMP のおよそ 70%。MIL-STD-348A Fig. 328。DC–65 GHz、50 Ω。GPPO と SSMP と嵌合しうる。full 100 以上、smooth bore 500 以上。基板間隔の最小 7.94 mm。10 Gbit/s または 40 Gbit/s）: https://www.rosenberger.com/product/mini-smp/
- Rosenberger、Mini-SMP 技術資料 18-000-000（プラグ側の A は Ø 0.28–0.33 mm。界面は MIL-STD-348。DC–65 GHz、50 Ω。図面は転載していない）: https://rna.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/Mini-SMP/18-000-000_TD_01.pdf
- Rosenberger、基板間コネクタの概要（Mini-SMP の最小基板間隔を 7.95 mm 以上と書く。SMP は 9.05 mm）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/BoardToBoard_Connectors_Overview_Logo.pdf
- Hytem、SMPM の案内（SMPM を Mini SMP、SSMP、GPPO と並べ、MIL-STD-348A Fig. 328、SMP より 30% 小さい、と書く。このページの寸法と回数は Rosenberger の行）: https://www.hytem.net/en/cables-assemblies-and-connectors/coaxial-connectors/smpm/
- FCC、公開通知 DA 00-1087（2000年5月22日。MCX と MMCX を、以前は非標準として扱っていた名前に含める。読み分けは SMA と RP-SMA のページ）: https://docs.fcc.gov/public/attachments/DA-00-1087A1.pdf
