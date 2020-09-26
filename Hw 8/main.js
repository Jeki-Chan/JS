class Field {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.matrix = this.createMatrix();
  }
  createMatrix() {
    let B = [];

    for (let i = 0; i < this.height; i++) {
      B[i] = [];
      for (let j = 0; j < this.width; j++) {
      B[i][j] = 0;
      }
    }
    return B;
  }
  renderField() {
    document.write(`<hr/>`);
    let table = document.createElement("table");

    for(let i = 0; i < this.width; i++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      for(let j = 0; j < this.height; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = this.matrix[i][j];
      }
    }
    document.body.appendChild(table);
    document.write(`<hr/>`);
  }
  clearField() {        
    this.matrix = this.createMatrix();
  }
  changeSize(newX, newY) {            // gde chyvak
    this.width = newX;
    this.height = newY;
    document.write(`newX size= ${this.width} `);
    document.write(`newY size= ${this.height}`);
    this.matrix = this.createMatrix();
  }
  addPerson(x,y) {          // [10-10] - chyvak 100.0 nizzzya
    this.matrix[x][y] = 1;
  }
  movePerson(x,y) {
    this.matrix[x][y] = 1;
  }
}

class Person {
  constructor (name, XPosition, YPosition) {
    this.name = name;
    this.XPosition = XPosition;
    this.YPosition = YPosition;
  }
  start(field) {
    console.log(this.XPosition);
    console.log(this.YPosition);
    field.addPerson(this.XPosition, this.YPosition);
  }
  go(direction, step) {    //'left', 'right', 'top', 'bottom') и с шагом step

    if (direction === "left") {
      this.stepGox = this.XPosition - step;
    } else if (this.direction === "right") {
      this.stepGox = this.XPosition + step;
    } else if (this.direction === "top") {
      this.stepGoy = this.YPosition - step;
    } else if (this.direction === "bottom") {
      this.stepGoy = this.YPosition + step;
    }

    field.movePerson(this.stepGox, this.stepGoy);
  }
  // resetPosition() {
    
  // }
}

let person = new Person("Jane", 5, 0);
let field = new Field(10,10);

field.renderField();
person.start(field);
field.renderField();
person.go("right", 2);
field.renderField();