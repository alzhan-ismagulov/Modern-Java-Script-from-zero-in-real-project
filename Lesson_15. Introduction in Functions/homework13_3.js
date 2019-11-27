// 3 Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

// подсказка: для получения кода используйте специальный метод str.charCodeAt(0);
function getCodeStringFromText(str) {
  let resStr = "";
  for (let i = 0; i < str.length; i++) {
    resStr += str.charCodeAt(i) + " ";
  }
  return resStr;
}
var result = getCodeStringFromText("hello");
document.write(result);
