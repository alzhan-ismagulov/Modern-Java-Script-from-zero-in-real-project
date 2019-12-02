// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
  width: 4,
  height: 2,
  getSquare: function() {
    console.log(this.width * this.height);
  }
};
rectangle.getSquare();