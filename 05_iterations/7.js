//map 
const myNumbers = [1,2,3,4,5,6,7,89,10]
const newNums = myNumbers.map((num)=> num+10)
console.log(newNums);


//Chaining : We can use two, three methods at the same time

const chaining = myNumbers
                .map((num)=> num*10)
                .map((num)=> num+1)
                .filter((num)=> num>=40) //filter executes only when its true
console.log(chaining)


