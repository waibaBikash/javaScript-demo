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