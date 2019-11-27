//2. Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.
//2.1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

switch ((a = "visible")) {
  case "hidden":
  case "visible":
    console.log(a);
    break;
  default:
    console.log("Нет такого значения");
}
