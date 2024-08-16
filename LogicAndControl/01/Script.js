if(true){
    console.log(`This is true`);
}

let a = 10;
let b = '10';

if(a==b){
    console.log(`${a} is equal ${b}, though later is String`);
}

if(a === b){
    console.log(`${a} is equal ${b}, though b is String a is int`);
}

const post1  =  [];
console.log(post1[0]);

const post3  =  ['Post 3','Post 2'];
console.log(post3[0]);

const post2  =  ['Post 1','Post 2'];
post2.length>0 && console.log(post2[0]);

// ternary operator  

// condition ? solution 1 : solution 2

const age = 21;

age>=18 ? console.log("Adult") : console.log("kid");;