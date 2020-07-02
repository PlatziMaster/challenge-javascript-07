/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length === b.length) {
    let distance = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i]) distance++
    }
    return distance
  }
  
  throw new Error ('Strings of different lenght')
}
  
  module.exports = hammingDistance;