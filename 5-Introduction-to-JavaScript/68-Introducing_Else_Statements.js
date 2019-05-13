/*4.68: When you add an else statement to an if statement you can extend the code to include an alternative block of code if the if statement condition is false. */

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
