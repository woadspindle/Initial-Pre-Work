/*4.74: The default statement in a switch statement can be used for situations with no matching cases. It acts like the final else in an if/else statement. */

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 'a':
      return "apple";
      break;
    case 'b':
      return "bird";
      break;
    case 'c':
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
