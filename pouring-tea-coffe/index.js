class Beverage {
  constructor(name, temperature) {
    if (this.constructor == Beverage) {
      throw new Error(
        "you can not create an instance of class Beverage because it is an abstract class"
      );
    }
    if (this.pour == undefined) {
      throw new Error("you must create pour method");
    }
    this.name = name;
    this.temperature = temperature;
  }
}

class Coffe extends Beverage {
  constructor(name, temperature) {
    super(name, temperature);
  }

  pour() {
    console.log(` pouring ${this.name}`);
  }
}

class Tea extends Beverage {
  constructor(name, temperature) {
    super(name, temperature);
  }
  pour() {
    console.log(` pouring ${this.name}`);
  }
}

var coffe = new Coffe("American Coffe", "40");
var tea = new Tea("Green Tea", "40");
coffe.pour();
tea.pour();