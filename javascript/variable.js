//const keyword is use to create constant

const accountId = 262800


/*let and var both are use to create variable but let is block scope and var is global scope 
so that why var is vary rearly used in programming*/

let accountEmail = "anupsah2005@gmail.com"

var accountPasswod = "Anubhav789456"
//var is global scope so that why it can be access from any where in the program


//we can declare variable without using let and var also we can declare variable without using const also
//but it is unsafe to use it
accountCity = "Madhyamgram"


//semicolon is not important in javascript
//but it is good practice to use it
//if we want to print unassign variable then it will give us undefined
let accountState;

console.log(accountEmail)

console.table([accountId, accountEmail,accountPasswod,accountCity,accountState])