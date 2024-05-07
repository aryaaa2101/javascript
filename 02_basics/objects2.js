//this is non singleton way of declaring an object
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedin = false
//console.log(tinderUser)
const regularUser = {
    email : "arya@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Arya",
            lastname : "Shukla"
        }
    }
} // this is a nested of declaring object
console.log(regularUser.fullname);

//now we see how to merge two or more objects
//its the same as in array
//we use spread operator
const ob1 = {1: "A", 2: "B"}
const ob2 = {3:"c",4: "D"}
const ob3 = {5: "e", 6: "f"}
const ob4 = {...ob1,...ob2,...ob3}
console.log(ob4);


// we can have databases that has array which is composed of several objects
const user  = [
    {
        name :"arya",
        email: "arya@gmail.com"

    },
    {},
    {},
    {}
    

    
]
// now in order to loop through or to print the values we use 
user[1].email
console.log(user)

console.log(tinderUser)
console.log(Object.keys(tinderUser))//this gives the keys of that object into an array form
console.log(Object.values(tinderUser))//and similarly this gives the values in array 
//now this helps in future if we want to run a loop in keys or values we can do


//Also we have this feature to check whether particular is owned ny an object or not
//eg.
console.log(tinderUser.hasOwnProperty('isLoggedin'))
console.log(tinderUser.hasOwnProperty('isLoggedout'))
