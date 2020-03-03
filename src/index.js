/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */

const hammingDistance = (str1, str2) => {
    if (str1.length !== str2.length) {
        throw `'${str1}' and '${str2}' must have the same length`;
    } else {
      let distance = 0;
      for (let i in str1) {
        if(str1[i] !== str2[i]) distance += 1;
      }
      return distance;
    }
  }
  
  module.exports = hammingDistance;