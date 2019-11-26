//1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3). Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  var s = 1;
  if (arguments.length == 0) return 0;
  for (var i = 0; i < arguments.length; i++) {
    s *= arguments[i];
  }
  return s;
}
let res = multiply();
console.log("Нет аргументов: " + res);
let res2 = multiply(5, 6, 8);
console.log("Аргументы есть: " + res2);
