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

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id==anotherId);
// //this results in false because symbol looks for uniqueness

// const bigNumber = 23456789345n



// //Array,objects,functions
// const heros = ["shaktiman", "nagraj","doga"];
// let myObj = {
//     name:"Arya",
//     age :11,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }


// console.log(typeof id);
// console.log(typeof bigNumber)
// console.log(typeof heros)
// console.log(typeof myFunction)


// refer https://262.ecma-international.org/5.1/#sec-11.4.3



//There are two types of memory management in JS
//1. Stack(Primitve data types)
//2. Heap(Reference or non-primitive data types)


// In stack whenever we declare any variable we get its copy
//In heap whenever anything is defined we get it's reference

let myYoutubename = "aryashukla"
let anothername = myYoutubename
anothername = "amishashukla"
console.log(anothername);
console.log(myYoutubename)

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "arya@google.com"
console.log(userOne.email);
console.log(userTwo.email);

