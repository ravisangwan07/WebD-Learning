 const name = "Rabbudi"
 const repocount = 2
  //console.log(name + repocount + "value"); // not a good practice to use + operator to concatenate strings

console.log(`Hello my name is ${name} and my repositry count is ${repocount}`); // we used shift+1 to get the backtick symbol and its not '' or "" its ``

const gameName = new String('pubg mobile');

console.log(gameName[0]);
console.log(gameName._proto_);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('m'));// it will return -1 if the character is not present in the string and retrns the first occurance of the character


const newstring = gameName.substring(0,3); // first value is the starting index and the second value is the ending index
console.log(newstring); // last value of ending index is not included
const anothestring = gameName.slice(5,8); // first value is the starting index and the second value is the ending index
console.log(anothestring);  //if the value is not specified it will take the entire string
const newstring1 = gameName.split(' '); // it will split the string with the character specified in the split method
console.log(newstring1); // it will return an array whose output would be ['pubg','mobile']

const extraspacename = "  pubg mobile   ";
extraspacename.trim(); // it will remove the extra spaces from the string
console.log(extraspacename.trim()); // it will return the string without extra spaces

const websiteaddress = "https://www.google.com/ravi%20sangwan";
console.log(websiteaddress.replace('%20','-')); // it will replace the first occurance of the character
console.log(websiteaddress.includes('ravi')); // it will return true if the character is present in the string
//published to github