// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

// let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

const products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.5 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 }
];
const foo = (
  products,
  price1,
  price2 //В параметры функции попадают массив, мин цена и макс цена
) =>
  products
    .filter(product => {
      //Если первая цена в параметре больше второй цены,
      if (price1 > price2) {
        //то делаем выборку с большей цены по меньшую
        return product.price < price1 && product.price > price2;
      } else {
        //или с меньшей по большую
        return product.price > price1 && product.price < price2;
      }
    })
    //сортируем получившийся массив из продуктов исходя из цены
    .sort((productA, productB) => productA.price > productB.price);
console.log(foo(products, 5, 20));
