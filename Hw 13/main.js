let createCount = () => {     //let count = 0;   count++;
  let i = 0;
  return () => {
    return i++;
  }
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
newsubmit.addEventListener("click", () => createPerson(event));

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
      if (pers[keys[i+1]].includes("js")) {
        form.elements.js.checked = true;
      } else if (!pers[keys[i+1]].includes("js")){
        form.elements.js.checked = false;
      }
      if (pers[keys[i+1]].includes("python")){
        form.elements.python.checked = true;
      } else if (!pers[keys[i+1]].includes("python")){
        form.elements.python.checked = false;
      }
      if (pers[keys[i+1]].includes("php")){
        form.elements.php.checked = true;
      } else if (!pers[keys[i+1]].includes("php")){
        form.elements.php.checked = false;
      }
    } else {
      form.elements[i].value = pers[keys[i+1]];
    }
  }
}

function removePerson(pers) { 
  form.style.display = "none";
 
  let tdActions = document.querySelectorAll(".actions");
  let i = (element) => element === pers; 
  let index = users.findIndex(i);         
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

  localStorage.setItem('test', JSON.stringify(users));
  createTbody(users);
}

function onEditClick(pers){
  fillForm(pers);
  buffObj = pers;

  newsubmit.style.display = "none";
  submit.style.display = "block";
} 

function savePerson(pers) {
  event.preventDefault();
  form.style.display = "none";

  let res = createFromForm();
  for (let j = 1; j < keys.length; j++) {
    pers[keys[j]] = res[keys[j]];
  }

  localStorage.setItem('test', JSON.stringify(users));
  createTbody(users);
}

function createFromForm() {
  let obj = {
    id: "",
    skills: [],
  };
  for (let j = 0; j < form.elements.length; j++) {
    let element = form.elements[j];
    let name = element.name;
    let value = element.value;
    
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

  localStorage.setItem('test', JSON.stringify(users));  
  createTbody(users);
}

let tmp = localStorage.getItem('test');
let users = [];

if (!tmp) {
  users[0] = {
  id: createId(), 
  name: "Oleg", 
  surname: "Hi", 
  age: 14, 
  address: "Oslo", 
  skills: ["js", "python"]
  };
} else {
  users = JSON.parse(tmp);
}

createTbody(users);

localStorage.setItem('test', JSON.stringify(users));