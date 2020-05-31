/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */



const hammingDistance = (a, b) => {
  if(a.length !== b.length) 
    throw new Error('the length of the string is different');

  let count = 0;
  for(let i = 0; i < a.length; i++) {
    if((a.charAt(i) !== b.charAt(i))) {
      count++;
    }
    
  }
  return count
}


module.exports = hammingDistance;