/*5.14: You can destructure arrays, too. THe difference between that and using the spread operator is that, instead of being able to assign the values to variables, spread unloads the items into a comma seperated list.  */

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
[b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
