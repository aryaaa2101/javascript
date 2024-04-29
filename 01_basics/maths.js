//math expressions
//1. floor
//2. max,min
//3. ceil
//4. random
//etc.


//math.random() this function always returns value between 0 and 1
console.log(Math.random());

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
