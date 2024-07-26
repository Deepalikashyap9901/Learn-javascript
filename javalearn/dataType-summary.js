    // Primitive 
    // 7 types : string , Number, Boolearn, null, undefined, Symbol, BigInt

    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(id == anotherId);


const bigNumber = 22345654232345543n


    // Reference (Non Primitive)

    // type :  Array, Objects, Functions 


    const heros = ["saktiman", "naagraj", "doga"];
    
    let myObject ={
        Name: "Deepali",
        Age: 18
    }

    const myFunction = function(){
        console.log("Hello World");
    }

    console.log(typeof(myFunction));