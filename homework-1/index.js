function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(nr1, nr2, callback) {
  return callback(nr1, nr2);
}

console.log("addition:", calculate(20, 25, add));
console.log("subtraction:", calculate(10, 5, subtract));
console.log("multiplication:", calculate(7, 3, multiply));
console.log("division:", calculate(8, 4, divide));