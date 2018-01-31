class Person {
  constructor (name = "Anonymous",age=0){
    this.name = name;
    this.age = age;
  }

  getGretting(){
    return `Hi. I am ${this.name}!`;
  }

  getDescription(){
    return `${this.name} is ${this.age} years(s) old.`;
  }
}

class Student extends Person{
  constructor(name,age,major){
    super(name,age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription(){
    let desc = super.getDescription();
    if(this.hasMajor()){
      desc += ` Their major subjects are: ${this.major}`
    }
    return desc;
  }
}

class Traveller extends Person{
  constructor(name,age,location){
    super(name,age);
    this.location = location;
  }

  hasLocation(){
    return !!this.location;
  }

  getGretting(){
    let desc = super.getGretting();
    if(this.hasLocation()){
      desc += ` I'm living in ${this.location}`;
    }
    return desc;
  }
}

const me = new Traveller("sarwan Kumar",27,"Karachi");
console.log(me.getGretting());

const other = new Traveller();
console.log(other.getGretting());