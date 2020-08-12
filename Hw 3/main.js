let arr0 = [];
let lengthArr0;

while(true) {
  const input = prompt('Введите длину массива', '');
  if (input !== '' && !isNaN(+input)) {
    lengthArr0 = +input;
    break;
  }
}

for(let i = 0; i < lengthArr0; i++) {
  while(true) {
    const input = prompt('Введите элементы массива', '');
    if (input !== '' && !isNaN(+input)) {
      arr0[i] = +input;
      break;
    }
  }
}

// function validateInput (text) {
//   while(true) {
//     const input = prompt(text, '');
//     if (input !== '' && !isNaN(+input)) {
//       return +input;
//     }
//   }
// }

// lengthArr0 = validateInput('Введите длину массива');
// for(let i = 0; i < lengthArr0; i++) {
//   arr0[i] = validateInput('Введите элементы массива');
// }

document.write(`Созданный массив: ${arr0}<br>`);

arr0.sort(function(a,b) { 
  return a - b;
});

document.write(`<br>Отсортированный массив: ${arr0}<br>`);

let removed = arr0.splice(2, 3);

if (removed > 0) {
  document.write(`Удалены элементы из массива с 2 по 4 (включительно): ${removed}<br>`);
} else {
  document.write(`Удалены элементы из массива с 2 по 4 (включительно): -<br>`);
}
//document.write(`Удалены элементы из массива с 2 по 4 (включительно): ${removed.length ? removed : '-'}<br>`);
document.write(`Финальный массив: ${arr0}<br>`);
document.write("<br>------------------------------------------------------------------------------------------------------<br>");

//------------------------------------------------------------------------------------------------------

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let arr_1 = [];

let sumPos = 0;
let sumEvenPos = 0;
let sumOddPos = 0;
let multiplPos = 1;

let minEl = arr[0];
let minPosition = 1;
let maxEl = arr[0];
let maxPosition = 1;

let countPos = 0;
let countOddPos = 0;
let countEvenPos = 0;
let countNeg = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] > 0) {
    countPos++;       // =  countPos = countPos + 1;
    sumPos += arr[i]; // =  sumPos = sumPos + arr[i];
    multiplPos *= arr[i];

    if (arr[i] % 2 === 0) {
      countEvenPos++;
      sumEvenPos += arr[i];  
    } else {
      countOddPos++; 
      sumOddPos += arr[i];
    }
  } else {
    countNeg++;  
  }

  if (minEl > arr[i]) {
    minEl = arr[i];
    minPosition = i + 1;
  }

  if (maxEl < arr[i]) {
    maxEl = arr[i];
    maxPosition = i + 1;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === maxEl) {
    arr_1[i] = maxEl;
  } else {
    arr_1[i] = 0;
  }
}

document.write(`<br>Массив: ${arr}<br>`);
document.write(`<br>Сумма: ${sumPos} и количество: ${countPos} положительных элементов<br>`);
document.write(`Минимальный элемент массива: ${minEl} и его порядковый номер: ${minPosition} <br>`);
document.write(`Максимальный элемент массива: ${maxEl} и его порядковый номер: ${maxPosition} <br>`);
document.write(`Количество отрицательных элементов: ${countNeg} <br>`);
document.write(`Количество нечетных положительных элементов: ${countOddPos} <br>`);
document.write(`Количество четных положительных элементов: ${countEvenPos} <br>`);
document.write(`Сумму четных положительных элементов: ${sumEvenPos} <br>`);
document.write(`Сумму нечетных положительных элементов: ${sumOddPos} <br>`);
document.write(`Произведение положительных элементов: ${multiplPos} <br>`);
document.write(`Наибольший среди элементов массива: ${maxEl} <br>`);
document.write(`Обнулённый массив: ${arr_1} <br>`);