/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {

  if(a.length != b.length){
    throw new Error;
  }
  let distance = 0;

  for(let i = 0; i < a.length; i++){
    if(a[i] !== b[i]){
      distance += 1;
    }
  }

  return distance;
}

hammingDistance('a', 'a')
hammingDistance('a', 'b')
hammingDistance('abc', 'add')
hammingDistance('karolin', 'kathrin')
hammingDistance('karolin', 'kerstin')
hammingDistance('1011101', '1001001')
hammingDistance('2173896', '2233796')
  
  module.exports = hammingDistance;