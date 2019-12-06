// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

var arr = [1, 2, 3, 5, 8, 9, 10];

let mapped = arr.map(elem =>
  elem & 1
    ? (elem = "digit: " + elem + ", odd: true")
    : (elem = "digit: " + elem + ", odd: false")
);
console.log(mapped); // [ "digit: 1, odd: true", "digit: 2, odd: false", "digit: 3, odd: true", "digit: 5, odd: true", "digit: 8, odd: false", "digit: 9, odd: true", "digit: 10, odd: false" ]
