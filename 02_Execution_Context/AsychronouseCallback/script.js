function waitThreeSceond() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("Function is fisnised");
}

function clickHandler() {
  console.log("Click Event");
}
// listen for the Click event
document.addEventListener("click", clickHandler);
 
waitThreeSceond();
console.log("Finished execution");
