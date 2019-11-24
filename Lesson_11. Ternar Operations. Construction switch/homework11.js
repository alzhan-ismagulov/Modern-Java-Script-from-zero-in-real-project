//Записать в виде switch case следующее условие:
// if (a === ‘block’) {
//     console.log(‘block’)
// } else if (a === ‘none’) {
//     console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
//     console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

// switch ((a = "none")) {
//   case "block":
//     console.log(a);
//     break;
//   case "none":
//     console.log(a);
//     break;
//   case "inline":
//     console.log(a);
//     break;
//   default:
//     console.log("other");
// }

//2. Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.

//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

// switch ((a = "visible")) {
//   case "hidden":
//   case "visible":
//     console.log(a);
//     break;
//   default:
//     console.log("Нет такого значения");
// }

//2. Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let a = 0;

switch (true) {
  case a > 0: // выражение вместо константы
    a *= 10;
    document.write("a = " + a);
    break;
  case a < 0: // выражение вместо константы
    document.write("a less then zero");
    break;
  default:
    a = 1;
    document.write("a = " + a);
}
