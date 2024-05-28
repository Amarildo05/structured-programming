class Makine {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`${this.name} is starting`);
  }
  stop() {
    console.log(`${this.name} is stopping`);
  }
}

class Vehicle extends Makine {
  constructor(name, brand, fuelType) {
    super(name);
    this.brand = brand;
    this.fuelType = fuelType;
  }
  drive() {
    console.log(`${this.name} is driving`);
  }
}

class Car extends Vehicle {
  constructor(name, brand, fuelType, numberOfDoors) {
    super(name, brand, fuelType);
    this.numberOfDoors = numberOfDoors;
  }
  honk() {
    console.log(`${this.name} is honking`);
  }
}

const makine = new Makine("BMW");
makine.start();
makine.stop();

const vehicle = new Vehicle("Mercedes", "Benz", "Petrol");
vehicle.drive();

const car = new Car("Volkswagen", "Golf", "Diesel", 4);
car.honk();