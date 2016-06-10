// Extend functionality of Number object

var getFactorsArray = function (n) {
  var factors = [], f = 1;
  do {
    if (n %f == 0) factors.push(f);
    f++;
  } while (f <= n);
  return factors;
};

var factorial = function (n) {
  // Check input: 1 <= n <= 20
  if (!Number.isInteger(n)) {
    // send user warning message
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
