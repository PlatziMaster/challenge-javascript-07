/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let counter1 = 0;
  let counter2 = 0;

  if (! (a.length === b.length)) {
      throw new Error('Las variables no tienen el mismo tamaño')
  }

  for (let i=0; i<a.length; i++) {
    if (a.charAt(i)===b.charAt(i)) {
      counter2 ++;
    }
    else { 
      counter1 ++;
    }
  }
  if ((counter2)===a.length) {
    return 0;
  }else {
    return counter1;
  }
}
  
  module.exports = hammingDistance;