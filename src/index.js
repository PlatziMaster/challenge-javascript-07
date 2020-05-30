/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let counter = 0;
  let arrayA = a.split("");
  let arrayB = b.split("");

  if (a === b) {
    return 0;
  } else if (a.length !== b.length) {
    throw "error";
  } else {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) {
        counter++;
      }
    }
  }

  return counter;
};

module.exports = hammingDistance;
