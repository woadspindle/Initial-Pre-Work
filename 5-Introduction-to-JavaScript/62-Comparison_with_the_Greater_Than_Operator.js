/*4.62: A greater than operator (>) looks at two numbers and returns true if the value of the number on the left is greater than the one on the right. Conversely, it returns false if that value is less. */

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(99);
