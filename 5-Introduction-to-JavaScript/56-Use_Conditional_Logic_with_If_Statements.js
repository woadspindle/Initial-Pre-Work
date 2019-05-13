/*4.56: If statements use booleans to decide whether to run or not. If the condition is true the code in the curly braces run, if it is false the code does not run.  */

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
    if (wasThatTrue) {
      return "Yes, that was true";
  }
    return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);
