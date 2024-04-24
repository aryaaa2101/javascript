console.log("2">1);
console.log("02">1);

console.log(null >0)
console.log(null==0);
console.log(null >= 0);
 
//The reason is that an equality check and comparison>, <,>=,<= work differently.
//comparison convert null to a number treating it as 0.
//That's why null>=0 is true and null>0 is false

//=== this opeartor follows strict check which means it also checks the data type unlike == , it converts in line 6

console.log("2"===2);