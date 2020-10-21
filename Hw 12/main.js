let createCount = () => {     //let count = 0;   count++;
  let i = 0;
  return () => i++; 
}

let createId = createCount();
let keys = ["id", "name", "surname", "age", "address", "skills"];
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let create = document.querySelector(".add");
let newsubmit = document.querySelector(".newsubmit");
let buffObj;

submit.addEventListener("click", () => savePerson(buffObj)); 
create.addEventListener("click", onNewClick);
newsubmit.addEventListener("click", createPerson);

function createTbody(users){
  tbody.innerHTML = "";
  create.style.display = "block";

  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < keys.length; j++){
      let td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = users[i][keys[j]];        
    }
    let td = document.createElement("td");
    td.classList.add("actions");
    tr.appendChild(td);

    let view = document.createElement("button");
    view.innerHTML = "View";
    view.addEventListener("click", () => fillForm(users[i]));  

    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.addEventListener("click", () => onEditClick(users[i]));

    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.addEventListener("click", () => removePerson(users[i]));

    td.appendChild(edit);
    td.appendChild(view);
    td.appendChild(remove);
  }
}

function fillForm(pers){   
  form.style.display = "block";
  submit.style.display = "none";
  newsubmit.style.display = "none";

  for (let i = 0; i < keys.length - 1; i++) {
    if (Array.isArray(pers[keys[i+1]])) {
      form.elements.js.checked = pers[keys[i+1]].includes("js");
      form.elements.python.checked = pers[keys[i+1]].includes("python");
      form.elements.php.checked = pers[keys[i+1]].includes("php");
    } else {
      form.elements[i].value = pers[keys[i+1]];
    }
  }
}

function removePerson(pers) { 
  form.style.display = "none";
 
  let tdActions = document.querySelectorAll(".actions");
  let index = users.findIndex((element) => element === pers);         
  tdActions[index].innerHTML="Remove?";
  
  let yes = document.createElement("button");
  yes.innerHTML = "Yes";
  yes.addEventListener("click", () => removeYes(index)); 

  let no = document.createElement("button");
  no.innerHTML = "No";
  no.addEventListener("click", () => createTbody(users));  

  tdActions[index].appendChild(yes);
  tdActions[index].appendChild(no);
}

function removeYes(index) {
  users.splice(index, 1); 
  createTbody(users);
}

function onEditClick(pers){
  fillForm(pers);
  buffObj = pers;

  submit.style.display = "block";
  newsubmit.style.display = "none";
} 

function savePerson(pers) {
  event.preventDefault();
  form.style.display = "none";

  let res = createFromForm();
  for (let j = 1; j < keys.length; j++) {
    pers[keys[j]] = res[keys[j]];
  }

  createTbody(users);
}

function createFromForm() {
  let obj = {};
  obj.id= "";
  obj.skills = [];
  for (let j = 0; j < form.elements.length; j++) {
    let element = form.elements[j];
    let { name, value } = element;
    
    if (element.type === "checkbox") {
      if (element.checked) {
        obj[name].push(value);
      }
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

function createPerson() {  
  event.preventDefault();
  form.style.display = "none";

  let res = createFromForm();  
  res.id = createId();
  users.push(res);
    
  createTbody(users);
}

let users = [
  {
    id: createId(), 
    name: "Oleg", 
    surname: "Hi", 
    age: 14, 
    address: "Oslo", 
    skills: ["js", "python"]
  },
  {
    id: createId(), 
    name: "Mike", 
    surname: "Ivanov", 
    age: 34, 
    address: "Miami", 
    skills: ["php", "python"]
  }
];

createTbody(users);