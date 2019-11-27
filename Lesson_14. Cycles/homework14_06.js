// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

var list = {
  name: "denis",
  work: "easycode",
  age: 29
};

console.log(list);
for (var key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list);
