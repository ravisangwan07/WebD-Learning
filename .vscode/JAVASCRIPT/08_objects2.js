//singleton method

const tinderuser = new Object(); // this method is called constructor method and single object is created
tinderuser.id = 1;
tinderuser.name = 'Ravi';
tinderuser.isloggedin = false;

console.log(tinderuser);

const regularuser = {
    email : 'collage@ymca.in',
    fullname : {
        firstname : 'Ravi',
        lastname : 'Sangwan'
    },
    city : 'Bangalore',
}
console.log(regularuser.fullname.firstname);

//merging   two objects
const obj1 = {
    1: 'one',
    2: 'two',
}
const obj2 = {
    3: 'three',
    4: 'four',
}
//const obj3 = {obj1, obj2};
//console.log(obj3); // this will give answer as a nested object, object inside object

const obj3 = Object.assign({}, obj1, obj2); // first one is target i.e. empty object and rest are sources

const obj4 = {...obj1, ...obj2}; // this is the spread operator method
console.log(obj3); // this will give answer as a single object with all the keys and values of obj1 and obj2

console.log(Object.keys(obj3)); // this will give all the keys of object 
console.log(Object.values(obj3)); // this will give all the values of object
console.log(Object.entries(obj3)); // this will give all the keys and values of object
console.log(obj3.hasOwnProperty('1')); // this will check if the key is present in object or not
//published to github


const course = {
    coursename  : 'Javascript',
    price : 999,
    courseinstructor : 'Ravi Sangwan',
}

const {courseinstructor} = course; // this is called destructuring method
console.log(courseinstructor); 