function numbers(array, callbackFunction) {
  for (i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      console.log(callbackFunction(array[i]));
    }
  }
}

let squareNumber = function (n) {
  return n * n;
};

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers(numbersArray, squareNumber);