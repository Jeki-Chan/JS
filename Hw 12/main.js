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

createTable(arr);

function showText(id){
  form.style.display = "block";
  console.log(id);
  for (let i = 0; i < keys.length; i++) {
    console.log(form.elements[i]);
    console.log(id[keys[i+1]]);
    form.elements[i].value = id[keys[i+1]];
    if (i === 5) {
      console.log(id[keys[i]]);
      id[keys[i]].forEach(function(item) {
        if (item === "js") {
          form.elements.js.checked = true;
        }
        if (item === "python"){
          form.elements.python.checked = true;
        }
        if (item === "php"){
          form.elements.php.checked = true;
        }
      })
    }
  }
}

function removePerson(id){
  // agree or disagree
  console.log("removePerson");
  console.log(id);
  let n;
  console.log(id[keys[0]]);
  n = id[keys[0]];
  console.log(n);
  arr[n-1] = {};
  console.log(arr);

  createTable(arr);
}

function editText(id){
  showText(id);
  console.log("editText");
  let submit = document.querySelector("input[type=submit]")
  submit.style.display = "block";
  submit.addEventListener("click", addText);
  // let data = {}
  // for (let i = 0; i < form.elements.length; i++) {
  //   let element = form.elements[0];
  //   let name = element.name;
  //   let value = element.value;
  //   data[name] = value;
    
  // }
}

let create = document.querySelector(".add");
create.addEventListener("click", addText);

function addText(){
  console.log("addText");
}

// function addButton(namebtn){
//   namebtn = document.createElement("button");
//   namebtn.innerHTML = "Edit";
//   namebtn.addEventListener("click", function () {
//   namebtn+Do(arr[i].id) });
// }