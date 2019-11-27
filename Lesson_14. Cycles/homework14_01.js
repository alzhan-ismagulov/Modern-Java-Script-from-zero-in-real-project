// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str = "i am in the easycode"; //Исходная строка
let res = ""; //Объявляем новую строку
res = str.split(" "); //Разбиваем строку на элементы массива
for (let i = 0; i < res.length; i++) {
  res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
}
res = res.join(" "); //Собираем обратно строку
console.log(res);
