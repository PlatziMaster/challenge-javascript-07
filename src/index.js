/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let diferencia = 0


  if (a.length !== b.length){
    throw new Error('Parametros deben tener la misma longitud')
  }
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i)) {
        diferencia++
      }
    }
  return diferencia
  }  

  module.exports = hammingDistance;