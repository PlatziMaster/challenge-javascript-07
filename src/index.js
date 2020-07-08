/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let sum = a.length;
  if (a.length != b.length) {
    throw "error: different lengths";
  }
  [...a].forEach((e, index) => {
    if (a[index] == b[index]) {
      sum -= 1;
    }
  });
  return sum;
};

module.exports = hammingDistance;
