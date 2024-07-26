//for loop synta
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//while loop syntax
// while (condition) {
    
// }
//do while loop syntax
// do {
//    // code block
// } while (condition);

// for of loop syntax
// for (const iterator of object) {
//     // code block
// }
 let arr1 = [1,2,3,4,5,6,7,8,9,10];
for (const num of arr1) {
    //console.log(num);
}

// for in loop syntax
for (const num in arr1) {
    if (Object.hasOwnProperty.call(arr1, num)) {
        const element = arr1[num];
        //console.log(element);
    }
}

// map function
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('FR', 'France');

console.log(map);

for (const [key, value] of map) {
    console.log(key);
    
}

// const myObject  = {
//     'game1' : 'Cricket',
//     'game2' : 'Football'
// }
// maps are itrerable but objects are not iterable
//  for (const [key,value] of myObject) {
//     //console.log(key);
//  }

const myobject = {
    js : 'Javascript',
    cpp : 'C++',
    py : 'Python',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myobject) {
   // console.log(myobject[key]); // this is for in loop
}
//using for in loop in object gives key values but using for in loop in array gives index values
// also maps can not be iterated using for in loop


const coding = ['Javascript', 'Python', 'Ruby', 'C++', 'Java', 'Swift'];

coding.forEach(function (item){
    console.log(item);
})
//using arrow function
coding.forEach((item) => {
    console.log(item);
}) 