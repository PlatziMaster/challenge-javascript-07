/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    let distance = 0;
    if(a.length !== b.length){
      throw new Error('Need to be same length')
    }
    a.split('').forEach((letter, i) => {
      if(letter !== b[i]) {
        distance ++;
      }
    });
    return distance;
  }
  console.log(hammingDistance('karolin', 'kathrin'))
  module.exports = hammingDistance;