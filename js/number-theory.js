Number.prototype.factorial = function (n) {
  // Check input: 1 <= n <= 20
  if (!Number.isInteger(n)) {
    // send user warning message later
    return 0;
  } else if (n > 20) {
    // warn user number too high
    return 0;
  } else if (n < 0) {
    // warn user number too low
    return 0;
  }
  var res = 1;
  while (res < n) {
    res *= ++res;
  }
  return res;
};
