/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    throw new Error('different lengths')
  }

  let hammingDistance = 0;

  for (i = 0; i < a.length; i++) {
    if(a.charAt(i) !== b.charAt(i)) {
      hammingDistance++;
    }
  }

  return hammingDistance;
}

module.exports = hammingDistance;