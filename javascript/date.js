//Dates


let myDate = new Date()

console.log(myDate);


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2023,0,23)
let myCreatedDate2 = new Date("01-14-2024")

console.log(myCreatedDate.toDateString());

console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now

console.log(myTimeStamp())
console.log(myCreatedDate2.getTime())

console.log(myTimeStamp()>myCreatedDate2.getTime())


//if we want to convert to second

console.log(Math.floor(Date.now()/1000));




//if we want to take out specific thing like date, month,sec etc



let newDate= new Date()

console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());


newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
})


