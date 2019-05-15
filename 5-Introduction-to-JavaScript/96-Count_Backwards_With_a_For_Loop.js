
/*4.96: A for loop can count backwards if you decrement the final expression. */

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > -1; i -= 2) {
  myArray.push(i);
}
