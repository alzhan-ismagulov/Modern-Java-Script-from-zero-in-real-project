// 5. Создать функцию, которая принимает число n и возвращает массив,
//заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(num) {
  var arr = [];
  for (i = 1; i < num + 1; i++) {
    arr.push(i);
  }
  console.log(arr);
}
getArray(10);
