function createMultiplier(factor) {
  return function (value) {
    return factor * value;
  };
}

var multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5));