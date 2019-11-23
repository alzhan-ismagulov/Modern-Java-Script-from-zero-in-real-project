const firstName = "Denis";
const lastName = "Mescheryakov";
const age = 30;
const str = "Hello my name is Denis";

let value;

value = firstName + lastName;
value = firstName + " " + lastName;
value += " I am " + age;

// value = firstName.length; //Выводит 5 - количество знаков в строке first name
// value = firstName[2]; //n - в имени с индексом 2 стоит буква n
// value = firstName[4];
// value = lastName[lastName.length - 1]; //v
// value = firstName[firstName.length - 1];

// value = firstName.toUpperCase();
// value = firstName.concat(" ", lastName);

// value = str.indexOf("n", 10); //19 позиция буквы
// value = str.indexOf("!");// -1
// value = str.includes("DENIS");

// value = str.slice(0, 5); //Hello
value = str.slice(0, -3); // Hello my name is De

// value = str.replace("Denis", "Den"); //Замена строки

console.log(value);
