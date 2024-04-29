const name = "Arya"
 const repo = 5
 console.log(`Hello my name is ${name} and my repo count is ${repo}`);
//This is string interpolation


//how to decalre a string
const gameName = new String('AryaAs'); //try this on browser's console
//console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);//this gives object
console.log(gameName.length);
console.log(gameName.toUpperCase());//this does not change the original string as studied in stack and heap
console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0,3);
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "   arya  "
console.log(newStringOne)
console.log(newStringOne.trim());

//refer string documentation(mdn docs)

