const course  = {
    coursename : "js",
    courseInstructor : "Arya",
    coursePrice : 999

}
//in order to perform object destructuring 
const{courseInstructor: instructor} = course
//here the identifier before colon is the property and the identifier after the colon is the variable 
//object destructuring is done to assign the properties of an object to a variable

console.log(instructor)



