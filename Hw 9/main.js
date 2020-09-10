let city = [
  "Винница", "Днепр", "Донецк",
  "Житомир", "Запорожье", "Ивано-Франковск",
  "Киев", "Кропивницкий", "Луганск",
  "Луцк", "Львов", "Николаев",
  "Одесса", "Полтава", "Ровно",
  "Сумы", "Тернополь", "Ужгород",
  "Харьков", "Херсон", "Хмельницкий",
  "Черкассы", "Чернигов", "Черновцы"
];

function showList (arr) {
  let ul = document.createElement('ul');
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);   
  } 
  document.body.appendChild(ul); 
}

function selectCityName () {
  let value  = document.getElementsByTagName("input")[0].value;      // let value = document.getElementById("name").value;

  for (let i = 0; i < city.length; i++) {        
    if (value !== "" && city[i].startsWith(value)) {
      list[i].innerHTML = `<strong>${city[i]}</strong>`;
    } else if (list[i].firstChild.tagName ===  "STRONG") {           // if (list[i].innerHTML.includes("<strong>"))
      list[i].innerHTML = city[i];
    }
  } 
}

showList(city);

let list = document.getElementsByTagName("li");

setInterval(selectCityName, 1000);

// let myVar;
// function myFunction() {
//   myVar = setInterval(selectCityName, 2000);
// }
//myFunction();
