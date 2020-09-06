let obj1 = {
  name: "John",
  age: 30,
  "likes birds": true,
  arr0: [1, 2],
  arr1: ['10'],
  arr2: [3],
  arr3: [4, 'text'],
};

let obj2 = {
  name: "Pete",
  age: 31,
  surname: "Smith",
  "likes birds": false,
  arr: [40, 50, 10],
};

console.log(obj1);
console.log(obj2);

function doArr (object) {
  let arr = [];
  for (var key in object) {
    if (Array.isArray(object[key])) {
      arr = arr.concat(object[key]);
    }
  }
  return arr;
}

let res = doArr(obj1).concat(doArr(obj2));

document.write(`Сконкатенированные поля-массивы: ${res}<br>`);
console.log(res);

let sum = 0;

for (let i = 0; i < res.length; i++) {
  if (typeof res[i] === 'number') {
    sum += res[i];
  }
}

document.write(`Сумма чисельных элементов в массивах: ${sum}`);
document.write("<br>-----------------------------------------------------------------------------<br>");

function inArray(str, arr) {
  document.write(`Заданный текст: ${str}<br>`);
  document.write(`Массив: ${arr}<br>`);
  for (let i = 0; i < arr.length; i++) {                     //or  return arr.includes(str);
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}

document.write(`${inArray('hello', ['svnj', 'hello', 'cvpoq'])}<br>`);
document.write(`${inArray('hello111', ['svnj',  'cvpoq', 'hello'])}<br>`);
document.write("-----------------------------------------------------------------------------<br>");

let list = [1, 2, 3];
document.write(`Массив: ${list}<br><br>`);

const methodPush = function(...arr) {  
  document.write(`Элементы, добавляемые в конец массива: ${arr}<br>`);
  for (let i = 0; i < arr.length; i++) {
    this[this.length] = arr[i];
  }
  return this.length;
}

Array.prototype.myPush = methodPush;

document.write(`Новая длина массива: ${list.myPush(5,6)}<br>`);
document.write(`Обновленный массив: ${list}<br>`);
document.write("-----------------------------------------------<br>");

let elements = ['Fire', 'Air', 'Water']; 
document.write(`Массив: ${elements}<br><br>`); 

const methodJoin = function(separator) {                         //or  separator = ','
  document.write(`Разделитель: '${separator}'<br>`);
  let str = '';
  for (let i = 0; i < this.length; i++) {
    if (i > 0 && i < this.length) {
      separator === undefined ? str += ',' :  str += separator;  // str += separator === undefined ?  ',' :  separator;  
    }
    str += this[i];
  }

  return str;
}
Array.prototype.myJoin = methodJoin;

document.write(`Строка: ${elements.myJoin()}<br>`);
document.write(`Строка: ${elements.myJoin('')}<br>`);
document.write(`Строка: ${elements.myJoin('-')}<br>`);
document.write("-----------------------------------------------<br>");

const methodReverse = function() {  
  document.write(`Массив: ${this}<br>`);
  for (let i = 0; i < this.length / 2; i++) {
    let buf = this[i];
    this[i] = this[this.length-1-i];
    this[this.length-1-i] = buf;
  }
  return this;
}

Array.prototype.myReverse = methodReverse;

document.write(`Перевернутый массив: ${[1,2,3,4].myReverse()}<br>`);
document.write(`Перевернутый массив: ${[1,2,3,4,5].myReverse()}<br>`);