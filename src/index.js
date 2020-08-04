/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length === b.length) {
    let distancia = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) != b.charAt(i)) {
        distancia++;
      }
    }
    return distancia;
  } else {
    throw new Error(`Los datos no coinciden`);
  }
};

module.exports = hammingDistance;
