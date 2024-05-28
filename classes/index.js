class Car {
  constructor(type, color, year) {
    this.type = type;
    this.color = color;
    this.year = year;
  }
}

class Truck extends Car {
  constructor(type, color, year, backspace) {
    super(type, color, year);
    this.backspace = backspace;
  }
}

var car1 = new Car ("vehicle", "red", 2000);
console.log(car1);