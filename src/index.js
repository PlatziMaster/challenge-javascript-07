/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let count=0
  const showError = new Error('Error');
    if(a.length === b.length){
      for (let i=0; i <= a.length; i++){
        if(a.charAt(i) !== b.charAt(i)){
          count+=1
        }
      }
      return count
    } else  {
      throw showError
      }
  }  
  module.exports = hammingDistance;