---
layout: default
title: 問い合わせ
description: 高周波コネクタと同軸ケーブルアッセンブリに関する問い合わせです。フォームは設定用の URL を貼ると表示されます。
permalink: /contact/
---

# 問い合わせ

高周波コネクタと同軸ケーブルアッセンブリについての問い合わせを受け取る場所です。フォームは、Google フォームの埋め込み URL を設定すると、この下に表示されます。いま URL が空のときは、差し替え手順だけを出します。

届ける内容の目安は、次のとおりです。

- 場面（移動通信、車載レーダー、衛星、半導体試験、計測器のどれに近いか）
- 周波数の目安
- 両端のコネクタ系列
- 長さと、おおよその本数
- 位相を揃える組かどうか

価格表や在庫の一覧は、このサイトにはありません。

{% assign form_url = site.contact_form_embed_url | strip %}
{% if form_url == empty or form_url == nil %}
<div class="placeholder">
  <p>フォームはまだ接続していません。</p>
  <p>Google フォームを用意したら、送信画面の埋め込み用 URL を <code>_config.yml</code> の <code>contact_form_embed_url</code> に貼ります。このページの文章を書き換える必要はありません。</p>
  <p>URL は <code>https://docs.google.com/forms/d/e/…/viewform?embedded=true</code> の形です。空のまま公開しても、サイトの他のページはそのまま読めます。</p>
</div>
{% elsif form_url contains "https://docs.google.com/forms/" %}
<iframe class="form-frame" title="問い合わせフォーム" src="{{ form_url }}" loading="lazy">フォームを読み込んでいます。</iframe>
{% else %}
<div class="placeholder">
  <p>設定された URL が Google フォームの埋め込み形式ではないため、表示を止めています。</p>
  <p><code>https://docs.google.com/forms/</code> で始まる埋め込み用 URL を、<code>_config.yml</code> の <code>contact_form_embed_url</code> に入れてください。</p>
</div>
{% endif %}
