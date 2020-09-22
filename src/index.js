/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let diferent = 0;

  if (a.length !== b.length) {
    throw "Esta intentando comparar strings de diferente tamaño";
  }

  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) !== b.charAt(i)) {
      diferent += 1;
    }
  }

  return diferent;
};

module.exports = hammingDistance;
