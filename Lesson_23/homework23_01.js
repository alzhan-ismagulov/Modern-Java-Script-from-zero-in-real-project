// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

function func(x, ...others) {
  const obj = {
    first: x,
    others: others
  };
  return obj;
}
res = func("a", "b", "c", "d");
console.log(res);

// Object { first: "a", others: (3) […] }
// first: "a"
// others: Array(3) [ "b", "c", "d" ]
