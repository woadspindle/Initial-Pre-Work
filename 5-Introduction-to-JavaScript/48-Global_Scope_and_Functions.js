/*4.48: The visibility of variables within JS code is called scope. Ones that are declared outside of functionas have global scope, meaning they are accessable throughout the code. */

// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
var myGlobal = 10;

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
