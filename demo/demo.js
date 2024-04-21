// # using the funtion toUpperCase and toLowwerCase 
let  name = prompt('Enter Your name');
let   firstChar = name.slice(0,1);

let upperCasefirstChar = firstChar.toUpperCase();
let restOfName = name.slice(1,name.length);
let restOfNameLowwercase = restOfName.toLowerCase(restOfName);
 let finalResult = upperCasefirstChar + restOfNameLowwercase;

 alert('hello ' + finalResult);