//reduce 
const myNums = [1,2,3,4]
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval ${currval}`);
    return acc+ currval
}, 0)
console.log(myTotal)
// we have accumulator and current value
//current value is our values of array
//Initially the initial value(after the comma before the paranthesis) is assigned to accumulator and as the operation goes on the value returned will be accumulated to the accumulator



//Now using the above operation using arrow function
const total = myNums.reduce((accumultaor,current_Value)=> accumultaor+current_Value,0)
console.log(total)


//another example
const shoppingCart = [
    {
        itemName : "JS",
        price : 999

    },
    {
        itemName : "Java",
        price : 1999

    },
    {
        itemName : "Mobile dev",
        price : 12999

    }

]

const priceToPay = shoppingCart.reduce((acc,item)=> acc +  item.price ,0)
console.log(priceToPay);