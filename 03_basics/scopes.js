//we can have function inside a function as well
function one(){
    const username = "Arya"

    function two(){
        const website  = "youtube"
        console.log(username);
    }
   //n  console.log(website)//thi sstatement will give error becuase parent function is trying to access the child fuction out of scope.
    two()

}
one()


if(true){
    const username = "Arya"
    if(username === "Arya"){
        const website = " youtube "
        console.log(username+website)

    }
   // console.log(website)// will give error, trying to access out of the scope

}
//console.log(username)will give error, trying to access out of the scope



//*************Interesting****************//
console.log(addone(5))
function addone(num){
    return num+1

}
//addTwo(4)// this will give error because the function it is caliing is decalred in another way, a separate variable is holding that function
const addTwo = function(num){ // this is also called expression, in js, variables are very strong thet can hold json values,functions etc.
    return num + 2
}


//Hoisting : This a method in which we get to know how functions are decalred, where are they stored,their execution context,how js handles variables etc etc.


