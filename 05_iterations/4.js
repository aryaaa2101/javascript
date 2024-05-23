const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
//we have seen that we can not use for of loop with objects so we have for in loop

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

//using for in loop in arrays
const programming = ["js","rb","cpp","java"]
for (const key in programming) {
   //console.log(key)

//here it will only print the keys and not the values
//to print the values we write
console.log(programming[key])
}


//using for in loop in maps

const map = new Map();
map.set('IN',"INDIA")
map.set('US',"United states of America")
map.set('FR',"France")
map.set('IN',"INDIA")
for (const key in map) {
    console.log(key)
}
//there will be no o/p because in for in map not iterable