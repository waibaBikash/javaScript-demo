let name = prompt("First Name");
let firstLetter = name.slice(0,1);
let upperName = firstLetter.toUpperCase();
let restOfName = name.slice(1,name.length);
let lowerName = restOfName.toLowerCase();
let finalName = upperName + lowerName;
alert(finalName);


// construction in javaScript
function Person(){
   this.firstName = "Elon",
   this.lastName = "Musk"
}

const person1 = new Person();
const person2 = new Person();

// object destructuring 
const object= {
  finalName:"Bill",
  lastName:"Gate"
}
let { finalName: fName, lastName:lName} = object;
console.log(fName);
// object literal syntax
const firstName = "Bill";
const lastName = "Bill";

const person = {
  firstName,
  lastName
}
console.log(person);

// javaScript class

 class Person{
  constructor(name,age){   // constructor function is here mandatory 
    this.name = name;
    this.age = age;
  }
  // calss method
  greet(){
    return "hello " + this.name;
  }
 }
 const person4 = new Person("Bill Gate", 65);
 console.log(person4.greet());

