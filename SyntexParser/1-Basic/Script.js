//rest operator for indefinte argument
/*
function sum(...number){
    let sum=0;
    for (let i of number){
        sum+=i;
    }
    return sum;
}

console.log(sum(1,2));
console.log(sum(1,2,4));
console.log(sum(1,2,3,4));
*/

//default   parameter

// function register(name='Bot'){
//     return name +  ` is registered`;
// }
// console.log(register('John'));

// function userLogin(user){
//     return `the user ${user.name} has logged in with user id: ${user.id} `;
// }

// const detail = {
//     id: 1,
//     name: 'Don'
// }

// console.log(userLogin(detail));

// random number from an array

function randomNum(...arr){
    const index = Math.floor(Math.random()* arr.length);
    const item= arr[index];
    return console.log(item);
    
}
randomNum(1,2,3,4,5,6,7,8,9);
