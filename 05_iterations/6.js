const coding  = ["js","java","cpp","python"]
//for each doesn't return any value and o/p as undefined
const values = coding.forEach((item)=>{
    console.log(item)
    return item;
})
console.log(values)

//filter: this operation also takes a callback function
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>{
    return num>4 //this way is called explicit return since we are using curly braces means when we open a scope we need the return keyword
})
console.log(newNums);

//another way and this way is called is implicit return since we use parathensis and return keyword is not required
//const newNums = myNums.filter((num)=> num>4)


//Now we are implementing the above operation using for each loop
const nums = []
myNums.forEach((num) =>{
    if(num>4){
        nums.push(num)
    }

})
console.log(nums)


const books = [
    {
        title : "Book1",
        genre: "History",
        publish : 2001,
        edition : 2014
    },
    {
        title : "Book2",
        genre: "History",
        publish : 1991,
        edition : 2004
    },
    {
        title : "Book3",
        genre: "Fiction",
        publish : 1993,
        edition : 2000
    },
    {
        title : "Book4",
        genre: "Non-fiction",
        publish : 1981,
        edition : 1989
    },
    {
        title : "Book5",
        genre: "Science",
        publish : 1898,
        edition : 1998
    },
    {
        title : "Book6",
        genre: "Sci-fi",
        publish : 2005,
        edition : 2017
    },

]

let userBooks = books.filter((bk)=> bk.genre === "History")
console.log(userBooks)

userBooks = books.forEach((bk)=>{
    return bk.genre === "Fiction" && bk.publish >=2000
})
console.log(userBooks);











