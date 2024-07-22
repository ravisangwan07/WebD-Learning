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

const obj3 = Object.assign(obj1, obj2);
console.log(obj3); // this will give answer as a single object with all the keys and values of obj1 and obj2

//published to github