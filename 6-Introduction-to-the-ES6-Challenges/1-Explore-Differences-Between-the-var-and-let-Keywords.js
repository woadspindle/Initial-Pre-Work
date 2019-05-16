/*5.1: If you accidently rewrite over an existing variable it won't throw an error in JS. It can make debugging difficult. The keyword 'let' prevents this from happening. It throws an error if you try to change the variable's value in the usual way. */

let catName;
let quote;

function catTalk() {
  "use strict";

catName = "Oliver";
quote = catName + " says Meow!";

}
catTalk();
