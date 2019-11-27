//1. Записать в виде switch case следующее условие:
// if (a === ‘block’) {
//     console.log(‘block’)
// } else if (a === ‘none’) {
//     console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
//     console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

switch ((a = "none")) {
  case "block":
    console.log(a);
    break;
  case "none":
    console.log(a);
    break;
  case "inline":
    console.log(a);
    break;
  default:
    console.log("other");
}
