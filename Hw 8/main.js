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

        if (this.matrix[i][j] === 1) {
          td.style.background = "darkviolet";
        }
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
    this.XPosition = XPosition - 1;
    this.YPosition = YPosition - 1;
    this.XnewPosition = this.XPosition;
    this.YnewPosition = this.YPosition;
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
  let person = new Person("Jane", 5, 1);
  let field = new Field(10,10);
  
  document.write("Создаем поле 10х10");
  field.renderField();
  person.start(field);
  document.write("Добавляем персонажа");
  field.renderField();  
  //person.go("left", 1, field);
  person.go("right", 1, field);
  document.write("Перемещаем вправо на 1");
  person.go("bottom", 2, field);
  document.write(" и вниз на 2");
  field.renderField();
  person.resetPosition(field);
  document.write("Возвращаем персонажа на начальные координаты");
  field.renderField();
  field.clearField();
  document.write("Убираем персонажа");
  field.renderField();
  field.changeSize(5, 7);
  document.write("Меняем размер поля на 5х7");
  field.renderField();
  person.start(field);
  document.write("Добавляем персонажа");
  field.renderField();  
} catch (e) {
  alert(e.message);
}