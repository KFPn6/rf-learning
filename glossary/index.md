---
layout: default
title: 用語集
description: 高周波コネクタと同軸ケーブルアッセンブリを読むための主な語です。
permalink: /glossary/
---

# 用語集

高周波コネクタ＋同軸ケーブルアッセンブリを読むための主な語です。短い定義であり、製品の保証値ではありません。比べるために、光ファイバー、差動伝送、USB Type-C を足しています。業界の文脈は [業界を知る]({{ '/industry/' | relative_url }})、帯域の対応は [規格・周波数]({{ '/spectrum/' | relative_url }}) にあります。

<nav class="tag-row" aria-label="用語">
  <a class="tag" href="#assembly">アッセンブリ</a>
  <a class="tag" href="#connector">コネクタ</a>
  <a class="tag" href="#coax">同軸</a>
  <a class="tag" href="#fiber">光ファイバー</a>
  <a class="tag" href="#impedance">インピーダンス</a>
  <a class="tag" href="#vswr">VSWR</a>
  <a class="tag" href="#return-loss">リターンロス</a>
  <a class="tag" href="#insertion-loss">挿入損失</a>
  <a class="tag" href="#cutoff">遮断周波数</a>
  <a class="tag" href="#skin-effect">表皮効果</a>
  <a class="tag" href="#phase-match">位相整合</a>
  <a class="tag" href="#pim">PIM</a>
  <a class="tag" href="#semi-rigid">セミリジッド</a>
  <a class="tag" href="#dielectric">誘電体</a>
  <a class="tag" href="#shield">シールド</a>
  <a class="tag" href="#torque">嵌合トルク</a>
  <a class="tag" href="#differential">差動伝送</a>
  <a class="tag" href="#usb-c">USB Type-C</a>
</nav>

## ケーブルアッセンブリ {#assembly}

<p class="term-en">cable assembly</p>

両端、または必要な端に高周波コネクタを取り付け、長さと取り回しを決めた同軸ケーブルの完成品です。このサイトが扱う基本の単位です。コネクタやケーブルの材料ではなく、つないだあとの伝送路として試験されます。

## 高周波コネクタ {#connector}

<p class="term-en">RF connector</p>

同軸の構造を、機器のポートや相手のコネクタへ受け渡す界面です。系列（N、SMA、2.92 mm など）ごとに寸法と、使える周波数の目安が違います。単体では、伝送路の長さも損失も決まりません。相手と嵌合してはいけない組み合わせがあります。

## 同軸ケーブル {#coax}

<p class="term-en">coaxial cable</p>

中心導体、誘電体、外部導体を、同じ軸に重ねた伝送路です。「同」は同じ軸、という意味で、中心導体と外部導体が同じ中心線を共有します。外部導体が信号の戻り経路と遮蔽を兼ねます。電源線と違い、断面の寸法比と誘電体で特性インピーダンスが決まります。電気の高周波の波を運び、光を運ぶ光ファイバーとは媒体が違います。比較は [同軸と光ファイバー]({{ '/learn/compare/coax-vs-fiber/' | relative_url }}) です。会話は [第2話]({{ '/manga/02-coax-fiber/' | relative_url }}) と、名前の意味の [第3話]({{ '/manga/03-same-axis/' | relative_url }}) です。

## 光ファイバー {#fiber}

<p class="term-en">optical fiber</p>

ガラス、またはプラスチックのコアと、それより光の進み方が違うクラッドで、光を閉じ込めて運ぶ線です。同軸が運ぶ電気の高周波の波とは、媒体が違います。電磁ノイズをほとんど受けず、長い距離の通信に向くことが多いです。急な曲げや、端面の汚れで光が漏れます。テレビのアンテナ端子や、50 Ω の計測ポートの代わりではありません。比較は [同軸と光ファイバー]({{ '/learn/compare/coax-vs-fiber/' | relative_url }}) です。会話は [第2話]({{ '/manga/02-coax-fiber/' | relative_url }}) です。

## 特性インピーダンス {#impedance}

<p class="term-en">characteristic impedance</p>

十分に長い伝送路が、信号から見て持つインピーダンスです。計測と無線では 50 Ω が基準になることが多く、映像の一部は 75 Ω です。途中でこの値が乱れると、その点で反射が戻ります。オームが違うものを、形が合うからといって混ぜません。テレビの受信が同軸である話は [第4話]({{ '/manga/04-tv-coax/' | relative_url }}) です。

## VSWR {#vswr}

<p class="term-en">voltage standing wave ratio／電圧定在波比</p>

入射した波と、反射して戻った波が干渉してできる、電圧の山と谷の比です。1.0 が無反射に相当し、大きいほど反射が多い、と読みます。成績表の定番ですが、リターンロスとは数字の向きが違います。

## リターンロス {#return-loss}

<p class="term-en">return loss／反射損失</p>

反射の大きさをデシベルで表したものです。値が大きいほど、反射は小さいです。20 dB は 10 dB より反射が小さい、という向きを取り違えないでください。VSWR と読み替えできます。目安として、VSWR 1.5 はおよそ 14 dB です。

## 挿入損失 {#insertion-loss}

<p class="term-en">insertion loss</p>

アッセンブリを経路に入れたことで、先へ届く信号がどれだけ減るかです。長さ、周波数、誘電体、導体の表面に左右されます。反射とは別の項目です。反射が良くても、長ければ挿入損失は増えます。

## 遮断周波数 {#cutoff}

<p class="term-en">cutoff frequency</p>

このサイトでは、同軸が意図した基本モード以外を通し始めるあたりの周波数、という学習用の意味で使います。断面が大きい系列ほど、この上限は低くなりやすいです。カタログに書かれた「何 GHz まで」の背景であり、その製品の保証上限そのものではありません。

## 表皮効果 {#skin-effect}

<p class="term-en">skin effect</p>

周波数が高いほど、電流が導体の表面近くを流れる現象です。めっきの種類と、表面の荒れが損失に効き始める理由になります。直流の導通を測っても、この効果は見えません。

## 位相整合 {#phase-match}

<p class="term-en">phase matching</p>

複数本の電気的な長さを、指定した周波数で揃えることです。定規の長さが同じでも、誘電体の速度係数が違えば位相は揃いません。半導体試験や多チャンネルの計測で、組として図面に出ます。一本だけ替えると、組は崩れます。

## PIM {#pim}

<p class="term-en">passive intermodulation／受動相互変調</p>

二つ以上の送信波が、緩い金属接触や腐食、磁性体などの非線形で混ざり、別の周波数になる現象です。落ち先が受信帯だと、受信の邪魔をします。基地局のように送受が近い受動経路で問題になります。導通チェックや小さな信号の VSWR だけでは見つからず、コネクタと端末を組んだアッセンブリで初めて意味を持ちます。

## セミリジッドケーブル {#semi-rigid}

<p class="term-en">semi-rigid cable</p>

外部導体が金属管で、手で容易には曲がらない同軸です。形が決まり、遮蔽に優れます。所定の形へ一度フォーミングすることが多く、繰り返しの曲げには向きません。対して、編組を使って曲がるフレキシブルと、その中間のセミフレキがあります。同じコネクタでも、このどれかで別のアッセンブリです。

## 誘電体 {#dielectric}

<p class="term-en">dielectric</p>

中心導体と外部導体のあいだの絶縁体です。PTFE の充実、発泡、空気に近い構造があります。損失、耐電力、温度による位相の変化、信号の速度に効きます。コネクタの内部が空気誘電体か PTFE かも、系列の違いとして出てきます。

## シールド {#shield}

<p class="term-en">shield／外部導体</p>

外部導体のうち、外へ漏らさず、外から入れないはたらきを指してシールドと呼ぶことが多いです。編組の密度、箔、金属管で段が違います。同時に信号の戻り経路でもあるので、途中で切れたり乱れたりすると、反射と不要な放射の両方になります。

## 嵌合トルク {#torque}

<p class="term-en">mating torque</p>

コネクタを締める回転力です。手加減ではなく、トルクレンチで管理する系列があります。締め不足は接触の不安定や PIM、締めすぎは界面の変形につながります。確認できた例は [コネクタの種類]({{ '/learn/connector-types/' | relative_url }}) にあります。この用語集には表を置きません。実際の値は各メーカーの仕様です。図面か、相手機器の指示を見ます。

## 差動伝送 {#differential}

<p class="term-en">differential signaling</p>

対になった二本の線で、向きが逆の信号を運ぶやり方です。受け側は二本の差を読むので、両方に同じように乗った雑音を消しやすいです。USB のデータ線に使われます。同軸は、中心導体と外部導体の一本の伝送路で、差動の対とは構造が違います。

## USB Type-C {#usb-c}

<p class="term-en">USB Type-C</p>

USB のコネクタの形の一つで、上下を気にせず差せることが多いプラグです。ケーブルの中は、電源や、対になったデータ線などが束になっています。見た目が同じでも、中の線の数や、通せる速度は製品と規格で違います。高周波の同軸アッセンブリの代わり、ではありません。比較は [同軸と USB-C]({{ '/learn/compare/coax-vs-usbc/' | relative_url }}) です。殻だけ Type-C にしても充電できない話は [第5話]({{ '/manga/05-typec-shell/' | relative_url }}) です。
