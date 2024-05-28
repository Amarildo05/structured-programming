function evenNumbers(array, callbackFunction) {
  for (i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      console.log(array[i]);
    }
  }
}

var checkForEven = function (n) {
  return n % 2 === 0;
};

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenNumbers(numbersArray, checkForEven);

let numbersArray2 = [2, 2, 2, 2, 2, 1, 3, 5, 9, 7];
evenNumbers(numbersArray2, checkForEven);