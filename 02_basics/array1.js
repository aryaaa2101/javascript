const myArr = [0,1,2,3,4]
console.log(myArr[1]);
const myArr1 = ["Arya",13,21]
console.log(myArr1);
//another way of declaring an array
const myArr2 = new Array(23, "Arya", "Accenture")
console.log(myArr2);
//methods in array

myArr2.push("Shukla")//it pushes a new element at the last
console.log(myArr2);

myArr.pop()//it pops out the last element
console.log(myArr)

console.log(myArr.includes(10))//returns a boolean value

//to find out the index
console.log(myArr.indexOf(3))
console.log(myArr.indexOf(9))//9 is not there in myArr so it returns -1

const newArr = myArr.join()
console.log(newArr);
console.log(typeof(newArr));


//slice , splice

//slice: it doesn't include the last range and do not the original array as well

//splice: it include the last range and changes the original array

//slice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr)

//splice
console.log("A ", myArr)
const mynt2 = myArr.splice(1,3)
console.log(mynt2)
console.log("B ", myArr)



