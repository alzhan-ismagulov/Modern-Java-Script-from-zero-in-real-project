//2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

var arr = [12, 4, 50, 1, 0, 18, 40];
let some = arr.some(elem => elem == 0);
console.log(some); //true