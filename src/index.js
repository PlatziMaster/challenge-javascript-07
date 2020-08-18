/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {

  let count = 0

  if (a.length !== b.length){   // Exepción para palabras con diferente longitud
    throw new Error('Los parametros deben tener la misma longitud.')
  }

  for (let i = 0; i < a.length; i++){
    if (a.charAt(i) !== b.charAt(i)){   // Compara las cadenas y suma por cada caracter diferente.
      count++
    }
  }
  
  return count
    
}
  
  module.exports = hammingDistance;