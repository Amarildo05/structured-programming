class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying hard for their grade ${this.grade}.`);
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}
const student = new Student("Klajdi", 30, "A");
const teacher = new Teacher("Paula", 25, "Javascript");
student.introduce();
student.study();
teacher.introduce();
teacher.teach();