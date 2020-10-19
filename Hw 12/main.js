let arr = [
  {
    id: 1, 
    name: "Oleg", 
    surname: "Hi", 
    age: 14, 
    address: "Oslo", 
    skills: ["js", "python"]
  },
  {
    id: 2, name: "Mike", surname: "Ivanov", age: 34, address: "Miami", skills: ["php", "python"]
  }
];

let keys = ["id", "name", "surname", "age", "address", "skills"];
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let create = document.querySelector(".add");
create.addEventListener("click", addText);


function createTable(arr){
  tbody.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < keys.length; j++){
      let td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = arr[i][keys[j]];         // let text = document.createTextNode(arr[i][keys[j]]); td.appendChild(text);
    }
    let td = document.createElement("td");
    td.classList.add("actions");
    tr.appendChild(td);
    let view = document.createElement("button");
    view.innerHTML = "View";
    view.addEventListener("click", () => showText(arr[i]));   // function () { showText(arr[i].id) });
    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.addEventListener("click", () => editText(arr[i]));
    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.addEventListener("click", () => removePerson(arr[i]));
    td.appendChild(edit);
    td.appendChild(view);
    td.appendChild(remove);
  }
}

function showText(pers){    //id[keys[0]]         id.id;
  form.style.display = "block";
  submit.style.display = "none";

  for (let i = 0; i < keys.length; i++) {
    form.elements[i].value = pers[keys[i+1]];
    if (i === 5) {                                // need update
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
  let index = arr.findIndex((element) => element === pers);   //   const index = (element) => element === pers; arr.findIndex(index);
  tdActions[index].innerHTML="Remove?";
  
  let yes = document.createElement("button");
  yes.innerHTML = "Yes";
  yes.addEventListener("click", () => removeYes(index));  
  let no = document.createElement("button");
  no.innerHTML = "No";
  no.addEventListener("click", () => createTable(arr));   // display: block btn E V R
  tdActions[index].appendChild(yes);
  tdActions[index].appendChild(no);
}

function removeYes(index) {
  arr.splice(index, 1); 

  createTable(arr);
}


function editText(pers){
  showText(pers);

  submit.style.display = "block";
  submit.addEventListener("click", () => updateArr(pers));
}

function updateArr(pers) {
  for (let j = 0; j < form.elements.length; j++) {
    let element = form.elements[j];
    let name = element.name;
    let value = element.value;
    
    if (element.type === "checkbox" &&  element.checked) {
      console.log(value);
      pers[name] = [];
      pers[name].push(value);
    } else {
      pers[name] = value;
    }
  }

  createTable(arr);
}



function addText(){               // need update
  console.log("addText");
//   let obj = {};

//   console.log(form.elements);
//   console.dir(form.elements);
//   for (let i = 0; i < form.elements.length; i++) {
//     let element = form.elements[i];
//     let name = element.name;
//     let value; //= element.value;
    
//     if (element.type === "checkbox" &&  element.checked) {
// //          obj[name] = element.value;
//       console.log(obj);   //{}
//       console.log(name);  //skills
//       console.log(obj[name]);  //underfined = skills {} 
//       console.log(element.value);  //pphp.python
//       obj[name].push(element.value);
//     } 
//     // if () {

//     // }

//   }
  
//   arr.push(obj);
//   console.log(arr);
//   console.log(obj);
//   console.log(obj.skills);
//   return obj;
}


createTable(arr);