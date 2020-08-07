var number = prompt('Введите число:', 777);

var isValidNumber = number > 99 && number < 1000;

if (!isValidNumber) {
  document.write("Число не трёхзначное");
} else {
  var first = Math.trunc(number / 100);
  var second = Math.trunc((number - first*100) / 10); //or Math.trunc((number % 100)/10)
  var third = number % 10;

  var isSumEven = (first + second + third) % 2 === 0;
  var isSumDiv5 = (first + second + third) % 5 === 0;
  var isMult100 = first * second * third  > 100;
  var isDigitsEqual = first === second && second === third;
  var isSomeDigitsEqual = first === second || first === third || second === third;
 
  document.write("-------------------------------------------------------<br>")
  if(isSumEven) document.write(`Сумма цифр числа ${number} четная <br>`);
  if(isSumDiv5) document.write(`Сумма цифр числа ${number} кратная 5 <br>`);
  if(isMult100) document.write(`Произведение цифр числа ${number} больше 100 <br>`);
  if(isDigitsEqual) document.write(`Все цифры числа ${number} одинаковые <br>`);
  if(isSomeDigitsEqual) document.write(`Среди цифр числа ${number} есть одинаковые <br>`);
  document.write("-------------------------------------------------------<br>");
} 
