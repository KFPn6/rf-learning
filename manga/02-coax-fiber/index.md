---
layout: default
title: 第2話 光の方が新しいから、同軸はいらない？
description: 自作の会話です。同軸が運ぶのは電気の高周波の波、光ファイバーが運ぶのは光です。仕事が違います。
permalink: /manga/02-coax-fiber/
---

# 第2話　光の方が新しいから、同軸はいらない？

ミナとケンは、[第1話]({{ '/manga/01-usb-c/' | relative_url }})と同じ二人です。ミナは、ケーブルの中が知りたい人です。ケンは、ある町工場で、高周波コネクタと同軸ケーブルを組んだアッセンブリを見ている技術者です。絵物語ではなく、二人の会話です。

<div class="talk">
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">ケンさん、光ファイバーって新しいでしょ。同軸はいらないんじゃない？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">新しいから勝ち、ではない。同軸が運ぶのは電気の高周波の波。光ファイバーが運ぶのは光だ。仕事が違う。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">どっちも線なのに？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">線なのは見た目だ。同軸は金属の道で、まん中と、それを包む筒が電気の波を運ぶ。光ファイバーは、芯の中を光が進む。</p>
  </div>
</div>

<figure class="figure-card">
  <svg viewBox="0 0 440 200" role="img" aria-labelledby="coaxFiberTitle">
    <title id="coaxFiberTitle">左は同軸の同心円、右は光ファイバーのコアとクラッド、という概念図</title>
    <circle cx="100" cy="100" r="72" fill="#1f4d45"></circle>
    <circle cx="100" cy="100" r="54" fill="#c9843d"></circle>
    <circle cx="100" cy="100" r="36" fill="#f7f4ee"></circle>
    <circle cx="100" cy="100" r="10" fill="#e2b15a"></circle>
    <circle cx="320" cy="100" r="72" fill="#24343c"></circle>
    <circle cx="320" cy="100" r="46" fill="#d7e8ee"></circle>
    <circle cx="320" cy="100" r="14" fill="#f3e27a"></circle>
  </svg>
  <figcaption>
    <p>左が同軸、右が光ファイバーのイメージです。どちらも丸の重ねですが、左は金属と誘電体、右はコアとクラッドです。太さの比率は概念で、製品の寸法ではありません。</p>
  </figcaption>
</figure>

<div class="talk">
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">右も丸い。中はガラス？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">ガラスが多い。短い距離用にプラスチックもある。まん中のコアを光が進んで、まわりのクラッドとの境目で、光が中へ戻されやすい。さらに外は被覆だ。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">どっちが遠くまで届くの？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">たくさんの情報を長い距離運ぶなら、光ファイバーが向くことが多い。電気の波は、距離と周波数で弱くなりやすい。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">ノイズは、光の方が拾わない？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">まわりの電磁ノイズは、ほとんど拾わない。ただし損失ゼロではない。種類と波長で減衰は違う。急に曲げると光が漏れる。端面の汚れだけでも弱くなる。数字は目安で、製品の保証ではない。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">計測器のポートも、光に替えればいい？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">ポートの中身が電気の高周波なら、同軸のままの方が素直だ。光に変えて、また電気に戻す部品が要る。短い試験の一本まで光にする理由は、薄いことが多い。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">光が上で、同軸が古い、じゃないんだ。</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">頼みに合う方を使う。電気の波を一本の道で運ぶのが同軸、光で長い距離を運ぶのが光ファイバー。両方いる。</p>
  </div>
</div>

<aside class="adult-box">
  <h2>大人の深掘り</h2>
  <p>この会話は、電気の波と光の入口です。断面、損失、距離は <a href="{{ '/learn/compare/coax-vs-fiber/' | relative_url }}">同軸と光ファイバー</a> に分けてあります。言葉は <a href="{{ '/glossary/' | relative_url }}#fiber">用語集の光ファイバー</a> です。話の一覧は <a href="{{ '/manga/' | relative_url }}">学習マンガ</a> です。</p>
  <p>減衰の数値は、ここでは断定していません。種類と波長の文書を見てください。</p>
</aside>
