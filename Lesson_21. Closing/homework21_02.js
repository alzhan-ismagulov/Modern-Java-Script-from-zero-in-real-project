// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(val) {
  return function(multiply) {
    return (val *= multiply);
  };
}

const multiply = multiplyMaker(2);
console.log(multiply(2)); //4
console.log(multiply(1)); //4
console.log(multiply(3)); //12
console.log(multiply(10)); //120
