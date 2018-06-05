
function calculateCircumference(radius) {
  return new Promise((resolve, reject)=>{
       var result = 2 * Math.PI * radius; 
       resolve(result);
  })
}

console.log(Math.PI);
// expected output: 3.141592653589793
console.log(calculateCircumference(10));

module.exports = {
  calculateCircumference: calculateCircumference
}