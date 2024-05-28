class Nxenes {
  constructor(name, surname, education) {
    this.name = name;
    this.surname = surname;
    this.education = education;
  }
}

class StudentBachelor extends Nxenes {
  constructor(name, surname, education) {
    super(name, surname, education);
  }

  completted() {
    console.log(`${this.name} ${this.surname} completted ${this.education}`);
  }
}

class StudentMaster extends Nxenes {
  constructor(name, surname, education) {
    super(name, surname, education);
  }
  completted() {
    console.log(`${this.name} ${this.surname} completted ${this.education}`);
  }
}

var studentBachelor = new StudentBachelor("Student", "1", "Bachelor");
var studentMaster = new StudentMaster("Student", "2", "Master");
studentBachelor.completted();
studentMaster.completted();