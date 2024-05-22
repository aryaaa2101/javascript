const user = {
    username :"Arya",
    price : 999,
    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website`);
       console.log(this) // in this statement this keyword is providing both the contexts
    }
}
 user.welcomeMsg()
 user.username = "Amisha"// here we are changing the context that is the username
  user.welcomeMsg()

//this keyword is used to refer current context 

//console.log(this)// and this statement will give current context as empty beacuse we are in the node environment and in node environment the global context is empty and the global context in browser environment is windows


//***********************Arrow function */

const addTwo = (num1,num2) => {
    return num1+num2
}  //when we use curly braces it is mandatory to use the return keyword
// this is also know as explicit return
console.log(addTwo(4,5))

//another way of using arrow function without using the return keyword

const addOne = (num3,num4) => (num3+num4) // and when we use paranthesis return keyword is not used. This is also known as implicit return 
console.log(addTwo(8,9))


//returning object in arrow function
const addThree = (n1,n2) =>({username: "Arya"})
console.log(addThree(1,2))