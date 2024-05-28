//annonymus function
var sum = function (a, b) {
  return a * b;
};

// callback functoion
function callbackFunction(number1, number2, funx) {
  return funx(number1, number2);
}

var sumResponse = callbackFunction(8, 10, sum);
console.log(sumResponse, "sumResponse");