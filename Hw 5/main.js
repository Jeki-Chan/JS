const m = 5; 
const n= 7;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createMatrix (row, column) {
  let arr = [];
  for (let i = 0; i < row; i++) {
    arr[i] = [];
    for (let j = 0; j < column; j++) {
      arr[i][j] = getRandomInt(10);
    }
  }
  return arr;
}

function table (myArr) {
  let str = "<table>"
  for (let i = 0; i < myArr.length; i++) {
    str += "<tr>";
    for (let j = 0; j < myArr[i].length; j++) {
      str += `<td>${myArr[i][j]}</td>`
    }
    str += "</tr>";
  }
  str += "</table>";
  return str;
}

document.write(`Количество строк: ${m}<br>`);
document.write(`Количество столбцев: ${n}<br>`);
document.write(`Созданный массив: ${table(createMatrix (m, n))}`);
document.write("------------------------------------------------------------------------------------------------------<br>");

//------------------------------------------------------------------------------------------------------

let arrFirst = [1, 2, 3, 4, 5, 105, 6, 7, 8, 'text', 9, 10];
let arrSecond = [11, 12, 13, 14, 15];

document.write(`Первый массив: ${arrFirst}<br>`);
document.write(`Второй массив: ${arrSecond}<br>`);

function findArrSum (arr) {
  let sumArr = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN (+arr[i])) {
      sumArr += arr[i];
    }
  }
  return sumArr;
}

function compareArr (arr1, arr2) {
  let sum1 = findArrSum(arr1);
  let sum2 = findArrSum(arr2);

  document.write(`Сумма первого массива: ${sum1}<br>`);
  document.write(`Сумма второго массива: ${sum2}<br>`);

  return sum1 > sum2 ? arr1 : arr2;    
}

document.write(`Массив, сумма которого больше: ${compareArr(arrFirst, arrSecond)}<br>`);
document.write("------------------------------------------------------------------------------------------------------<br>");

//------------------------------------------------------------------------------------------------------

let x0 = 5;
let znak0 = '//';
let y0 = 10;

function doMath (x, znak, y) {
  switch (znak) {
    case '+': 
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y ;
    case '%':
      return x % y ;
    case '^':
      return x ^ y;
    default:
      document.write(`Error. Знак может быть только: +, -, *, /, %, ^.  <br>`);
      return NaN;
  }
}

document.write(`X: ${x0}<br>`);
document.write(`Знак: ${znak0}<br>`);
document.write(`Y: ${y0}<br>`);
document.write(`Результат математического действия: ${doMath(x0, znak0, y0)}<br>`);
document.write("------------------------------------------------------------------------------------------------------<br>");

//------------------------------------------------------------------------------------------------------

var str = "hello world";
arr4 = ['l', 'd'];

function transformText (strText, arrayText) {
  let newstr = strText;
  for (let i = 0; i < arrayText.length; i++) {
   newstr = newstr.replace(new RegExp(arrayText[i],'g'), "");
  }
  return newstr;

// or   return str_text.replace(new RegExp(`[${arrayText}]`,'g'), "");
}

document.write(`Заданная строка: ${str}<br>`);
document.write(`Убираем символы: ${arr4}<br>`);
document.write (`Новая строка: ${transformText(str, arr4)} <br>`);
document.write("------------------------------------------------------------------------------------------------------<br>");

//------------------------------------------------------------------------------------------------------

var input = [1, 2, 3, 4, 5, 6, 102, 150];

function isEven (x) { return x % 2 == 0; } // проверяет на четность

function filter (arrr, func) {
  let res = [];
  for (let i = 0; i < arrr.length; i++) {
    if (func(arrr[i])) {
      res.push(arrr[i]);
    }
  }
  return res;
}

document.write(`Заданный массив: ${input}<br>`);
document.write (`Отфильтрованный массив: ${filter (input, isEven)} <br>`); // [2, 4, 6]