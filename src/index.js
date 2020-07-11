/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    throw new Error();
  }

  let difference = 0;
  for (let index = 0; index <= a.length; index++) {
    if (a.charAt(index) !== b.charAt(index)) {
      difference++;
    }
  }

  return difference;
};

module.exports = hammingDistance;
