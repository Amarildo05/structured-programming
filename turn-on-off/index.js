class ElectronicDevice {
  constructor(brand, model) {
    if (this.constructor == ElectronicDevice) {
      throw new Error(
        "you can not create an instance of class ElectronicDevice because it is an abstract class"
      );
    }
    if (this.turnOn == undefined) {
      throw new Error("you must create turnOn method");
    }
    if (this.turnOff == undefined) {
      throw new Error("you must create turnOff method");
    }
    this.brand = brand;
    this.model = model;
  }
}

class SmartPhone extends ElectronicDevice {
  constructor(brand, model) {
    super(brand, model);
  }
  turnOn() {
    console.log(`${this.brand} turn on `);
  }
  turnOff() {
    console.log(`${this.brand} turn off `);
  }
}

class Laptop extends ElectronicDevice {
  constructor(brand, model) {
    super(brand, model);
  }
  turnOn() {
    console.log(`${this.brand} turn on `);
  }
  turnOff() {
    console.log(`${this.brand} turn off `);
  }
}

var smartPhone = new SmartPhone("iphone", "12 pro");
var laptop = new Laptop("legion", "abc123");
smartPhone.turnOn();
smartPhone.turnOff();
laptop.turnOn();
laptop.turnOff();