//If you want to check number function then you can directly go to browser console and type const score= new Number(100)
//then you will get all the Number functions in console.

const score = 400

const balance= new Number(100)

console.log(balance)

console.log(balance.toString().length);

console.log(balance.toFixed(2))

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(2));


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//----------------------------------------Maths----------------------------------------

console.log(Math)

console.log(Math.abs(-4));

console.log(Math.round(4.5));

console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const max=10
const min=20

console.log(Math.floor(Math.random()*(max-min+1))+min)