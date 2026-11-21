---
layout: default
title: "1.35mm（E）と1.85mm・1.0mmの違いと見分け方"
description: "1.35mm（E）は1.85mm（V）とも1.0mm（W、W1）とも別の嵌合の組で、ねじが違い直接は嵌合しないこと、1.85mmは2.4mmと同じ組、1.0mmはその組にも1.35mmにも入らないこと、アダプタ、出典ごとの周波数の目安、精密界面の注意を整理します。値は学習用で、製品の保証値ではありません。"
lastmod: 2026-11-21
permalink: /learn/1-35/
---

{% include learn-nav.html %}

# 1.35mm（E）と1.85mm・1.0mmの違いと見分け方

1.35 mm は、1.85 mm とも、1.0 mm とも、別の嵌合の組です。確認した資料では、ねじの呼びが違います。直接は嵌合しません。合わない相手を、力で回しません。あいだはアダプタです。

1.85 mm は、資料が V とも呼びます。同じ組に入るのは 2.4 mm です。1.0 mm は、その組には入りません。資料が W や W1 とも呼びます。1.35 mm は、資料が E や E Connector とも呼びます。そのどちらにも入りません。帯域名の V（おおよそ 40–75 GHz）と、帯域名の W（おおよそ 75–110 GHz）は、コネクタの V でも、コネクタの W でもありません。Rosenberger の案内が E-Band と括弧に置くのは、60 から 90 GHz です。コネクタの E とは、別の言葉です。このサイトの帯域表は、V と W を置いていて、E の区間は置いていません。分けは [規格・周波数]({{ '/spectrum/' | relative_url }}) です。

ここにある数字は、IEC の公開案内、メーカーと計測器メーカーの公開資料から取った学習用の目安です。個別の製品が保証する値ではありません。同じ系列でも、資料が複数の周波数と、複数のトルクと、複数の開口を置きます。平均して一つの上限にはしません。

1.85 mm と 1.0 mm のあいだのねじ、嵌合しないこと、アダプタは [1.85 mm と 1.0 mm]({{ '/learn/1-85-10/' | relative_url }}) です。このページは、その二つのあいだを、もう一度は書きません。2.4 mm と 1.85 mm の溝、ピン径、ピン位置は [2.4 mm と 1.85 mm]({{ '/learn/2-4-185/' | relative_url }}) です。2.92 mm と 2.4 mm のあいだは [2.92 mm と 2.4 mm]({{ '/learn/2-92-24/' | relative_url }}) です。SMA、3.5 mm、2.92 mm の組は [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。置くのは、1.35 mm と 1.85 mm・1.0 mm のあいだのねじ、嵌合しないこと、アダプタ、見分け、取り扱いです。カットオフと、資料ごとの上限の置き方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。締付、清掃、ゲージの一般の手順は [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。系列の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、嵌合の原則は [深掘り]({{ '/learn/master/' | relative_url }}) です。名前の話は [第11話]({{ '/manga/11-oldfield-k/' | relative_url }})、2.4 mm の経緯は [第15話]({{ '/manga/15-botka-24mm/' | relative_url }}) です。会話はフィクション演出で、発明者とは断定しません。このページでも、E や V、W の経緯と、発明者と、商標の正式名は決めません。短い定義は [用語集の 1.35 mm]({{ '/glossary/' | relative_url }}#connector-1-35) と [用語集の V コネクタ]({{ '/glossary/' | relative_url }}#v-connector) と [用語集の 1.0 mm]({{ '/glossary/' | relative_url }}#connector-1-0) です。

## 先に、確認できた違い

<div class="table-scroll" markdown="1">

| 項目 | 1.35 mm（E） | 1.85 mm（V） | 1.0 mm（W、W1） |
| --- | --- | --- | --- |
| インピーダンス | 50 Ω | 50 Ω | 50 Ω |
| このページで読んだねじ | Rosenberger のプラグは M5.5 × 0.5-6H、ジャックは M5.5 × 0.5-6g。案内の行は M5.5 × 0.5 | 案内の行は M7 × 0.75。等級付きの呼びは別ページ | 案内の行は M4 × 0.7。等級付きの呼びは別ページ |
| 同じ組 | 読んだ表では、この系列だけ | 2.4 mm | 読んだ表では、この系列だけ |
| その資料の周波数 | IEC の公開案内は 90 GHz まで。製品案内と技術資料と案内の行は 90 GHz。別の案内の行は 90（92）GHz | 同じ案内の行は 65（70）GHz。ほかの数字は別ページ | 同じ案内の行は 110 GHz。別の案内の行は 110（120）GHz。ほかの数字は別ページ |
| ナットの開口の例 | プラグの H は hex 8。案内の二面幅は 8 mm。別の案内は 8（7）mm。トルクレンチの例は 8 mm | 案内の二面幅は 8 mm。5/16" などの行は別ページ | 案内の二面幅は 6 mm。試験ポートの別開口は別ページ |

</div>

90 と 92 は、一つの上限にはしません。65 と 70 と 110 と 120 も、1.35 mm の更新には読みません。hex 8 と 8 mm と 8（7）mm は、開口の例です。ねじが同じ、という意味には読みません。6H と 6g は、同じ系列のプラグとジャックの等級です。M5.5 × 0.5 と M7 × 0.75 と M4 × 0.7 を一つにする文字ではありません。

## ねじが違うので、直接は嵌合しない

IEC 61169-65:2021 の Webstore の題は、外導体内径 1,35 mm、ねじ結合、特性インピーダンス 50 Ω です。公開されている要旨は、動作周波数は 90 GHz まで、計測が主な用途、と書きます。その要旨に、ねじの呼びも、1.85 mm や 1.0 mm との嵌合も、このページは読んでいません。有償の本文から、ねじの行は写していません。刊行日は 2021-01-19 です。

Rosenberger の RPC-1.35 の技術資料は、界面を IEC 61169-65、プラグの F を M5.5 x 0.5 - 6H、ジャックの F を M5.5 x 0.5 - 6g とします。同じ資料の電気の行は 50 Ω、DC to 90 GHz です。製品案内は、インピーダンス 50 Ω、周波数範囲 DC to 90 GHz、空気誘電体と PEEK のビーズ、と書きます。規格化については、製品案内が IEC 61169-65 と IEEE Std 287 を in progress と書き、2022年1月付けの案内が IEC 61169-65 と IEEE STD 287 による規格化を、供給がメーカーに依らないことの理由に置きます。どちらを現在の状態とするかは、このページでは決めません。

その案内は、この界面を E Connector とも呼び、1.85 mm と 1.00 mm のあいだを埋める、と書きます。比較の表は、1.35 mm のねじを M5.5 x 0.5、1.85 mm を M7 x 0.75、1.00 mm を M4 x 0.7 とします。設計の主語は、その案内と、別のメーカーの案内とで違います。発明者と、商標の正式名は、このページでは決めません。

SPINNER の案内も、この界面を E Connector と呼び、1.85 mm と 1.00 mm のあいだを埋める、と書きます。比較の表のねじは、M5.5x0.5、M7x0.75、M4x0.7 です。IEC については 61169-65、IEEE については precision connector standard P287、と書きます。STD 287 と、Std 287 と、P287 を、一つの番号の写しにはしません。

M5.5 は呼び径 5.5 mm、ピッチ 0.5 mm です。M7 は呼び径 7 mm、ピッチ 0.75 mm です。M4 は呼び径 4 mm、ピッチ 0.7 mm です。5.5 と 7 と 4 を、一つのねじ径にはしません。0.5 と 0.75 と 0.7 を、一つのピッチにはしません。近い、と見て力で山を作りません。

プラグの 6H とジャックの 6g は、Rosenberger が同じ呼びに付ける等級です。オスとメスで等級の文字が違うことと、M5.5 × 0.5 と M7 × 0.75 と M4 × 0.7 が別のねじであることは、別です。

Keysight の嵌合の表、同じ社の電気コネクタの表、同じ社のレンチ表に、1.35 mm の行は、このページでは読んでいません。Anritsu の公開表（10450-00040、Rev. AE）の列は、V（1.85 mm）と W1（1 mm）のあとが 0.8 mm です。1.35 mm の列はありません。同じ社のケア資料（10100-00031、Rev. D）の特性表にも、1.35 mm の行は、このページでは読んでいません。無い行は、M5.5 × 0.5 でも、90 GHz でも埋めません。

0.8 mm は、さらに小さい別の系列です。Anritsu のその公開表は、嵌合先をその列だけ、ねじを M3.5 x 0.35 とします。1.35 mm の組には入りません。1.0 mm とのあいだは [0.8 mm と 1.0 mm]({{ '/learn/0-8-10/' | relative_url }}) です。ここでも、主題にはしません。

<figure class="assembly">
  <svg viewBox="0 0 720 210" role="img" aria-labelledby="groupTitle groupDesc">
    <title id="groupTitle">三つの嵌合の組。1.35 mm は、1.85 mm にも 1.0 mm にも入らない</title>
    <desc id="groupDesc">左は 1.85 mm。ねじは M7 × 0.75 で、2.4 mm と同じ組です。中央は 1.35 mm。ねじは M5.5 × 0.5 で、読んだ表の嵌合先はその系列だけです。右は 1.0 mm。ねじは M4 × 0.7 です。枠と枠のあいだは破線で、アダプタと書いています。製品の嵌合図ではありません。</desc>
    <rect x="16" y="36" width="200" height="108" rx="10" fill="#c9843d"></rect>
    <rect x="260" y="36" width="200" height="108" rx="10" fill="#1f4d45"></rect>
    <rect x="504" y="36" width="200" height="108" rx="10" fill="#5c4a32"></rect>
    <text x="116" y="68" text-anchor="middle" fill="#1c1915" font-size="15" font-family="sans-serif">1.85 mm（V）</text>
    <text x="116" y="90" text-anchor="middle" fill="#1c1915" font-size="13" font-family="sans-serif">ねじは M7 × 0.75</text>
    <text x="116" y="112" text-anchor="middle" fill="#1c1915" font-size="12" font-family="sans-serif">2.4 mm と同じ組</text>
    <text x="360" y="68" text-anchor="middle" fill="#f4efe6" font-size="15" font-family="sans-serif">1.35 mm（E）</text>
    <text x="360" y="90" text-anchor="middle" fill="#f4efe6" font-size="13" font-family="sans-serif">ねじは M5.5 × 0.5</text>
    <text x="360" y="112" text-anchor="middle" fill="#f4efe6" font-size="12" font-family="sans-serif">嵌合先はその系列だけ</text>
    <text x="604" y="68" text-anchor="middle" fill="#f4efe6" font-size="15" font-family="sans-serif">1.0 mm（W、W1）</text>
    <text x="604" y="90" text-anchor="middle" fill="#f4efe6" font-size="13" font-family="sans-serif">ねじは M4 × 0.7</text>
    <text x="604" y="112" text-anchor="middle" fill="#f4efe6" font-size="12" font-family="sans-serif">嵌合先はその系列だけ</text>
    <line x1="216" y1="90" x2="260" y2="90" stroke="#5e584e" stroke-width="2" stroke-dasharray="5 4"></line>
    <line x1="460" y1="90" x2="504" y2="90" stroke="#5e584e" stroke-width="2" stroke-dasharray="5 4"></line>
    <text x="360" y="178" text-anchor="middle" fill="#5e584e" font-size="13" font-family="sans-serif">あいだはアダプタ。開口が同じ 8 mm 級でも、枠は分かれます</text>
  </svg>
  <figcaption>
    <p>枠は、本文で確認した嵌合の組を分けただけです。寸法図でも、互換の保証図でもありません。左の組の中の溝、ピン径、ピン位置は [2.4 mm と 1.85 mm]({{ '/learn/2-4-185/' | relative_url }}) です。左と右のあいだの詳細は [1.85 mm と 1.0 mm]({{ '/learn/1-85-10/' | relative_url }}) です。</p>
  </figcaption>
</figure>

## 外観で、どこまで分かるか

この三つは、ねじが掛からないことで分かれます。指で回し始めて山が進まない相手は、その対ではありません。Anritsu のケア資料は、嵌合の抵抗を、芯のずれ、ねじの変形、またはコネクタが互換でないことの印とし、止めてから原因を見る、と書きます。抵抗のあるところから、力で山を切りません。

金色に見えること、全体が小さいこと、中心がピンか穴かだけでは、系列は決まりません。合わせ面が空気に見えることでも、この三つは分かれません。Rosenberger の製品案内は、RPC-1.35 を空気誘電体と PEEK のビーズ、と書きます。RPC-1.85 と RPC-1.00 も、別のページが引く製品案内では、空気誘電体と PEEK のビーズです。白い樹脂が合わせ面に見えるかどうかは、SMA と精密側を分けるときの話です。

同じ 8 mm 級の開口でも、系列は決まりません。Rosenberger の RPC-1.35 のプラグの H は hex 8 です。ジャックの H の欄は、その行では空です。案内の比較は、1.35 mm も 1.85 mm も二面幅 8 mm、1.00 mm は 6 mm、と書きます。SPINNER の比較は、1.35 mm を 8（7）mm、1.85 mm を 8 mm、1.0 mm を 6 mm とします。8 と 8（7）を、一つの二面幅にはしません。hex 8 と 8 mm も、同じです。案内の工具表は、8 mm のトルクレンチと、5 mm、6 mm、7 mm、8 mm のコンビレンチを置きます。7 mm が工具の列にあることと、ナットの二面幅が 7 mm であることとは、別です。

Rosenberger の案内は、1.35 mm を、3.50 mm、2.92 mm、2.40 mm、1.85 mm の多くと同じトルクレンチで使える、と書きます。使えるレンチが重なることと、ねじが合うことは、別です。開口が 8 mm でも、M7 × 0.75 の相手へは進めません。

刻印（1.35、E、1.85、V、1.0、1.00、W、W1）と、図面で見ます。E の文字だけでは、案内が E-Band と呼ぶ区間と、コネクタの E が分かれません。V と W も、同じです。[規格・周波数]({{ '/spectrum/' | relative_url }}) です。正式な商標名は、このページでは決めません。

プッシュプルは、任意です。Rosenberger の案内も、SPINNER の案内も、push-pull を option と書きます。比較の表は、1.35 mm の任意のプッシュプルを Yes、1.85 mm と 1.00 mm を No とします。付いていない 1.35 mm を、1.85 mm や 1.0 mm とは呼びません。付いていることを、相手の組へ進む許可には読みません。

外導体の呼びも、一つの測定値にはなりません。IEC の題は 1,35 mm です。技術資料の B は、どちらの性別も 1.34–1.36 mm です。注は、計量級では異なりうる、です。文字がどの縁を指すかは、その資料の図の記号のままです。目視の穴の測定にはしません。案内の比較が書く外導体の径は 1.35 mm です。題の 1,35 と、B の幅と、比較の 1.35 を、一つの測定値にはしません。図面は転載していません。

<figure class="assembly">
  <svg viewBox="0 0 680 210" role="img" aria-labelledby="nutTitle nutDesc">
    <title id="nutTitle">開口の例が同じでも、ねじが違えば系列は違う、という概念図</title>
    <desc id="nutDesc">左の六角は開口 8 mm 級の例で、下の文字は M7 × 0.75 です。右の六角も開口 8 mm 級の例で、下の文字は M5.5 × 0.5 です。製品の写真でも、ねじの図面でもありません。</desc>
    <polygon points="150,36 214,36 246,92 214,148 150,148 118,92" fill="none" stroke="#c9843d" stroke-width="8"></polygon>
    <text x="182" y="96" text-anchor="middle" fill="#1c1915" font-size="16" font-family="sans-serif">8 mm 級</text>
    <text x="182" y="176" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">1.85 mm 側の例</text>
    <text x="182" y="196" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">ねじは M7 × 0.75</text>
    <polygon points="486,36 550,36 582,92 550,148 486,148 454,92" fill="none" stroke="#1f4d45" stroke-width="8"></polygon>
    <text x="518" y="96" text-anchor="middle" fill="#1c1915" font-size="16" font-family="sans-serif">8 mm 級</text>
    <text x="518" y="176" text-anchor="middle" fill="#1c1915" font-size="14" font-family="sans-serif">1.35 mm 側の例</text>
    <text x="518" y="196" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">ねじは M5.5 × 0.5</text>
  </svg>
  <figcaption>
    <p>六角は、本文の hex 8 と 8 mm を、開口の例として並べただけです。正確な二面幅の図ではありません。SPINNER の 8（7）mm と、コンビレンチの 7 mm は、この絵に入れていません。レンチが同じでも、系列は決まりません。</p>
  </figcaption>
</figure>

## 使用周波数の目安

周波数は、学習用の目安です。製品が保証する上限ではありません。動作の行と、アダプタ自身の行と、案内がカットオフと書く行は、別の数字です。

1.35 mm は、一つの数字に揃いません。IEC 61169-65:2021 の Webstore の公開案内は、90 GHz までです。Rosenberger の製品案内と技術資料は、DC から 90 GHz までです。同じ社の案内の比較は、上限 90 GHz です。SPINNER の設計の行は、DC to 90 GHz（92 GHz）です。比較の行は、90（92）GHz です。90 を、92 の更新には読みません。92 を、公開要旨の 90 の更新にも読みません。

1.85 mm と 1.0 mm の、このページが案内から並べる行は、比較のセルだけです。Rosenberger の比較は、1.85 mm を 65（70）GHz、1.00 mm を 110 GHz とします。SPINNER の比較は、1.85 mm を 65（70）GHz、1.0 mm を 110（120）GHz とします。65 と 70 と、110 と 120 を、一つの上限にはしません。残りの資料は [1.85 mm と 1.0 mm]({{ '/learn/1-85-10/' | relative_url }}) と [2.4 mm と 1.85 mm]({{ '/learn/2-4-185/' | relative_url }}) です。このページは、その行を写しません。

カットオフの行も、動作の行ではありません。Rosenberger の比較は、1.35 mm を 98 GHz、1.85 mm を 72 GHz、1.00 mm を 133 GHz とします。SPINNER の比較は、1.35 mm を 99 GHz とします。1.85 mm と 1.00 mm のその行は、72 GHz と 133 GHz です。98 と 99 を、一つの計算にはしません。98 を、動作の 90 の更新には読みません。99 も、同じです。理想化した空気線路の概算の置き方は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。このページは、その式へ 1.35 mm を入れていません。

嵌合したあとの上限は、低い側の行を超えて伸びません。これは、ねじが合う組の中の話です。1.35 mm と 1.85 mm、1.35 mm と 1.0 mm は、嵌合したあとの話に入りません。

## あいだはアダプタ

1.35 mm と 1.85 mm のあいだも、1.35 mm と 1.0 mm のあいだも、アダプタです。ねじが直接合う話とは別です。山が掛からないところから、力でねじを切りません。

アダプタは、両側の系列のうち高い方まで使える部品ではありません。アダプタ自身の行を見ます。両端のねじは、それぞれの組のままです。

Rosenberger の P9K108-S00D3 は、RPC-1.35 のジャックと RPC-1.85 のプラグです。1.35 mm 側の界面は IEC 61169-65 です。1.85 mm 側の界面は IEC 61169-32 で、RPC-2.40 と機械的に互換、と書きます。一つの部品が、両方のねじを持ちます。1.85 mm 側が 2.4 mm と嵌合しうることと、1.35 mm 側が 2.4 mm と嵌合しうることは、別です。1.35 mm 側の互換先に、2.4 mm の名はありません。周波数は DC to 70 GHz です。70 は、1.35 mm の動作の行に並ぶ 90 より低いです。1.85 mm の比較の 70 と同じ数字でも、この部品の行です。90 の更新でも、65 の更新でもありません。

推奨トルクは、両側とも 0.90 Nm です。最大トルクは、両側とも 1.65 Nm です。0.90 を、下のシリーズ資料の幅の更新には読みません。1.65 を、推奨の代わりには読みません。ゲージは、1.35 mm 側が 0.003 mm から 0.020 mm、1.85 mm 側が 0.000 mm から 0.050 mm です。0.020 と 0.050 を、一つの窓にはしません。

Rosenberger の P9K101-S00D3 は、RPC-1.35 のジャックと RPC-1.00 のプラグです。1.00 mm 側の界面は IEC 61169-31、1.35 mm 側は IEC 61169-65 です。読んだ頁に、2.4 mm や 1.85 mm との機械的な互換は、書いてありません。無い名を、互換先には足しません。周波数は DC to 90 GHz です。90 は、1.0 mm の動作の行に並ぶ 110 より低いです。1.35 mm の製品案内の 90 と同じ数字でも、この部品の行です。110 の更新ではありません。

推奨トルクは、1.00 mm 側が 0.35 Nm、1.35 mm 側が 0.90 Nm です。最大トルクは、1.00 mm 側が 0.70 Nm、1.35 mm 側が 1.65 Nm です。0.35 と 0.90 を、一つの推奨にはしません。0.70 と 1.65 を、推奨の代わりには読みません。ゲージは、1.00 mm 側が 0.000 mm から 0.030 mm、1.35 mm 側が 0.003 mm から 0.020 mm です。0.030 と 0.020 を、一つの窓にはしません。1.0 mm 側のシリーズ資料の窓は [1.85 mm と 1.0 mm]({{ '/learn/1-85-10/' | relative_url }}) です。このアダプタの 0.000 から 0.030 を、その窓の更新には読みません。

導波管へのアダプタも、別の行です。同じ案内は、WR-15 を 50 GHz から 75 GHz、WR-12 を 60 GHz から 90 GHz、WR-10 を 75 GHz から 90 GHz、と書きます。50、60、75、90 を、コネクタの動作の 90 には読みません。リターンロスの行は、転載していません。

## 精密側の界面

1.35 mm も、1.85 mm も、1.0 mm も、計測のポートに付く精密側です。一般の清掃、拡大点検、ナットだけを回すことは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }}) です。ここに置くのは、1.35 mm と、その両隣で資料が分けて書く注意です。

### 山が掛からないところでは、止める

Anritsu は、接続のときボディを回さず、ボディを押さえて結合ナットだけを回す、と書きます。Keysight の電気コネクタの頁は、一方を他方へひねり込まない、と書きます。同じ頁は、図は 1 mm と 2.4 mm で、一般の手順はほかのコネクタにも使える、と書きます。1.35 mm の行は、その頁にはありません。無い行を、1.35 mm の手順としては書きません。まっすぐ合わせ、横の力を掛けません。

抵抗があるのに回し続けると、合わないねじを、相手の山へ押し付けます。アダプタを探す前に、両方の刻印と、指で山が進むかを見ます。指定のアダプタの、両側の系列を見ます。

### トルクと開口は、一つの値にしない

1.35 mm 側で、このページが並べる行は次です。Rosenberger のシリーズ資料は、推奨を 0.80 Nm から 1.00 Nm、試験トルクを 1.65 Nm とします。試験トルクを、毎日のレンチ設定には読みません。同じ社の案内の比較は、結合トルクを 0.9 Nm とします。工具の 03W021-000 は、二面幅 8 mm、0.90 Nm です。0.9 と 0.90 と、0.80 から 1.00 を、一つの推奨の写しにはしません。上のアダプタの 0.90 と 1.65 は、その部品の行です。

SPINNER の比較は、1.35 mm の結合トルクを 0.9 N m とします。隣の 1.85 mm の欄は 0.9 N m（IEEE）、1.0 mm の欄は 0.45 N m（IEEE）です。1.35 mm の欄に、IEEE の括弧は、このページでは読んでいません。無い括弧を、足しません。0.9 を、0.45 の更新には読みません。逆も同じです。

1.85 mm の 0.9 N·m や、0.57 N·m や、0.80 N·m から 1.10 N·m は、別ページの行です。開口が 8 mm で、数字が近くても、その設定を 1.35 mm の仕様の写しにはしません。1.0 mm の 0.45 N·m や 0.30 N·m から 0.41 N·m も、同じです。使うレンチは、相手の機器と、コネクタの指定です。

### 1.35 mm のピン位置

ピン位置の符号は、資料で向きが違います。引き算する前に、その資料が基準面のどちらを正と呼ぶかを見ます。1.85 mm と 2.4 mm の窓は [2.4 mm と 1.85 mm]({{ '/learn/2-4-185/' | relative_url }})、1.0 mm の窓は [1.85 mm と 1.0 mm]({{ '/learn/1-85-10/' | relative_url }}) です。このページは、その窓を写しません。

Rosenberger の RPC-1.35 では、D はどちらの性別も 0.003–0.05 mm です。注は、計量級では異なりうる、です。文字の向きは、図の記号のままです。図面は転載していません。オスの E は 0.283–0.297 mm です。メスの注は、0.2743 mm から 0.2997 mm のピンと嵌合したときの反射、嵌合特性、耐久を満たす寸法、と書きます。E の幅と、注の幅は、この一枚では端が違います。0.283 と 0.2743 を、一つの下限にはしません。

同じ社の案内の比較は、1.35 mm のピン径を 290 µm と書きます。290 µm は 0.290 mm です。この換算は、単位の読みです。0.290 が E の 0.283–0.297 の中にあることと、比較の 290 µm と E が同じ仕様の写しであることとは、別です。1.85 mm と 1.0 mm のピン径のセルは、このページでは写しません。

アダプタの 1.35 mm 側のゲージは、どちらも 0.003 mm から 0.020 mm です。シリーズ資料の 0.05 と、アダプタの 0.020 は、同じ文字ではありません。0.05 と 0.050 を、書き方が違うだけの更新、と決めません。

## 嵌合の一覧

行が相手、列が 1.35 mm です。機械的に差さることを、高い側の周波数の保証には読んでいません。

<div class="table-scroll" markdown="1">

| 相手 | 1.35 mm（E） |
| --- | --- |
| 1.35 mm（E） | 同じ系列 |
| 1.85 mm（V） | 直接は合わない。あいだはアダプタ。1.85 mm は 2.4 mm と同じ組 |
| 1.0 mm（W、W1） | 直接は合わない。あいだはアダプタ。読んだ表の嵌合先は、この系列だけ |
| 2.4 mm | 直接は合わない。1.85 mm 側のアダプタのもう片面が 2.4 mm と嵌合しうることとは別 |
| SMA・3.5 mm・2.92 mm | 直接は合わない。あいだはアダプタ |
| 0.8 mm | さらに小さい別系列。1.0 mm とのあいだは別ページ。このページの主題ではない |

</div>

1.85 mm と 1.0 mm のあいだは [1.85 mm と 1.0 mm]({{ '/learn/1-85-10/' | relative_url }})、2.4 mm と 1.85 mm の組の中は [2.4 mm と 1.85 mm]({{ '/learn/2-4-185/' | relative_url }})、SMA 側の組の中は [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。

## 関連するページ

- 1.85 mm と 1.0 mm のあいだは [1.85 mm と 1.0 mm]({{ '/learn/1-85-10/' | relative_url }}) です。M7 × 0.75 の組の詳細は [2.4 mm と 1.85 mm]({{ '/learn/2-4-185/' | relative_url }}) です。
- 2.92 mm と 2.4 mm のあいだは [2.92 mm と 2.4 mm]({{ '/learn/2-92-24/' | relative_url }}) です。1/4-36 の組の詳細は [SMA・3.5 mm・2.92 mm の互換]({{ '/learn/sma-35-292-compat/' | relative_url }}) です。
- 結合と用途の早見は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }})、カットオフと資料ごとの上限は [使用周波数の上限]({{ '/learn/frequency-limit/' | relative_url }}) です。
- 清掃、一般のゲージ、セーバーは [コネクタの取り扱い]({{ '/learn/connector-care/' | relative_url }})、嵌合の原則は [深掘り]({{ '/learn/master/' | relative_url }}) です。
- 名前の話は [第11話]({{ '/manga/11-oldfield-k/' | relative_url }})、2.4 mm の経緯は [第15話]({{ '/manga/15-botka-24mm/' | relative_url }}) です。会話はフィクション演出で、発明者とは断定しません。
- 0.8 mm と 1.0 mm のあいだは [0.8 mm と 1.0 mm]({{ '/learn/0-8-10/' | relative_url }}) です。
- 帯域名の V と W は [規格・周波数]({{ '/spectrum/' | relative_url }})、短い定義は [用語集の 1.35 mm]({{ '/glossary/' | relative_url }}#connector-1-35) と [用語集の V コネクタ]({{ '/glossary/' | relative_url }}#v-connector) と [用語集の 1.0 mm]({{ '/glossary/' | relative_url }}#connector-1-0) と [用語集の 0.8 mm]({{ '/glossary/' | relative_url }}#connector-0-8) です。

## 出典

ねじ、嵌合、周波数、トルク、開口、1.35 mm 側のピン位置は、次の公開資料で確認しました。界面の図面、規格の表そのもの、データシートの表、リターンロスの行は転載していません。上の図は、このページで描いたものです。0.290 は 290 µm を 1000 で割った読みであり、規格の公差にはしていません。規格本文の有償版は、Webstore の公開要旨の範囲で参照しています。IEC 61169-65 の本文は、このページでは読んでいません。Keysight の三つの表と、Anritsu の二つの表に、1.35 mm の行は読んでいません。

- IEC 61169-65:2021（Webstore。題は外導体内径 1,35 mm、ねじ結合、50 Ω。要旨は、ねじ結合、50 Ω、動作周波数は 90 GHz まで、計測が主な用途。刊行日は 2021-01-19。その要旨に、ねじの呼びと、1.85 mm や 1.0 mm との嵌合は、このページでは読んでいない。本文は未見）: https://webstore.iec.ch/en/publication/61220
- Rosenberger、RPC-1.35 技術資料 P9-000-000_TD（界面は IEC 61169-65。プラグの F は M5.5 x 0.5 - 6H、ジャックは M5.5 x 0.5 - 6g。H はプラグが hex 8、ジャックの欄は空。B は 1.34–1.36 mm。D は 0.003–0.05 mm。A、B、D は計量級で異なりうる、と注。E は 0.283–0.297 mm。メスの注は 0.2743 mm から 0.2997 mm のピン。50 Ω、DC to 90 GHz。推奨トルク 0.80–1.00 Nm、試験トルク 1.65 Nm。嵌合回数は 3000 以上。誘電体の材料欄は PEEK。図面は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Products_Services/TM/RPC-1.35/P9-000-000_TD.pdf
- Rosenberger、RPC-1.35 製品案内（50 Ω、DC から 90 GHz、空気誘電体と PEEK のビーズ、嵌合回数は 3000 以上。IEC 61169-65 と IEEE Std 287 の規格化は in progress、と書く。注は、1.85 mm と 1.00 mm のあいだを埋める、と書く。同じトルクレンチを 3.50 mm、2.92 mm、2.40 mm、1.85 mm の多くと使える、と書く。プッシュプルは任意。E Connector という語は、この頁では読んでいない）: https://www.rosenberger.com/product/rpc-135/
- Rosenberger、RPC-1.35 の案内（2022年1月の状態。E Connector とも呼び、1.85 mm と 1.00 mm のあいだを埋める、と書く。60 から 90 GHz を E-Band と括弧に置く。比較の行は、上限 90 GHz、カットオフ 98 GHz、ねじ M5.5 x 0.5、結合トルク 0.9 Nm、二面幅 8 mm、ピン径 290 µm、嵌合回数は 3000 より多い。1.85 mm の行は 65（70）GHz、M7 x 0.75、0.9 Nm、8 mm。1.00 mm の行は 110 GHz、M4 x 0.7、0.45 Nm、6 mm。規格化は IEC 61169-65 と IEEE STD 287。工具 03W021-000 は 8 mm、0.90 Nm。導波管アダプタは WR-15 が 50–75 GHz、WR-12 が 60–90 GHz、WR-10 が 75–90 GHz。比較の表と、リターンロスの行は転載していない）: https://www.rosenberger.com/fileadmin/content/headquarter/Downloads/RF_Coaxial_Connectors/TM_RPC-1.35_Flyer.pdf
- Rosenberger、RPC-1.35 / RPC-1.85 アダプタ P9K108-S00D3（1.35 mm 側は IEC 61169-65。1.85 mm 側は IEC 61169-32、RPC-2.40 と機械的に互換。周波数は DC to 70 GHz。推奨トルクは両側 0.90 Nm。最大トルクは両側 1.65 Nm。ゲージは 1.35 mm 側 0.003–0.020 mm、1.85 mm 側 0.000–0.050 mm。誘電体の材料欄は PS。リターンロスの行は転載していない）: https://products.rosenberger.com/_ocassets/db/P9K108-S00D3.pdf
- Rosenberger、RPC-1.35 / RPC-1.00 アダプタ P9K101-S00D3（1.00 mm 側は IEC 61169-31。1.35 mm 側は IEC 61169-65。読んだ頁に、2.4 mm や 1.85 mm との機械的な互換は無い。周波数は DC to 90 GHz。推奨トルクは 1.00 mm 側 0.35 Nm、1.35 mm 側 0.90 Nm。最大トルクは 1.00 mm 側 0.70 Nm、1.35 mm 側 1.65 Nm。ゲージは 1.00 mm 側 0.000–0.030 mm、1.35 mm 側 0.003–0.020 mm。誘電体の材料欄は PEEK。リターンロスの行は転載していない）: https://products.rosenberger.com/_ocassets/db/P9K101-S00D3.pdf
- SPINNER、1.35 mm E Connector の案内（E Connector とも呼び、1.85 mm と 1.00 mm のあいだを埋める、と書く。設計の行は DC to 90 GHz（92 GHz）、E-band。比較の行は 90（92）GHz、カットオフ 99 GHz、ねじ M5.5x0.5、結合トルク 0.9 N m、二面幅 8（7）mm。1.85 mm の行は 65（70）GHz、0.9 N m（IEEE）、8 mm。1.0 mm の行は 110（120）GHz、0.45 N m（IEEE）、6 mm。IEC 61169-65 と IEEE の P287。比較の表は転載していない。設計の主語は、Rosenberger の案内とは置き方が違う。このページでは決めない）: https://www.spinner-group.com/wp-content/uploads/2025/01/SPINNER_E_Connector.pdf
- Keysight、ナレッジセンタ “What RF Connectors are Mateable?”（2022-08-29 更新。列は 1.0 mm、1.85 mm、2.4 mm、2.92 mm、3.5 mm、SMA。1.35 mm の行は、このページでは読んでいない。無い行は書いていない）: https://docs.keysight.com/kkbopen/what-rf-connectors-are-mateable-749648236.html
- Keysight、電気コネクタのケア（表の行は 1.0 mm、1.85 mm、2.4 mm、2.92 mm、3.5 mm、SMA。1.35 mm の行は、このページでは読んでいない。図は 1 mm と 2.4 mm。一般の手順はほかのコネクタにも使える、と書く。一方を他方へひねり込まない。その頁の手順を、1.35 mm の行としては書いていない）: https://helpfiles.keysight.com/scopes/FlexDCA-UG/Content/Topics/Connector-Care/connector-elec-care.htm
- Keysight、トルクレンチとオープエンドレンチの表（1.85 mm と 1.0 mm の行はある。1.35 mm の行は、このページでは読んでいない。無い行は書いていない）: https://www.keysight.com/us/en/assets/9022-00126/miscellaneous/EPSG086082.html
- Anritsu、Connector Types and Cross-Mating Compatibility、10450-00040 Rev. AE（列は V（1.85 mm）、W1（1 mm）、0.8 mm まで。1.35 mm の列は無い。0.8 mm の嵌合先はその列だけ、ねじは M3.5 x 0.35。表そのものは転載していない）: https://dl.cdn-anritsu.com/en-us/test-measurement/ohs/10450-00040AE/Calibration_and_Measurement/MG_Ch01_Cal_Overview.06.12.html
- Anritsu、RF and Microwave Connector Care、10100-00031 Rev. D（2022-07 刊行。特性表に 1.35 mm の行は、このページでは読んでいない。嵌合の抵抗は、ずれ、ねじの変形、または非互換の印。ボディは回さず、ナットだけを回す。表そのものは転載していない）: https://dl.cdn-anritsu.com/en-us/test-measurement/files/Manuals/Instruction-Sheet/10100-00031D.pdf
