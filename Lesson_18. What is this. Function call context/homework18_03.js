// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const box = {
  height: 10,
  rise: function() {
    this.height += 1;
    console.log(this.height);
  }
};
box.rise();
