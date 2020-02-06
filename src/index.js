/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let result = 0;

  if(a.length != b.length) throw "not same lenght";

  for (let i=0; i < a.length; i++) {
    if(a[i] !== b[i]){
      result++
    }
  }
  return result;  
}
  
module.exports = hammingDistance;