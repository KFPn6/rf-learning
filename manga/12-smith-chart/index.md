---
layout: default
title: 第12話 偉人シリーズ6 フィリップ・スミスとスミスチャート
description: 偉人シリーズ第6話。Phillip H. Smith（Bell Labs）とスミスチャートを、1939年の Electronics 誌の書誌と、水橋東作の1937年の記事が同時期にある範囲で、ミナとケンの会話にします。発明者とは断定しません。
permalink: /manga/12-smith-chart/
---

# 第12話　偉人シリーズ6　フィリップ・スミスとスミスチャート

偉人シリーズの第6話です。ミナとケンの会話は**フィクション演出**です。人物の台詞や場面は創作していません。史実は、IEEE の解説と論文、Electronics 誌の書誌、電気通信学会雑誌の書誌に書かれている範囲だけを扱います。主題は、同軸を含む伝送線路の反射を、円の上の点として見る図表です。

<div class="talk">
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">スミスチャートは、フィリップ・スミスが発明したの？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">発明者とは呼ばない。IEEE の展示解説は、1929年にベル研究所の無線技術者 Phillip Smith が、大西洋を渡す通信のためのアンテナ列の設置に関わり、送信機からアンテナまでの伝送路で反射した波が電力を減らした、と書く。計算を減らす図を探した。直角座標では、大きな反射を扱いにくかった。1930年代の後半に、スミスと、日本の水橋東作が、それぞれ別に、極座標を使ってインピーダンスの値を円の中へ収めた、と書く。ETHW の解説は、スミスチャートと呼ばれる図は Philip Smith と水橋東作の仕事で、互いに独立に考案したように見える、と書く。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">水橋の論文は、スミスより前？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">発行の月は前だ。電気通信学会雑誌の書誌ページは、水橋東作「四端子回路のインピーダンス変成と整合回路の理論」を、1937年12月1日発行とする。IEEE Microwave Magazine（2020年）の参考文献は、同じ論文を vol. 21, no. 12、pp. 1053–1058、1937年12月、と置く。ETHW は、その記事が図表を説明している、と書く。本文はこの話では開いていない。線がどこまで同じ図かは、ここでは写さない。スミスの記事は1939年1月だ。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">スミスの記事の題は、スミスチャート？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">書誌の題には、その語は無い。Inan の2005年の IEEE 論文が置く書誌は、P. H. Smith, “Transmission Line Calculator,” Electronics, vol. 12, no. 1, pp. 29–31、1939年1月。1939年1月号の目次も、Phillip H. Smith の Transmission Line Calculator を29ページに置く。題は伝送線路の計算のための道具だ。本文は未見。Inan は、技術誌への掲載まで二年ほどかかった、と書く。続きは1944年1月の “An Improved Transmission Line Calculator,” vol. 17, no. 1。Inan は、インピーダンスの図としてもアドミタンスの図としても使える改良を含む、と書く。頁は 130–133 と、318、320、322、324–325。この本文も未見。</p>
  </div>
</div>

<figure class="figure-card">
  <svg viewBox="0 0 260 176" role="img" aria-labelledby="smithTitle">
    <title id="smithTitle">反射係数の平面を簡略化した円。中心が整合、左が短絡、右が開放</title>
    <defs>
      <clipPath id="smithClip12">
        <circle cx="130" cy="86" r="50"></circle>
      </clipPath>
    </defs>
    <circle cx="130" cy="86" r="50" fill="#f4f1ea" stroke="#24343c" stroke-width="2"></circle>
    <circle cx="130" cy="86" r="20" fill="none" stroke="#1f4d45" stroke-width="1.6" stroke-dasharray="4 3"></circle>
    <g clip-path="url(#smithClip12)">
      <circle cx="155" cy="86" r="25" fill="none" stroke="#c9843d" stroke-width="1.7"></circle>
      <circle cx="180" cy="36" r="50" fill="none" stroke="#9a4e24" stroke-width="1.7"></circle>
    </g>
    <line x1="80" y1="86" x2="180" y2="86" stroke="#24343c" stroke-width="1.2"></line>
    <circle cx="130" cy="86" r="3.2" fill="#24343c"></circle>
    <text x="14" y="90" fill="#1c1915" font-size="13" font-family="Hiragino Sans, Noto Sans JP, sans-serif">短絡</text>
    <text x="188" y="90" fill="#1c1915" font-size="13" font-family="Hiragino Sans, Noto Sans JP, sans-serif">開放</text>
    <text x="130" y="28" text-anchor="middle" fill="#1c1915" font-size="13" font-family="Hiragino Sans, Noto Sans JP, sans-serif">誘導</text>
    <text x="130" y="164" text-anchor="middle" fill="#1c1915" font-size="13" font-family="Hiragino Sans, Noto Sans JP, sans-serif">容量</text>
    <text x="130" y="74" text-anchor="middle" fill="#1c1915" font-size="13" font-family="Hiragino Sans, Noto Sans JP, sans-serif">整合</text>
  </svg>
  <figcaption>
    <p>反射係数の平面を、自作で簡略化した概念図です。市販のスミスチャートの複製ではなく、波長の目盛りも、抵抗の細かい円も省いています。水平の実線が反射係数の実軸、破線の小さい円は反射の大きさが同じ場所、茶の円は正規化した抵抗が 1 の概念、焦げ茶の弧は正規化したリアクタンスが正の概念です。数値の読み取りには使いません。左端が短絡、右端が開放、中心が整合、実軸の上が誘導、下が容量、という向きは Microwaves101 の範囲です。</p>
  </figcaption>
</figure>

<div class="talk">
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">円の真ん中は、何を見ている？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">反射の大きさゼロだ。Microwaves101 は、この図を、複素の反射係数に、インピーダンスかアドミタンスの格子を重ねたもの、と書く。目盛りは、特性インピーダンスを 1 と置いた正規化だ、とも書く。式は Γ = (ZL − Z0) / (ZL + Z0)。負荷 ZL が線路の Z0 と一致すると、Γ は 0。その点が中心で、VSWR は 1 に相当する。標準の向きでは、左端が短絡で電圧の反射係数は −1、右端が開放で +1、と書く。どちらも大きさは 1 で、円の縁にある。実軸より上が誘導、下が容量、とも書く。このサイトの深掘りと早見は、反射係数の絶対値の側を Γ と置いて、VSWR = (1+Γ)/(1−Γ) と書く。記号の置き方が違う。チャートの点は、大きさと角度を持つ側だ。中心からの距離が大きさで、VSWR はその距離だけで決まる。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">同軸やコネクタは、どこに出る？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">同軸は伝送線路の一つで、特性インピーダンスを持つ。コネクタは、その断面を相手のポートへ渡す界面だ。途中で寸法の比が乱れる、オームの違うものをつなぐ、端末の負荷が線路と合わない、と、その点で波の一部が戻る。戻った波と進む波が重なって、電圧の山と谷ができる。その比が VSWR だ。成績表の VSWR は、チャートでは中心を共有する円の半径に対応する。整合に近いほど、点は中心に寄る。境目で特性インピーダンスが変わると、反射係数を正規化する基準も変わる。点は、同じ円周の上を滑るだけでは済まない、と Microwaves101 は書く。この話の図は概念で、製品の合否図ではない。50 Ω や 75 Ω は、学習用の基準の話であって、この図が保証する値ではない。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">ケーブルの長さを変えると、点は動く？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">損失の小さい一様な線路では、反射の大きさは場所で変わらず、位相が変わる。チャートでは、中心からの距離を保ったまま動く。Microwaves101 は、電源の側へ見るときは時計回り、半波長で一周して同じインピーダンスに戻る、と書く。この簡略図に、角度や波長の目盛りは無い。何度が何ミリかは、ここでは読まない。コネクタの境目や、むき出しの長さが図面と違う端末は、一様な線路の途中とは別で、インピーダンスが跳ねうる。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">円の前は、四角い図？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">Inan は、1931年に Fleming の1911年の式を変形して、最初の図解を矩形にした、と書く。矩形は役に立ったが、収められる量に限りがあった。ETHW は、Fleming の矩形の図に反射を載せようとして、数が上下へはみ出した、と書く。矩形から円へ、という向きは同じで、矩形を誰の図と呼ぶかは揃わない。1936年に、インピーダンスの値をすべて示せる極座標の図を作った、と Inan は書く。1936年の後半、直交する円の格子を疑い、同僚の E. B. Ferrell と J. W. McRae に相談した。二人は等角写像に通じていて、1937年の初めに、直交する円への変換を手伝った。ゼロから無限大まで入り、今日使われる図と本質的に同じ、と Inan は書く。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">ベル研究所では、アンテナの人？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">入口はそこだ。Inan は、1905年4月29日にマサチューセッツ州レキシントンで生まれ、1928年にタフツ（当時 Tufts College）で電気工学の学士を取り、ベル電話研究所に入った、と書く。最初はニュージャージー州ディールの無線研究。1929年にローレンスビルの短波の送信所へ移り、欧州と南米向けの指向性アンテナと、1.5マイルほどの線路の電気的な調整に取り組んだ。定在波の測定が多く、線路の入力インピーダンスを早く知る方法が要る、と気づいた、と書く。IEEE の展示が1929年に置くのは、アンテナ列と、反射が電力を減らしたことだ。円の図の完成を、1929年とは書かない。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">発明者、と書く資料は。</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">ある。Inan の書き出しは inventor of the well-known Smith Chart だ。このページはその語を採らない。1952年の IRE フェローは、アンテナの開発と、伝送線路特性の図式解析への貢献、という文で Inan が引く。1974年の IEEE MTT の Special Recognition Microwave Application Award は、円形の伝送線路図表を実用にしたことへの賞として Inan が書く。発明という語は、その要約には無い。ETHW は、独立に考案したように見える、と留める。一人の発明とは書かない。</p>
  </div>
  <div class="say say-mina">
    <p class="name">ミナ</p>
    <p class="bubble">いまも使うの？</p>
  </div>
  <div class="say say-ken">
    <p class="name">ケン</p>
    <p class="bubble">ETHW は、第二次世界大戦の初めから、工学の計算に電子計算機が使われるまで、マイクロ波の技術者の主要な道具だった、と書く。計算機が設計の中心になったあとも、測定と計算の結果を表示する方法として残っている、とも書く。Inan は、1940年に MIT の放射線研究所ができて、図が広く使われ、スミスはその人たちを最初の顧客と見ていた、と書く。1944年には、そのレーダー学校のスタッフによる教科書が、早い収録例だ、とも書く。計測器のどの型式がこの図を画面に出すかは、この話では機種を開いていない。</p>
  </div>
</div>

<aside class="adult-box">
  <h2>大人の深掘り</h2>
  <p>Phillip H. Smith の経歴は、Aziz S. Inan の2005年の IEEE 論文（著者が訂正版と記す PDF）に拠ります。1905年4月29日、マサチューセッツ州レキシントン生まれ。1924年に Tufts College（いまの Tufts University）へ入り、1928年に電気工学の学士。同年、ベル電話研究所へ入っています。ディールの無線研究のあと、1929年にニュージャージー州ローレンスビルの短波送信所で、欧州と南米向けの指向性アンテナと、約1.5マイルの線路の調整に取り組み、定在波の測定から、入力インピーダンスを早く知る図が要る、と Inan は書きます。1931年の矩形の図、1936年の極座標の図、1937年初めの直交円（E. B. Ferrell と J. W. McRae）、1939年1月と1944年1月の Electronics、は同じ論文の整理です。矩形の図を、Fleming の式を変形したスミスの図とするか、Fleming の矩形へ載せようとしてはみ出したとするかは、Inan と ETHW で揃いません。このページは一つに決めません。綴りは、Inan と1939年1月号の目次が Phillip、ETHW の解説と口述の見出しが Philip です。どちらかを誤記とは呼びません。見出しは、論文側の Phillip H. Smith に置きます。</p>
  <p>同時期の類似の図表として、この話で確認したのは水橋東作です。IEEE の展示解説は、1930年代後半にスミスと水橋がそれぞれ別に極座標を使った、と書きます。ETHW は、互いに独立に考案したように見える、と書き、水橋の記事を1937年12月の電気通信学会雑誌（Journal of Electrical Communications Engineers of Japan）とします。書誌の題と発行日は、電子情報通信学会の書誌ページが「四端子回路のインピーダンス変成と整合回路の理論」、水橋東作、1937年12月1日、と出します。巻号と頁は、Takashi Ohira の IEEE Microwave Magazine（vol. 21, no. 11, pp. 60–67, 2020年11月）の参考文献が、vol. 21, no. 12, pp. 1053–1058 と置いています。1937年の本文と図は開いていません。図がどの線まで一致するか、所属の会社名、は書きません。ほかの人物の論文も、この話では開いていません。Inan が inventor と書く語は採りません。1952年の IRE フェローの引用文と、1974年の MTT の Special Recognition Microwave Application Award の要約は、Inan が書く範囲だけを上の会話に置いています。</p>
  <p>円の読み方は、Microwaves101 の Smith Chart Basics の範囲です。複素の反射係数、正規化、左の短絡（−1）、右の開放（+1）、実軸の上が誘導で下が容量、一様な線路では半径が変わらないこと、電源側へは時計回り、半波長で一周、特性インピーダンスが変わる境目では正規化の基準も変わること、を採っています。VSWR と絶対値の対応は、このサイトの <a href="{{ '/learn/master/' | relative_url }}">深掘り</a> と <a href="{{ '/learn/quick-reference/' | relative_url }}">数値早見</a> が、Keysight の関係式から置いている式です。記号 Γ を、複素の側に使うか絶対値の側に使うかは、ページごとに違います。取り違えないでください。同軸の断面と、コネクタが界面であることは <a href="{{ '/learn/beginner/' | relative_url }}">入門</a>、言葉は <a href="{{ '/glossary/' | relative_url }}#vswr">用語集の VSWR</a> です。スタブの長さを決める手順は、この話では書きません。</p>
  <p>同軸の直径比は、図表とは別の特許です。米国特許 2,298,428（Phillip H. Smith、ベル電話研究所へ譲渡。1939年8月19日出願、1942年10月13日登録）は、外導体の内径と内導体の外径の比がおよそ 1.65 のとき、所定の電力に対して電力容量の側が有利になる、と書きます。本文は、その比 1.648 が特性インピーダンス 30.0 Ω に対応する、とも書きます。別の条件（所定の電圧）では、比を e = 2.718 とし、60.0 Ω に対応する、とも書きます。請求項は四つあり、Inan が「請求項は 1.65 という一つの数だけ」と書く整理とは合いません。このページは特許の文を採ります。50 Ω を定めた特許ではありません。同心の線路自体は、本文がエスペンシードらの米国特許 1,835,031 を引いています。その話は <a href="{{ '/manga/07-espenschied-affel/' | relative_url }}">第7話</a> です。30 Ω や 60 Ω は、特許が置く条件付きの数字であり、製品の保証ではありません。</p>
  <p>退職後の会社は、資料で順番が揃いません。Inan は、42年勤めたあと1970年に退職し、ニュージャージー州ニュープロビデンスの Analog Instruments Company を起こし、初めに図表と関連品を売り、のちに軽飛行機の航法計器を足した、と書きます。ETHW は、1970年代に Analog Instruments を起こし、軽飛行機の航法計器を扱い、のちに図表を供給した、と書きます。どちらを先とは決めません。部数も、ETHW が1975年までに約900万部、Inan が死去の時点で900万部を超えると報じられた、と分かれます。一つにはしません。死去は、Inan が1987年8月29日、ニュージャージー州バークリーハイツ、82歳、と書きます。1969年の著書 Electronic Applications of the Smith Chart in Waveguide, Circuit, and Component Analysis（McGraw-Hill）は書誌だけで、本文は未見です。米国特許21件、論文は35編を超える、という数は Inan の数で、ここでの再集計ではありません。IEEE History Center の口述は1973年1月19日、聞き手は Frank A. Polkinghorn です。紹介文は、高校時代にアマチュア無線の局 1ANB を組んだ、と書きます。原稿の引用には同センターの許可が要るので、口述の文はこのページへ写しません。Microwaves101 は、2015年4月に図表の著作権が IEEE MTT Society へ渡った、と書きます。このページの図は、その図表の複製ではありません。</p>
  <p>反射と VSWR の式は <a href="{{ '/learn/master/' | relative_url }}">深掘り</a>、読み替えの表は <a href="{{ '/learn/quick-reference/' | relative_url }}">数値早見</a>、前の話は <a href="{{ '/manga/11-oldfield-k/' | relative_url }}">第11話</a>、一覧は <a href="{{ '/manga/' | relative_url }}">学習マンガ</a> です。</p>
</aside>

## 出典

- IEEE History Center の展示解説 “Graphical Methods in Engineering”（1929年にベル研究所の Phillip Smith が大西洋横断のアンテナ列に関わり、伝送路の反射が電力を減らした。直角座標では大きな反射を扱いにくい。1930年代後半に、スミスと水橋東作がそれぞれ別に極座標を使った、と書く）: https://history.ieee.org/wp-content/uploads/2025/06/25-CA-3-039-HIST-IEEE-Modular-MuseumBanner-GraphicalMethods-FNL-LoRes.pdf
- ETHW, “Smith Chart”（Philip Smith と Mizuhashi Tosaku が、互いに独立に考案したように見える。1936年に円形の図。1939年1月の Electronics のあと数年で広まった。水橋の記事は1937年12月。第二次世界大戦から電子計算機まで主要な道具で、いまも測定と計算の表示に残る。Analog Instruments は航法計器のあと図表、1975年までに約900万部、と書く）: https://ethw.org/Smith_Chart
- A. S. Inan, “Remembering Phillip H. Smith on his 100th Birthday,” 2005 IEEE Antennas and Propagation Society International Symposium Digest, vol. 3B, pp. 129–132（著者が訂正版と記す PDF。1905年4月29日レキシントン生まれ、1928年 Tufts、ベル電話研究所。1931年の矩形、1936–1937年の円、1939年と1944年の Electronics の書誌、1940年の MIT 放射線研究所、1952年の IRE フェロー、1974年の MTT の賞、1969年の著書、1970年退職と Analog Instruments、1987年8月29日死去。書き出しは inventor。このページはその語を採らない。特許の「請求項は 1.65 だけ」は、特許本文と合わないので採らない）: https://faculty.up.edu/ainan/aps2005inanMarch05.pdf
- 同じ論文の DOI: https://doi.org/10.1109/aps.2005.1552450
- P. H. Smith, “Transmission Line Calculator,” Electronics, vol. 12, no. 1, pp. 29–31, January 1939（書誌は Inan。本文は未見）
- Electronics, January 1939, vol. 12, no. 1 の目次（Transmission Line Calculator, by Phillip H. Smith、29ページ）: https://www.rfcafe.com/references/electronics-mag/toc/electronics-january-1939-table-contents.htm
- P. H. Smith, “An Improved Transmission Line Calculator,” Electronics, vol. 17, no. 1, pp. 130–133, 318, 320, 322, 324–325, January 1944（書誌は Inan。インピーダンスとアドミタンスの両用は Inan の要約。本文は未見）
- 水橋東作「四端子回路のインピーダンス変成と整合回路の理論」電気通信学会雑誌、書誌ページは1937年12月1日発行（本文は未見）: https://www.journal.ieice.org/summary.php?id=k21_12_1053&lang=J&year=1937
- T. Mizuhashi, “Theory of four-terminal impedance transformation circuit and matching circuit,” J. Inst. Elect. Commun. Eng. Jpn., vol. 21, no. 12, pp. 1053–1058, Dec. 1937（巻号と頁は、T. Ohira, “A Radio Engineer’s Voyage to Double-Century-Old Plane Geometry,” IEEE Microwave Magazine, vol. 21, no. 11, pp. 60–67, Nov. 2020 の参考文献。1937年の本文は未見）: https://doi.org/10.1109/MMM.2020.3015136
- Microwaves101, “Smith Chart Basics”（複素反射係数の図、正規化、短絡は左で −1、開放は右で +1、実軸の上が誘導、一様線路では半径不変、電源側は時計回り、半波長で一周、Z0 が変わる境目。2015年4月に著作権が IEEE MTT Society へ渡った、と書く。このページの図は複製しない）: https://www.microwaves101.com/encyclopedias/smith-chart-basics
- 米国特許 US 2,298,428 “Transmission line”（Phillip H. Smith、Bell Telephone Laboratories。1939年8月19日出願、1942年10月13日登録。直径比およそ 1.65、本文は 1.648 と 30.0 Ω。別条件で e = 2.718 と 60.0 Ω。請求項は四つ。同心線路について米国特許 1,835,031 を引く）: https://patents.google.com/patent/US2298428
- ETHW, “Oral-History: Philip H. Smith”（1973年1月19日、Frank A. Polkinghorn、IEEE History Center。紹介文は高校時代の 1ANB。原稿は許可なく引用しない）: https://ethw.org/Oral-History:Philip_H._Smith
