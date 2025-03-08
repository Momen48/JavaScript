const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);

function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();
