---
layout: default
title: 第4話 テレビは、なんで同軸なの？
description: 自作の会話です。テレビのアンテナ線が同軸なのは、放送の波を電気のまま運ぶからです。
permalink: /manga/04-tv-coax/
---

# 第4話　テレビは、なんで同軸なの？

ミナとケンは、[第1話]({{ '/manga/01-usb-c/' | relative_url }})と同じ二人です。ミナは、ケーブルの中が知りたい人です。ケンは、ある町工場で、高周波コネクタと同軸ケーブルを組んだアッセンブリを見ている技術者です。絵物語ではなく、二人の会話です。

<div class="talk">
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">うちのテレビのうしろ、丸い線が刺さってる。なんでテレビは同軸なの？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">アンテナで受けた放送の電波を、受信機まで、電気の波のまま一本の道で運びたいからだ。途中で別の形式に変換しなくてよい。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">地デジになったら、もうデータの線じゃないの？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">受信機の中では、映像に戻す。アンテナ線の上では、地デジになっても、高い周波数の波のまま届くことが多い。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">テレビは 75 で、計測は 50、って聞いたよ。うちのも 75？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">受信では 75 Ω であることが多い。計測や無線でぼくたちが見るのは 50 Ω が多い。受信は損失の小ささを優先して、無線や計測は電力と損失の折り合いで、歴史的に数字が分かれた、と説明されることが多い。どの製品もその数字、という保証ではない。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">形が似ていたら、混ぜてもいい？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">よくない。オームが違うと、境目で波の一部が戻る。テレビの受け口と、計測器の受け口を、どちらも同軸だからと直結する話でもない。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">じゃあ、テレビの線は、工場の計測の線の仲間？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">仲間だ。どちらも、電気の波を運ぶ同軸だ。数字と、頼まれている場所が違うだけだ。</p>
  </div>
</div>

<aside class="adult-box">
  <h2>大人の深掘り</h2>
  <p>この会話は、受信の入口です。テレビが同軸である理由は <a href="{{ '/learn/compare/coax-vs-fiber/' | relative_url }}#tv">同軸と光ファイバー</a> にあります。50 Ω と 75 Ω の式と、混ぜたときの反射は <a href="{{ '/learn/impedance/' | relative_url }}">特性インピーダンス</a> です。断面の見方は <a href="{{ '/learn/beginner/' | relative_url }}">入門</a>、言葉は <a href="{{ '/glossary/' | relative_url }}#impedance">用語集の特性インピーダンス</a> です。話の一覧は <a href="{{ '/manga/' | relative_url }}">学習マンガ</a> です。</p>
  <p>どの製品も 75 Ω、という保証は、ここでは断定していません。系統と規格の文書を見てください。</p>
</aside>
