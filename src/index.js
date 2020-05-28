/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    throw Error;
  }

  const serieA = a.split('');
  const serieB = b.split('');
  let count = 0;

  for (let i = 0; i <= a.length; i++) {
    serieA[i] !== serieB[i] ? count++ : null;
  }
  return count;
}

module.exports = hammingDistance;