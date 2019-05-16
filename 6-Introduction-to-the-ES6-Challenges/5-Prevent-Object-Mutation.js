/*4.5: To help reinforce 'const' protection you can add Object.freeze. A frozen object can't be added to, deleted or updated without throwing an error. */

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

Object.freeze(MATH_CONSTANTS);
  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
