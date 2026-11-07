---
layout: default
title: "SMA・3.5mm・2.92mm（Kコネクタ）の互換性と違い"
description: "SMA、3.5mm、2.92mm（Kコネクタ）の機械的な嵌合、PTFEと空気誘電体、50Ω、使用周波数の目安、SMAを精密側へ挿すときのピン径・ピン位置とゲージの注意を整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-07
permalink: /learn/sma-35-292-compat/
---

{% include learn-nav.html %}

# SMA・3.5mm・2.92mm（Kコネクタ）の互換性と違い

SMA、3.5 mm、2.92 mm（K コネクタ）は、ねじが同じ 1/4-36 で、機械的には互いに差さることがあります。確認した資料のインピーダンスは、いずれも 50 Ω です。誘電体は違います。SMA の材料欄は PTFE です。3.5 mm と 2.92 mm の製品案内は、空気を誘電体にし、支持のビーズを別に書きます。使用周波数の行も違います。差さること、精密側の界面を傷めないこと、高い側の周波数まで仕様を満たすことは、別です。

ここにある数字は、公開の技術資料と製品案内から取った学習用の目安です。個別の製品が保証する値ではありません。同じ系列でも、資料が複数の周波数を置きます。平均して一つの上限にはしません。

系列の結合と用途は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。ねじの呼びが同じ 1/4-36 でも、中心コンタクトを入れ替えた RP-SMA は別の界面です。[SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。N 型は 5/8-24 で、この三つとは山が掛かり合いません。[N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。カットオフと、26.5 GHz 以外の数字の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。締付、清掃、ピン深さの窓の例は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。径と比誘電率の式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }})、境目の反射の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。短い定義は [用語集]({{ '/glossary/' | relative_url }}#k-connector) です。

## 先に、三つの違い

<div class="table-scroll" markdown="1">

| 項目 | SMA | 3.5 mm | 2.92 mm（K） |
| --- | --- | --- | --- |
| インピーダンス | 50 Ω | 50 Ω | 50 Ω |
| その資料の周波数 | DC–18 GHz | DC–26.5 GHz | DC–40 GHz |
| 誘電体 | 材料欄は PTFE | 製品案内は空気線路。ビーズは別 | 製品案内は空気線路。ビーズは別 |
| オスの嵌合ピン径 | 0.902–0.940 mm | 0.919–0.935 mm | 0.919–0.935 mm |
| 中心導体の径 | 1.245–1.295 mm | 1.51–1.53 mm | 1.26–1.28 mm |
| 外導体の内径 | 最大 4.178 mm | 3.49–3.51 mm | 2.91–2.93 mm |
| ねじ | 1/4-36 UNS | 1/4-36 UNS | 1/4-36 UNS |
| 機械的な嵌合先 | 3.5 mm、2.92 mm | SMA、2.92 mm、K | SMA、3.5 mm、K |

</div>

周波数、インピーダンス、誘電体の材料名、ねじ、嵌合先は、Rosenberger の SMA、RPC-3.50、RPC-2.92 の技術資料と製品案内です。寸法は、各技術資料の界面の表から、意味で揃えて並べました。文字記号は資料ごとに違うので、この表には写していません。図面は転載していません。RPC-3.50 と RPC-2.92 の注は、中心導体、外導体、ピン位置が計量級では異なりうる、と書きます。上の幅を、校正標準の寸法には読みません。

別の資料は、同じ系列に別の周波数を置きます。SMA を 24 GHz まで、3.5 mm を 33 GHz または 34 GHz まで、2.92 mm の一部を 43.5 GHz まで、と書く例は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) に分けてあります。18 と 24、26.5 と 33 と 34、40 と 43.5 は、一つの上限にはしません。

## 機械的に差さる範囲

三つは、結合ねじが 1/4-36 UNS です。SMA の技術資料は、界面を IEC 60169-15、EN 122110、MIL-STD-348 とします。IEC 61169-15:2021 の公開プレビューは、SMA が 3.5 mm および 2.92 mm と機械的に嵌合しうる、と書いています。RPC-3.50 の技術資料は、IEC 60169-23 で、RPC-2.92 および SMA と機械的に互換、と書きます。RPC-2.92 の技術資料は、IEC 61169-35 で、RPC-3.50 および SMA と機械的に互換、と書きます。製品案内の界面番号は IEC 60169-35 です。番号の世代は、このページでは決めません。

Keysight の嵌合の表も、SMA、3.5 mm、2.92 mm を同じ組に置きます。同社は、2.92 mm と 3.5 mm が同じ中心ピンを使う、と書きます。上の表で、二つのオスピン径が 0.919–0.935 mm で揃うことと、同じ側です。

Anritsu のケア資料の特性表は、上限を SMA 18 GHz、3.5 mm と WSMA 26.5 GHz、K（2.92 mm）40 GHz とし、誘電体を SMA は Teflon、ほかは Air、ねじを四つとも 1/4–36 とします。相互の嵌合先に、互いの名を置きます。外導体の欄は、SMA が 4.2 mm、3.5 mm と WSMA が 3.5 mm、K が 2.92 mm です。4.2 と 3.5 と 2.92 を、一つの穴径には読みません。Rosenberger の外導体内径は、SMA が最大 4.178 mm、RPC-3.50 が 3.49–3.51 mm、RPC-2.92 が 2.91–2.93 mm で、Anritsu の欄と同じ側にあります。測り方の図を、このページは重ねていません。

同じ資料の注は、WSMA、3.5 mm、2.92 mm、K が SMA と電気的に互換で、ナット寸法（8 mm）もトルク要求も同じ、と書きます。電気的に互換、は、嵌合したあとも高い側の周波数まで残る、という意味には読みません。WSMA は、SMA へ嵌合したときの電気を良くする設計、と別の注があります。空気誘電体で、外導体の欄は 3.5 mm です。SMA そのものではありません。

2.4 mm と 1.85 mm（V）は、別の組です。Anritsu の同じ表は、ねじを M7 × 0.75 とします。Keysight は、1.85 mm と 2.4 mm の外ねじが、SMA、3.5 mm、2.92 mm より大きい、と書きます。ナットの開口が 8 mm でも、ねじが合う相手ではありません。力で回して入れません。あいだはアダプタです。組の分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) にあります。

<figure class="assembly">
  <svg viewBox="0 0 680 168" role="img" aria-labelledby="groupTitle groupDesc">
    <title id="groupTitle">ねじが直接合う組と、合わない組</title>
    <desc id="groupDesc">左は SMA、3.5 mm、2.92 mm。右は 2.4 mm と 1.85 mm。あいだは破線で、アダプタと書いています。製品の嵌合図ではありません。</desc>
    <rect x="36" y="36" width="250" height="78" rx="10" fill="#1f4d45"></rect>
    <rect x="394" y="36" width="250" height="78" rx="10" fill="#c9843d"></rect>
    <text x="161" y="70" text-anchor="middle" fill="#f4efe6" font-size="15" font-family="sans-serif">SMA・3.5 mm・2.92 mm</text>
    <text x="161" y="94" text-anchor="middle" fill="#f4efe6" font-size="13" font-family="sans-serif">ねじは 1/4-36</text>
    <text x="519" y="70" text-anchor="middle" fill="#1c1915" font-size="15" font-family="sans-serif">2.4 mm・1.85 mm</text>
    <text x="519" y="94" text-anchor="middle" fill="#1c1915" font-size="13" font-family="sans-serif">別のねじ</text>
    <line x1="286" y1="75" x2="394" y2="75" stroke="#5e584e" stroke-width="2" stroke-dasharray="5 4"></line>
    <text x="340" y="62" text-anchor="middle" fill="#5e584e" font-size="13" font-family="sans-serif">アダプタ</text>
    <text x="340" y="146" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">左の組の中でも、周波数の行は系列ごとに違います</text>
  </svg>
  <figcaption>
    <p>枠は、本文で確認した嵌合の組を分けただけです。寸法図でも、互換の保証図でもありません。</p>
  </figcaption>
</figure>

## 誘電体と、50 Ω

SMA の技術資料は、インピーダンスを 50 Ω、材料欄の誘電体を PTFE とします。Pino は、SMA が固体の誘電体で、空気の界面を SMA とは呼ばない、と書きます。Keysight の嵌合表の注も、SMA は Teflon の誘電体、と書きます。Anritsu の表の語は Teflon です。

RPC-3.50 と RPC-2.92 の技術資料も、インピーダンスは 50 Ω です。製品案内は、どちらも空気誘電体で、支持ビーズは PS/PTFE、と書きます。シリーズ技術資料の材料欄は、RPC-3.50 の誘電体を PS、RPC-2.92 を PS と PEEK とします。注は、標準材料であり、個別の製品で異なりうる、と書きます。ビーズの材質を、このページは一つにしません。線路を空気と呼ぶのは、製品案内の文です。

中心導体の径は、空気線路の呼びで違います。RPC-3.50 は 1.51–1.53 mm、外導体内径は 3.49–3.51 mm です。RPC-2.92 は 1.26–1.28 mm と 2.91–2.93 mm です。SMA の中心導体は 1.245–1.295 mm で、注は、この径が 50 Ω を指す、と書きます。外導体内径の最大は 4.178 mm です。50 Ω でも、誘電体が PTFE か空気かで、内外の径の比は違います。式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。

空気の区間を誘電体で満たすと、使える上限は下がり、損失は増える、と Keysight の技術概要はコネクタ一般について書きます。名前のミリメートルは、空気誘電体の径から来ます。SMA は、その呼び方の例外です。概算と、資料ごとの上限は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。

Pino は、SMA 同士では固体の誘電体のあいだに空気の隙間ができ、インピーダンスが乱れる、と書きます。良い品質の SMA と 3.5 mm の方が、その理由で電気的な結果が良いことがある、とも書きます。図は転載していません。隙間の反射は、VSWR とリターンロスで読みます。入口は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。

## 使用周波数の目安

嵌合したあとの上限は、低い側の行を超えて伸びません。Rosenberger の技術資料が置く行は、SMA が DC–18 GHz、RPC-3.50 が DC–26.5 GHz、RPC-2.92 が DC–40 GHz です。RPC-2.92 の製品案内は、一部の製品を 43.5 GHz まで、と書きます。すべての 2.92 mm の行ではありません。

Pino は、3.5 mm の定格を 26.5 GHz、理論上の上限を 34 GHz とし、良い品質の SMA と 3.5 mm の嵌合で、18 GHz まで悪い電気的結果は予期しない、と書きます。26.5 GHz が、SMA を嵌合したあともそのまま残る、とは読みません。18 GHz は、その文の範囲です。製品の保証ではありません。

帯域名の K は、おおよそ 18–27 GHz の区間です。コネクタの K は 2.92 mm の系列です。同じ文字でも、指すものは違います。分けは [規格・周波数]({{ '/spectrum/' | relative_url }}) です。名前の経緯は [第13話]({{ '/manga/13-sma-origin/' | relative_url }})、[第14話]({{ '/manga/14-renihan-35mm/' | relative_url }})、[第11話]({{ '/manga/11-oldfield-k/' | relative_url }}) です。会話はフィクション演出で、発明者とは断定しません。

## 外観で、どこまで分かるか

合わせ面の見え方は、誘電体の位置と揃えて読みます。SMA の技術資料は、オスの誘電体位置を基準面に置きます。固体の PTFE が、ピンのまわりの合わせ面に見えるのは、その行と揃う側です。RPC-3.50 のオスでは、支持の位置が基準面から 2.10–2.20 mm 奥です。RPC-2.92 のオスでは、1.02–1.12 mm 奥です。合わせ面は空気で、ビーズは奥にあります。

メスの SMA は、誘電体位置が 0.00–0.41 mm です。少し奥に見えることだけで、3.5 mm とは呼びません。色も、製品で違います。白い樹脂が見えることだけ、金色であることだけでは、系列は決まりません。

3.5 mm と 2.92 mm は、どちらも空気の合わせ面です。中心ピンの嵌合径も、上の表では同じ 0.919–0.935 mm です。外導体内径は 3.5 mm 側が 3.49–3.51 mm、2.92 mm 側が 2.91–2.93 mm で、目視でその差を決める寸法ではありません。刻印（3.5、2.92、K）と、図面またはゲージで見ます。ナットの二面幅は、三つの技術資料とも六角 8 mm です。レンチが同じでも、系列は決まりません。

<figure class="assembly">
  <svg viewBox="0 0 680 210" role="img" aria-labelledby="faceTitle faceDesc">
    <title id="faceTitle">合わせ面の見え方を三つに分けた概念図</title>
    <desc id="faceDesc">左は固体の誘電体が合わせ面にある形、中央と右は空気で、支持が奥にある形です。中央の穴は右より大きく描いています。製品の写真でも、寸法図でもありません。</desc>
    <circle cx="120" cy="88" r="52" fill="none" stroke="#1f4d45" stroke-width="10"></circle>
    <circle cx="120" cy="88" r="36" fill="#e6d7bf"></circle>
    <circle cx="120" cy="88" r="7" fill="#c9843d"></circle>
    <text x="120" y="168" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA</text>
    <text x="120" y="188" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">合わせ面に誘電体</text>
    <circle cx="340" cy="88" r="52" fill="none" stroke="#1f4d45" stroke-width="10"></circle>
    <circle cx="340" cy="88" r="34" fill="none" stroke="#c9843d" stroke-width="4"></circle>
    <circle cx="340" cy="88" r="7" fill="#c9843d"></circle>
    <text x="340" y="168" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">3.5 mm</text>
    <text x="340" y="188" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">空気。支持は奥</text>
    <circle cx="560" cy="88" r="52" fill="none" stroke="#1f4d45" stroke-width="14"></circle>
    <circle cx="560" cy="88" r="26" fill="none" stroke="#c9843d" stroke-width="4"></circle>
    <circle cx="560" cy="88" r="7" fill="#c9843d"></circle>
    <text x="560" y="168" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">2.92 mm</text>
    <text x="560" y="188" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">空気。穴はより小さい</text>
  </svg>
  <figcaption>
    <p>円の大きさは、本文の外導体内径の大小を、目で追うための比です。3.5 対 2.92 を、正確な縮尺にはしていません。中央と右を、この絵だけで見分けないでください。</p>
  </figcaption>
</figure>

## SMA を 3.5 mm・2.92 mm へ挿すとき

良い品質で、状態の良いもの同士は、系列をまたいでも損傷なく嵌合しうる、と Pino は書きます。前提は、中心接触のずれ、仕様を外れたピン位置、摩耗した外部導体が無いことです。とくに SMA の外部導体の摩耗は、損傷と性能の低下を招く、とも書きます。ピン位置のゲージは、計量級だけのものではない、とも書きます。

別の資料は、SMA の品質のばらつきと、ピンの寸法が、精密側を傷めうる、と書きます。両方を、一つの「差してよい」にはまとめません。外観とゲージで、相手が仕様の内側にあるかを見てから差します。

### ピンの径

Rosenberger の SMA では、オスの嵌合ピン径が 0.902–0.940 mm です。RPC-3.50 と RPC-2.92 のオスは、どちらも 0.919–0.935 mm です。メスの注は、0.919–0.935 mm のピンと嵌合したときの反射、嵌合特性、耐久を満たす寸法、と書きます。スロットのある接触で、メス側の径の数字は、その注に置き換わっています。

SMA の上限 0.940 mm は、精密側の注が書く 0.935 mm より大きいです。SMA の仕様の内側でも、0.935 mm を超えるピンは、その注のピンより太い側にあります。下限 0.902 mm は、0.919 mm より細い側です。太い側は、受けの接触を押し広げる向きです。

Keysight の電気コネクタの表は、同じことを別の言葉で書きます。2.92 mm、3.5 mm、SMA は相互に嵌合し、2.92 mm と 3.5 mm は同じ中心ピンを使う。より大きい SMA オスの中心ピンを 2.92 mm または 3.5 mm へ入れると、コネクタをわずかに劣化させうる。SMA オスは、その目的に取っておいた相手へだけ嵌合する、と同社は勧めています。

同社の 3.5 mm の手順は、仕様の内側の SMA とは互換である、とも書きます。SMA の品質が揃わないため、SMA との嵌合が 3.5 mm をひどく傷めることがある、とも書きます。使う前に、コネクタゲージで中心導体の位置を確認する、と続きます。わずかに劣化する、と、ひどく傷める、は、別のページの文です。一つの程度にはまとめません。

### ピンの位置

ピン位置の符号は、資料で向きが違います。引き算する前に、その資料が基準面のどちらを正と呼ぶかを見ます。

Rosenberger の RPC-3.50 と RPC-2.92 では、D は基準面からピン端が奥へ入る長さで、0.005–0.080 mm です。ゼロより前へ出る値は、その行にありません。計量級では異なりうる、と注があります。同じ社の SMA では、H が −0.18 mm から +0.05 mm です。図の H は、基準面とピン端のあいだに振られています。+0.05 mm は、基準面よりピンが前へ出る側を含みます。

Keysight の 3.5 mm の手順は、中心導体の肩が前へ出ることを許しません。後退の最大は、チャネル用を除き 0.003 インチ（0.08 mm）です。0.08 mm は、上の D の上限 0.080 mm と同じ側です。チャネル用は、少なくとも 0.0002 インチ（0.005 mm）後退し、最大は 0.0021 インチ（0.056 mm）です。前へ出た接触は、相手を恒久的に傷め、メスの指の座屈を起こしうる、と同手順は書きます。この 0.08 mm を、すべての製品の共通許容にはしません。

Anritsu のケア資料は、精密でない相手は公差が緩く、ピン位置が適切でないことがある、と書きます。計測器のコネクタへ差す前に測る、と続きます。ゲージの正の側で許容を外れるとピンが長すぎ、相手を傷めうる。負の側で外れると短すぎ、接続が悪くなりうる、とも書きます。正が長い、というこの符号を、Rosenberger の H の正へ、単位を見ずに写しません。窓の例は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) に、資料の呼びごとに置いてあります。

Marki は、MIL-STD-348B の図を引き、SMA のピンが K よりわずかに長く許される、と書きます。公差の端の SMA、曲がったピン、差し込みながらの回転は、空気誘電体の受けを変形させやすい、とも書きます。図の寸法値は、このページでは MIL-STD-348 の本文から読んでいません。ピン位置としてここに置いた数字は、Rosenberger の公開の界面表です。

### 差す前に見ること

- 刻印で系列を分けます。2.4 mm と 1.85 mm は、ねじが違います。合わない相手を回しません。
- 傷、異物、曲がったピン、めっきの下地が見える傷を、拡大して見ます。傷んだ側を、良い側へ差して移しません。
- 初めて使う相手、とくに計測器のポートへ差す SMA は、その系列のゲージでピン位置を見ます。ゼロは、付属するマスタで取ります。許容は、そのコネクタの仕様です。
- ボディを回してねじ込みません。ナットだけを回します。まっすぐに合わせ、抵抗が強いときは、互換とピン位置を疑って止めます。Anritsu は、過大な力は互換または品質を疑い、ピン位置を測る理由だ、と書きます。
- オスが SMA のとき、Keysight は 3.5 mm または 2.92 mm のメスへの締付を 56 N·cm とします。オスが 3.5 mm または 2.92 mm のときは 90 N·cm です。Anritsu のケア資料は、SMA も 0.9 N·m とします。使うレンチは、相手の機器とコネクタの指定です。読み分けは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。
- 計測器のポートを、作業のたびに SMA へ直接さらしません。ポート側に短いアダプタを置き、そちらを摩耗させます。位置づけは [コネクタの取り扱い]({{ '/learn/connector-care/#connector-saver' | relative_url }}) のコネクタセーバーです。
- 外したあと、精密のメスがオスピンを引き出していることがあります。Keysight の 3.5 mm の手順は、そのピンを次に差すと、メスの中心導体を奥へ押しすぎて傷めうる、と書きます。もう一度ゲージしてから差します。

管理したピン高さの実験では、混ぜた界面が、その記事の条件で、26.5 GHz まで特性を大きく崩す結果にはならなかった、と Pino はまとめています。図と表は転載しません。その結果を、公差を外れた SMA を計測器へ差してよい、という意味には読みません。

## 嵌合の一覧

行が相手、列が自分です。機械的に差さることを、高い側の周波数の保証には読んでいません。

<div class="table-scroll" markdown="1">

| 相手 | SMA | 3.5 mm | 2.92 mm（K） | 2.4 mm・1.85 mm |
| --- | --- | --- | --- | --- |
| SMA | 同じ系列 | 機械的に嵌合しうる | 機械的に嵌合しうる | 直接は合わない |
| 3.5 mm | 機械的に嵌合しうる。ピン径とピン位置を見る | 同じ系列 | 機械的に嵌合しうる。ピン径は同じ行 | 直接は合わない |
| 2.92 mm（K） | 機械的に嵌合しうる。ピン径とピン位置を見る | 機械的に嵌合しうる。ピン径は同じ行 | 同じ系列 | 直接は合わない |
| 2.4 mm・1.85 mm | 直接は合わない | 直接は合わない | 直接は合わない | この組同士は嵌合しうる |

</div>

SMA を精密側へ嵌合したあとの周波数は、低い側です。Rosenberger の行で読むなら、SMA の DC–18 GHz が先に来ます。3.5 mm と 2.92 mm のあいだなら、3.5 mm の DC–26.5 GHz が先に来ます。別の資料の 24、33、34、43.5 を、この文の 18 や 26.5 へ平均しません。

## 関連するページ

- 結合、用途、トルクの例は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) です。
- カットオフと、資料ごとの上限は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- ゲージ、締付、セーバーは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。
- 反射の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }})、50 Ω の式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。
- 名前の経緯は [第13話]({{ '/manga/13-sma-origin/' | relative_url }})、[第14話]({{ '/manga/14-renihan-35mm/' | relative_url }})、[第11話]({{ '/manga/11-oldfield-k/' | relative_url }}) です。
- 中心のピンとソケットを入れ替えた界面は [SMA と RP-SMA]({{ '/learn/sma-rp-sma/' | relative_url }}) です。
- ねじではなくスナップオンや基板への押し込みで小さい系列は [小型RFコネクタ]({{ '/learn/small-rf-connectors/' | relative_url }}) です。
- 帯域名の K との違いは [規格・周波数]({{ '/spectrum/' | relative_url }})、短い定義は [用語集の K コネクタ]({{ '/glossary/' | relative_url }}#k-connector) です。

## 出典

周波数、誘電体、寸法、嵌合、ピンの注意は、次の公開資料で確認しました。界面の図面、実験のグラフ、規格の表は転載していません。上の図は、このページで描いたものです。寸法の表は、各技術資料の数値を、意味で並べ替えたものです。規格本文の有償版は、適用範囲と、ここへ転記した箇条の範囲で参照しています。MIL-STD-348 の図の寸法値は、このページでは本文から読んでいません。

- Rosenberger、SMA シリーズ技術資料 32-000-000_TD（50 Ω、DC–18 GHz、誘電体 PTFE、界面は IEC 60169-15、EN 122110、MIL-STD-348。オスの嵌合ピン径 0.902–0.940 mm。中心導体 1.245–1.295 mm は 50 Ω を指す、と注。外導体内径の最大 4.178 mm。ピン位置 H は −0.18 から +0.05 mm。オスの誘電体位置は基準面。ねじ 1/4-36 UNS。六角 8 mm。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- Rosenberger、RPC-3.50 技術資料 03-000-000_TD（50 Ω、DC–26.5 GHz、材料欄の誘電体は PS。オスピン径 0.919–0.935 mm。中心導体 1.51–1.53 mm、外導体内径 3.49–3.51 mm。ピンの後退 D は 0.005–0.080 mm。支持の位置はオスで 2.10–2.20 mm。ねじ 1/4-36 UNS。メスは 0.919–0.935 mm のピンとの嵌合で反射、嵌合特性、耐久を満たす、と注。IEC 60169-23。RPC-2.92 および SMA と機械的に互換。中心導体、外導体、ピン位置は計量級で異なりうる、と注。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-3.50/03-000-000_TD.pdf
- Rosenberger、RPC-3.50 製品案内（外径 3.50 mm、空気誘電体、PS/PTFE のビーズ、DC–26.5 GHz、3.5 mm、SMA、K、RPC-2.92 と嵌合）: https://www.rosenberger.com/product/rpc-350/
- Rosenberger、RPC-2.92 技術資料 02-000-000_TD（50 Ω、DC–40 GHz、材料欄の誘電体は PS と PEEK。オスピン径 0.919–0.935 mm。中心導体 1.26–1.28 mm、外導体内径 2.91–2.93 mm。ピンの後退 D は 0.005–0.080 mm。支持の位置はオスで 1.02–1.12 mm。ねじ 1/4-36 UNS。メスの注は RPC-3.50 と同じピン径。IEC 61169-35。RPC-3.50 および SMA と機械的に互換。計量級の注あり。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-2.92/02-000-000_TD.pdf
- Rosenberger、RPC-2.92 製品案内（外径 2.92 mm、50 Ω、空気誘電体、PS/PTFE のビーズ、DC–40 GHz、一部 43.5 GHz。オスピンを短くし、メスの中心接触を四分割。2.92 mm、3.5 mm、SMA、K と嵌合。界面の案内は IEC 60169-35。技術資料の IEC 61169-35 と番号の世代は、このページでは決めない）: https://www.rosenberger.com/product/rpc-292/
- IEC 61169-15:2021 の公開プレビュー（SMA、18 GHz、3.5 mm と 2.92 mm との機械的な嵌合）: https://www.en-standard.eu/publicdoc/iec_previews/1032466.pdf
- Keysight、ナレッジセンタ “What RF Connectors are Mateable?”（2022-08-29 更新。SMA、3.5 mm、2.92 mm は同じ組。2.92 mm は 40 GHz まで、3.5 mm は 34 GHz まで、SMA は 24 GHz まで。SMA は PTFE。精度の不足は耐久と性能に効き、精密側との嵌合で摩耗を増やす。接続回数はごく限られ、使う前に調べる、と注）: https://docs.keysight.com/kkbopen/what-rf-connectors-are-mateable-749648236.html
- Keysight、“Coaxial Connectors”、文書 5992-0118（空気の部分を誘電体で満たすと上限が下がり、損失が増える。2.92 mm は 40 GHz まで、SMA および 3.5 mm と嵌合）: https://www.keysight.com/us/en/assets/7018-04561/technical-overviews/5992-0118.pdf
- Keysight、電気コネクタのケア（2.92 mm と 3.5 mm は同じ中心ピン。より大きい SMA オスの中心ピンを入れると、わずかに劣化させうる。SMA オスは、その目的に取っておいた相手へだけ嵌合する。SMA は Teflon。表の周波数は 2.92 mm が 40 GHz、3.5 mm が 34 GHz、SMA が 24 GHz）: https://helpfiles.keysight.com/csg/d9300a/Help/Infiniium-UG/Content/Topics/Connector-Care/connector-elec-care.htm
- Keysight、3.5 mm の手順（仕様内の SMA とは互換。品質のばらつきのため、SMA との嵌合が 3.5 mm をひどく傷めることがある。使う前にゲージ。肩の突き出しは不可。チャネル用を除く後退の最大は 0.003 インチ、0.08 mm。突き出しは相手を恒久的に傷め、メスの指を座屈させうる。外したときにオスピンが引き出されることがある。オス SMA を 3.5 mm または 2.92 mm へは 56 N·cm、オスの 3.5 mm または 2.92 mm は 90 N·cm）: https://helpfiles.keysight.com/scopes/FlexDCA-UG/Content/Topics/Connector-Care/connectors_3_55.htm
- Anritsu、RF and Microwave Connector Care、10100-00031 Rev. D（表 4-2。SMA 18 GHz、Teflon、1/4–36、外導体の欄 4.2 mm。3.5 mm と WSMA は 26.5 GHz、Air、外導体の欄 3.5 mm。K は 2.92 mm、40 GHz、Air、外導体の欄 2.92 mm。2.4 mm と V は M7 × 0.75。注は、WSMA、3.5 mm、2.92 mm、K が SMA と電気的に互換で、ナット 8 mm。精密でない相手はピン位置を測ってから計測器へ差す。正の側の外れはピンが長すぎ、相手を傷めうる）: https://dl.cdn-anritsu.com/en-us/test-measurement/files/Manuals/Instruction-Sheet/10100-00031D.pdf
- Paul Pino、“Intermateability of SMA, 3.5 mm and 2.92 mm Connectors,” Microwave Journal, 2007-03-14（良い品質で良い状態なら、三つの系列は損傷なく嵌合しうる。仕様を外れたピン位置、ずれ、摩耗した SMA の外部導体は損傷を招く。SMA は固体誘電体で、空気界面は SMA と呼ばない。SMA 同士の誘電体のあいだの空気隙間。良い品質の SMA と 3.5 mm で、18 GHz まで悪い電気的結果は予期しない。3.5 mm の定格 26.5 GHz、理論上の上限 34 GHz。図と実験の表は転載していない）: https://www.microwavejournal.com/articles/4457-intermateability-of-sma-3-5-mm-and-2-92-mm-connectors
- Marki Microwave、Brian Baxter、“Is It Safe to Mate SMA and 2.92mm Connectors?”（2024-04-23。MIL-STD-348B の図を引き、SMA のピンが K よりわずかに長く許される、と書く。公差の端、曲がったピン、回転しながらの挿入は、空気誘電体の受けを変形させやすい、とも書く。図の寸法値は、このページでは規格本文から読んでいない）: https://markimicrowave.com/technical-resources/application-notes/is-it-safe-to-mate-sma-and-292mm-connectors/
