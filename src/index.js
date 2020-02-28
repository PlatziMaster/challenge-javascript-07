/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let distance = 0;
    if ( a.length !== b.length) {
      throw 'You cannot compare strings of different lengths'
      
    } 

    for(i=0;i<a.length;i++) {
      if(a.charAt(i) !== b.charAt(i)) {
        distance = distance + 1;
      }
    }
    return distance
  }

hammingDistance('a', 'a')
  
  module.exports = hammingDistance;