// Dates\

let myDate = new Date();
console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());

console.log(typeof myDate);// this will return object

let mycreatedate = new Date(1999, 11, 12);

console.log(mycreatedate);

let mydateinseconds = Date.now(); // this will return the date in milliseconds
console.log(mydateinseconds);
console.log(mycreatedate.getTime()); // this will return the date in milliseconds
// too get this value in seconds we can divide it by 1000*60
console.log(Math.floor(mycreatedate.getTime() / (1000)));// this will return the time in seconds;
console.log(mycreatedate.toLocaleString('default', { weekday: 'long' }));


//published to github