// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection(...arrays) {
  for (let i = 0; i <= arguments.length - 1; i++) {
    let str = arguments[i].splice(1);
    console.log(str);
  }
}
changeCollection([1, 2, 3], ["a", "b", "c"]);
