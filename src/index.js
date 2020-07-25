/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
 
  let hammingDistance = 0
  
  if (a.length == b.length) {

    for (i = 0; i < a.length; i++) {

      if(a.charAt(i) !== b.charAt(i)) {
        hammingDistance++
      }
    }
  } else {
    throw new Error('Sorry, I can not to compare it')
  }

  return hammingDistance;
}
  }
  
  module.exports = hammingDistance;
