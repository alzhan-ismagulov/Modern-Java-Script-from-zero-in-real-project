//1. Создать объект с полем product, равным ‘iphone’
let phone = {
  product: "iphone"
};

//2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
let phone2 = {
  product: "iphone",
  price: 1000,
  currency: "dollar"
};

//3. Добавить поле details, которое будет содержать объект с полями model и color
let phone3 = {
  product: "iphone",
  price: 1000,
  currency: "dollar",
  details: {
    model: 10,
    color: "black"
  }
};

value = phone3;
console.log(value);
