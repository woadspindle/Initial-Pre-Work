/*4.50: If you use the the same name for a variables with global scope and another one that has local scope, the one with local scope will override the one with global scope.*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
