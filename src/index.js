/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let number = 0;

  if (a.length === b.length) {
    if (a.length == 1 && b.length == 1) {
      if (a[0] !== b[0]) {
        number++
        return number
      } else {
        return number
      }
    } else {
      for (let i = 0; i <= a.length; i++) {
        if (a[i] !== b[i]) {
          number++
        }
      }
    }
    return number;

  } else {
    throw new Error('The strings does not match in length');
  }
}

module.exports = hammingDistance;