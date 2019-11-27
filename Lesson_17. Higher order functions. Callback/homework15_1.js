// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

var a = ["my", "name", "is", "Trinity"]; //, secondFunc)->'New value: JSIsBeautiful'
var b = [10, 20, 30]; //, secondFunc)->'New value: 100, 200, 300'
var d = ["abc", "123"]; //, secondFunc)->'New value: cba, 321'
var c = [
  {
    age: 45,
    name: "Jhon"
  },
  {
    age: 20,
    name: "Aaron"
  }
];

function main(arr, callback) {
  return "New value: " + callback(arr);
}

function cb1(arr) {
  return arr.reduce(
    (prev, item) => (prev += item.charAt(0).toUpperCase() + item.slice(1))
  );
}

function cb2(arr) {
  return arr.map(item => item * 10);
}

function cb3(arr) {
  return "Jhon is " + arr[0].age + ", Aaron is " + arr[1].age;
}

function cb4(arr) {
  return arr.map(item =>
    item
      .split("")
      .reverse()
      .join("")
  );
}

console.log(main(a, cb1));
console.log(main(b, cb2));
console.log(main(c, cb3));
console.log(main(d, cb4));
