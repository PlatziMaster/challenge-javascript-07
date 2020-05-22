/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let number = 0;
  if (a.length !== b.length) {
    throw new Error("Las cadenas deben tener la misma longitud");
  } else {
    for (let i = 0; i < a.length; i++) {
      a[i] !== b[i] ? number++ : number;
    }
  }

  return number;
};

module.exports = hammingDistance;
