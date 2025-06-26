目的：今後 TypeScript や React にスケールする為の準備段階
使用技術： JavaScript/CSS/HTML

これはシンプルな足し算計算機を作成する HTML、CSS、JavaScript のコードですね。それぞれのコードがどのような役割を担っているか、詳しく見ていきましょう。
HTML（HyperText Markup Language）
HTML はウェブページの骨組みを作る言語です。表示したい内容（テキスト、画像、入力欄など）を構造化します。

<h3>DOCTYPE html</h3> この文書が HTML5 の形式で書かれていることを宣言します。

<h3>html lang="ja"</h3> HTML文書の開始を示し、言語が日本語であることを示します。

<h3>head</h3> ウェブページには表示されない、ページに関する情報（メタデータ）を記述するセクションです。

<h3>meta charset="UTF-8"</h3> 文字コードをUTF-8に設定し、日本語が正しく表示されるようにします。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> ページがデバイスの幅に合わせて表示されるように設定し、モバイルフレンドリーにします。

<h3>title</h3> ブラウザのタブやウィンドウに表示されるページのタイトルを設定します。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという外部のCSSファイルを読み込み、ウェブページのデザインを適用します。

<h3>body</h3> ウェブページに実際に表示されるすべてのコンテンツを記述するセクションです。

<h3>div class="box"</h3> 「足し算計算機」というテキストが入った四角いボックスを作成します。boxというクラスが割り当てられているため、CSSでスタイルを適用できます。

<h3>br</h3> 改行タグで、ボックスと計算機の間を少し開けます。

<h3>div class="calculator-container"</h3> 計算機全体のコンテンツをまとめるコンテナ（入れ物）です。calculator-containerというクラスが割り当てられています。

<h3>input type="number" id="num1" placeholder="最初の数字"</h3> 数字を入力するための入力欄です。id="num1"という ID が割り当てられているので、JavaScript からこの要素を特定できます。placeholder 属性は、何も入力されていないときに表示されるヒントのテキストです。

<h3><span>+</span></h3> 足し算の記号「+」を表示するためのテキスト要素です。

<h3>input type="number" id="num2" placeholder="次の数字"</h3> 2 つ目の数字を入力するための入力欄です。id="num2"という ID が割り当てられています。

<h3>button id="calculateButton"</h3> 計算を実行するためのボタンです。id="calculateButton"という ID が割り当てられています。

<h3><p>結果: <span id="result"></span></p></h3> 計算結果を表示するための段落です。結果の数値自体は<span id="result"></span>の中に表示されます。id="result"というIDが割り当てられているので、JavaScriptからこの部分に計算結果を書き込むことができます。

<h3>script src="script.js"</h3> script.jsという外部のJavaScriptファイルを読み込みます。このファイルに計算機の機能（ボタンが押されたときの処理など）が書かれています。</body>タグの直前に置くことで、HTMLの要素がすべて読み込まれてからJavaScriptが実行されるようにし、JavaScriptがHTML要素にアクセスできるようにします。

<h1>CSS</h1>
CSSはHTMLで作成された要素の見た目（色、サイズ、配置など）をデザインする言語です。

- body: ウェブページ全体のスタイルを設定します。

  - width: 100%;: 幅を親要素（この場合はブラウザのウィンドウ）の 100%にします。

  - background: url(img/Simple_Background-B.png) no-repeat;: img/Simple_Background-B.png という画像を背景に設定し、繰り返さないようにします。

  - background-size: cover;: 背景画像が要素全体を覆うように拡大・縮小します。

  - font-family: Arial, sans-serif;: テキストのフォントを設定します。

  - display: flex; flex-direction: column; justify-content: center; align-items: center;: これらは Flexbox というレイアウトシステムを使って、子要素（.box と.calculator-container）を縦方向（column）に中央揃えで配置します。

  - min-height: 100vh;: ページの高さがブラウザの表示領域の高さの最低 100%になるようにします。

  - margin: 0;: 外側の余白をなくします。

  - color: #333;: テキストの色を濃い灰色にします。

- .calculator-container: 計算機全体のコンテナのスタイルです。

  - background-color: #ffffff;: 背景色を白にします。

  - padding: 30px;: 内側の余白を 30 ピクセル設けます。

  - border-radius: 10px;: 角を丸くします。

  - box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);: ボックスに影をつけ、立体感を出すための設定です。

  - display: flex; align-items: center; gap: 15px;: Flexbox を使って、子要素（入力欄、+記号、ボタン、結果表示）を横方向に並べ、中央揃えにし、要素間に 15 ピクセルの隙間を設けます。

- input[type="number"]: type 属性が number の<input>要素（数字入力欄）のスタイルです。

  - padding: 10px;: 内側の余白を 10 ピクセル設けます。

  - font-size: 1.2em;: フォントサイズを親要素の 1.2 倍にします。

  - border: 1px solid #ddd;: 1 ピクセルの薄い灰色の枠線を設定します。

  - border-radius: 5px;: 角を丸くします。

  - width: 120px;: 幅を 120 ピクセルにします。

  - text-align: center;: テキストを中央揃えにします。

- span: <span>要素（この場合は「+」記号）のスタイルです。

  - font-size: 1.8em;: フォントサイズを大きくします。

  - font-weight: bold;: 太字にします。

  - color: #666;: 濃いめの灰色にします。

- button: <button>要素（「計算する」ボタン）のスタイルです。

  - padding: 12px 25px;: 上下 12 ピクセル、左右 25 ピクセルの内側の余白を設けます。

  - font-size: 1.2em;: フォントサイズを大きくします。

  - cursor: pointer;: マウスカーソルをボタンの上に置いたときに、指のアイコンに変わるようにします。

  - background-color: #4caf50;: 背景色を緑色にします。

  - color: white;: テキストの色を白にします。

  - border: none;: 枠線をなくします。

  - border-radius: 5px;: 角を丸くします。

  - transition: background-color 0.3s ease;: 背景色の変化が 0.3 秒かけてゆっくりと行われるようにします（ホバー効果用）。

- button:hover: ボタンにマウスが乗ったときのスタイルです。

  - background-color: #388e3c;: 背景色が少し濃い緑色に変わります。

- p: <p>要素（「結果:」のテキスト）のスタイルです。

  - font-size: 1.5em;: フォントサイズを大きくします。

  - margin-top: 30px;: 上に 30 ピクセルの外側の余白を設けます。

  - font-weight: bold;: 太字にします。

  - color: #2e7d32;: 緑色にします。

- #result: id="result"を持つ<span>要素（計算結果の数値）のスタイルです。

  - color: #d32f2f;: 色を赤色にし、結果を強調します。

  - font-size: 1.8em;: フォントサイズをさらに大きくします。

- .box: 「足し算計算機」と表示されるボックスのスタイルです。

  - width: 720px; height: 480px;: 幅と高さを設定します。

  - margin: 13% auto 0;: 上に 13%の余白、左右を自動（中央寄せ）、下は 0 の余白を設定します。

  - display: flex; align-items: center; justify-content: center;: Flexbox を使って、中のテキストを中央揃えにします。

  - color: #fff; font-size: 32px; font-weight: bold;: テキストの色、サイズ、太さを設定します。

  - position: relative;: 子要素の絶対配置の基準となります。

  - transition: 0.4s;: スタイル変更が 0.4 秒かけてゆっくり行われるようにします。

- .box::before, .box::after: .box 要素の擬似要素で、四隅に装飾的な線（角の枠線）を表示します。

  - content: "";: 擬似要素にコンテンツがないことを示します。

  - width: 50px; height: 50px;: 幅と高さを設定します。

  - border-top, border-left, border-bottom, border-right: 上下左右の枠線を設定します。半透明の白です。

  - position: absolute;: 親要素（.box）に対して絶対的な位置で配置します。

  - top, left, bottom, right: それぞれの位置を調整し、角に配置します。

  - transition: 0.4s; transition-delay: 0.5s;: スタイル変更が 0.4 秒かけてゆっくり行われ、0.5 秒の遅延後に開始するようにします。

- .box:hover:before, .box:hover::after: .box にマウスが乗ったときに、四隅の枠線がボックス全体に広がるようにします。

  - width: 100%; height: 100%;: 幅と高さを 100%に広げます。

  - border-color: rgba(255, 255, 255, 0.3);: 枠線の色を少し濃くします。

  - transition-delay: 0s;: 遅延なくすぐに変化を開始します。

  - border-radius: 10px;: 角を丸くします。

- .box:hover: .box にマウスが乗ったときのスタイルです。

  - background: rgba(255, 255, 255, 0.1);: 背景を半透明の白にします。

  - backdrop-filter: blur(15px);: 後ろにあるものがぼやけるエフェクトをかけます。

  - transition-delay: 0.3s;: 0.3 秒の遅延後に変化を開始します。

  - border-radius: 10px;: 角を丸くします。

<h1>JavaScript</h1>
JavaScriptはウェブページに動きやインタラクティブな機能を追加するプログラミング言語です。このコードでは、ユーザーが「計算する」ボタンをクリックしたときの処理を記述しています。

- 要素の取得:

  - const num1Input = document.getElementById("num1");: HTML ファイルで id="num1"が設定された入力欄（最初の数字）を取得し、num1Input という定数に格納します。

  - const num2Input = document.getElementById("num2");: 同様に、id="num2"が設定された入力欄（次の数字）を取得し、num2Input に格納します。

  - const calculateButton = document.getElementById("calculateButton");: id="calculateButton"が設定されたボタンを取得し、calculateButton に格納します。

  - const resultDisplay = document.getElementById("result");: id="result"が設定された結果表示用の<span>要素を取得し、resultDisplay に格納します。

- イベントリスナーの設定:

  - calculateButton.addEventListener("click", () => { ... });: calculateButton がクリックされたときに、指定された関数（() => { ... }の部分）が実行されるように設定します。

- クリック時の処理:

  - 入力値の取得と数値への変換:

    - const number1 = parseFloat(num1Input.value);: num1Input（最初の入力欄）に入力された値（value）を取得します。この値は文字列なので、parseFloat()関数を使って小数点を含む数値に変換します。

    - const number2 = parseFloat(num2Input.value);: 同様に、2 番目の入力欄の値も数値に変換します。

  - 入力の検証（エラーチェック）:

    - if (isNaN(number1) || isNaN(number2)) { ... }: isNaN()関数は「Not a Number」（数値ではない）かどうかを判定します。もし number1 または number2 が有効な数値でなかった場合（例えば、空欄や数字以外の文字が入力された場合）にこの条件が true になります。

      - resultDisplay.textContent = "有効な数字を入力してください。";: 結果表示エリアにエラーメッセージを表示します。

      - resultDisplay.style.color = "red";: エラーメッセージの色を赤にします。

  - 計算の実行と結果表示:
    - else { ... }: 入力値が両方とも有効な数値だった場合に実行されます。
      - const sum = number1 + number2;: 2 つの数値を足し算し、その結果を sum という定数に格納します。
      - resultDisplay.textContent = sum;: 計算結果 sum を結果表示エリア（resultDisplay）に表示します。
      - resultDisplay.style.color = "#d32f2f";: 結果のテキストの色を CSS で指定されている元の赤色に戻します。

この 3 つのファイルが連携して、ウェブブラウザ上で動く「簡易計算機」が実現されています。HTML がページの構造を作り、CSS がその見た目を整え、JavaScript がユーザーの操作に応じて計算を実行し、結果を更新するという流れです。
