//2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”

function reverseString2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
var res2 = reverseString2("test");
document.write(res2);
