/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    if(a.length != b.length)
      throw new TypeError('Strings of different lengths');
    const arrayA = a.split('');
    const arrayB = b.split('');
    return arrayA.reduce((acc, current, index) => (
      current !== arrayB[index] ? ++acc : acc),0)
}
  
  module.exports = hammingDistance;