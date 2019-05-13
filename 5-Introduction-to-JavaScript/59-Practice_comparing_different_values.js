/*4.59: Equality operators will perform type conversion when deciding if a two values are equivalent. Strict equality will not. The typeof operator returns the name of the data type of a value. */

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, 10);
