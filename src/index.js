/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  var number = 0
  if (a.length === b.length) {
    for (i = 0; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i))
        number++
    }
    return number
  } else {
    throw new Error('strings given don´t have the same length')
  }
}

module.exports = hammingDistance;