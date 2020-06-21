/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (fistword, secondword) => {
  let hamming = 0;

  if (fistword.length === secondword.length) {
    let iterations = fistword.length;
    for (let i = 0; i < iterations; i++) {
      if (fistword.toLowerCase()[i] !== secondword.toLowerCase()[i]) {
        hamming++;
      }
    }
    return hamming;
  } else {
    throw new parametrosInvalidos();
  }
};

function parametrosInvalidos() {
  message = "no son parametros valiods";
  toString = () => message;
}
module.exports = hammingDistance;
