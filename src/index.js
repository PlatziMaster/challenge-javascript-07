/**
 * @param {string} stringA
 * @param {string} stringB
 * @return {number}
 */

const hammingDistance = (stringA, stringB) => {
  if (stringA.length != stringB.length) {
    throw new Error('The stings must have the same length');
  }

  let distance = 0;

  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i]) {
      distance += 1;
    }
  }

  return distance;
};

module.exports = hammingDistance;
