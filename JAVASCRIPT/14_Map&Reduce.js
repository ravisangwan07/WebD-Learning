const coding = ['Javascript', 'Python', 'Ruby', 'C++', 'Java', 'Swift'];

// const values = coding.forEach(function (item){
//     //console.log(item);
//     return item;
// });

// console.log(values); // this will give answer as undefined because forEach does not return anything

const mynum = [1,2,3,4,5,6,7,8,9,10];

//const newnums = mynum.filter( (num) => num>4); //this filter function return values ,(not like foreach loop);

const newnums = mynum.filter( (num) => {
    return num>4; // here we have to return values because this is not a implicit return;
})

console.log(newnums); // this will give answer as [5,6,7,8,9,10]

const books = [
    {
        title : 'Book1',
        genre : 'Horror',
        publish : 2000,
        edition : 1
    },
    {
        title : 'Book2',
        genre : 'Fiction',
        publish : 2005,
        edition : 2
    },
    {
        title : 'Book3',
        genre : 'Horror',
        publish : 2010,
        edition : 3
    },
    {
        title : 'Book4',
        genre : 'Fiction',
        publish : 2015,
        edition : 4
    },
    {
        title : 'Book5',
        genre : 'Horror',
        publish : 2020,
        edition : 5
    },
    {
        title : 'Book6',
        genre : 'Fiction',
        publish : 2025,
        edition : 6
    },
    {
        title : 'Book7',
        genre : 'Horror',
        publish : 2030,
        edition : 7
    },
    {
        title : 'Book8',
        genre : 'Fiction',
        publish : 2035,
        edition : 8
    },
    {
        title : 'Book9',
        genre : 'Horror',
        publish : 2040,
        edition : 9
    },
    {
        title : 'Book10',
        genre : 'Fiction',
        publish : 2045,
        edition : 10
    }
]

const userbook = books.filter( (bk) => bk.genre === 'Horror');
console.log(userbook); 


const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNUmbers = myNumbers.map( (num) => num +10);
console.log(newNUmbers); // this will give answer as [11,12,13,14,15,16,17,18,19,20]


//chaining of map and filter
const newNo = myNumbers.map( (num) => num*10).map( (num) => num+1).filter( (num) => num>50);
console.log(newNo); // this will give answer as [51,61,71,81,91,101]

const mytotal = newNo.reduce( (total, num) => total + num, 0);
console.log(mytotal); // this will give answer as 456
