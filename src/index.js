/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    let difference = 0
    if(a.length == b.length){
      for (index = 0; index < a.length; index++) {
        if (a.charAt(index) !== b.charAt(index)) {
          difference++
        }
      }
    } else {
      throw new Error('Strings lengths sizes different')
    }

    return difference
  }
  module.exports = hammingDistance;