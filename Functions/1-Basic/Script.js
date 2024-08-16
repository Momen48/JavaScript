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

function register(name='Bot'){
    return name +  ` is registered`;
}
console.log(register('John'));
