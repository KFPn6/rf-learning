---
layout: default
title: 問い合わせ
description: 問い合わせページはプレースホルダです。Google フォームは、月間のページビューが 500 を超えてから接続します。
permalink: /contact/
---

# 問い合わせ

このページはプレースホルダです。高周波コネクタと同軸ケーブルアッセンブリについて、あとから問い合わせを受け取る場所として空けてあります。Google フォームの作成と接続は、月間のページビューが 500 を超えてから行います。英語版と、モバイル表示の追加の磨き込みと同じ区切りです。それまではフォームを作りません。

サイトの他のページは、これまでどおり読めます。価格表や在庫の一覧は、ここにはありません。

フォームを接続したあとに尋ねる予定の項目は、次のとおりです。

- 場面（移動通信、車載レーダー、衛星、半導体試験、計測器のどれに近いか）
- 周波数の目安
- 両端のコネクタ系列
- 長さと、おおよその本数
- 位相を揃える組かどうか

{% assign form_url = site.contact_form_embed_url | strip %}
{% if form_url == empty or form_url == nil %}
<div class="placeholder">
  <p>フォームはまだ接続していません。今は接続しません。</p>
  <p>月間のページビューが 500 を超えたあとで、Google フォームの埋め込み URL を <code>_config.yml</code> の <code>contact_form_embed_url</code> に貼ると、この場所に表示されます。URL は <code>https://docs.google.com/forms/</code> で始まるものだけです。それまでは空のままにします。</p>
</div>
{% elsif form_url contains "https://docs.google.com/forms/" %}
<iframe class="form-frame" title="問い合わせフォーム" src="{{ form_url }}" loading="lazy">フォームを読み込んでいます。</iframe>
{% else %}
<div class="placeholder">
  <p>設定された URL が Google フォームの埋め込み形式ではないため、表示を止めています。</p>
  <p>月間のページビューが 500 を超えるまでは、<code>contact_form_embed_url</code> を空に戻します。超えたあとで入れる URL は、<code>https://docs.google.com/forms/</code> で始まるものだけです。</p>
</div>
{% endif %}
