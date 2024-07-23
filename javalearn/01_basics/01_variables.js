const acountId = "12131"
let acountEmail = "Deepali@gmail.com"
var acountPassword = "12345"
acountCity = "Bijnor"
let acountState;

// acountId = 2 //
 console.log(acountId);


/*
prefer not use var
because of issue in block and scope and functional scope 
*/

acountEmail = "Riya@gmail.com"
acountPassword = "345321"
acountCity = "Noida"

// console.log(acountId); // 

console.table([acountEmail , acountId , acountPassword ,acountCity,  acountState])