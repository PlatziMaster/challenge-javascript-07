/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

function distance(a) {
  const lengthA = a.length
  return function hamming(b) {
    let total = 0
    for (let i = 0; i < lengthA; i++) {
      if (a[i] !== b[i]) {
        total++
      }
    }
    return total
  }
}

const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    throw new Error('Strings should be same lengths')
  }
  const distanceHamming = distance(a)
  return distanceHamming(b)
}

module.exports = hammingDistance;