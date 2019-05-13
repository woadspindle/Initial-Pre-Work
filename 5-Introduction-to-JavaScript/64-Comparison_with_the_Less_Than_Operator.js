/*4.64: A less than operator(<) compares two number values and returns true if the one on the left is less than the one on the right. It returns false is the opposite is the case. Also performs type conversion.
 */

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
