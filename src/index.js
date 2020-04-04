/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    let contador = 0

    if (a.length == b.length) {
      for (let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) contador++     
      }
      return contador
    }else{
      throw new Error('La cadena no es de la misma longitud');
      
    }

    

}
  
  module.exports = hammingDistance;