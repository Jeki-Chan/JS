class Field {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.matrix = this.createMatrix();
  }
  createMatrix() {
    let arr = [];

    for (let i = 0; i < this.height; i++) {
      arr[i] = [];
      for (let j = 0; j < this.width; j++) {
      arr[i][j] = 0;
      }
    }
    return arr;
  }
  renderField() {
    document.write(`<hr/>`);
    let table = document.createElement("table");

    for(let i = 0; i < this.height; i++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      for(let j = 0; j < this.width; j++) {
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
  changeSize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
    this.matrix = this.createMatrix();
  }
  addPerson(x,y) {
    if (!this.validateCoords(x, y)) {
      throw new Error('Invalid coordinates');
    }
    this.matrix[x][y] = 1;
  }
  movePerson(prevX,prevY,x,y) {
    if (!this.validateCoords(x, y)) {
      throw new Error('Invalid coordinates');
    }
    this.matrix[prevX][prevY] = 0;
    this.matrix[x][y] = 1;
  }
  validateCoords(x, y) {
    return x >= 0 && x < this.height && y >= 0 && y < this.width;
  }
}

class Person {
  constructor (name, XPosition, YPosition) {
    this.name = name;

    this.XPosition = XPosition;
    this.YPosition = YPosition;
    this.XnewPosition = XPosition;
    this.YnewPosition = YPosition;
  }
  start(field) {
    field.addPerson(this.XPosition, this.YPosition);
  }
  go(direction, step, field) {    
    let prevX = this.XnewPosition;
    let prevY = this.YnewPosition;
    if (direction === "left") {
      this.YnewPosition = this.YnewPosition - step;
    } else if (direction === "right") {
      this.YnewPosition = this.YnewPosition + step;
    } else if (direction === "top") {
      this.XnewPosition = this.XnewPosition - step;
    } else if (direction === "bottom") {
      this.XnewPosition = this.XnewPosition + step;
    }
    field.movePerson(prevX, prevY, this.XnewPosition, this.YnewPosition);
  }
  resetPosition(field) {
    field.movePerson(this.XnewPosition, this.YnewPosition, this.XPosition, this.YPosition);
    this.XnewPosition = this.XPosition;
    this.YnewPosition = this.YPosition;
  }
}

try {
  let person = new Person("Jane", 5, 0);
  let field = new Field(10,10);
  
  field.renderField();
  person.start(field);
  field.renderField();
  person.go("right", 1, field);
  person.go("bottom", 2, field);
  field.renderField();
  person.resetPosition(field);
  field.renderField();
} catch (e) {
  alert(e.message);
}