/*4.66: A logical and operator (&&) will return true only if the operands to the left and right are true. Two if statements, one nested inside the other, work the same way. */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
