---
layout: default
title: 同軸ケーブルの位相安定性
description: 同軸ケーブルの位相と電気長、温度による PTFE の相転移、曲げと振動、位相安定ケーブルと位相合わせ、ppm と度の読み方を、公開資料の範囲で整理します。
permalink: /learn/phase-stability/
---

{% include learn-nav.html %}

# 同軸ケーブルの位相安定性

同軸ケーブルの位相が、温度と曲げでどう動くかを、一ページにまとめます。電気長と位相の関係、室温付近の PTFE の相転移、曲げと振動の仕様、位相を揃えたい測定系とアレイアンテナ、ppm と度の読み分けです。公開資料の式と、データシートの行から組み立てた学習用の読み方であり、個別の製品が保証する値ではありません。条件と、使う周波数の行は、各メーカーのデータシートが定めます。

短い定義は [用語集の位相整合]({{ '/glossary/' | relative_url }}#phase-match) です。速度係数と呼びごとの並びは [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) です。比誘電率と位相速度の式は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) です。減衰の dB は別の予算で、読み方は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) です。長さの測り方、最小曲げ半径、組としての位相整合は [アッセンブリの構造と製作工程]({{ '/learn/assembly-basics/' | relative_url }}) です。

## 位相と電気長

ネットワークアナライザが透過で読む位相は、その周波数で、波がケーブルを通り抜けるのに要する遅れを、角度にしたものです。遅れが長いほど、同じ周波数でも角度は大きくなります。周波数が高いほど、同じ遅れでも角度は大きくなります。

Axon のカタログは、同軸の電気長を、ケーブルの中を波が進むことで生じる位相差、と書いています。計算に使う量として、周波数、真空中の光速、機械長、誘電率を挙げています。式の図は転載していません。

低損失で比透磁率を 1 と置けるとき、位相速度はおよそ光速を、比誘電率の平方根で割った値です。Ellingson は、その近似を書いています。速度係数は、その位相速度を光速で割った割合です。およそ 1/√εr です。発泡や、空気と固体が混ざる構造では、充実材料の公称の比誘電率ではなく、データシートの速度係数を使います。同じ注意は [特性インピーダンス]({{ '/learn/impedance/' | relative_url }}) にあります。

このページでは、機械長を Lm、速度係数を VF、真空中の光速を c と置きます。電気長は、同じ位相になる真空中の長さとして、次です。

Le = Lm / VF

位相を度で書くと、周波数 f（Hz）に対して次です。

θ = 360 × f × Lm / (VF × c) = 360 × f × Le / c

c は、定義の 299792458 m/s を使います。Axon が本文に置く光速は、およそ 3×10^8 m/s です。このページの割り算は、定義の値です。

例は、[ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) が整理表から引いている、充実 PTFE の速度係数 69.5% です。機械長 1 m の電気長は、1 / 0.695 = 1.4388489 m で、小数第 3 位へ四捨五入すると 1.439 m です。1 GHz の真空中の波長は 0.299792458 m です。位相は 360 × (1 / 0.695) / 0.299792458 = 1727.814 度で、小数第 1 位へ四捨五入すると 1727.8 度です。この 1727.8 は、その速度係数と、このページの式からの計算です。その整理表のケーブルの測定値ではありません。

1 ppm は、電気長の 100 万分の 1 です。上の 1727.814 度に 10^(−6) を掛けると 0.001727814 度で、小数第 6 位へ四捨五入すると 0.001728 度です。同じ 1 ppm を 18 GHz にすると 18 倍で、0.03110065 度、小数第 5 位へ四捨五入すると 0.03110 度です。ppm のままの仕様を、度へ直すときは、長さと周波数を掛けます。長さが 2 倍、または周波数が 2 倍なら、度も 2 倍です。ppm そのものは、その掛け算の前の相対値です。

<figure class="assembly">
  <svg viewBox="0 0 680 168" role="img" aria-labelledby="lengthTitle lengthDesc">
    <title id="lengthTitle">機械長と電気長の比を、速度係数 69.5% の例で描いた図</title>
    <desc id="lengthDesc">機械長 1 m を幅 280 とすると、電気長 1.439 m は幅 403 です。公開資料のグラフではなく、本文の割り算から描いています。</desc>
    <text x="140" y="52" text-anchor="end" fill="#1c1915" font-size="14" font-family="sans-serif">機械長</text>
    <rect x="150" y="34" width="280" height="28" fill="#1f4d45"></rect>
    <text x="440" y="53" fill="#1c1915" font-size="13" font-family="sans-serif">1 m</text>
    <text x="140" y="112" text-anchor="end" fill="#1c1915" font-size="14" font-family="sans-serif">電気長</text>
    <rect x="150" y="94" width="403" height="28" fill="#c9843d"></rect>
    <text x="563" y="113" fill="#1c1915" font-size="13" font-family="sans-serif">1.439 m</text>
    <text x="340" y="152" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">速度係数 69.5% のとき、電気長は機械長のおよそ 1.44 倍</text>
  </svg>
  <figcaption>
    <p>棒の長さは、本文の 1 m と 1.439 m の比です。1.439 / 1 を、機械長の棒の幅 280 に掛けて 403 にしています。製品の寸法図ではありません。</p>
  </figcaption>
</figure>

## 温度で位相が動く

温度が変わると、導体の長さと、誘電体の比誘電率が変わります。電気長は、その両方を受けます。Times Microwave Systems の David Slack は、Microwave Journal の記事で、多くのマイクロ波ケーブルの電気長の温度係数は負である、と書いています。中心導体と外部導体は温度とともに軸方向へ伸びます。外部導体の径も増し、誘電体の密度が変わり、比誘電率が動きます。比誘電率の変化が電気長に与える向きは、金属の伸び縮みと逆で、二つが打ち消しうる、とも書いています。

同じ記事は、その説明に使った構造について、銅の線膨張係数を 17 ppm/°C、誘電体が電気長に与える効果を 23 ppm/°C の負の側、と書いています。この 17 と 23 は、その構造の説明です。すべてのケーブルの係数ではありません。

PTFE では、室温付近に、温度に対して滑らかではない段が乗ります。ケーブルの資料は、これを PTFE の phase knee と呼びます。

転移の温度は、国立標準局（現在の NIST の前身）の論文で確認できます。Furukawa、McCoskey、King は、1952 年の論文で、PTFE の一次転移が 293 K と 303 K にあることを確認した、と書いています。それ以前に Quinn、Roberts、Work が報告していた、とも書いています。このページで 273.15 を引くと、19.85 °C と 29.85 °C です。論文の桁は 1 K なので、セルシウスではおよそ 20 °C と 30 °C です。

Kirby は、1956 年の論文で、およそ 20 °C により大きい一次転移があり、およそ 30 °C にも一次転移がある、と書いています。20 °C と 30 °C の転移による膨張は、温度をゆっくり変えると加熱と冷却で戻る、とも書いています。急に温めるとわずかな履歴が、急に冷やすと大きな履歴が出る、とも書いています。Weir は、1953 年の論文で、Quinn らが体積と温度の曲線の二つの折れを合わせた体積変化を 1.23% と評価した、と引いています。

ケーブル側の資料が書くおよそ 19 °C は、Kirby がおよそ 20 °C とした、より大きい側の温度に近いです。およそ 30 °C の転移は、Kirby がより小さいと書いた側です。Times Microwave Systems の PhaseTrack の冊子は、PTFE 系の誘電体ではおよそ 19 °C で急な変化が起き、温度が数分の 1 度しか違わないケーブルのあいだでも、位相の差が意味を持つほど急である、と書いています。HUBER+SUHNER の SUCOFLEX 526V の資料は、従来の VNA 用ケーブルでは +19 °C に PTFE の phase knee が出る、と書いています。同社の Multiflex CT の冊子（2025 年 7 月版）は、低密度 PTFE が室温付近で結晶格子の相転移を起こし、六方晶から三斜晶へ移って密度と比誘電率が急に変わる、と書いています。格子の呼びは、その冊子の説明です。上の NBS の論文の本文から、このページは格子の名前を写していません。

Slack の記事は、分子の相変化が 18 °C から 20 °C のあいだで起き、体積が 1.5% 変わり、比誘電率も変わって電気長が急に動く、と書いています。昇温と降温で、変化が始まる温度が違う、とも書いています。1.5% は記事の値です。Weir が引く 1.23% は、二つの折れの合計として別の論文が評価した値です。このページは、二つの数字を一つの体積変化にはまとめません。

同じ記事は、比べたケーブルの傾きを、次のように書いています。充実 PTFE（記事は比誘電率 2.01）では、+15 °C から +25 °C の傾きがおよそ −130 ppm/°C、+15 °C より低い側が −30 ppm/°C です。低密度の微多孔 PTFE（記事は比誘電率 1.73）では、+15 °C から +25 °C がおよそ −85 ppm/°C です。記事は、密度を下げると段は小さくできるが、PTFE であるかぎり無くせない、と書いています。この傾きは、その記事が比べた構造の読みです。すべての PTFE ケーブルの保証値ではありません。

範囲で書いた ppm と、1 °C あたりの ppm は、別の欄です。HUBER+SUHNER の Multiflex CT は、−55 °C から +125 °C での相対位相変化の典型を 300 ppm 以下、と書いています。表の三つの呼び（外径 3.8 mm、5.0 mm、7.5 mm）が、いずれもこの行です。注記は典型値で、冊子は情報であり保証ではない、と書いています。180 °C の幅で 300 ppm を割って、1 °C あたりに読み替えません。段があるので、平均の傾きは、室温付近の傾きにはなりません。

<figure class="assembly">
  <svg viewBox="0 0 680 120" role="img" aria-labelledby="kneeTitle kneeDesc">
    <title id="kneeTitle">PTFE の二つの一次転移が、室温付近のどこにあるかを示す模式図</title>
    <desc id="kneeDesc">温度軸に、およそ 20 °C とおよそ 30 °C の位置だけを記しています。位相の測定曲線ではなく、NBS の論文が置く温度の位置です。</desc>
    <line x1="80" y1="48" x2="600" y2="48" stroke="#5e584e" stroke-width="1.5"></line>
    <line x1="80" y1="42" x2="80" y2="54" stroke="#5e584e" stroke-width="1.5"></line>
    <line x1="340" y1="42" x2="340" y2="54" stroke="#1f4d45" stroke-width="2"></line>
    <line x1="470" y1="42" x2="470" y2="54" stroke="#c9843d" stroke-width="2"></line>
    <line x1="600" y1="42" x2="600" y2="54" stroke="#5e584e" stroke-width="1.5"></line>
    <text x="80" y="74" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">低温側</text>
    <text x="340" y="74" text-anchor="middle" fill="#1c1915" font-size="13" font-family="sans-serif">およそ 20 °C</text>
    <text x="340" y="92" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">より大きい転移</text>
    <text x="470" y="74" text-anchor="middle" fill="#1c1915" font-size="13" font-family="sans-serif">およそ 30 °C</text>
    <text x="600" y="74" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">高温側</text>
    <text x="340" y="112" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">目盛りは等間隔ではありません。測定した位相の曲線でもありません。</text>
  </svg>
  <figcaption>
    <p>目盛りの位置は、Kirby が「およそ 20 °C」「およそ 30 °C」と書いた二つの転移を、左右に分けただけです。ケーブルの位相が描く段の形は、製品と履歴で違います。データシートのグラフは転載していません。</p>
  </figcaption>
</figure>

SUCOFLEX 526V は、+15 °C から +30 °C の位相変化の典型を 50 ppm、と書いています。従来品に見える +19 °C の knee を、この型では避ける、という説明です。同じ資料は、25 インチ（635 mm）、速度係数 80%、50 ppm を、18 GHz で 0.9 度、26.5 GHz で 1.3 度に換算した行を置いています。比較列は、速度係数 84%、700 ppm で、同じ 25 インチが 18 GHz で 11.4 度、26.5 GHz で 16.7 度です。700 ppm は、その比較列の従来品側の置き方であり、PTFE 一般の典型値としては読みません。

このページで、635 mm、速度係数 0.80、c = 299792458 m/s、18 GHz、50 ppm を上の式に入れると 0.8578 度です。小数第 1 位へ四捨五入すると 0.9 度で、カタログの行と揃います。26.5 GHz は 1.2629 度、小数第 1 位で 1.3 度です。速度係数 0.84、700 ppm、18 GHz は 11.4379 度で、小数第 1 位の 11.4 度と揃います。カタログの度は、ppm と長さと周波数と速度係数からの換算として読めます。

## 曲げ、振動、引張

曲げると、誘電体の形、外部導体の編組やテープの重なり、経路の幾何が変わります。位相と、届く信号の大きさが、同時に動きえます。振幅の dB は損失の側です。読み方は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) にゆずります。最小曲げ半径より小さく潰すことの意味は [アッセンブリの構造と製作工程]({{ '/learn/assembly-basics/' | relative_url }}) です。

度で書かれた曲げの仕様は、巻き方と半径が条件です。W. L. Gore & Associates の PHASEFLEX（2022 年 3 月）は、半径 57 mm（2.25 インチ）のマンドレルに 360° 巻いたときの位相と振幅を書いています。手順は、終端を短絡し、校正した系で正規化したあと、アッセンブリのほぼ中央の左または右にマンドレルを置き、一周巻いて一回掃引し、周波数範囲での最大のずれを記録する、と注記しています。まっすぐへ戻して再び正規化し、反対側でも繰り返します。18 GHz までの表では、タイプ 0H、0X、0S、0U の典型の位相安定がいずれも ±2.0 度、典型の振幅安定が ±0.05 dB 未満です。保証の最大は別欄です。タイプ 0U は、同じ曲げで位相の最大 4.7 度、振幅の最大 0.15 dB です。典型の ±2.0 度を、保証の上限としては読みません。製品の並びは [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) の位相安定の節です。

別の資料の度は、別の試験です。HUBER+SUHNER の SUCOFLEX 526 の表は、曲げに対する典型の位相安定を、四つの型で ±8 度、±8 度、±8 度、±3 度と並べています。最後の ±3 度は 526S の列です。Gore の ±2.0 度と、この ±3 度を、優劣の比較には使いません。マンドレルの半径と、典型か最大かが、欄ごとに違います。

振動について、Axon のカタログは、位相の変化が温度と、振動や屈曲のような機械的な影響で起きる、と書いています。度へ直した一つの行は、その文にはありません。このページも、振動の度を一つには置きません。

引張を別欄にする例は、SUCOFLEX 526V です。引張 100 N に対する位相安定の最大を 0.1 度/GHz、と書いています。曲げの度とは単位が違います。周波数 1 GHz あたり、という意味の度です。18 GHz なら、この上限の読みは 1.8 度です。0.1 × 18 = 1.8 で、このページの掛け算です。長さの条件は、その行には書かれていません。長さが違うアッセンブリへ、1.8 度をそのまま写しません。

ねじりは、軸を曲げることとも、振動とも別の入力です。このページで読んだ公開資料には、ねじり角に対する位相の度を書いた行はありませんでした。図面がねじりを要求するときは、その試験の角度、長さ、周波数を資料で確認します。確認できない度は、ここに置きません。

## 位相が動きにくいケーブルと、位相を揃える組

低損失と、位相が動きにくいことは、別の指定です。呼びの違いと、試験用の一例は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) です。このページは、製品の一覧を繰り返しません。

位相を揃えて使う場面は、資料が次のように書いています。Times Microwave Systems の PhaseTrack の冊子は、フェーズドアレイ、機器間の接続、位相が安定な試験ケーブルを用途に挙げています。HUBER+SUHNER の Multiflex CT の冊子は、フェーズドアレイのビーム形成では各素子の位相を細かく揃える必要がある、と書き、衛星の合成開口レーダも例にしています。Slack の記事は、フェーズドアレイアンテナと、試験装置の校正の維持を、位相の温度特性が効く場面として書いています。実験室の温度が、PTFE にとって急な範囲に入りやすい、とも書いています。測定系のポートケーブルでは、昨日と今日で位相が落ちないことが合否になる、という見方は [業界を知る]({{ '/industry/' | relative_url }}) と同じです。

複数本の電気長を公差の中に入れる作業が、位相整合です。言葉の短さは [用語集]({{ '/glossary/' | relative_url }}#phase-match)、長さとバッチの読みは [アッセンブリの構造と製作工程]({{ '/learn/assembly-basics/' | relative_url }})、組として注文される理由は [深掘り]({{ '/learn/master/' | relative_url }}) です。

Gore の同じ冊子は、依頼により、70 GHz までの位相または遅延時間の合わせができる、と書いています。絶対合わせは、目標の遅延または位相長に公差を付けたもので、組の中の一本を交換したり足したりできる、と書いています。相対合わせは、その組の中では遅延が窓の中に入るが、別の組の一本とは合うとは限らない、と書いています。遅延の公差は、ピコ秒未満まで、とも書いています。HUBER+SUHNER の SUCOFLEX 526 は、相対と絶対の遅延合わせを、依頼により ±1 ps で用意する、と書いています。在庫の別の束から、同じ定規寸法を切って組の代わりにはしません。

## 仕様の欄の読み方

見る順番は、次です。

- 欄が、電気長の相対変化（ppm）か、その周波数での度か、遅延時間（ps）かを分けます。
- ppm が温度範囲の合計か、1 °C あたりの傾きかを見ます。範囲の ppm を、幅の °C で割って傾きにはしません。
- 度には、周波数、長さ、曲げなら半径と巻き方、引張なら力、が付きます。条件の違う度は比べません。
- 典型と最大は別欄です。Gore の 0U のように、典型 ±2.0 度と最大 4.7 度が同じ曲げに並ぶことがあります。
- 位相が許容に入っていても、挿入損失と反射は別の欄です。
- 組の公差が絶対か相対かで、一本だけ交換できるかが決まります。

<figure class="assembly">
  <svg viewBox="0 0 680 168" role="img" aria-labelledby="ppmTitle ppmDesc">
    <title id="ppmTitle">同じ 50 ppm を、周波数だけ変えて度に直した図</title>
    <desc id="ppmDesc">25 インチ、速度係数 80%、50 ppm を、18 GHz で 0.9 度、26.5 GHz で 1.3 度とした棒です。カタログの換算行を、このページの目盛りで描いています。</desc>
    <text x="128" y="52" text-anchor="end" fill="#1c1915" font-size="14" font-family="sans-serif">18 GHz</text>
    <rect x="140" y="34" width="270" height="28" fill="#1f4d45"></rect>
    <text x="420" y="53" fill="#1c1915" font-size="13" font-family="sans-serif">0.9 度</text>
    <text x="128" y="112" text-anchor="end" fill="#1c1915" font-size="14" font-family="sans-serif">26.5 GHz</text>
    <rect x="140" y="94" width="390" height="28" fill="#c9843d"></rect>
    <text x="540" y="113" fill="#1c1915" font-size="13" font-family="sans-serif">1.3 度</text>
    <text x="340" y="152" text-anchor="middle" fill="#5e584e" font-size="12" font-family="sans-serif">50 ppm、25 インチ、速度係数 80%。1 度を幅 300 として積んでいます</text>
  </svg>
  <figcaption>
    <p>0.9 度は幅 270、1.3 度は幅 390 です。数値は SUCOFLEX 526V の資料が、50 ppm を度に直した行です。従来品側の 700 ppm の列は、この図には入れていません。</p>
  </figcaption>
</figure>

<div class="table-scroll" markdown="1">

| 欄の書き方 | 何を読むか | このページで確認した例 |
| --- | --- | --- |
| 温度範囲の ppm | その範囲での電気長の相対変化。度へは長さと周波数を掛ける | Multiflex CT の典型は、−55 °C から +125 °C で 300 ppm 以下。526V の典型は、+15 °C から +30 °C で 50 ppm |
| ppm/°C | その温度の付近での傾き。範囲の ppm を割った値ではない | Slack の記事が、充実 PTFE の +15 °C から +25 °C をおよそ −130 ppm/°C と書く |
| 曲げの度 | 半径、巻き方、典型か最大か、周波数の上限 | Gore は半径 57 mm に 360°。18 GHz までの一部で典型 ±2.0 度。0U の最大は 4.7 度 |
| 度/GHz | 周波数 1 GHz あたりの度。長さの条件が別にあることがある | 526V の引張 100 N で、最大 0.1 度/GHz |
| ps | 遅延時間の窓。組の中だけか、目標値への絶対か | Gore はピコ秒未満までの合わせ。SUCOFLEX 526 は依頼により ±1 ps |

</div>

成績表の位相は、その一本を、指定の周波数と温度と形で測った値を見てください。このページの掛け算は、データシートの行を度と ppm のあいだで読む入口です。

## 出典

温度、曲げ、単位、用途は、次の公開資料で確認しました。1.439 m、1727.8 度、0.001728 度、0.8578 度が 0.9 度に丸まること、1.8 度は、本文に書いた式からの計算です。資料のグラフと表の転載はしていません。上の図は、このページで描いたものです。

- Steven W. Ellingson、Electromagnetics Vol. 1、3.10 節（LibreTexts 版。低損失で、位相速度はおよそ c/√εr。比透磁率を 1 と置いた同軸）: https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Electromagnetics_I_(Ellingson)/03%3A_Transmission_Lines/3.10%3A__Coaxial_Line
- George T. Furukawa、Robert E. McCoskey、Gerard J. King、“Calorimetric Properties of Polytetrafluoroethylene (Teflon) from 0° to 365° K,” Journal of Research of the National Bureau of Standards, Vol. 49, No. 4, October 1952, Research Paper 2364（一次転移が 293 K と 303 K。Quinn、Roberts、Work の報告を確認した、と書く。試料名は論文の Teflon）: https://nvlpubs.nist.gov/nistpubs/jres/049/4/v49.n04.a07.pdf
- R. K. Kirby、“Thermal Expansion of Polytetrafluoroethylene (Teflon) from −190° to +300° C,” Journal of Research of the National Bureau of Standards, Vol. 57, No. 2, August 1956, Research Paper 2696（およそ 30 °C の一次転移と、およそ 20 °C のより大きい一次転移。ゆっくり変えれば膨張は戻る。急加熱ではわずかな履歴、急冷却では大きな履歴）: https://nvlpubs.nist.gov/nistpubs/jres/057/jresv57n2p91_A1b.pdf
- Charles E. Weir、“Transitions and Phases of Polytetrafluoroethylene (Teflon),” Journal of Research of the National Bureau of Standards, Vol. 50, No. 2, February 1953, Research Paper 2395（Quinn、Roberts、Work が、二つの折れの合計の体積変化を 1.23% と評価した、と引く。履歴がある、とも書く）: https://nvlpubs.nist.gov/nistpubs/jres/50/jresv50n2p95_A1b.pdf
- David Slack、Times Microwave Systems、“Minimizing Temperature Induced Phase Errors in Coaxial Cables,” Microwave Journal, 2017-03-13（多くのケーブルで電気長の温度係数は負。銅 17 ppm/°C と、その構造の誘電体側 23 ppm/°C。PTFE の相変化は 18 °C から 20 °C、体積変化 1.5%。充実 PTFE は比誘電率 2.01 で +15 °C から +25 °C がおよそ −130 ppm/°C、それより低温側が −30 ppm/°C。低密度は比誘電率 1.73 で同範囲がおよそ −85 ppm/°C。フェーズドアレイと試験装置の校正。図は転載していない）: https://www.microwavejournal.com/articles/27954-minimizing-temperature-induced-phase-errors-in-coaxial-cables
- Times Microwave Systems、PhaseTrack ファミリーの冊子（PT-F 01/16、サイト上の PDF。PTFE はおよそ 19 °C で急に変わる。固体またはテープ巻きの PTFE 系は室温付近で位相が急に動く。用途にフェーズドアレイ、機器間接続、位相が安定な試験ケーブル）: https://timesmicrowave.com/wp-content/uploads/2022/03/phasetrack-family-coax-cables-assemblies-brochure.pdf
- HUBER+SUHNER、Multiflex CT phase-invariant cable assemblies、Edition 2025/07（低密度 PTFE の室温付近の相転移、六方晶から三斜晶、PTFE-knee。−55 °C から +125 °C の相対位相変化は典型 300 ppm 以下。外径 3.8 mm、5.0 mm、7.5 mm。フェーズドアレイと合成開口レーダ。情報であり保証ではない、と書く）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMzUyNDQsInR5cGUiOiJhc3NldCJ9/3dIzeL5H6F8Cw-bu/Multiflex_CT_Phase-invariant_cable_assemblies.pdf
- HUBER+SUHNER、SUCOFLEX 500（配布元が公開している同社資料。526 の四つの型で、曲げに対する典型の位相安定が ±8 度、±8 度、±8 度、±3 度。遅延合わせは依頼により ±1 ps。526V は +15 °C から +30 °C で典型 50 ppm。従来の VNA 用ケーブルの PTFE phase knee は +19 °C。25 インチ、80%、50 ppm を 18 GHz で 0.9 度、26.5 GHz で 1.3 度。比較列は 84%、700 ppm で 11.4 度と 16.7 度。引張 100 N で最大 0.1 度/GHz）: https://www.ssb.de/media/sucoflex500.pdf
- W. L. Gore & Associates、PHASEFLEX Microwave/RF Test Assemblies、2022 年 3 月（半径 57 mm に 360° 巻く試験。18 GHz までの 0H、0X、0S、0U は典型の位相 ±2.0 度、振幅 ±0.05 dB 未満。0U の保証最大は位相 4.7 度、振幅 0.15 dB。絶対合わせと相対合わせ。ピコ秒未満。70 GHz まで依頼可）: https://assets-us-01.kc-usercontent.com/ecb176a6-5a2e-0000-8943-84491e5fc8d1/38201437-247e-4212-85f1-60c9398cd313/Gore_Phaseflex_Mar22.pdf
- Axon、マイクロ波同軸アッセンブリのカタログ（2024 年 4 月公開の版。電気長は伝搬による位相差。計算に周波数、光速、機械長、誘電率。光速はおよそ 3×10^8 m/s。位相整合はバッチの中の公差。周波数が高いほど難しい。位相は温度と、振動や屈曲で変わる。式の図は転載していない）: https://www.axon-cable.com/publications/axon-microwave-coaxial-assemblies_cg.pdf
