// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

var arr = [1, 2, 3];
function doubleArray(arr) {
  return arr.concat(arr);
}
let res = doubleArray(arr);
console.log(arr);
console.log(res); // Array(6) [ 1, 2, 3, 1, 2, 3 ]
