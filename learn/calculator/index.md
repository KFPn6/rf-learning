---
layout: default
title: "VSWR・リターンロス変換と反射係数・同軸ケーブル損失の計算"
description: "VSWR、リターンロス（dB）、反射係数、ミスマッチ損失、反射電力をブラウザ内で相互に変換します。RG-58、RG-316、RG-174、RG-402、3D-2V、5D-2V などの同軸ケーブル損失も、周波数と長さから概算します。"
lastmod: 2026-11-04
permalink: /learn/calculator/
---

{% include learn-nav.html %}

# VSWR・リターンロス変換と反射係数・同軸ケーブル損失の計算

VSWR、リターンロス、反射係数を入れ替えて読む電卓と、同軸ケーブルの減衰を周波数と長さから概算する電卓です。計算はブラウザの中だけで行い、入力した数値は送り出しません。公開資料の式と、データシートに書かれた係数・掲載点だけを使います。確認できない係数は置いていません。結果は学習用の概算であり、個別製品の保証値ではありません。使う周波数の行と条件は、各メーカーのデータシートで確認してください。

式の読み方は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }})、dB/m と長さの読み方は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) です。呼びごとの概数は [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }})、行だけの早見は [数値早見]({{ '/learn/quick-reference/' | relative_url }}) です。50 Ω と 75 Ω の境目は反射係数 0.2 です。BNC でその数字をどう読むかは [BNC の 50 Ω と 75 Ω]({{ '/learn/bnc-50-75/' | relative_url }}) です。

## VSWR・リターンロス・反射係数の変換 {#reflect}

反射係数の絶対値を &#124;Γ&#124; と書きます。資料によっては、同じ大きさを ρ や &#124;S11&#124; と書きます。このページが使う関係は、次です。

&#124;Γ&#124; = (VSWR − 1) / (VSWR + 1)

VSWR = (1 + &#124;Γ&#124;) / (1 − &#124;Γ&#124;)

リターンロス（dB）= −20 log10(&#124;Γ&#124;)

反射電力（%）= &#124;Γ&#124;² × 100

ミスマッチ損失（dB）= −10 log10(1 − &#124;Γ&#124;²)

ミスマッチ損失は、反射で戻った電力を除き、残りの電力が先の負荷へ届くと仮定したときの減りです。ケーブルの中で熱になる挿入損失とは別の数字です。HUBER+SUHNER の式一覧は、20 log の側を return loss、−10 log(1−&#124;Γ&#124;²) の側を reflection loss と書いています。このページのミスマッチ損失は、後者です。

VSWR が 1 のとき &#124;Γ&#124; は 0 で、リターンロスは無限大に相当します。&#124;Γ&#124; が 1 のとき、VSWR とミスマッチ損失は無限大に相当し、リターンロスは 0 dB、反射電力は 100% です。リターンロスは正の dB で入れます。成績表が S11 を負の dB で書いているときは、符号を除いた大きさを入れてください。

<div class="calc" id="reflect-calc" markdown="0">
  <div class="calc-grid">
    <div class="calc-field">
      <label for="vswr">VSWR</label>
      <input id="vswr" name="vswr" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="例: 1.5">
    </div>
    <div class="calc-field">
      <label for="rl">リターンロス（dB）</label>
      <input id="rl" name="rl" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="例: 13.98">
    </div>
    <div class="calc-field">
      <label for="gamma">反射係数の絶対値 &#124;Γ&#124;</label>
      <input id="gamma" name="gamma" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="例: 0.2">
    </div>
    <div class="calc-field">
      <label for="mismatch">ミスマッチ損失（dB）</label>
      <input id="mismatch" name="mismatch" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="例: 0.177">
    </div>
    <div class="calc-field">
      <label for="reflected">反射電力（%）</label>
      <input id="reflected" name="reflected" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="例: 4">
    </div>
  </div>
  <div class="calc-actions">
    <button type="button" class="button button-secondary" id="reflect-example">例: VSWR 1.5 を入れる</button>
  </div>
  <p class="calc-error" id="reflect-error" role="alert" hidden></p>
  <p class="calc-summary" id="reflect-summary" aria-live="polite"></p>
  <noscript><p>計算には JavaScript が必要です。式は上に書いてあります。</p></noscript>
</div>

どれか一つの欄へ数値を入れると、残りの欄が更新されます。表示は、VSWR と &#124;Γ&#124; が小数第 4 位、リターンロスが小数第 2 位、ミスマッチ損失が小数第 3 位、反射電力が小数第 2 位の四捨五入です。末尾の 0 は、VSWR と &#124;Γ&#124; では省きます。VSWR 1.5 は、リターンロス 13.98 dB、&#124;Γ&#124; = 0.2、ミスマッチ損失 0.177 dB、反射電力 4.00% です。換算表の同じ行は [VSWR とリターンロス]({{ '/learn/vswr-return-loss/' | relative_url }}) にあります。

1 未満の VSWR、0 未満や 1 を超える &#124;Γ&#124;、負のリターンロス、負のミスマッチ損失、0% 未満や 100% を超える反射電力は、欄の下に理由を出して、ほかの欄は空にします。

## 同軸ケーブルの損失計算 {#cable}

ここでの減衰は、整合を仮定したケーブル単体の典型値です。両端のコネクタ、端末の工作、曲げ、温度のずれは入っていません。データシートが VSWR = 1.0、周囲 25 °C 前後を条件にしている行を、そのまま長さへ掛けています。反射が残る一本の挿入損失を、この結果に固定しないでください。コネクタを dB で足す手順は [同軸ケーブルの損失]({{ '/learn/cable-loss/' | relative_url }}) です。

プリセットは、公表されている式か、公表されている標準減衰量の掲載点だけです。式の形は a×√f + b×f です。f の単位と、結果の単位はケーブルごとに違います。掲載点が三つの 3D-2V と 5D-2V は、式がカタログに無いので、10 MHz、400 MHz、900 MHz では表の値を使い、そのあいだだけ周波数の常用対数で直線補間します。掲載範囲の外は計算しません。

同じ呼びでも、中心導体や外被が違えば減衰は違います。RG-58 のプリセットは、HUBER+SUHNER の RG_58_C/U です。Times Microwave Systems の整理表にある M17/28-RG58 の 1 GHz とは、別の数字です。呼びの読み分けは [ケーブルの種類]({{ '/learn/cable-types/' | relative_url }}) です。

<div class="table-scroll" markdown="1">

| プリセット | 計算に使う値 | 範囲 |
| --- | --- | --- |
| RG-58（RG_58_C/U） | 0.3455√f + 0.2373f dB/m。f は GHz | 0.10–1.0 GHz |
| RG-174（RG_174_/U） | 0.888√f + 0.034f dB/m。f は GHz | 0.10–1.0 GHz |
| RG-316（RG_316_/U） | 0.7727√f + 0.0972f dB/m。f は GHz | 0.20–3.0 GHz |
| RG-402 セミリジッド（SR_141_TP_M17） | 0.32544√f + 0.03967f dB/m。f は GHz | 0.20–33 GHz |
| ハンドフォーマブル（SUCOFORM 141） | 0.355√f + 0.04f dB/m。f は GHz | 0.20–33 GHz |
| LMR-400 | 0.122290√f + 0.000260f dB/100 ft。f は MHz | 30–8000 MHz |
| 3D-2V | 10 MHz は 47、400 MHz は 309、900 MHz は 471 dB/km。あいだは対数補間 | 10–900 MHz |
| 5D-2V | 10 MHz は 27、400 MHz は 183、900 MHz は 281 dB/km。あいだは対数補間 | 10–900 MHz |

</div>

長さの単位をフィートにしたときは、1 ft = 0.3048 m でメートルへ直してから掛けます。100 ft = 30.48 m です。

<div class="calc" id="cable-calc" markdown="0">
  <div class="calc-grid">
    <div class="calc-field">
      <label for="cable-id">ケーブル</label>
      <select id="cable-id" name="cable-id">
        <option value="rg58">RG-58（RG_58_C/U）</option>
        <option value="rg174">RG-174（RG_174_/U）</option>
        <option value="rg316">RG-316（RG_316_/U）</option>
        <option value="rg402">RG-402 セミリジッド（SR_141_TP_M17）</option>
        <option value="sucoform141">ハンドフォーマブル（SUCOFORM 141）</option>
        <option value="lmr400">LMR-400</option>
        <option value="3d-2v">3D-2V（標準減衰量）</option>
        <option value="5d-2v">5D-2V（標準減衰量）</option>
        <option value="custom">係数を手入力</option>
      </select>
    </div>
    <div class="calc-field">
      <label for="cable-freq">周波数</label>
      <div class="calc-row">
        <input id="cable-freq" name="cable-freq" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="例: 900">
        <select id="cable-freq-unit" name="cable-freq-unit" aria-label="周波数の単位">
          <option value="MHz">MHz</option>
          <option value="GHz">GHz</option>
        </select>
      </div>
    </div>
    <div class="calc-field">
      <label for="cable-length">長さ</label>
      <div class="calc-row">
        <input id="cable-length" name="cable-length" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="例: 10">
        <select id="cable-length-unit" name="cable-length-unit" aria-label="長さの単位">
          <option value="m">m</option>
          <option value="ft">ft</option>
        </select>
      </div>
    </div>
  </div>
  <div id="cable-custom" class="calc-custom" hidden>
    <p>減衰 = a×√f + b×f です。a と b は、選んだ単位のまま入れてください。上限を空にすると、上限の内外は判定しません。</p>
    <div class="calc-grid">
      <div class="calc-field">
        <label for="cable-a">√f の係数 a</label>
        <input id="cable-a" name="cable-a" type="text" inputmode="decimal" autocomplete="off" spellcheck="false">
      </div>
      <div class="calc-field">
        <label for="cable-b">f の係数 b</label>
        <input id="cable-b" name="cable-b" type="text" inputmode="decimal" autocomplete="off" spellcheck="false">
      </div>
      <div class="calc-field">
        <label for="cable-formula-f">式の中の f の単位</label>
        <select id="cable-formula-f" name="cable-formula-f">
          <option value="MHz">MHz</option>
          <option value="GHz" selected>GHz</option>
        </select>
      </div>
      <div class="calc-field">
        <label for="cable-formula-att">a と b が表す減衰の単位</label>
        <select id="cable-formula-att" name="cable-formula-att">
          <option value="dB/m" selected>dB/m</option>
          <option value="dB/100m">dB/100 m</option>
          <option value="dB/100ft">dB/100 ft</option>
        </select>
      </div>
      <div class="calc-field">
        <label for="cable-formula-max">この式の上限周波数（空でも計算します）</label>
        <input id="cable-formula-max" name="cable-formula-max" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="f と同じ単位">
      </div>
    </div>
  </div>
  <div class="calc-actions">
    <button type="button" class="button button-secondary" id="cable-example">例: LMR-400、900 MHz、10 m</button>
  </div>
  <p class="calc-error" id="cable-error" role="alert" hidden></p>
  <p class="calc-summary" id="cable-summary" aria-live="polite"></p>
  <noscript><p>計算には JavaScript が必要です。係数と範囲は上の表に書いてあります。</p></noscript>
</div>

残る電力の比は 10^(−L/10) です。L はこの電卓が出した減衰（正の dB）です。3D-2V と 5D-2V の最大は、カタログの備考では標準値の 115% 以下です。電卓が出すのは標準値の側であり、最大値ではありません。補間した周波数は、カタログにその行が無い概算です。

## 出典

式、係数、掲載点は、次の公開資料で確認しました。換算の数字と、長さを掛けた dB は、ここに書いた式からの計算です。資料のグラフと表の転載はしていません。

- Keysight、E5061B の解説（反射係数 ρ は反射電圧と入射電圧の比。RL = −20 log ρ。SWR = (1+ρ)/(1−ρ)）: https://helpfiles.keysight.com/csg/e5061b/measurement_with_options/option_010_time_domain_fault_location_analysis/fault_location_analysis/theory.htm
- Microwaves101、“Voltage standing wave ratio (VSWR)”（Γ = (ZL − Z0)/(ZL + Z0)。&#124;Γ&#124; の二乗は反射した波の電力。VSWR = (1+&#124;Γ&#124;)/(1−&#124;Γ&#124;)。リターンロス = −20 log(&#124;Γ&#124;)）: https://www.microwaves101.com/encyclopedias/voltage-standing-wave-ratio-vswr
- HUBER+SUHNER、ケーブル計算式の一覧（return loss は 20 log。reflection loss は −10 log(1−&#124;Γ&#124;²)。このページのミスマッチ損失は後者。ケーブル減衰は A×√f + B×f の形）: https://rfcablecalc.hubersuhner.com/downloads/h+s_cable_formulas.pdf
- HUBER+SUHNER、RG_58_C/U データシート（文書 PIM-P956、公開日 2025-06-13。50 Ω ±2 Ω、使用周波数 1 GHz 以下。典型減衰は a×√f + b×f、a = 0.3455、b = 0.2373、f は GHz、dB/m。表は 0.10 GHz で 0.133 dB/m、1.00 GHz で 0.583 dB/m。海面、周囲 25 °C。保証ではなく情報、と書く）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTY0MTUsInR5cGUiOiJhc3NldCJ9/N1I5nD3cD9uwvHev/H%2BS_RG_58_CU_EN.PDF
- HUBER+SUHNER、RG_174_/U データシート（文書 PIM-P977、公開日 2024-08-08。50 Ω ±2 Ω、使用周波数 1 GHz 以下。a = 0.888、b = 0.034、f は GHz、dB/m。表は 0.10 GHz で 0.284 dB/m、1.00 GHz で 0.922 dB/m。海面、周囲 25 °C）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTY0NzIsInR5cGUiOiJhc3NldCJ9/LG12quwLMRpIecqQ/H%2BS_RG_174_U_EN.PDF
- HUBER+SUHNER、RG_316_/U データシート（文書 PIM-P959、公開日 2026-03-12。50 Ω ±2 Ω、使用周波数 3 GHz 以下。MIL 参照 M17/113-RG316。a = 0.7727、b = 0.0972、f は GHz、dB/m。表は 0.20 GHz で 0.365 dB/m、1.00 GHz で 0.870 dB/m、3.00 GHz で 1.630 dB/m。海面、周囲 25 °C）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTY0NjMsInR5cGUiOiJhc3NldCJ9/KZOV2UhPqfMt4ZH8/H%2BS_RG_316_U_EN.PDF
- HUBER+SUHNER、SR_141_TP_M17 データシート（文書 PIM-P31281、公開日 2025-04-04。セミリジッド、50 Ω ±1 Ω、外導体はスズめっき銅管、外径 3.58 mm、使用周波数 33 GHz 以下。a = 0.32544、b = 0.03967、f は GHz、dB/m。表は 0.20 GHz で 0.153 dB/m、1.00 GHz で 0.365 dB/m、33.00 GHz で 3.179 dB/m。海面、周囲 25 °C）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjo3NjU1NSwidHlwZSI6ImFzc2V0In0/8t7bnvkp2ZYHptRH/H%2BS_SR_141_TP_M17_EN.PDF
- HUBER+SUHNER、SUCOFORM_141_CU_LSFH-01 データシート（文書 PIM-P685、公開日 2026-10-02。ハンドフォーマブル、50 Ω ±2 Ω、外導体の外径 3.58 mm、使用周波数 33 GHz 以下。a = 0.355、b = 0.04、f は GHz、dB/m。表は 1.00 GHz で 0.395 dB/m、10.00 GHz で 1.523 dB/m、33.00 GHz で 3.359 dB/m。海面、周囲 25 °C。保証ではなく情報、と書く）: https://www.hubersuhner.com/Asset/eyJpZGVudGlmaWVyIjoxMTYzODQsInR5cGUiOiJhc3NldCJ9/oY2lirjkWRT8u-dB/H%2BS_SUCOFORM_141_CU_LSFH-01_EN.PDF
- Times Microwave Systems、LMR-400 データシート（典型減衰の係数 0.122290 と 0.000260。条件は VSWR = 1.0、周囲 +25 °C。900 MHz の表は 3.9 dB/100 ft。減衰表は 8000 MHz まで）: https://timesmicrowave.com/wp-content/uploads/2022/06/lmr-400-datasheet.pdf
- Times Microwave Systems、Communications Coax Selection Guide（任意の周波数の減衰は k1×√(F_MHz) + k2×F_MHz。LMR-400 は k1 = 0.12229、k2 = 0.00026。+25 °C。このページの LMR-400 は、この平方根の形へ上の係数を入れている）: https://www.rfparts.com/old_site/pdf_docs/LMR/Coax_Selection_Guide.pdf
- 50 Ω 充実型同軸ケーブルの周波数特性表（3D-2V の標準減衰量は 10 MHz で 47 dB/km、400 MHz で 309 dB/km、900 MHz で 471 dB/km。5D-2V は 10 MHz で 27 dB/km、400 MHz で 183 dB/km、900 MHz で 281 dB/km。特性インピーダンスは 50±2 Ω。備考は、減衰量の最大値は標準値の 115% 以下。PDF のテキストには発行者名が無いため、社名は書いていません）: https://e431.jp/catalog/catalog-L4339.pdf
- NIST、“U.S. Survey Foot”（1 foot = 0.3048 meter exactly。このページの 100 ft = 30.48 m は、その 100 倍）: https://www.nist.gov/pml/us-surveyfoot

<script src="{{ '/assets/js/rf-calculator.js' | relative_url }}" defer></script>
