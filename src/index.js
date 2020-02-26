/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {

  if (a.length === b.length) {
    const aArray = a.split('');
    const bArray = b.split('');
    return bArray.filter((letter, index) => aArray[index] !== letter).length
  } else {
    throw new Error("You must enter strings with the same length");
  }
}

module.exports = hammingDistance;