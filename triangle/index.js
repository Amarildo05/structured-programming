class Shape {
  constructor(name) {
    if (this.constructor == Shape) {
      throw new Error(
        "you can not create an instance of class Shape because it is an abstract class"
      );
    }
    if (this.getArea == undefined) {
      throw new Error("you must create getArea method");
    }
    this.name = name;
  }
}

class Triangle extends Shape {
  constructor(name, base, height) {
    super(name);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }
}

var triangle = new Triangle("triangle", 20, 4);
var getTriangleArea = triangle.getArea();
console.log("triangle", triangle, getTriangleArea);