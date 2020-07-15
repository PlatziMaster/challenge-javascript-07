/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const hammingDistance = (a, b) => {
  if(a.length !== b.length){
    throw Error
  } else {
    let hammingValue = 0
    for(let i = 0; i < a.length; i++){
      if( a.charAt(i) !== b.charAt(i)){
        hammingValue++
      }
    }
    return hammingValue
  }
}
  
module.exports = hammingDistance;