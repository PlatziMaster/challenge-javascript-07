/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let difference = 0;
  if (a.length != b.length) {
    throw new Error("The strings must be of the same length");
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        difference += 1;
      }
    }
  }
  return difference;
};

module.exports = hammingDistance;
