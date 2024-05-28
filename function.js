// callback function
// A callback is a function passed as an argument to another function.
// A callback function can run after another function has finished.


function display (result){
  console.log(result);
}

function add(num1,num2,myCallback){
  let sum = num1+num2;
  myCallback(sum);
}

add(50,20,display);

// recursion function

function conudDown(num){
  console.log(num);
  num--;
  if(num>=0){
    conudDown(num);
  }
}
conudDown(10);

// object in javaScript
const person={
  firstName:"Elon",
  lastName:"Musk",
  age:40
}
for(let val in person){
  console.log(val);
}