//Arrays

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = ["Rahul", "Rohit", "Raj", "Ravi", "Rahul"];
const myarr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArr[0]);

//Array Methods
myarr.push(11);
console.log(myarr);
myarr.pop();    // removes the last element from the array
myarr.unshift(0); // adds the element at the start of the array
console.log(myarr);

console.log(myarr.indexOf(5)); // returns the index of the element and if element is not present it returns -1

console.log(myarr.includes(5)); // returns true if the element is present in the array    

const arrtemp = myarr.join(); // converts the array into string
console.log(typeof arrtemp);

//slice and splice

console.log("A",myarr);
const arr2 = myarr.slice(1, 4); // this will return the elements from index 1 to 4
console.log(arr2);
console.log("B",myarr);

const myfr1 = myarr.splice(1, 4); // this will remove the elements from index 1 to 4
console.log("C",myarr); //important -> this will remove the elements from the original array
console.log(myfr1);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
const marvelheroes = ["Ironman", "Thor", "Hulk", "Spiderman", "Captain America"];
 const dcHeroes = ["Batman", "Superman", "Wondeer_women", "Flash", "Green Lantern"];
 //marvelheroes.push(dcHeroes);
 //console.log(marvelheroes); // it creates problem as it adds the array into an array leading into nested arrays
 //console.log(marvelheroes[5][1]); // to access the element we have to use the index of the array and then the index of the element

//  const allheroes = marvelheroes.concat(dcHeroes); // this will concatenate the two arrays
//  console.log(allheroes); // this will not change the original array

const newheroes = [...marvelheroes, ...dcHeroes]; // this will concatenate the two arrays // this is called spread operator
console.log(newheroes);

const another_array = [2,4,6,[8,10,[1,5,2],12],12,14];
const just_another_array = another_array.flat(Infinity); // this will remove the nested arrays
console.log(just_another_array);

console.log(Array.isArray("Rahul")); // this will return false
const array2 = [];
console.log(Array.from("Rahul")); // this will return the array of the string
//important//---- down
console.log(Array.from({name : "Rahul"} )); // this will return empty array because inside it is a object and not a string

let score1 = 10;
let score2 = 20;
let score3 = 30;
console.log(Array.of(score1, score2, score3)); // this will return the array of the elements
