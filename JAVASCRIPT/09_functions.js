function addTwoNumberes(num1, num2){ //num1 num2 here are parameters, not arguments
    console.log( num1 + num2);
}
function addTwoNumberes(num1, num2){ //num1 num2 here are parameters, not arguments
    return num1 + num2;
}
 //addTwoNumberes(2, "3"); // 2 and 3 here are arguments, not parameters
 const result = addTwoNumberes(2, 3); // this will give answer as 5 and undefined because there is no return statement in function
 console.log(result);

function loginUserMassage( username = "sam"){ // default value can be given to parameter
    if(username===undefined){
        console.log('Please provide a username');
        return;
    }
    return `${username} is logged in`;
 }
 //loginUserMassage('Ravi'); // will not print anything because there is no console.log statement
 console.log(loginUserMassage('Ravi'));
    console.log(loginUserMassage());

 // if no argument is passed in function then it will take undefined as value

 //********************************************************************************* *//
 function CalculateCartValues(...num1){ // this is called rest operator
    return num1;
 }
 function CalculateCartValues(val1, val2, ...num1){ // spread operator is used to pass multiple values in function
    return val1+val2+num1;
 }
    console.log(CalculateCartValues(1,2,3,4,5,6,7,8,9,10)); // this will give answer as array of all the values passed in function


    const user = {
        username : 'Ravi',
        price : 999
    }

    function handleObject(anyuser){
        console.log(`username is ${anyuser.username} and price is ${anyuser.price}`);
    }
    handleObject(user); // this will give answer as username is Ravi and price is 999