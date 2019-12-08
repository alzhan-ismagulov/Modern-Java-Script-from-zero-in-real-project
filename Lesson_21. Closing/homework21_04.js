// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

//1 вариант

// function calc() {
//   let number = 10;
//   return {
//     setNumber(value) {
//       return (number = value);
//     },
//     getNumber() {
//       return number;
//     },
//     addNumber(value) {
//       return (number += value);
//     },
//     divideNumber(value) {
//       return (number /= value).toFixed(2);
//     },
//     multiplyNumber(value) {
//       return (number *= value);
//     },
//     getExponent(value) {
//       return (number = Math.pow(number, value));
//     }
//   };
// }
// const result = calc();
// console.log(result.setNumber(20)); //20
// console.log(result.getNumber()); //10
// console.log(result.addNumber(5)); //15
// console.log(result.divideNumber(3)); //3,33
// console.log(result.multiplyNumber(5)); //50
// console.log(result.getExponent(2)); //100

//2 вариант

// const calc = {
//   number: 10,
//   setNumber: function(value) {
//     return (number = value);
//   },
//   getNumber: function() {
//     return number;
//   },
//   addNumber: function(value) {
//     return (number += value);
//   },
//   divideNumber: function(value) {
//     return (number /= value).toFixed(2);
//   },
//   multiplyNumber: function(value) {
//     return (number *= value);
//   },
//   getExponent: function(value) {
//     return (number = Math.pow(number, value));
//   }
// };

// res = calc.setNumber(20);
// res = calc.getNumber();
// res = calc.addNumber(5); //15
// res = calc.divideNumber(3); //3,33
// res = calc.multiplyNumber(5); //50
// res = calc.getExponent(2); //100
