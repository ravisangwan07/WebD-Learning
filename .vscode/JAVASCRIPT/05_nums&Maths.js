const score = 400
console.log(score)

const balance = new Number(100.2345)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // it will return the number with the specified decimal places
console.log(balance.toPrecision(4)) // it will return the number with the specified precision

const hundreds = 100000000000000000
console.log(hundreds.toLocaleString('en-IN')) // it will return the number in the specified locale


//++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++=======

console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-5)) // it will return the absolute value of the number
console.log(Math.round(5.6)) // it will return the rounded value of the number
console.log(Math.ceil(5.1)) // it will return the rounded value of the number
console.log(Math.floor(5.9)) // it will return the rounded value of the number
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)) // it will return the minimum value from the list of numbers

console.log(Math.random()) // it will return a random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1) // it will return a random number between 0 and 10

const min = 10
const max = 50

console.log(Math.floor(Math.random()*(max-min+1))+min) // it will return a random number between 10 and 50
