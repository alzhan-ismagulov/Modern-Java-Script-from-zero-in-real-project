// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
  price: 10,
  discount: "15%",
  getPrice: function() {
    console.log(this.price);
  },
  getPriceWithDiscount: function() {
    console.log(this.price - parseInt(this.discount) / 10);
  }
};

price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
