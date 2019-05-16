/*5.10: Rest operators allow functions to take variable numbers of arguments They get stored in a array to be called on later.*/

const sum = (function() {
  "use strict";
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
