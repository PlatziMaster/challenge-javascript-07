/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let difference = 0

  if(a.length != b.length) throw new Error('Those parameters do not have the same length')
  for (let i = 0; i < a.length; i++) {
    if(a.charAt(i) !== b.charAt(i)){
      difference++
    }
  }
  return difference;
}

module.exports = hammingDistance;