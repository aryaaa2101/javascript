//Primitive 
//-7 types : String
            //  Number
            //  Boolean
            //  null
            //  undefined
            //  Symbol
            //  Big

//Reference(Non primitve)
// Array
//objects
//functions
  
//Javascript is dynamically typed language

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);
//this results in false because symbol looks for uniqueness

const bigNumber = 23456789345n



//Array,objects,functions
const heros = ["shaktiman", "nagraj","doga"];
let myObj = {
    name:"Arya",
    age :11,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof id);
console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof myFunction)
