/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {

    if(a.length!=b.length){
      throw new Error;
    }
    let resp= 0;
    for (let i = 0; i < a.length; i++) {
      if(a[i]!=b[i]){
        resp++;
      }
    }
    return resp;
  }
  
  module.exports = hammingDistance;