const input = document.querySelectorAll('input');
const div = document.querySelector('div');

document.body.addEventListener("change", function(event){
  let index;
  
  if (event.target === input[0]) {
    index=1;
  } else {
    if (event.target.value < 0 || event.target.value === "") {
      event.target.value = 0;
    } else if (event.target.value > 100) {
      event.target.value = 100;
    }
    index=0;
  }
  input[index].value = event.target.value;
  div.style.backgroundSize = `40px ${event.target.value}px`;
})

//-----2 var-----//

// input[0].onchange = function() {
//   input[1].value = this.value;
//   changeGradient(this.value);
// }

// input[1].onchange = function() {
//   input[0].value = this.value;
//   if (this.value < 0) {
//     this.value = 0;
//   } else if (this.value > 100) {
//     this.value = 100;
//   }
//   changeGradient(this.value);
// }

// function changeGradient (arg) {
//   if (arg < 50) {
//     div.style.background=`linear-gradient(0, green ${arg}px, transparent ${arg}px)`;
//   } else if (arg > 75 ) {
//     div.style.background=`linear-gradient(0, green 50px, yellow 50px, yellow 75px, red 75px, red ${arg}px, transparent ${arg}px)`;
//   } else
//     div.style.background=`linear-gradient(0, green 50px, yellow 50px, yellow ${arg}px, transparent ${arg}px)`;
// }