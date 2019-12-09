// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {
//   name: 'Google',
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   }
// };
// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

//Решение

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", " Facebook", "Xing"]
  }
};
const {
  name = "Unknown",
  info: { employees, partners }
} = organisation;

getInfo = organisation =>
  console.log("Name: " + name + ", Partners: " + partners.slice(0, 2));

getInfo(organisation); //Google,Microsoft,Facebook
