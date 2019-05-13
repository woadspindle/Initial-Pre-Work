/*4.35: Using concatenation to create a MadLibs style sentence. */

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result+= "The "+myAdjective+" "+myNoun+" didn't "+myVerb+" "+myAdverb+" enough.";

    // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
