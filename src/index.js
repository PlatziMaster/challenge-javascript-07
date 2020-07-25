/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let count = 0
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count ++
      }
    }
    return count
  } else {
    throw new Error()
  } 
}
  
  module.exports = hammingDistance;