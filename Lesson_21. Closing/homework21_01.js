// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(a, b) {
  return function() {
    return a - b;
  };
}

// const res = minus(10, 6); //4
// const res = minus(5, 6); //-1
// const res = minus(10, 0); //10
// const res = minus(0, 6); //-6
const res = minus(0, 0); //0
console.log(res());
