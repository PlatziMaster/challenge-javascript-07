/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let result = 0
    if (a.length == b.length) {
      let i = 0
      while ( i < a.length ) {
          if (a[i].toLowerCase() != b[i].toLowerCase()) {
              result++
          }
          i++;
      }
        return result
    } else {
        throw new Error('Strings do not have equal length')
    }
}
  
module.exports = hammingDistance;