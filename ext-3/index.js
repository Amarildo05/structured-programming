function transformStrings(strings, callback) {
  var transformedStrings = [];
  for (let string of strings) {
    transformedStrings.push(callback(string));
  }
  return transformedStrings;
}

function uppercase(string) {
  return string.toUpperCase();
}

var strings = ["Amarildo", "Kola"];
var transformed = transformStrings(strings, uppercase);
console.log(transformed);