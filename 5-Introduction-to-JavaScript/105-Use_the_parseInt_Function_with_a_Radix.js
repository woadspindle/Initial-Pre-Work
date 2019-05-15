/*4.105: Radix can be anumber between 2 and 36. You usew it with parseInt() to spacify the base num,ber in the string. */

function convertToInteger(str) {
  var b = 2;
  return parseInt(str, b);
}

convertToInteger("10011");
