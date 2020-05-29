/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let count = 0;

  if (a.length !== b.length) {
    throw new Error('Strings are not the same length');
  }

  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) !== b.charAt(i)) {
      count++;
    }
  }
  return count;
};

module.exports = hammingDistance;
