/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.split('').length !== b.split('').length) throw new Error('Error');
  let distance = 0;
  a.split('').forEach((char, idx) => {
    if (char !== b.split('')[idx]) {
      distance++;
    }
  });
  return distance;
}

module.exports = hammingDistance;