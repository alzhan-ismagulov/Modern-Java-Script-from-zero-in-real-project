// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

function strMethods() {
  let str = "abcde";

  return {
    setStr(value) {
      return str == "number" ? (str = String(value)) : (str = value);
    },
    getStr() {
      return str;
    },
    getLenth(str) {
      return str.length;
    },
    getReverce(value) {
      return str
        .split("")
        .reverse()
        .join("");
    }
  };
}

const strCheck = strMethods();

// console.log(strCheck.setStr(5)); //5
// console.log(strCheck.getStr()); //abcde
// console.log(strCheck.getLenth("abcde")); //5
console.log(strCheck.getReverce("abcde")); //edcba
