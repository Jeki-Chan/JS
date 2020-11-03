let createId = () => Math.random().toString(36).substr(2, 9);
let form = document.querySelector("form");
let main = document.querySelector("main");
let btnEdit = document.querySelector(".btnEdit");
let btnAdd = document.querySelector(".btnAdd");
let keys = ["id", "text", "title", "status", "priority"];
let buffObj;

function drawList() {
  main.innerHTML = '';
  arr.forEach(element => {
    let div = document.createElement("div");
    div.dataset.id = element.id;
    div.innerHTML = `
      <i class="far fa-check-circle"></i>
      <span class="item_title">${element.title}</span>        
      <span class="item_status">${element.status} </span>
      <span class="item_priority">${element.priority}</span>
      <button data-action="edit">Edit</button>
      <button data-action="delete">Del</button>
      <p class="item_text">${element.text}</p>
    `;  
    div.classList.add("item");
    main.insertAdjacentElement("beforeend", div);
  });
}

main.addEventListener("click", event => {
  let action = event.target.dataset.action;
  let id = event.target.closest("div").dataset.id;
  let el = arr.find((element) => element.id === id); 

  if (!id) {
    return;
  }
  switch(action) {
    case "edit" :
      btnAdd.style.display = "none";
      btnEdit.style.display = "block";

      buffObj = el;
      for (let element of form.elements) {
        element.value = buffObj[element.name];
      }
    break;
    case "delete" :
      if (confirm("Do you agree delete?")) {
        form.reset(); 
        btnAdd.style.display = "block";
        btnEdit.style.display = "none";

        arr = arr.filter(element => element.id !== id);
        localStorage.setItem('task', JSON.stringify(arr));  

        drawList();
      }
    break;
  }
})

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  let el = createFromForm();  
  if (typeof el === "undefined") {
    alert("Input should not be empty");
    return
  }

  el.id= createId();
  arr.push(el);
  localStorage.setItem('task', JSON.stringify(arr));    
  
  form.reset();
  drawList();
})

btnEdit.addEventListener("click", () => saveObj(buffObj)); 

function saveObj(el) {
  event.preventDefault();

  let res = createFromForm();
  if (typeof res === "undefined") {
    alert("Input should not be empty");
    return
  }
  for (let j = 1; j < keys.length; j++) {
    el[keys[j]] = res[keys[j]];
  }   
  
  btnAdd.style.display = "block";
  btnEdit.style.display = "none";
  form.reset(); 

  localStorage.setItem('task', JSON.stringify(arr));  
  drawList();
}

function createFromForm() {
  let el = {};
  el.id= "";
  for (let j = 0; j < form.elements.length-2; j++) {
    let element = form.elements[j];
    let { name, value } = element;
    if (value.length === 0) {
      return
    }
    el[name] = value;
  }  
  return el;
}

let tmp = localStorage.getItem('task');
let arr = [];

if (!tmp) {
  arr[0] = {  
    id: createId(), 
    text: "Lorem, ipsum dolor sit",
    title: "Lorem",
    status: "In progres",
    priority: "Minor",
  },
  arr[1] ={
    id: createId(), 
    title: "Lorem ipsum",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    status: "Open",
    priority: "Major",
  }
} else {
  arr = JSON.parse(tmp);
}

drawList();

localStorage.setItem('task', JSON.stringify(arr));