// Task 1
let arr0 = [];
let lengthArr0 = +prompt('Введите длину массива', 10);

for(let i = 0; i < lengthArr0; i++)
  {
    arr0[i] = +prompt('Введите элементы массива', 10);
  }

document.write(`Созданный массив:${arr0}<br>`);

arr0.sort(function(a,b) { 
  return a - b;
});

document.write(`<br>Отсортированный массив${arr0}<br>`);

arr0.splice(2, 3);

document.write(`<br>Удалены элементы из массива с 2 по 4 (включительно).<br>`);
document.write(`<br>Массив:${arr0}<br>`);

document.write("<br><br>");

// Task 2

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

document.write(`Массив: ${arr}<br>`);

//Найти сумму и количество положительных элементов.
let sumPos = 0;
let countPos = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] > 0) {
    sumPos += arr[i]; // =  sumPos = sumPos + arr[i];
    countPos++;       // =  countPos = countPos + 1;
  }
}

document.write(`<br>Сумма: ${sumPos} и количество: ${countPos} положительных элементов<br>`);


//Найти минимальный элемент массива и его порядковый номер.

let minEl = arr[0];
let minPosition = 1;

for (let i = 0; i < arr.length; i++) { 
  if (minEl > arr[i]){
    minEl = arr[i];
    minPosition = i + 1;
  }
}

document.write(`Минимальный элемент массива: ${minEl} и его порядковый номер - ${minPosition} <br>`);


//Найти максимальный элемент массива и его порядковый номер.

let maxEl = arr[0];
let maxPosition = 1;

for (let i = 0; i < arr.length; i++) { 
  if (maxEl < arr[i]){
    maxEl = arr[i];
    maxPosition = i + 1;
  }
}

document.write(`Максимальный элемент массива: ${maxEl} и его порядковый номер - ${maxPosition} <br>`);


//Определить количество отрицательных элементов.

let countNeg = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] < 0) {
    countNeg++;       
  }
}

document.write(`Количество отрицательных элементов: ${countNeg} <br>`);


//Найти количество нечетных положительных элементов.
let countOddPos = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] > 0 && arr[i] % 2 > 0) {
    countOddPos++;     
  }
}

document.write(`Количество нечетных положительных элементов: ${countOddPos} <br>`);


//Найти количество четных положительных элементов.
let countEvenPos = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    countEvenPos++;     
  }
}

document.write(`Количество четных положительных элементов: ${countEvenPos} <br>`);


//Найти сумму четных положительных элементов.
let sumEvenPos = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] > 0 && arr[i] % 2 === 0)  {
    sumEvenPos += arr[i];
  }
}

document.write(`Сумму четных положительных элементов: ${sumEvenPos} <br>`);


//Найти сумму нечетных положительных элементов.
let sumOddPos = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] > 0 && arr[i] % 2 > 0) {
    sumOddPos += arr[i];
  }
}

document.write(`Сумму нечетных положительных элементов: ${sumOddPos} <br>`);


//Найти произведение положительных элементов.
let multiplPos = 1;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] > 0) {
    multiplPos *= arr[i];
  }
}

document.write(`Произведение положительных элементов: ${multiplPos} <br>`);


//Найти наибольший среди элементов массива, остальные обнулить.

let arr_1 = [];
let maxEl_1 = arr[0];

for (let i = 0; i < arr.length; i++) { 
  if (maxEl_1 < arr[i]) {
    maxEl_1 = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === maxEl_1) {
    arr_1[i] = maxEl_1;
  } else {
    arr_1[i] = 0;
  }
}

document.write(`Наибольший среди элементов массива: ${maxEl_1} <br>`);
document.write(`Обнулённый массив: ${arr_1} <br>`);
