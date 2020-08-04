alert('Для расчета обьема цилиндра введите значения:');

var r = prompt('Радиус', 100);
var h = prompt('Высота', 100);

var S = Math.PI*Math.pow(r, 2);
var V = S * h;