// 6. Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());
