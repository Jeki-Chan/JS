let form = document.querySelector("form");
let main = document.querySelector("main");
let btnEdit = document.querySelector(".btnEdit");
let btnAdd = document.querySelector(".btnAdd");
let buffObj;
let arr = [];

function drawList(arr) {
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

main.addEventListener("click", async event => {
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

        let deleted = await deleteEl(id);
        arr = arr.filter(arr => arr.id !== deleted.id)

        drawList(arr);
      }
    break;
  }
})

btnAdd.addEventListener("click", async (event) => {
  event.preventDefault();

  let el = createFromForm();  
  if (typeof el === "undefined") {
    alert("Input should not be empty");
    return
  }

  let createdEl = await createEl(el);
  arr.push(createdEl); 
  
  form.reset();
  drawList(arr);
})

btnEdit.addEventListener("click", () => saveObj(buffObj)); 

async function saveObj(obj) {
  event.preventDefault();
  
  let index = arr.findIndex((element) => element.id === obj.id);     
  let res = createFromForm();
  if (typeof res === "undefined") {
    alert("Input should not be empty");
    return
  }
  
  btnAdd.style.display = "block";
  btnEdit.style.display = "none";

  let el = await editEl(res, obj.id);
  arr[index] = el;

  form.reset(); 
  drawList(arr);
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

async function getArr() {
  let responce = await fetch("api/arr");
  let arr = await responce.json();

  return arr;
}

getArr()
  .then(fetchedArr => {
    arr = fetchedArr;

    drawList(arr);
  })

async function createEl(el) {
  let headers = new Headers();
  headers.set("Content-Type", "application/json");
  let responce = await fetch("/api/arr", {
    method: "POST",
    body: JSON.stringify(el),
    headers,
  });
  let createdEl = await responce.json();

  return createdEl;
}

async function deleteEl(id) {
  let responce = await fetch(`/api/arr/${id}`, {
    method: "DELETE"
  });
  let el = await responce.json();

  return el;
}

async function editEl(el, id) {
  let headers = new Headers();
  headers.set("Content-Type", "application/json");
  let responce = await fetch(`/api/arr/${id}`, {
    method: "PUT",
    body: JSON.stringify(el),
    headers,
  });
  let editedEl = await responce.json();

  return editedEl;
}