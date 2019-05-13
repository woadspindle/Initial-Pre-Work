/*4.61: Strict inequalty(!==) operates the same way by not performing type conversion but returning false where strict equality return true and true where it would return false. */

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
