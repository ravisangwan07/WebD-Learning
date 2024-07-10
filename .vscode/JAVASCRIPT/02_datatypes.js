"use strict"; // this was used to declare all the codes to work as per new javascript versions, however it is now automatically diagnosed

//alert(3+3) // this command cant work here, but it will work in the browser because there engine is in the browser and not document

let name = "Ravi";
let age = 24;
let isalive = true;

//types of datatypes = number(int, bigint) , string ,boolean
// *important* null -> standalone value , undefined -> when value is not declared
// symbol -> (mostly used in react ) where we have to identify ye component unique hai ya nhi

//object 

// console.log(typeof 24);
// console.log(typeof isalive);
// console.log(typeof null) // iska output object aata hai to it can be called as language error or we can say null is a type of object
// console.log(typeof undefined) // iska output undefined hi aayega

let input = 33

console.log(typeof input)

let inputA = "23abc"
console.log(typeof inputA)
// now as input is not a number here so it will output it as string 

//to convert it into a number we can do as follow
input = "33"

// Number(data) is used to convert a string to number
// "33 " -> 33
//"33abc" -> NaN
// null   ->0
// true/false    -> 1/0
// undefined    -> undefined

// toString is used to convert to a string format

// Boolean is used to convert to boolean values e.g. 1->true, 0->False, "" ->false "anything"->true


let convertedTONum = Number(inputA) // this will return NaN which means not a number , it converted it to a number but it is not correct so it shows NaN
let convertedTONumB = Number(input) // this will return string "33" to number 33

console.log(convertedTONum)
console.log(convertedTONumB)

//for null it convert it to 0
let rabbi = null
let convertrabbi = Number(rabbi);
console.log(convertrabbi) // this will return rabbi = 0;

// similarly if rabbi= undefined, it will return it as undefined and not 0 or other random number
// similarly if it is true then it output is 1 and if false it output is 0


//type of comparison operators
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// what if we use different data types to compare
// console.log("2" > 1); // it will convert the string into a number and then compare and return the result
// console.log("02" > 1);

//console.log(null > 0); // it will convert null into 0 and compare and return false
//console.log(null == 0); // it is not a comparison operator and called as equality check and it doesnt convert null into 0 and returns false
//console.log(null >= 0); // it also convert null into 0 and compares and return true and 0>= 0 si true


console.log(undefined == 0); // undefined is not connverted into anything in any type of comparison or check and hence it will rturn an output of false
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); // this is triple check and it checks for values as well as data types are equal or not and return the value if not

