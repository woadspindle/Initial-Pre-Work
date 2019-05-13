/*4.63: The greater than or equal to operator(>=) looks at two numbers and if the value of the number on the left is greater than or equal to the one on the right it returns true. If the value is less it returns false. The (>=) operator also performs type conversion. */

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
