//local scope

var message = "Global message";

function showMessage() {
  var message = "Local message"; // This "shadows" the global variable
  console.log(message); // Accessing the local variable
}

showMessage();
console.log(message);

//Block Scope
function myFunction() {
    if (true) {
      var localVariable = "I'm in block scope";
      let blockVariable = "I'm also in block scope";
      const blkVariable = "I'm also in block scope too";
    }
    console.log(localVariable); // Accessible
 //   console.log(blockVariable); // Error: blockVariable is not defined
 //   console.log(blkVariable);
    
  }
  myFunction();

  function checkCondition() {
    let result = "Before condition";
    if (true) {
      let result = "Inside condition"; // Block-scoped variable
    }
    console.log(result); // "Before condition" from the outer scope
  }
  checkCondition()