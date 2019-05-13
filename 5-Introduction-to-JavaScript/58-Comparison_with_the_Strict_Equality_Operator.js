/*4.58: Strict equality (===) is similar to the equality operator, but strict equality does not use type conversion to try to establish equality between different data types. A 2 and a "2" will only return false in strict equality. */

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
