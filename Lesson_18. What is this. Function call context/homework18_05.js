// 5.
// a. Создать объект с розничной ценой и количеством продуктов.Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

// b. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

//a
// function totalPrice() {
//   console.log(this.price * this.quantity);
//   return this;
// }
// //b
// const tovar1 = {
//   price: 2000,
//   quantity: 5,
//   totalPrice
// };
// const tovar2 = {
//   price: 3000,
//   quantity: 6,
//   totalPrice
// };
// tovar2.totalPrice();

// c. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };
console.log(getSquare.call(sizes)); //50
