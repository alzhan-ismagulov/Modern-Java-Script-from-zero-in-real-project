//4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%"
};

if (item.discount != "") {
  item.priceWithDiscount = parseInt(item.price) - parseInt(item.discount) + "$";
  console.log(item);
} else {
  console.log(item.price);
}
