/*4.107: Chained conditional operators can be used to write a more streamlined version of an if/else statement. */

function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}

checkSign(10);
