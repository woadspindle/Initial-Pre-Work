/*4.70: If and else if statements are exacuted from the top down.  */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val <10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
