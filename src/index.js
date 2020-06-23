/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length !== b.length) throw new Error('Los parametros no son del tamaño');
  let totalHammingDistance = 0;
  const arrayA = a.split('');
  const arrayB = b.split('');

  arrayA.forEach((character, index) => {
    if (character !== arrayB[index]) {
      totalHammingDistance++;
    }
  });

  return totalHammingDistance;
}

module.exports = hammingDistance;