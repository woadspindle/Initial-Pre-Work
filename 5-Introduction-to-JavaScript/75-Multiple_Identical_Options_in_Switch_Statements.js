/*4.75: Leaving the break statement after multiple input statements will allow the code to run for more than one case before exiting the switch statement. */

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
