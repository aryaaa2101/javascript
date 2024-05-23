const arr = [1,2,3,4]
//for of loop
for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//Maps
const map = new Map();
map.set('IN',"INDIA")
map.set('US',"United states of America")
map.set('FR',"France")
map.set('IN',"INDIA")

console.log(map)
//map is unique and therefore INDIA wont't be printed two times
//using loop in maps

for (const [key,value] of map) {
    console.log(key, ':-' , value);
    
}


//using for of loop in objects
const myObject = {
    game1 : 'NFS',
    game2 : 'Spidername'

}
// for (const [key,value] of myObject) {
//     console.log(key, ':-' , value);
// }
//Now this will give error as myObject is not iterable