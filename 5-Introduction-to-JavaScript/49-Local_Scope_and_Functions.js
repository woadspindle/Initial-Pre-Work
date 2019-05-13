/*4.49: Local scope means variables declared inside of a function are only visible within that function. You won't be able to call on the variable outside of the function. */

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 3;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
