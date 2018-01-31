const add =  (a,b) => {
  // console.log(arguments);
  return a+b;
}

console.log("sum of 5+6 = ",add(5,6,7));

const user = {
  name: "sarwan",
  cities: ['Karachi','Lahore','Islamabad'],
  printPlacesLives () {
    const cityMessages = this.cities.map((city) =>{
      return this.name + " has lived in "+ city;
    })
    return cityMessages;
  }
};

// console.log(user.printPlacesLives());

const multiplier = {
  numbers: [1,2,3,4,5,6,7,8,9,10],
  multiplied_by: 5,
  multiply (){
    return this.numbers.map((number) => number + "*" + this.multiplied_by + " = " + number*this.multiplied_by);
  }
}

console.log("Result: ",multiplier.multiply());