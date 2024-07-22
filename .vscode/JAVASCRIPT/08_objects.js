//Object.create(null); // this method is called constructor method and single object is created

//object literals method

const mysym = Symbol('key1 '); //symbol is a primitive datatype and it is used to create unique keys in object

const jsuser = { // it design key values pairs and key is taken as string
    name: 'Ravi',
    "full name": 'Ravi Sangwan', //if key has space then it should be in double quotes
    [mysym] : 'value for symbol key', // to use a symbol as a key in object , this is the syntax
    age : 23,
    location: 'Bangalore',
    email: 'ravi00sangwan@gmail.com',
    isloggedin : false,
    lastloginDays : ['Monday', 'Tuesday', 'Wednesday']

 }  //object literal method

 console.log(jsuser.email);
 console.log(jsuser['email']);
 console.log(jsuser['full name']); // if key has space then it cant be called with a  (.) dot operator and only sqauare brackets can be used
 console.log(typeof jsuser[mysym]); // to call a symbol key in object

 jsuser.email = "sanggwanrabu07@gmail.com"; // to update the value of key in object
 //Object.freeze(jsuser); // to freeze the object and no further changes can be made in object
 console.log(jsuser);

 jsuser.greeting = function(){
     console.log('Hello, I am ' + this.name);
 } // to add a method in object
 console.log(jsuser.greeting());

 //published to github