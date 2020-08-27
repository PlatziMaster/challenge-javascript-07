/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    let result = 0
    if(a.length === b.length) {
      for(let i = 0; i < a.length; i++) {
        if(a[i].toLowerCase() != b[i].toLowerCase()) {
          result++
        }
      }
      return result
    }else {
      throw new Error('las cadenas tienen diferente longitud')
    }
  }
  
  module.exports = hammingDistance;