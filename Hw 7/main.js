let obj1 = {
  name: "John",
  age: 30,
  "likes birds": true,
  arr0: [1, 2],
  arr1: [],
  arr2: [3],
  arr3: [4, 'text'],
};

let obj2 = {
  name: "Pete",
  age: 31,
  surname: "Smith",
  "likes birds": false,
  arr0: [10, 20],
  arr1: [30, ],
  arr2: [40, 50, 10],
};

function doArr (object) {
  let arr = [];

  for (var key in object) {
    if (object.hasOwnProperty(key) && Array.isArray(object[key])) {
      arr = arr.concat(object[key]);
    }
  }

  return arr;
}

function task1 (object1, object2) {
  let arr = [];
  arr = arr.concat(doArr(object1));
  arr = arr.concat(doArr(object2));
  return arr;
}

function findArrSum (arr) {
  let sumArr = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN (+arr[i])) {
      sumArr += arr[i];
    }
  }
  return sumArr;
}

const concatedArr = task1(obj1, obj2);
const sum = findArrSum(concatedArr);

document.write(`Сконкатенированый массив: ${concatedArr}<br>`);
document.write(`Сумма чисел: ${sum}<br>`);
 