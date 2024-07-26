// IIFE - Immediately Invoked Function Expression
// IIFE is a function that is executed right after it is created.
// kyu bnaya IIFE - to avoid polluting the global scope

function chai(){
    console.log('Hello');
}
chai();
// we can do this same thing with IIFE

(function(){
    console.log('Hello');
})(); // notice the () at the end of function and ; because it will tell it to end so that we can call another function

( ()=> {
    console.log('Hello from TWO');
} )();
( (name)=> {
    console.log(`Hello from ${name}`);
} )("Ramesh");