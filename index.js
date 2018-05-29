function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(Math.PI);
// expected output: 3.141592653589793
console.log(calculateCircumference(10));

module.exports = {
  calculateCircumference: calculateCircumference
}