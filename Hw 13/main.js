
let createCount = () => {     //let count = 0;   count++;
  let i = 0;
  return () => {
    return i++;
  }
}

let createId = createCount();
let buffObj;
let keys = ["id", "name", "surname", "age", "address", "skills"];
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let create = document.querySelector(".add");
let newsubmit = document.querySelector(".newsubmit");
submit.addEventListener("click", () => savePerson(buffObj)); 
create.addEventListener("click", onNewClick);
newsubmit.addEventListener("click", () => createPerson(event));

function createTbody(arr){
  tbody.innerHTML = "";
  create.style.display = "block";

  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < keys.length; j++){
      let td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = arr[i][keys[j]];        
    }
    let td = document.createElement("td");
    td.classList.add("actions");
    tr.appendChild(td);
    let view = document.createElement("button");
    view.innerHTML = "View";
    view.addEventListener("click", () => fillForm(arr[i]));  
    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.addEventListener("click", () => onEditClick(arr[i]));
    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.addEventListener("click", () => removePerson(arr[i]));
    td.appendChild(edit);
    td.appendChild(view);
    td.appendChild(remove);
  }
}

function fillForm(pers){   
  form.style.display = "block";
  submit.style.display = "none";

  for (let i = 0; i < keys.length; i++) {
    form.elements[i].value = pers[keys[i+1]];
    if (i === 5) {                               
      if (pers[keys[i]].includes("js")) {
        form.elements.js.checked = true;
      } else if (!pers[keys[i]].includes("js")){
        form.elements.js.checked = false;
      }
      if (pers[keys[i]].includes("python")){
        form.elements.python.checked = true;
      } else if (!pers[keys[i]].includes("python")){
        form.elements.python.checked = false;
      }
      if (pers[keys[i]].includes("php")){
        form.elements.php.checked = true;
      }else if (!pers[keys[i]].includes("php")){
        form.elements.php.checked = false;
      }
    }
  }
}

function removePerson(pers) { 
  form.style.display = "none";
  submit.style.display = "none";
 
  let tdActions = document.querySelectorAll(".actions");
  let index = arr.findIndex((element) => element === pers);           //const index = (element) => element === pers; arr.findIndex(index);
  tdActions[index].innerHTML="Remove?";
  
  let yes = document.createElement("button");
  yes.innerHTML = "Yes";
  yes.addEventListener("click", () => removeYes(index));  
  let no = document.createElement("button");
  no.innerHTML = "No";
  no.addEventListener("click", () => createTbody(arr));  
  tdActions[index].appendChild(yes);
  tdActions[index].appendChild(no);
}

function removeYes(index) {
  arr.splice(index, 1); 
  localStorage.setItem('test', JSON.stringify(arr));
  createTbody(arr);
}

function onEditClick(pers){
  fillForm(pers);
  buffObj = pers;

  submit.style.display = "block";
} 

function savePerson(pers) {
  event.preventDefault();
  submit.style.display = "none";

  let res = createFromForm();
  for (let j = 1; j < keys.length; j++) {
    pers[keys[j]] = res[keys[j]];
  }
  localStorage.setItem('test', JSON.stringify(arr));

  createTbody(arr);
}

function createFromForm() {
  let obj = {};
  obj.id= "";
  for (let j = 0; j < form.elements.length; j++) {
    let element = form.elements[j];
    let name = element.name;
    let value = element.value;
    
    if (element.type === "checkbox" &&  element.checked) {
      obj[name] = [];
      obj[name].push(value);
    } else {
      obj[name] = value;
    }
  }  
  return obj;
}

function onNewClick(){     
  form.reset();           
  form.style.display = "block";
  create.style.display = "none";
  submit.style.display = "none";

  newsubmit.style.display = "block";
}

function createPerson(event) {  
  event.preventDefault();

  let res = createFromForm();  
  res.id = createId();
  arr.push(res);
  localStorage.setItem('test', JSON.stringify(arr));
    
  createTbody(arr);
}

let arr1 = [
  {
    id: createId(), 
    name: "Oleg", 
    surname: "Hi", 
    age: 14, 
    address: "Oslo", 
    skills: ["js", "python"]
  },
  {
    id: createId(), name: "Mike", surname: "Ivanov", age: 34, address: "Miami", skills: ["php", "python"]
  }
];



let tmp = localStorage.getItem('test');
let arr = [];

if (!tmp) {
  arr[0] = {
  id: createId(), 
  name: "Oleg", 
  surname: "Hi", 
  age: 14, 
  address: "Oslo", 
  skills: ["js", "python"]
  };
} else {
  arr = JSON.parse(tmp);
}
createTbody(arr);

localStorage.setItem('test', JSON.stringify(arr));