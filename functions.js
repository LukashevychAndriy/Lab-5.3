function f(x) {
  if (Math.abs(x) >= 1) {
    return (Math.sin(x) + 1) / (Math.sin(x) + Math.cos(x));
  } else if (x === 0) {
    return 0;
  } else {
    let a = x;
    let S = a;
    let i = 0;

    do {
      i++;

      let R = (Math.pow(x, 2 * i + 1) / (factorial(2 * i + 1))) / (Math.pow(x, 2 * (i - 1) + 1) / (factorial(2 * (i - 1) + 1)));

      a *= R;
      S += a;

    } while (i < 8);
    return S;
  }
}

module.exports = {f};
