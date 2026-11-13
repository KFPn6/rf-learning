---
layout: default
title: "SMAとRP-SMAの違いと見分け方"
description: "SMAとRP-SMA（リバースポラリティSMA）の違いを、外ねじと内ねじ、中心のピンとソケット、オス・メスの呼び方、無線LANで使われてきた規制の経緯、誤って嵌合したときの問題で整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-13
permalink: /learn/sma-rp-sma/
---

{% include learn-nav.html %}

# SMAとRP-SMAの違いと見分け方

SMA と RP-SMA は、どちらもねじ結合の同軸コネクタです。確認した系列資料のインピーダンスは、どちらも 50 Ω です。呼びが近いだけで、中心コンタクトの置き方は違います。標準の SMA では、結合ナットの付く側にピンがあります。RP-SMA として広く書かれるものは、そのピンとソケットを入れ替えます。別の部品図は、同じ題名のまま左ねじを指定します。ナットが回ること、中心導体がつながること、高い周波数まで仕様を満たすことは、別です。

ここにある数字は、公開の規格のプレビューと、メーカーの技術資料から取った学習用の目安です。個別の製品が保証する値ではありません。同じ名前でも、資料が複数の周波数と、複数のねじの呼びを置きます。平均して一つの仕様にはしません。

標準の SMA と、3.5 mm、2.92 mm の嵌合、ピン径、ピン位置は [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。名前の経路は [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。RP-SMA は、その話の BRM や OSM ではありません。系列の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、締付の読み分けは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) と [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。形が近くて指定が違う別の例は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。結合をクイックロックにした QMA は、この中心の入れ替えではありません。ねじの SMA とは嵌合しない、と案内が書きます。[QMAとSMA]({{ '/learn/qma-sma/' | relative_url }}) です。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 項目 | SMA（標準） | RP-SMA |
| --- | --- | --- |
| このページが読んだ規格 | IEC 61169-15:2021（type SMA） | IEC の型名ではない。Rosenberger は、規格化されていない版、と書く |
| インピーダンス | 50 Ω | Rosenberger の SMA Reverse は 50 Ω。Amphenol のカタログも 50 ohms |
| その資料の周波数 | DC–18 GHz | Rosenberger の系列は DC–18 GHz。Amphenol のカタログは、セミリジッドを 0–18 GHz、フレキシブルを 0–12.4 GHz とし、すべてには当てはまらない、と注記する |
| ねじ | Rosenberger のオス列は 1/4-36 UNS-2B、メス列は 1/4-36 UNS-2A | 同じ社の SMA Reverse も、オス列が 2B、メス列が 2A。Amphenol のカタログ界面は .250-36 UNS で、LH の文字は無い。別の部品図は 2B-LH |
| 内ねじ側の中心 | ピン。Rosenberger のオス列の径は Ø 0.902–0.940 mm。IEC のピン側の図には、結合ナットの注がある | ソケット、と TE、Amphenol のカタログ、Rosenberger の寸法表が置く。ピン径の行は、Rosenberger ではメス列 |
| 外ねじ側の中心 | ソケット | ピン。Rosenberger のメス列の F は Ø 0.902–0.94 mm。Amphenol のカタログは、ジャック側に ∅.0355 / ∅.0370 インチ |

</div>

18 GHz と 12.4 GHz を、一つの上限にはしません。2B は内ねじ、2A は外ねじの等級です。.250 インチは 1/4 インチなので、.250-36 は 1/4-36 のインチ表記です。LH は左ねじです。図面は転載していません。

## ねじと、中心のピン

IEC 61169-15:2021 の適用範囲は、外導体内径 4.13 mm、ねじ結合、特性インピーダンス 50 Ω、type SMA です。動作周波数は 18 GHz まで、と書きます。寸法は、ピン中心のコネクタと、ソケット中心のコネクタに分かれます。ピン側の図の注は、結合ナットを前に出した位置、と書きます。ソケット側の図の注に、結合ナットはありません。ピンの径 s は、グレード 1 で 0.902–0.940 mm です。ソケットは、0.902 mm から 0.940 mm のゲージピンと嵌合したときに、リターンロス、嵌合特性、耐久を満たすよう選ぶ、と注が続きます。

Rosenberger の SMA 系列の技術資料も、インピーダンス 50 Ω、周波数 DC–18 GHz です。オス列のねじは 1/4-36 UNS-2B、その列の接触径は Ø 0.902–0.940 mm です。メス列のねじは 1/4-36 UNS-2A です。内ねじの側にピンがある、という並びです。

SMA Reverse の技術資料は、界面を同社の SMA Reverse とし、FCC の part 15、section 15.203 に適合する、IEC 60169-15、MIL-PRF-39012、EN 122110 から導いた、と書きます。ねじの等級は、オス列が 1/4-36 UNS-2B、メス列が 1/4-36 UNS-2A で、標準の SMA と同じ側です。ピン径として読める F は、メス列の Ø 0.902–0.94 mm です。オス列に、そのピン径の行はありません。注は、ばねのある接触で、電気と機械の要求を満たす寸法、と書きます。製品案内の文は、標準に似た界面で、中心コンタクトと誘電体を逆にした、規格化されていない版、です。誘電体の寸法そのものは、このページでは図面から読み直していません。材料欄の誘電体は PTFE です。

同じ社の二つの技術資料で、内ねじはどちらもオス列、外ねじはどちらもメス列です。ピン径の行だけが、標準ではオス列、Reverse ではメス列にあります。0.94 と 0.940 は、資料の書き方の差として置きます。一つの公差にはまとめません。

Amphenol RF のカタログは、逆極性を、界面を逆にしたキーイングだ、と書きます。RP のプラグは female contact、ジャックは male contact、と続きます。例として、逆極性の SMA は標準の SMA と嵌合しない、と書きます。界面図のプラグ側は .250-36 UNS-2B、ジャック側は .250-36 UNS-2A です。ピン径の ∅.0355 と ∅.0370 インチは、ジャック側にあります。0.0355 × 25.4 = 0.9017、0.0370 × 25.4 = 0.9398 です。IEC のピンの 0.902–0.940 mm と同じ側の幅です。図のインチを、規格のミリメートルへ写した値にはしません。

同じカタログは、競合には逆ねじでキーイングするものがある、と書きます。カタログ自身の界面図に、LH の文字はありません。別の書き方です。

Amphenol Connex の部品図 132113RPRT は、題を SMA REVERSE POLARITY PLUG とし、ねじを 1/4-36 UNS-2B-LH と呼びます。図の注に LEFT THREAD とあります。左ねじの内ねじです。同じ社の部品図 132134RP は、題を SMA REVERSE POLARITY の基板ジャックとし、ねじの呼びが 1/4-36 UNS-2A です。このシートから読んだ呼びに、LH はありません。題が reverse polarity でも、ねじの向きは部品図で分かれます。132113RPRT の材料欄は CONTACT PIN という語を使います。その図から、ピンかソケットかの径は読んでいません。

TE の応用ノートは、逆極性を、中心のソケットとピンがどちら側にあるかの入れ替え、と書きます。表は、内ねじと中心ピンを Male / Plug、内ねじと中心ソケットを RP Male / Plug、外ねじと中心ピンを RP Female / Jack、外ねじと中心ソケットを Female / Jack とします。左ねじとは書いていません。

極性という語は、これらの資料では、正と負の電圧を逆にする、とは書かれていません。指しているのは、中心コンタクトの入れ替えか、部品図によっては左ねじです。どちらかは、その資料の図で見ます。

## オスとメスの呼び方

標準の SMA では、中心ピンと、結合ナットが、同じ側にあります。外から六角のナットが見え、中心にピンがある、という覚え方で、プラグとオスが揃います。ジャックは外ねじで、中心は穴です。IEC はオスともメスとも書かず、ピン中心とソケット中心、と分けます。結合ナットの注は、ピン側にあります。

RP-SMA では、その覚え方が割れます。TE、Amphenol のカタログ、Rosenberger の SMA Reverse は、オスまたはプラグを、内ねじの側に置いたまま、中心をソケットにします。メスまたはジャックは外ねじのまま、中心がピンです。中心ピンをオスと呼ぶ慣用で読むと、ピンの付いた外ねじをオスと注文し、届く呼びはジャックです。ナットが付くからオス、とだけ読むと、中心が穴の部品が届きます。

語を一つに決めてから図面を捨てる、という順にはしません。見るのは二つです。結合ナットの内ねじか、胴の外ねじか。中心がピンか、ソケットか。LH の有無は、その二つに足します。

## 合わせ面の見え方

右ねじで、中心を入れ替えた四つの面を、概念図にしました。左の二つが標準の SMA、右の二つが、その資料の RP-SMA です。円の太さは、ナットがある側と、外ねじの側を分けるための違いです。寸法図でも、製品の写真でもありません。

<figure class="assembly">
  <svg viewBox="0 0 720 230" role="img" aria-labelledby="rpFaceTitle rpFaceDesc">
    <title id="rpFaceTitle">標準のSMAと、中心を入れ替えたRP-SMAの合わせ面</title>
    <desc id="rpFaceDesc">四つとも正面から見た概念図です。左は内ねじと中心ピン、その右は外ねじと中心の穴、その右は内ねじと中心の穴、右端は外ねじと中心ピンです。左ねじの部品は描いていません。</desc>
    <circle cx="90" cy="78" r="48" fill="none" stroke="#1f4d45" stroke-width="16"></circle>
    <circle cx="90" cy="78" r="26" fill="#e6d7bf"></circle>
    <circle cx="90" cy="78" r="6" fill="#c9843d"></circle>
    <text x="90" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA プラグ</text>
    <text x="90" y="176" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">内ねじ・ピン</text>
    <circle cx="270" cy="78" r="48" fill="none" stroke="#1f4d45" stroke-width="8"></circle>
    <circle cx="270" cy="78" r="34" fill="none" stroke="#1f4d45" stroke-width="2" stroke-dasharray="3 3"></circle>
    <circle cx="270" cy="78" r="22" fill="#e6d7bf"></circle>
    <circle cx="270" cy="78" r="7" fill="#f7f4ee" stroke="#1c1915" stroke-width="2"></circle>
    <text x="270" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">SMA ジャック</text>
    <text x="270" y="176" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">外ねじ・ソケット</text>
    <circle cx="450" cy="78" r="48" fill="none" stroke="#1f4d45" stroke-width="16"></circle>
    <circle cx="450" cy="78" r="26" fill="#e6d7bf"></circle>
    <circle cx="450" cy="78" r="7" fill="#f7f4ee" stroke="#1c1915" stroke-width="2"></circle>
    <text x="450" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">RP-SMA プラグ</text>
    <text x="450" y="176" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">内ねじ・ソケット</text>
    <circle cx="630" cy="78" r="48" fill="none" stroke="#1f4d45" stroke-width="8"></circle>
    <circle cx="630" cy="78" r="34" fill="none" stroke="#1f4d45" stroke-width="2" stroke-dasharray="3 3"></circle>
    <circle cx="630" cy="78" r="22" fill="#e6d7bf"></circle>
    <circle cx="630" cy="78" r="6" fill="#c9843d"></circle>
    <text x="630" y="156" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">RP-SMA ジャック</text>
    <text x="630" y="176" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">外ねじ・ピン</text>
    <text x="360" y="214" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">太い輪は結合ナット、破線は外ねじの側です。呼びは本文の三つの資料に合わせています</text>
  </svg>
  <figcaption>
    <p>右ねじで中心を入れ替えたときの、正面の違いです。めっきの色、六角の大きさ、樹脂の白さは描いていません。この絵だけで、左ねじの部品まで見分けないでください。</p>
  </figcaption>
</figure>

刻印に RP や REVERSE が無い個体もあります。金に見えること、白い樹脂が見えること、六角ナットがあることだけでは、標準か RP かは決まりません。中心がピンか穴かと、ねじが胴の外側かナットの内側か、図面の LH の有無を見ます。

## 無線LANと、アンテナの結合

米国の 47 CFR 15.203 は、意図的な放射器を、責任者側が用意したアンテナ以外は使えないように設計する、と書いています。恒久的に取り付けたアンテナ、または独特の結合であれば、この節を満たすものとして扱います。壊れたアンテナを使用者が交換できる設計は認め、標準のアンテナジャックや電気コネクタの使用は禁じています。適用されないものもあります。搬送波電流の装置、挙げられた別の節で動作する装置、専門家が設置するもの、設置場所で測定するもの、です。専門家が設置する場合は、設置者が、この部の限度を超えないアンテナを使う責任を負う、と続きます。

TE の応用ノートは、この節を引き、標準の SMA、TNC、BNC、N はアンテナ接続に使えない、と書きます。意図は、その機器と一緒に試験されていないアンテナを、使用者が付けられないようにすることだ、と同ノートは書きます。心配しているのは、より重要な系統の上へ放射が広がることだ、とも書きます。逆極性は、その要求に合わせるために作られ、中心のソケットとピンの側を入れ替え、既存の工具を使えるようにしたものだ、という説明は、そのノートの文です。FCC の規則本文が、RP-SMA という名前を挙げているわけではありません。

Rosenberger の製品案内は、用途を無線 LAN のルータとし、誤った部品をつなぐ可能性から守るため、と書きます。適合の行は、FCC の part 15、section 15.203 です。適するのは無線 LAN のルータだけ、とも書きます。すべての無線 LAN 機器が、このコネクタだ、とは読んでいません。

Amphenol のカタログの用途欄は、アンテナ、ケーブルアッセンブリ、GPS、スペクトラム拡散の無線、WLAN です。WLAN だけのコネクタだ、とは、その欄は書いていません。

2000年5月22日の FCC の公開通知 DA 00-1087 は、以前は非標準として 15.203 を満たすと扱っていたコネクタに、MMCX、MCX、および “reverse polarity, SMA, BNC and TNC” 型を挙げます。入手しやすくなったので、もはや十分ではない、と書き、通知から 30 日後には、これらを 15.203 を満たすものとしては受け取らない、と続きます。前文は、これらを非標準のコネクタとして置いています。標準の SMA を、その文が新たに禁じた、とは読みません。標準のジャックを禁じるのは、15.203 の本文です。

2000年9月28日の DA 00-2225 は、再考の請願を検討するため、DA 00-1087 の発効日を無期限に延ばす、と書きます。新しい発効日は、請願の判断のあとで扱う、とも書きます。このページは、そのあと新しい発効日を置いた公開通知を、開いた資料の中には見つけていません。Rosenberger と TE が 15.203 に沿うと書く現在の文と、2000年の二つの通知を、一つの「いま適法だ」にも、「もう使えない」にもまとめません。機器の認証は、その機器の認可文書を見ます。

同じ逆の中心、という案内は、SMA だけではありません。Rosenberger は BNC と TNC の reverse も、15.203 の行で案内します。BNC の 50 Ω と 75 Ω は、別の違いです。[BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) に分けてあります。

## ねじが回っても、中心はつながらない

右ねじの 1/4-36 では、内ねじのナットは、外ねじの胴に掛かります。標準と、中心を入れ替えた RP は、ねじの等級が同じ側にあります。掛かる組み合わせは、次の二つです。

- 標準のプラグ（内ねじ・ピン）と、RP のジャック（外ねじ・ピン）。中心はピン同士です。
- 標準のジャック（外ねじ・ソケット）と、RP のプラグ（内ねじ・ソケット）。中心はソケット同士です。

ナット同士、外ねじ同士は、ねじが掛かり合う相手ではありません。力で回して山を作りません。

Amphenol のカタログは、逆極性の SMA は標準の SMA と嵌合しない、と書きます。Rosenberger の製品案内は、誤った接続は不可能、と利益の行に書きます。ねじの呼びが同じ、という寸法表と、嵌合しない、という文は、別の文です。ナットが回り始めることを、中心が接続したことには読みません。

ピン径の行は、相手のソケットへ入る寸法として書かれています。ピン同士には、その受けがありません。ナットを締め続けると、ピンの端が互いを押す側になります。曲がったピンは、そのあと正規の相手へも傷を移します。ソケット同士には、中心へ入るピンがありません。外部導体のねじは締まることがあり、高周波の中心は開いたままです。開いた中心を、このページは VSWR の数値にはしていません。測定で読むときの入口は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。

<figure class="assembly">
  <svg viewBox="0 0 720 210" role="img" aria-labelledby="rpMateTitle rpMateDesc">
    <title id="rpMateTitle">右ねじのまま中心が合わない二つの組み合わせ</title>
    <desc id="rpMateDesc">左はピンの端が突き当たる断面、右は穴と穴が向き合う断面です。どちらも概念図で、左ねじの部品は描いていません。</desc>
    <rect x="36" y="46" width="96" height="58" rx="4" fill="#1f4d45"></rect>
    <rect x="132" y="66" width="40" height="18" fill="#c9843d"></rect>
    <rect x="164" y="66" width="40" height="18" fill="#a86b32"></rect>
    <rect x="204" y="46" width="96" height="58" rx="4" fill="#1f4d45"></rect>
    <text x="168" y="132" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">ピン同士</text>
    <text x="168" y="152" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">ナットは掛かりうる</text>
    <rect x="400" y="46" width="96" height="58" rx="4" fill="#1f4d45"></rect>
    <rect x="478" y="64" width="14" height="22" fill="#e6d7bf"></rect>
    <rect x="528" y="64" width="14" height="22" fill="#e6d7bf"></rect>
    <rect x="546" y="46" width="96" height="58" rx="4" fill="#1f4d45"></rect>
    <text x="521" y="132" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">ソケット同士</text>
    <text x="521" y="152" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">中心のピンが無い</text>
    <text x="360" y="188" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">右ねじの 1/4-36 で、中心を入れ替えた組み合わせだけを描いています</text>
  </svg>
  <figcaption>
    <p>断面は、ピンが当たることと、穴が向き合うことを分けるための形です。製品の嵌合図でも、損傷の保証図でもありません。</p>
  </figcaption>
</figure>

左ねじの 2B-LH は、右ねじの外ねじには進みません。山が合わない相手を、力で回しません。

3.5 mm と 2.92 mm は、標準の SMA と同じく 1/4-36 の組です。右ねじの RP とナットが掛かる相手は、上と同じくピン同士か、ソケット同士です。標準の SMA のピンを、精密側のソケットへ入れて界面を傷める話とは、当たる場所が違います。そちらのピン径とゲージは [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。精密側のポートを守る話は [深掘り]({{ '/learn/master/' | relative_url }}) です。

## 選定するときに見ること

- 機器側とケーブル側の両方を、図面で見ます。内ねじか外ねじか、中心がピンかソケットか、LH の文字があるか、の三つです。カタログの male という一語では注文しません。
- 六角ナット、金色、白い樹脂だけでは決めません。中心を、正面から見ます。
- 周波数は、資料の行のまま置きます。Rosenberger の SMA Reverse は DC–18 GHz です。Amphenol のカタログは、セミリジッドを 0–18 GHz、フレキシブルを 0–12.4 GHz とし、典型値でありすべてには当てはまらない、と注記します。部品図 132134RP は、その部品を DC–18 GHz とします。18 と 12.4 を平均しません。
- 嵌合回数も、一つにしません。Rosenberger の SMA Reverse は 100 回以上です。材料欄では、ボディと結合ナットが CuZn です。標準の SMA 系列は、CuBe またはステンレスで 500 回以上、CuZn で 100 回以上、と別の技術資料が書きます。100 回を、Reverse だけの少なさには読みません。部品図 132134RP は、その部品を 500 回以上とします。
- 締付は、RP の資料を見ます。Rosenberger の SMA Reverse は、推奨 0.5 N·m、試験の上限 0.6 N·m です。標準の SMA の、ステンレスまたは CuBe の 0.8–1.1 N·m を、この系列へ写しません。標準側の読み分けは [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。
- 挿入損失の行も、資料で違います。標準の SMA 系列は ≤ 0.04 × √f、SMA Reverse は ≤ 0.1 × √f です。f は GHz、単位は dB です。一つの式にはしません。
- 3.5 mm と 2.92 mm のポートへ、RP-SMA を常用の相手にはしません。直接のねじが合う標準の SMA でも、ピンの確認が先です。
- 15.203 の対象になる機器では、アンテナは、責任者側が用意したもの、という規則の側を見ます。形が合った別のアンテナへ替える手順は、このページには置きません。変換用のアダプタは、Rosenberger が Reverse adaptors を製品の列に挙げます。使うときは、両端のねじと中心を図面で見ます。認証の範囲かは、その機器の認可文書です。

## 関連するページ

- 標準の SMA と、3.5 mm、2.92 mm のピン径、誘電体、ゲージは [互換のページ]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。クイックロックの QMA は [QMAとSMA]({{ '/learn/qma-sma/' | relative_url }}) です。
- 結合と周波数の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、上限の読み分けは [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- 締付、清掃、ピン位置は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }})、トルクの行は [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。
- 形が近くてオームが違う例は [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }})、反射の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) です。
- SMA という名前の経路は [第13話]({{ '/manga/13-sma-origin/' | relative_url }}) です。会話はフィクション演出で、RP-SMA の起源話ではありません。
- 短い定義は [用語集の RP-SMA]({{ '/glossary/' | relative_url }}#rp-sma) です。スナップオンの MCX、MMCX と、基板実装の U.FL、SMP は [小型RFコネクタ]({{ '/learn/small-rf-connectors/' | relative_url }}) です。同じ 2000 年の通知が MCX と MMCX の名を挙げます。大きさが違う N 型との見分けは [N型とSMA]({{ '/learn/n-sma/' | relative_url }}) です。

## 出典

ねじ、ピンの側、周波数、規制の文は、次の公開資料で確認しました。界面の図面と、規格の表そのものは転載していません。上の図は、このページで描いたものです。0.9017 と 0.9398 は、カタログのインチに 25.4 を掛けた計算です。規格本文の有償版は、適用範囲と、ここへ転記した表の範囲で参照しています。DA 00-1087 のあと新しい発効日を置いた通知は、このページで開いた資料の中にはありません。

- IEC 61169-15:2021 の公開プレビュー（外導体内径 4.13 mm、ねじ結合、50 Ω、type SMA。動作周波数は 18 GHz まで。ピン側の図の注に結合ナット。ピンの s は 0.902–0.940 mm。ソケットは、その幅のゲージピンとの嵌合でリターンロス、嵌合特性、耐久を満たす、と注。図面は転載していない）: https://cdn.standards.iteh.ai/samples/101730/41a5144464e04f98bbd9f6f02635cb3d/IEC-61169-15-2021.pdf
- IEC 61169-15:2021（Webstore。題は type SMA）: https://webstore.iec.ch/en/publication/62310
- Rosenberger、SMA シリーズ技術資料 32-000-000_TD（50 Ω、DC–18 GHz。オス列のねじは 1/4-36 UNS-2B、接触径は Ø 0.902–0.940 mm。メス列は 1/4-36 UNS-2A。挿入損失 ≤ 0.04 × √f [GHz] dB。嵌合回数は CuBe またはステンレスが 500 以上、CuZn が 100 以上。推奨トルクは CuBe またはステンレスが 0.8–1.1 N·m、CuZn が 0.5 N·m。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/SMA/32-000-000_TD_01.pdf
- Rosenberger、SMA Reverse 技術資料 32R-000-000_TD（界面は Rosenberger SMA Reverse。FCC part 15 section 15.203 に適合、IEC 60169-15、MIL-PRF-39012、EN 122110 から導いた、と記す。オス列は 1/4-36 UNS-2B、メス列は 1/4-36 UNS-2A。ピン径の F はメス列の Ø 0.902–0.94 mm。オス列にその行は無い。50 Ω、DC–18 GHz、誘電体 PTFE。ボディと結合ナットの材料欄は CuZn。挿入損失 ≤ 0.1 × √f [GHz] dB。嵌合回数 100 以上。推奨トルク 0.5 N·m、試験の上限 0.6 N·m。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/COM/Reverse_SMA_BNC_TNC/32R-000-000_TD_01.pdf
- Rosenberger、Reverse SMA / BNC / TNC の製品案内（規格化されていない版。中心コンタクトと誘電体を逆にする。無線 LAN のルータで、誤った部品の接続を防ぐ。SMA Reverse は 50 Ω、DC–18 GHz、逆の中心コンタクト、嵌合回数 100 以上。利益の行に、誤った接続は不可能。適するのは無線 LAN のルータだけ。Reverse adaptors を製品の列に置く。BNC と TNC の reverse も、同じ 15.203 の行で案内する）: https://www.rosenberger.com/product/reverse-sma-bnc-tnc/
- Amphenol RF、Reverse Polarity のカタログ（頁 149–152。界面を逆にしたキーイング。RP プラグは female contact、ジャックは male contact。逆極性 SMA は標準 SMA と嵌合しない。競合には逆ねじのキーイングがある、と書く。界面図のプラグは .250-36 UNS-2B、ジャックは .250-36 UNS-2A で、LH の文字は無い。ジャック側のピン径は ∅.0355 / ∅.0370 インチ。インピーダンス 50 ohms。セミリジッドは 0–18 GHz、フレキシブルは 0–12.4 GHz。典型値であり、すべてには当てはまらない、と注。用途にアンテナ、ケーブルアッセンブリ、GPS、スペクトラム拡散の無線、WLAN。図面は転載していない）: https://xonstorage.z8.web.core.windows.net/pdf/amphenol_9019990_apr22_xonlink.pdf
- Amphenol Connex、部品図 132113RPRT（題は SMA REVERSE POLARITY PLUG。ねじは 1/4-36 UNS-2B-LH。注に LEFT THREAD。材料欄の語は CONTACT PIN。ピンかソケットかの径は、このページでは読んでいない）: https://www.amphenolrf.com/en-us/assets/file/4065786192/
- Amphenol Connex、部品図 132134RP（題は SMA REVERSE POLARITY の基板ジャック。ねじの呼びは 1/4-36 UNS-2A で、読んだシートに LH は無い。50 Ω、DC–18 GHz、耐久 500 回以上。その部品の行であり、系列全体の値ではない）: https://www.amphenolrf.com/en-us/assets/file/4065789560/
- TE Connectivity、応用ノート AN-00600（2023年8月。標準の SMA、TNC、BNC、N は、FCC Title 47 Part 15.203 によりアンテナ接続に使えない、と書く。逆極性は中心のソケットとピンの側を入れ替える。表は、内ねじとピンを Male/Plug、内ねじとソケットを RP Male/Plug、外ねじとピンを RP Female/Jack、外ねじとソケットを Female/Jack。図は転載していない）: https://www.te.com/content/dam/te-com/documents/appliances/global/an-00600%20-%20Standard%20vs.%20Reverse%20Polarity%20(RP)%20SMA%20Connectors-0823.pdf
- 47 CFR 15.203（意図的な放射器は、責任者側が用意したアンテナ以外を使えない設計とする。恒久に取り付けたアンテナ、または独特の結合で足りる。標準のアンテナジャックは禁じる。専門家の設置など、適用されない場合を列挙する）: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-C/section-15.203
- FCC、公開通知 DA 00-1087（2000年5月22日。MMCX、MCX、および reverse polarity, SMA, BNC and TNC 型を、以前は 15.203 を満たす非標準として扱っていた。入手しやすくなったので、もはや十分ではない。30 日後からは受け取らない、と書く）: https://docs.fcc.gov/public/attachments/DA-00-1087A1.pdf
- FCC、公開通知 DA 00-2225（2000年9月28日。再考の請願のため、DA 00-1087 の発効日を無期限に延ばす。新しい発効日は、請願の判断のあとで扱う、と書く）: https://docs.fcc.gov/public/attachments/DA-00-2225A1.pdf
