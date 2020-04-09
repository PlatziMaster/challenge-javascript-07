/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length !== b.length){
    const error = new Error('No puedes comparar dos string de distinto tamaño')
      throw error;
    }
  let counter = 0;
  for( let index = 0; index < a.length; index++){
    if (a[index] !== b[index]){
      counter++;
    }
  }
  return counter;
  }
  
  module.exports = hammingDistance;