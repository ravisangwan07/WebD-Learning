// Data types are classified into two types: primtive and non-primtive

// #primitve : 7 types -> Number, string , boolean, symbol, null, undefined, bigint

const score = 100
const scorevalue = 100.34

const isloggedin = false
const outsidetemp = null

let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 342141235345431451345n





// #reference or non-primitve : Array, objects, Functions

const heroes = ["shaktiman", "superman" ,"batman"];

let myobj = {
    name: "ravi",
    age: 23,
    city: "bhiwani"
}

const myFunction = function(){
    console.log("printed hello world using a function");
}

console.log(typeof myobj)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory allocation in javascript
//stack(primtive) and heap(reference/non-primitive)

//example of stack
let myname = "ravi"
let anothername = myname;
anothername = "sangwan"
console.log(myname)
console.log(anothername)

let userone = {
    email : "labdisangwan@gmail.com",
    upi : "berakoni@ybl"
}
let usertwo = userone
usertwo.email = "hehehsangwan@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
