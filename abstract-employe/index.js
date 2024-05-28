class Employye {
  constructor(id, name) {
    if (this.constructor == Employye) {
      throw new Error(
        "you can not create an instance of class Employye because it is an abstract class"
      );
    }
    if (this.displayDetails == undefined) {
      throw new Error("you must create displayDetails method");
    }
    if (this.calculateSalary == undefined) {
      throw new Error("you must create calculateSalary method");
    }
    this.id = id;
    this.name = name;
  }
}

class FullTimeEmployye extends Employye {
  constructor(id, name, wagePerHour) {
    super(id, name);
    this.wagePerHour = wagePerHour;
  }

  displayDetails() {
    console.log(`Emplayye with id ${this.id} is ${this.name}`);
  }
  calculateSalary() {
    const hour = 8 * 22;
    const salary = this.wagePerHour * hour;
    console.log(
      `Employee with id ${this.id} and name ${this.name} has salary ${salary}`
    );
  }
}

class PartTimeEmployye extends Employye {
  constructor(id, name, wagePerHourPt) {
    super(id, name);
    this.wagePerHourPt = wagePerHourPt;
  }

  displayDetails() {
    console.log(`Emplayye with id ${this.id} is ${this.name}`);
  }
  calculateSalary() {
    const hour = 4 * 22;
    const salary = this.wagePerHourPt * hour;
    console.log(
      `Employee with id ${this.id} and name ${this.name} has salary ${salary}`
    );
  }
}

const fullTimeEmpDetails = new FullTimeEmployye("#12345", "Amarildo");
fullTimeEmpDetails.displayDetails();

const partTimeEmpDetails = new PartTimeEmployye("#54321", "Amarildo2");
partTimeEmpDetails.displayDetails();

const fullTimeEmpSalary = new FullTimeEmployye("#12345", "Amarildo", 60);
fullTimeEmpSalary.calculateSalary();

const partTimeEmpSalary = new PartTimeEmployye("#54321", "Amarildo2", 60);
partTimeEmpSalary.calculateSalary();
