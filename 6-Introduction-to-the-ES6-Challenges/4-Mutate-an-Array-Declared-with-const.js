/*4.4: Const is a good choice for variable assignment if you know you won't want it to change later. Otherwise 'let' is a better choice. But, objects like arrays and functions that are assigned to a variable with 'const' are still mutable. The 'const' only blocks reassigning the variable name. */

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // change code above this line
}
editInPlace();
