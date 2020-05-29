/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (firstString, secondString) => {
  let count = 0;

  if(firstString.length == secondString.length){
    for (let i = 0; i < secondString.length; i++) {
      if(firstString.charCodeAt(i) !== secondString.charCodeAt(i) )
        count++
    }
  }else{
    throw new Error("No tienen la misma logitud")
  }

  return count
}

  module.exports = hammingDistance;