//Immediately invoed fucntion expression (IIFE)
//The problem caused by the pollution of global scope we use IIFE
// We use ()() in IIFE
//First () is for fucntion definiton and the second () is for execution 

(function chai(){
    //named IIFE
    console.log("DB connected");
})();
// We need to put semicolon in order to end the context


//Arrow function in IIFE
(()=>{
    //unnamed IIFE
    console.log("DB connected two")

})();

//now if we want to pass variables
((name)=>{
    //IIFE with parameters
    console.log(`DB connected ${name}`)
})("Arya")