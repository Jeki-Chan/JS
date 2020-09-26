let btn_pr = document.querySelector(".carousel-prev");
let btn_n = document.querySelector(".carousel-next");
let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".carousel-item"); 


carousel.addEventListener("click", function(event){
  // let k;
  // for (let i = 0; i < slides.length; i++) {
  //   if(slides[i].classList.contains("active")) {
  //     k = i;    
  //   }
  // }
  

  // let k = [...slides].findIndex((el) => el.classList.contains("active"));
  let k = Array.prototype.findIndex.call(slides, el => el.classList.contains("active"));
  console.log(k);

  if (event.target === btn_n) {
    slides[k].classList.remove("active");
    k++;
    slides[k].classList.add("active");
    if (k === 2) {
      btn_n.style.display = "none"; 
    } else {
      btn_pr.style.display = "block"; 
    }
  } else if (event.target === btn_pr) {
    slides[k].classList.remove("active");
    k--;
    slides[k].classList.add("active");
    if (k === 0) {
      btn_pr.style.display = "none"; 
    } else {
      btn_n.style.display = "block"; 
    }
  }
})