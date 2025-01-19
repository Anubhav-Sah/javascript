//If you want to check string function then you can directly go to browser console and type const gameName= new String("Anubhav")
//then you will get all the string functions in console.


const name= "Anubhav"
const repoCount = "12"

console.log(`Hello Dosto, My name is ${name} and I have ${repoCount} is my github repository count`)


const gameName = new String('Game of throns')



// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));