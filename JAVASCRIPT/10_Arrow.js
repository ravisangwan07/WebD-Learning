
const user = {
    username : 'Ravi',
    price : 999,

    welcomemessage  : function(){
        console.log(`Welcome ${this.username} to the website`);
        console.log(this);
       // return `Welcome ${this.username}`;
    }
}
//user.welcomemessage();
user.username = 'Sam';

//console.log(this);  // thiswill print {} because this is refereing to an empty object 

// console.log(
//     user.welcomemessage()
// );

// function chai (){
//     console.log(this);
// }
// chai(); 
// *** imp*** here we learned that this can be used in object but not in function
// const arrowFunction = () => {
//     console.log(this); // This cant be used in arrow function
// }
// arrowFunction(); // this will print {} because this is refereing to an empty object

//syntax for arrow function is 
//                             type of function name = (parameters) => {function body}

const addTwo = (num1, num2) => {
    return num1+num2;
}
//we can do this same thing with implicit return i.e. const addTwo = (num1, num2) => num1+num2;  //(without return keyword and curly braces)
// how to return an object in arrow function. i.e. const addTwo - (num1, num2) => ({username : 'Ravi'});
console.log(addTwo(2,3)); // this will give answer as 5