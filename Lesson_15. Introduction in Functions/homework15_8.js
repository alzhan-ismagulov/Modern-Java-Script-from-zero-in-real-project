// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

// const users = [
//   {
//     name: "Denis",
//     age: 29,
//     gender: "male"
//   },
//   {
//     name: "Ivan",
//     age: 20,
//     gender: "male"
//   }
// ];
var users = [];
function funcGetUsers(name, age, gender) {
  for (i = 0; i < users.length; i++) {
    var res = users;
    console.log(res);
  }
}
funcGetUsers("Alzhan", 45, "male");
// console.log(users);
