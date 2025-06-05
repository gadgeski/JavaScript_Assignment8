const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calculateButton = document.getElementById("calculateButton");
const resultDisplay = document.getElementById("result");

calculateButton.addEventListener("click", () => {
  // 入力値を取得し、数値に変換
  const number1 = parseFloat(num1Input.value); // parseFloatで小数点を含む数値に変換
  const number2 = parseFloat(num2Input.value);

  // 入力が有効な数値であるかチェック
  if (isNaN(number1) || isNaN(number2)) {
    resultDisplay.textContent = "有効な数字を入力してください。";
    resultDisplay.style.color = "red"; // エラー時は赤色にする
  } else {
    const sum = number1 + number2; // 足し算を実行
    resultDisplay.textContent = sum; // 結果を表示
    resultDisplay.style.color = "#d32f2f"; // 通常時は元の色に戻す
  }
});
