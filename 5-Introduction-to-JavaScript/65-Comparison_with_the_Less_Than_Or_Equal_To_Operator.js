/*4.65: A less than or equal to operator(<=) looks at two numbers and if the value of the one on the left is less than or equal to the one on the right it returns true. If the value is greater it returns false. Also converts types. */

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
