let newArr = [];
function calculate (...theArgs) {

console.log(theArgs);
document.write(`Переданные массивы: ${theArgs}<br><br>`);

for (let i = 0; i < theArgs.length; i++) {
  document.write(`Arr[${i}]: ${theArgs[i]}<br>`);
  let j = theArgs[i].length % 2;

    if (j === 0) {      
      newArr.push(theArgs[i][j-1], theArgs[i][j]); 
      document.write(`Центральные элементы: ${[theArgs[i][meadiana-1], theArgs[i][meadiana]]}<br>`);
    
    } else {
      newArr.push(theArgs[i][meadiana]);              // newArr.push([arr[i][meadiana]]);    
      document.write(`Центральный элемент: ${theArgs[i][meadiana]}<br>`);
    }
  }
  return newArr;
}

document.write(`<br>Массив из центральных элементов:  ${calculate([1, 2, 3], [1, 2], [3, 4, 5],[1],[6,5,4,3,2,1], [5,4,3,2,1])}`);
console.log(`${newArr}`);
document.write("<br>-----------------------------------------------------------------------------<br>");

function sum (x , y) {
  return x + y;
}
function div (x , y) {
  return x / y;
}
function mul (x , y) {
  return x * y;
}
function power (x , y) {
  return Math.pow(x , y)
}
function factorial (x) {
  return x ? x * factorial(x - 1) : 1;
}

function doFunction(...theArgs) {  
  if (theArgs.length === 2 && typeof theArgs[1] === "function") {
    return theArgs[1](theArgs[0]);
  } else if (theArgs.length === 3 && typeof theArgs[2] === "function") {
    return theArgs[2](theArgs[0], theArgs[1]);
  } else {
    document.write(`Eror`);
  }
}

document.write(`Sum: ${doFunction(2, 3, sum)}<br>`);
document.write(`Div: ${doFunction(6, 3, div)}<br>`);
document.write(`Mul: ${ doFunction(16, -23, mul)}<br>`);  
document.write(`Power: ${doFunction(2, 3, power)}<br>`);
document.write(`Factorial: ${doFunction(6, factorial)}<br>`);
document.write(`: ${doFunction(2, 3, 56)}<br>`);
document.write(`: ${doFunction(3, 56)}<br>`);
