// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//syntax of switch case

const month = 3;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        //break;
        // ek baar condition true ho gayi toh baaki ki conditions check nahi hoti lekin agar break nhi lgayenge to baaki sari conditions bhi check hogi
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    
    default:
        console.log('Invalid month');
        break;
}

//******************turely and falsy values */
// falsy values are : false , 0,-0,BigInt(0), '', null, undefined, NaN

//truthy values are : true, 1, -1, '0', ' ', [], {}, function(){}, BigInt(1)


//nullish coalescing operator (??) - it is used to check if the value is null or undefined
let username = null;
username = 'Ravo' ?? 'Sam'; // this will give answer as Ravo because username is not null or undefined
console.log(username);

//ternary operator - it is used to check the condition and return the value based on the condition
let age = 18;
let message = age >= 18 ? 'You can vote' : 'You cannot vote'; // this will give answer as You can vote
console.log(message);