const email = "arya@email.com"
// const email = []
// const email = ""
if(email){
    console.log("Received")
}
else{
    console.log("Error")
}
//There are these truthy and falsey values in JS
//falsey values are given below
//false
//0
//-0
//BigInt 0n
//""
//null
//undefined
//Nan

//truthy values are
//"0"
//'false'
//" "
//[]
//{}
//function(){}



//Nullish Coalescing Operator (??) : null undefined
//THis operator gives the first value as o/p
 val1 = 5 ??10
 console.log(val1)
 val2 = null ?? 10
 console.log(val2)


 //Ternary Operator
  //condition?true:false
  const iceTeaPrice = 100
  iceTeaPrice<=80 ? console.log("Less than 80"):console.log("More than 80")