var createFibonaci = (
    function () {
  var prev = 0;
  var actual = 1;
  return function () {
    const next = prev + actual;
    prev = actual;
    actual = next;
    return prev;
  };
}
)();

console.log(createFibonaci());
console.log(createFibonaci());
console.log(createFibonaci());
console.log(createFibonaci());
console.log(createFibonaci());
console.log(createFibonaci());
console.log(createFibonaci());