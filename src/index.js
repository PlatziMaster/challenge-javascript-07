/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let count = 0;
  if (a.length === b.length) {
    for (let i = 0; i <= a.length; i++) {
      if (a[i] !== b[i]) count += 1;
    }
  } else {
    throw 'Strings should have the same length!';
  }

  return count;
};

module.exports = hammingDistance;
