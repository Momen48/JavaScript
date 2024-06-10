function addUpto(n){
    let total = 0;
    for ( let i=1; i<=n; i++){
        total += i;
    }
    return total;
}
console.log(addUpto(6));

var t1 = performance.now();
addUpto(1000000);
var t2 = performance.now();
console.log(`Time elasped S-1 : ${(t2-t1)/1000} seconds.`);

// process 2
function Add2(n){
    return n*(n+1) / 2; 
}
var time=performance.now();
Add2(1000000);
var time2 = performance.now();
console.log(`time elasped S-2 : ${(time2-time)/1000} seconds`);