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

function createTable(arr){
   for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < keys.length; j++){
      let td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = arr[i][keys[j]];         // let text = document.createTextNode(arr[i][keys[j]]); td.appendChild(text);
    }
    let td = document.createElement("td");
    tr.appendChild(td);
    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.addEventListener("click", editDo);
    let view = document.createElement("button");
    view.innerHTML = "View";
    view.addEventListener("click", viewDo);
    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.addEventListener("click", removeDo);
    td.appendChild(edit);
    td.appendChild(view);
    td.appendChild(remove);
  }
}

createTable(arr);

let name = document.getElementsByName("name");

function viewDo(event){
  console.log("viewDo");
//  event.preventDefault();
  //document.write("viewDo");

}

//edit.addEventListener("click", editDo);
//remove.addEventListener("click", removeDo);
//create.addEventListener("click", createDo);

function createDo(event){
  console.log("createDo");
//  event.preventDefault();
  //document.write("createDo");
}
function editDo(event){
  //event.preventDefault();
  console.log("editDo");
  //document.write("editDo");
}
function removeDo(event){
  console.log("removeDo");
 // event.preventDefault();
  //document.write("removeDo");
}
// let edit = document.querySelector("edit");
// let remove = document.querySelector("remove");
// let view = document.querySelector("view");
// let create = document.querySelector("create");

// let table = document.querySelector("table");
// let tr = document.querySelector("tr");    //All   push sled
// let td = document.querySelector("td");

// let password = document.getElementsByName("password");
// let age = document.getElementsByName("age");
// let address = document.getElementsByName("address");
// let js = document.getElementsByName("js");
// let python = document.getElementsByName("python");
// let php = document.getElementsByName("php");