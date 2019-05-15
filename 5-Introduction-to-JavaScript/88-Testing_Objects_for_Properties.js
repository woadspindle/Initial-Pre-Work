/*4.88: The method .hasOwnPropertyName can be used to see if a an object has a specified property name. It returns a boolean (true/false) as a response. */


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)==true){
    return myObj[checkProp];
  }
    else{
      return "Not Found";
}
}
// Test your code by modifying these values
checkObj("gift");
