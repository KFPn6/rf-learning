---
layout: default
title: 第1話 USB-Cがあれば同軸はいらない？
description: 自作の会話です。USB-C と同軸は、どちらもケーブルですが仕事が違います。
permalink: /manga/01-usb-c/
---

# 第1話　USB-Cがあれば同軸はいらない？

ミナは、ケーブルの中が知りたい人です。ケンは、ある町工場で、高周波コネクタと同軸ケーブルを組んだアッセンブリを見ている技術者です。絵物語ではなく、二人の会話です。

<div class="talk">
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">ケンさん、この線見て。タブレットに刺す USB-C。すごく速いらしいよ。もう、むかしの同軸ケーブルはいらないんじゃない？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">速いのは本当だ。でも「いらない」は早いかな。どっちもケーブルだけど、頼まれている仕事が違うんだ。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">仕事？ 線は線でしょ。電気を運ぶんでしょ？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">運ぶ中身が違う。USB-C は、データと、充電の電気を、一つのプラグにまとめやすい。同軸は、高い周波数の波を、まん中の一本道で運ぶ。波の強さや、タイミングまで見たいときに使う。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">中をのぞいたら、どっちも金属の線なんじゃないの？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">のぞくと、並びが違う。同軸は、まん中の線と、それを包む筒。筒が戻り道で、外に漏れにくくする盾にもなる。USB-C の線は、何本も束になっている。データは、近い二本を一対にして運ぶことが多い。</p>
  </div>
</div>

<figure class="figure-card">
  <svg viewBox="0 0 440 200" role="img" aria-labelledby="pairTitle">
    <title id="pairTitle">同軸は一つの筒、USB-C は線の束、という概念図</title>
    <circle cx="100" cy="100" r="72" fill="#1f4d45"></circle>
    <circle cx="100" cy="100" r="54" fill="#c9843d"></circle>
    <circle cx="100" cy="100" r="36" fill="#f7f4ee"></circle>
    <circle cx="100" cy="100" r="10" fill="#e2b15a"></circle>
    <rect x="250" y="40" width="150" height="120" rx="60" fill="#24343c"></rect>
    <rect x="268" y="58" width="114" height="84" rx="42" fill="#8a93a0"></rect>
    <rect x="286" y="74" width="78" height="52" rx="16" fill="#f7f4ee"></rect>
    <circle cx="308" cy="92" r="6" fill="#1f4d45"></circle>
    <circle cx="324" cy="92" r="6" fill="#1f4d45"></circle>
    <circle cx="340" cy="112" r="6" fill="#9a4e24"></circle>
    <circle cx="356" cy="112" r="6" fill="#9a4e24"></circle>
  </svg>
  <figcaption>
    <p>左が同軸のイメージ、右が USB-C のケーブルのイメージです。右の丸の位置は、本当のピン配置ではありません。ピンの数も、製品と規格で違います。</p>
  </figcaption>
</figure>

<div class="talk">
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">じゃあ、USB-C の形さえ同じなら、どれを刺しても同じ速さ？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">そこが落とし穴だ。見た目が同じでも、中の線の数や、対応している速さが違うことがある。同軸も同じで、コネクタの名前だけじゃ、中のケーブルも長さも決まらない。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">テレビのうしろにも、丸い同軸が刺さってたよ。あれと、ケンさんの工場の線は同じ？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">仲間だけど、オームの数字が違うことが多い。テレビの受信は 75 Ω、計測や無線でぼくたちが見るのは 50 Ω、ということが多い。数字が違うものを、形が近いからと混ぜると、境目で波がはね返る。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">USB は 0 と 1 のデジタルでしょ。高い周波数の波の話と、関係なくない？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">0 から 1 に変わる縁が急なほど、高い周波数の成分が混ざる。速いデジタルほど、線の長さや断面が成績に効く。だから「デジタルだから高周波は関係ない」は、ちがう。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">工場では、まだ同軸を作ってるの？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">作っている。ただし、コネクタだけを袋で出す仕事じゃない。両端のコネクタと、あいだのケーブルを、長さも曲げも指定して一本にする。図面が違えば、別の一本だ。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">USB-C が悪いわけじゃないんだね。</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">悪くない。充電とデータをまとめて渡すのが得意なだけだ。高い周波数の波を、決まった道で運ぶのが得意なのは同軸の方。仕事が違うから、両方いる。</p>
  </div>
</div>

<aside class="adult-box">
  <h2>大人の深掘り</h2>
  <p>この会話は、比較の入口です。断面、表、よくある誤解は <a href="{{ '/learn/compare/coax-vs-usbc/' | relative_url }}">同軸と USB-C</a> に分けてあります。同軸そのものの見方は <a href="{{ '/learn/beginner/' | relative_url }}">入門</a>、言葉は <a href="{{ '/glossary/' | relative_url }}">用語集</a> です。続きは <a href="{{ '/manga/02-coax-fiber/' | relative_url }}">第2話</a> で、同軸の「同」と光ファイバーを話します。</p>
  <p>トルクの数値や、USB の世代ごとの正確な上限は、ここでは断定していません。系列と規格の文書を見てください。</p>
</aside>
