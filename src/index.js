/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    throw new Error('The length of the strings should be the same.')
  }

  const distance = a.split('').filter((letter, index) => {
    if (b[index] !== letter) {
      return true
    }
    return false
  })

  return distance.length

}

module.exports = hammingDistance;