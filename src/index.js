/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    if(a.length == b.length) {
      let distancia = 0;
      for (let index = 0; index < a.length; index++) {
        if(a.charAt(index) != b.charAt(index)) distancia++;
      }
      return distancia;
    } else {
      throw new Error("Los arreglos deben ser de la misma longitud.");
    }
  }

  module.exports = hammingDistance;