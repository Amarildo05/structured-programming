// Krijoni nje class employee dhe 2 classa qe trashegojn prej saj njera qe quhet softwaredev
// dhe ka nje metod kalkulon rrogen dhe nje tjeter manager qe ka nje metod qe kalkulon rrogen

class Employee {
  constructor(personId, personName) {
    this.personId = personId;
    this.personName = personName;
  }
}

class SoftwareDev extends Employee {
  constructor(personId, personName, wagePerHour) {
    super(personId, personName);
    this.wagePerHour = wagePerHour;
  }
  calculateSalary() {
    const hour = 8 * 22;
    const salary = this.wagePerHour * hour;
    console.log(
      `Employee with id ${this.personId} and name ${this.personName} has salary ${salary}`
    );
  }
}

class Manager extends Employee {
  constructor(personId, personName, wagePerHour, bonus) {
    super(personId, personName);
    this.wagePerHour = wagePerHour;
    this.bonus = bonus;
  }
  calculateSalary() {
    const hour = 8 * 22;
    const salary = this.wagePerHour * hour + this.bonus;
    console.log(
      `Employee with id ${this.personId} and name ${this.personName} has salary ${salary}`
    );
  }
}

const softwaredev = new SoftwareDev("#12345", "Amarildo", 60);
softwaredev.calculateSalary();

const manager = new Manager("#54321", "Amarildo2", 80, 100);
manager.calculateSalary();