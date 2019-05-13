/*4.52: If you leave a return statement out of a function it will process the code within the function but the return value will be undefined. */

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive(){
  sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();
