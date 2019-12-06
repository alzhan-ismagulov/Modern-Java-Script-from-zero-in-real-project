//3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

var arr = ["yes", "hello", "no", "easycode", "what"];

let some = arr.some(elem => elem.length > 3);
console.log(some); //true
