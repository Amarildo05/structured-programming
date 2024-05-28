function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(3));
// factorial(3);
// 3 * factorial(2);
// 3 * (2 * factorial(1));
// 3 * (2 * (1 * factorial(0)));
// 3 * (2 * (1 * 1));