// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str = "JavaScript is a pretty good language"; //Исходная строка
let res = ""; //Объявляем новую строку
res = str.split(" "); //Разбиваем строку на элементы массива
for (let i = 0; i < res.length; i++) {
  res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
}
res = res.join(""); //Собираем обратно строку
console.log(res); // Выводит JavaScriptIsAPrettyGoodLanguage
