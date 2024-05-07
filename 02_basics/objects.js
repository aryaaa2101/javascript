const JsUser = {
    name : "Arya",
    age : 22,
    location : "Bangalore",
    email : "arya2101@gmail.com",
    lastLoggedIn : ["Monday","Saturday"],
    isLoggedIn : false

}
console.log(JsUser.email)
//another way of accessing object
console.log(JsUser["email"]);
console.log(JsUser["isLoggedIn"])

//to override values in objects
JsUser.email = "arya21@google.com"
//in order to lock values in objects we use freeze
Object.freeze(JsUser)
JsUser.age = 12;// this won't affect because the the values are locked using freeze

console.log(JsUser);

