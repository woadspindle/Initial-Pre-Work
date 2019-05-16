/*5.9: Default parameters make functions more flexible. They are triggered when arguments are not defined and a default value is put in its place. */

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

  
