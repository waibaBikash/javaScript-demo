let name = prompt("First Name");
let firstLetter = name.slice(0,1);
let upperName = firstLetter.toUpperCase();
let restOfName = name.slice(1,name.length);
let lowerName = restOfName.toLowerCase();
let finalName = upperName + lowerName;
alert(finalName);