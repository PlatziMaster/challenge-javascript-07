/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let hamming = 0;  
  if(a.length != b.length){
    throw Error;
  }
  for(let letter = 0; letter <a.length; letter++){
    if(a[letter] != b[letter]){
      hamming++;
    }
  }
  return hamming
  }
  
  module.exports = hammingDistance;