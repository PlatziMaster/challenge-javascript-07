/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    let z = 0;
    if (a.length == b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
          z++;
        }
      }
      return z;
    } else {
      throw new Error( "Something bad happened." );;
    }
    
  }
  hammingDistance('a', 'b');
  
  module.exports = hammingDistance;