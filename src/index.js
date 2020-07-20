/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  aList = a.split("");
  bList = b.split("");
  count = 0;

  if (aList.length !== bList.length) {
    throw new Error("Different lengths");
  }

  for (i = 0; i < aList.length; i++) {
    if (aList[i] !== bList[i]) {
      count++;
    }
  }
  return count;
};

module.exports = hammingDistance;
