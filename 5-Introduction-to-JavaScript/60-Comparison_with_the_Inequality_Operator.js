/*4.60: The inequality operator (!=) returns a false where the equality returns a true. Inequality operators also perform type conversion. */

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
