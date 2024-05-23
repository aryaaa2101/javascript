const coding = ["js","ruby","java","python","cpp"]
coding.forEach( function (item){
    console.log(item);
})
//using arrow function
coding.forEach((item)=>{
    console.log(item);

})

//we can use a function in for each
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


//we can use many parameters in for each
//example
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);

})

//here we are decalring an array first and in this array we are defining 3 objects
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "python"
    }

]
//accessing the objects using for each loop
myCoding.forEach((item) =>{
    console.log(item.languageName);
})
