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