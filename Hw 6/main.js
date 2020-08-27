function calculate (...args) {
  let newArr = [];

  console.log(args);
  document.write(`Переданные массивы: ${args}<br><br>`);

  for (let i = 0; i < args.length; i++) {
    document.write(`${i+1}-й массив: ${args[i]}`);
    let j = Math.trunc(args[i].length / 2);

    if (args[i].length === 0) {                     // !args[i].length
      document.write(`пустой<br>`);
    } else {
      if (args[i].length % 2 === 0) {
        newArr.push([args[i][j-1], args[i][j]]);    //  newArr.push(args[i].splice(j-1, 2)); 
        document.write(`<br>Центральный элемент: ${[args[i][j-1], args[i][j]]}<br>`);   
      } else {
        newArr.push(args[i][j]);                    //  newArr.push(args[i].splice(j, 1)); 
        document.write(`<br>Центральный элемент: ${args[i][j]}<br>`);
      }
    }
  }
  console.log(newArr);
  return newArr;
}

document.write(`<br>Массив из центральных элементов:  ${calculate([1, 2, 3], [1, 2], [3, 4, 5], [1], [6, 5, 4, 3, 2, 1], [5, 4, 3, 2, 1], [])}`);
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

function doFunction(...args) {  
  document.write(`X: ${args[0]}, `);
  
  if (typeof args[args.length-1] === "function") {
    if (args.length === 2) {
        return args[1](args[0]);
      } else if (args.length === 3) {
        document.write(`Y: ${args[1]}. `);
        return args[2](args[0], args[1]);
      }
  } else {
    document.write(`Error. `);
  }
}

document.write(`Sum: ${doFunction(2, 3, sum)}<br>`);
document.write(`Div: ${doFunction(6, 3, div)}<br>`);
document.write(`Mul: ${ doFunction(16, -23, mul)}<br>`);  
document.write(`Power: ${doFunction(2, 3, power)}<br>`);
document.write(`Factorial: ${doFunction(6, factorial)}<br>`);
document.write(`${doFunction(2, 3, 56)}<br>`);
document.write(`${doFunction(3, 56)}<br>`);