/*
var globalVariable = "I'm global";

function outerFunction() {
  var outerVariable = "I'm in outer scope";

  function innerFunction() {
    var innerVariable = "I'm in inner scope";
    console.log(innerVariable); // Access innerVariable
    console.log(outerVariable); // Access outerVariable
    console.log(globalVariable); // Access globalVariable
  }

  innerFunction();
}

*/
outerFunction();

// lexical scope {where it is deaclared , not where is called}

var a = "I'm global";

function firstFunction() {
  var a = "I'm in firstFunction";

  function secondFunction() {
    console.log(a); // Accesses a from firstFunction, not the global a
  }

  secondFunction();
}

firstFunction();