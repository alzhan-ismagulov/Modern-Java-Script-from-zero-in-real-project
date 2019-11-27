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
let a = 0; //присваиваем переменной а значение 0.

switch (true) {
  case a > 0: // если а меньше 0
    a *= 10; // тогда а умножаем на 10 и присваиваем результат а
    document.write("a = " + a); //выводим в окно результат
    break;
  case a < 0: // если а меньше 0
    document.write("a less then zero"); //выводим в окно что а меньше 0
    break;
  default:
    a = 1; //в других случаях просто присваиваем переменной а значение 1
    document.write("a = " + a); //выводим в окно значение переменной а
}
