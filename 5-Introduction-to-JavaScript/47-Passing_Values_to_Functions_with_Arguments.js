/*4.47: A parameter in JS is a placeholder value that get input when the function they live in is called. These parameters become arguments after that input is passed into the function. */

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(get1, get2) {
  console.log(get1 + get2);
}
functionWithArgs(4, 6);
