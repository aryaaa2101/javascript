function CalculateCartPrice(...num1){
    return num1
}
//console.log(CalculateCartPrice(2))

//now if we pass more than two argumnets then we use rest operator 
//rest operator is same as that of spread operator

console.log(CalculateCartPrice(200,300,400))

//object handling in functions
const user = {
    username : "Arya",
    price : 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)


//array handling in functions

const myArray = [200,133,243,453]
function handleArray(getArray){
    return getArray[2]

}
console.log(handleArray(myArray))
