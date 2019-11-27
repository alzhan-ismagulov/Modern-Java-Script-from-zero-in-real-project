//2. Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let value = -1;
if (value == 0) {
  value = 1;
  console.log(value);
} else if (value < 0) {
  value = "less the zero";
  console.log(value); //less the zero
} else {
  value *= 10;
  console.log(value);
}
