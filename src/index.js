/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length == b.length) {
    let distance = 0;
    for (let index = 0; index < a.length; index++) {
      // The charAt() method returns the character at the specified index in a string.
      if (a.charAt(index) != b.charAt(index)) distance++;
    }
    return distance;
  } else {
    throw new Error("Las palabras o cadenas deben ser de la misma longitud.");
  }
};

module.exports = hammingDistance;
