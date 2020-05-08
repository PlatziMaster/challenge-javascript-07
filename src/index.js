/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (stringA, stringB) => {
  let distance = 0;
  if (stringA.length === stringB.length) {
    for (let i = 0; i <= stringA.length; i++) {
      if (stringA[i] !== stringB[i]) {
        distance += 1;
      }
    }
  } else {
    throw 'Strings should have the same length!';
  }

  return distance;
};

module.exports = hammingDistance;
