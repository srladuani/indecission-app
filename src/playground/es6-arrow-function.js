const square = function(x){
  return x*x;
}

console.log("square: ",square(8));

// const squareArrow = (x) => {
//   return x*x;
// }

const squareArrow = (x) => x*x;

console.log("9*9 = ",squareArrow(9));

const firstName = (fullName) => fullName.split(" ")[0];

console.log("firstName: ",firstName("Sarwan kumar"))