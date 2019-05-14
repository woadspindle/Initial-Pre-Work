/*4.73: Switch statements are good to use when you have several possible options. The first matched case value is the one that gets executed until it hits a (break) in the code.  */

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
