/* 5.3: You can use 'const' to declare variables. It has the same features as let but also creates variables that are read only. Once you initialize it with a value you can't change it.*/

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";

  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
