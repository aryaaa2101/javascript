function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
}
//sayMyName()
function addTwoNumbers(numberOne,numberTwo) { //the variable in the function definition inside paranthesis is called parameters
    console.log(numberOne + numberTwo)
}
addTwoNumbers(3,4)//and here the values that are being passed are known as arguments

function logInUsername(username){
    if(username === undefined){
        console.log("Please enter a username")
        return //this return will not let the next return to execute
    }
    return `${username} just logged in`

}
console.log(logInUsername("Arya"))

//now if we don't pass any value above it results in undefined
//so in order to eliminate this undefined we use if condition

