class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.enrollments = [];
  }
  enroll(course) {
    const enrollment = new Enrollment(this, course);
    this.enrollments.push(enrollment);
    course.addStudent(this);
  }
  getCourses() {
    //short way with .map
    return this.enrollments.map((enrollment) => enrollment.course);

    // long way with forEach
    // const test = [];
    // this.enrollments.forEach((element) => {
    //   debugger;
    //   test.push(element.course);
    // });
    // return test;
  }
}

class Course {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    this.students = [];
  }
  addStudent(student) {
    this.students.push(student);
  }
  getStudents() {
    return this.students;
  }
}

class Enrollment {
  constructor(student, course) {
    this.student = student;
    this.course = course;
    this.grade = null;
  }
  setGrade(grade) {
    this.grade = grade;
  }
}

class School {
  constructor() {
    this.students = [];
    this.courses = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  addCourse(course) {
    this.courses.push(course);
  }

  enrollStudentInCourse(studentId, courseId) {
    const student = this.getStudentById(studentId);
    const course = this.getCourseByCode(courseId);
    if (student && course) {
      student.enroll(course);
    } else {
      console.log("No student or course found !");
    }
  }

  getStudentById(studentId) {
    return this.students.find((student) => student.id === studentId);
  }

  getCourseByCode(courseCode) {
    return this.courses.find((course) => course.code === courseCode);
  }
}

const school = new School();

const studnet1 = new Student("Amarildo", 102);
const student2 = new Student("Ben", 507);

const course1 = new Course("Python", 203);
const course2 = new Course("Javascript", 401);

school.addStudent(studnet1);
school.addStudent(student2);

school.addCourse(course1);
school.addCourse(course2);

school.enrollStudentInCourse(102, 507);

console.log(school);