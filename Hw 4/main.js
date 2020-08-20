alert("Task 1");

let arr = [];
let lengthArr;
let buf, tmp;

function validateInput (text) {
  while(true) {
    const input = prompt(text, '');
    if (input !== '' && !isNaN(+input)) {
      return +input;
    }
  }
}

lengthArr = validateInput ('Введите длину массива');
for(let i = 0; i < lengthArr; i++) {
  arr[i] = validateInput (`Введите элемент #${i+1} массива`);
}

document.write(`Созданный массив: ${arr}<br>`);

if (lengthArr %2 === 0) {                 // or  delete this
  tmp = lengthArr;
} else {
  tmp = lengthArr - 1;
}


for (let i = 0; i < tmp; i += 2) {        // or   for (let i = 0; i < lengthArr; i += 2) { 
                                          //        if (i + 1 === lengthArr) break;
  buf = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = buf;
}

document.write(`Итоговый массив: ${arr}<br>`);
document.write("------------------------------------------------------------------------------------------------------<br>");

//------------------------------------------------------------------------------------------------------
alert("Task 2");
let A = [];
let n, m;

m = validateInput ('Введите количество строк');
n = validateInput ('Введите количество столбцов');

document.write(`Количество строк: ${m}<br>`);
document.write(`Количество столбцов: ${n}<br>`);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for (let i = 0; i < m; i++) {
  A[i] = [];
  for (let j = 0; j < n; j++) {
   A[i][j] = getRandomInt(10);
  }
}

function table (myArr) {
  let str = "<table>"
  for (let i = 0; i < myArr.length; i++) {
    str += "<tr>";
    for (let j = 0; j < myArr[i].length; j++) {
      str += "<td>";                                  // or  str += `<td>${myArr[i][j]}</td>`;
      str += myArr[i][j];
      str += "</td>";
    }
    str += "</tr>";
  }
  str += "</table>";
  return str;
}

document.write(`Созданный массив: ${table(A)}`);

let minSum = Infinity;
let minPosition = 0;
let maxSum = -Infinity;
let maxPosition = 0;

for (let i = 0; i < m; i++) {
  let sumRow = 0;
  for (let j = 0; j < n; j++) {
    sumRow += A[i][j];
  } 

  if (minSum > sumRow) {
    minSum = sumRow;
    minPosition = i + 1;
  }
  if (maxSum < sumRow) {
    maxSum = sumRow;
    maxPosition = i + 1;
  }
}

document.write(`Строка: ${minPosition} с минимальной суммой: ${minSum} <br>`);
document.write(`Строка: ${maxPosition}, с максимальной суммой: ${maxSum}<br>`);

let buf2;

buf2 = A[minPosition-1];
A[minPosition-1] = A[maxPosition-1];
A[maxPosition-1] = buf2;

document.write(`Измененный массив: ${table(A)}`);

document.write("------------------------------------------------------------------------------------------------------<br>");

//------------------------------------------------------------------------------------------------------

let B = [];
const rows = 10;
const columns = 10;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включая мин и макс 
}

for (let i = 0; i < rows; i++) {
  B[i] = [];
  for (let j = 0; j < columns; j++) {
   B[i][j] = getRandomIntInclusive(-20, 20);
  }
}

document.write(`Созданный массив: ${table(B)}`);

let res = [];
let isNegativSumCol = [];
let colPos = [];

for (let j = 0; j < columns; j++) {
  let sumCol = 0;
  for (let i = 0; i < rows; i++) {
    sumCol += B[i][j];
  }
  isNegativSumCol.push(sumCol < 0);
  if (sumCol < 0) {
    colPos.push(j+1);
  }
}

for (let i = 0; i < rows; i++) {
  res[i] = [];
  for (let j = 0; j < columns; j++) {        
    if (!isNegativSumCol[j]) {              // or   if (!colPos.includes(j+1))
      res[i].push(B[i][j]); 
    }
  }
}

document.write(`Колонки меньше нуля: ${colPos} <br>`);
document.write(`Новый массив: ${table(res)}`);