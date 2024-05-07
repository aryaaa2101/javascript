//if we want to join two arrays we have:
//spread , concat
 const marvel_heroes = ["thor","ironman","spiderman"]
 const dc_heroes = ["batman","superman","flash"]
const allheroes =  marvel_heroes.concat(dc_heroes)
//  console.log(allheroes)
 //concat operation when we have only two arrays
 //for more than two arrays we spread operator

 const all_newHeroes = [...marvel_heroes,...dc_heroes]//this ... is a spread operator mostly used operator
//  console.log(all_newHeroes);



 const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
 const usable_array = another_array.flat(Infinity)
 console.log(usable_array)


 //some other useful methods of array

 console.log(Array.isArray("Arya"))// this tells whether the given parameter is an array or not
 console.log(Array.from("Arya"))// this makes an array out of the given parameter
 console.log(Array.from({name:"Arya"}))//this paramter is an object,it returns an empty because it is not specified that wheter we need to make array of the keys or the values
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))