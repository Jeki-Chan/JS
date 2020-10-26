let [hour, minute, second] = ( new Date() ).toLocaleTimeString().slice(0,7).split(":");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function incTime () { 
  second++;

  if (second === 59) {
    minute++;
  }
  if (minute === 59) {
    hour++; 
  }
  if (second > 59 || second < 0) {  
    second = 0;
  } 
  if (minute > 59 || minute < 0) {
    minute=0;          
  } 
  if (hour > 22 || hour < 0) {
    hour = 0;
  } 

  hours.innerHTML = `${hour}`;
  minutes.innerHTML = `${minute}`;
  seconds.innerHTML = `${second}`;
}

setInterval(incTime, 1000);

//---------

let hr1 = document.querySelector(".hours_first");  
let hr2 = document.querySelector(".hours_sec"); 
let min1 = document.querySelector(".minutes_first");
let min2 = document.querySelector(".minutes_sec");
let sec1 = document.querySelector(".seconds_first");
let sec2 = document.querySelector(".seconds_sec");

let h1 = 2;
let h2 = 3;
let m1 = 5;
let m2 = 8;
let s1 = 5;
let s2 = 8;

function setImg (block, numb) {
  block.style.backgroundImage = `url('img/numb/${numb}.png')`;
}

setInterval(incTime2, 200);

function incTime2 () {
  s2++;
  if (s2 === 10) {
    s2 = 0;
    s1++;
  }
  if (s1 === 6){
    s1 = 0;
    m2++;
  }
  if (m2 === 10){
    m2 = 0;
    m1++;
  }
  if (m1 === 6) {
    m1 = 0;
    h2++;
  }
  if (h2 === 10){
    h2 = 0;
    h1++;
  }
  if (h1 === 2){
    if (h2 === 4){
      h1=0;
      h2 = 0;
    }
  }
  setImg(hr1, h1);
  setImg(hr2, h2);
  setImg(min1, m1);
  setImg(min2, m2);
  setImg(sec1, s1);
  setImg(sec2, s2);
}

//---------

let btnPrev = document.querySelector(".carousel-prev");
let btnNext = document.querySelector(".carousel-next");
let slides = document.querySelectorAll(".carousel-item"); 

let k=0;
let time = setInterval(NextSlide, 3000)

btnPrev.addEventListener("click", function() {
  clearTimeout(time);
  time = setInterval(NextSlide, 3000)
  if (k === 0) {
    slides[k].classList.remove("active");
    k = 4;
    k--;
    slides[k].classList.add("active");
  } else {
    slides[k].classList.remove("active");
    k--;
    slides[k].classList.add("active");  
  }
})

btnNext.addEventListener("click", function(){
  clearTimeout(time);
  time = setInterval(NextSlide, 3000)
  NextSlide();
})

function NextSlide() {
  if (k === 4) {
    slides[4].classList.remove("active");
    k = 0;
    slides[k].classList.add("active");
  } else {
    slides[k].classList.remove("active");
    k++;
    slides[k].classList.add("active");
  }
}