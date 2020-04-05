/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (str1, str2) => {
    let distance = 0;
    if ( str1.length !== str2.length) {
      throw 'You cannot compare strings of different lengths';
    } 

    for(i = 0; i < str1.length; i++) {
      if(str1[i] !== str2[i]) distance += 1;
    }
    return distance
}
  
  module.exports = hammingDistance;