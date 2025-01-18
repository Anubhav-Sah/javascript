
//this is normal conversion

console.log(2 > 1);

//what will happen if we compare two different types of data?
console.log(2 > "1");
// it will convert the string file in number


//what will happen if we compare null with number

console.log(null >0);
console.log(null==0);
console.log(null >=0);

//the reason is that an equality check == and comparision >, <, >=, <= are different things in javascript

//Comparision convert null to a number, treating it as 0.
//That's why null > 0 is false, null == 0 is true, null >= 0 is true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//undefined is not equal to 0, and undefined is greater than 0


// console.log("=== is strict equality check, it checks both value and data type")


console.log("2"===2)
