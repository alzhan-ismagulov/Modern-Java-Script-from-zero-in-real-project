let str = "some test string";

// value = string[0] + string[string.length - 1];//1. Получить первую и последнюю буквы строки

// value = string[0].toUpperCase() + string[string.length - 1].toUpperCase();//2. Сделать первую и последнюю буквы в верхнем регистре

//value = string.indexOf("string"); //3. Найти положение слова ‘string’ в строке

//value = str.indexOf(" ", str.indexOf(" ") + 1); //4. Найти положение второго пробела

//5. Получить строку с 5-го символа длиной 4 буквы
//value = str.substr(5, 4);

//6. Получить строку с 5-го по 9-й символы
//value = str.slice(5, 9);

//7. Получить новую строку из исходной путем удаления последних 6-и символов
//value = str.slice(-6);

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = "20";
let b = "16";
value = a + b;

document.write(value);
//document.write("Hello");
