/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if(a.length !== b.length){
    new Error(console.log(error))
  }
  
  let diference = 0
    for(i = 0; i <= a.length; i++) {
      a.charAt(i) === b.charAt(i) ? null : diference += 1
    }

    let result = diference !== 0 ? diference : 0
    return result
  }
  
  module.exports = hammingDistance;