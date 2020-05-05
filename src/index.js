/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const hammingDistance = (a, b) => {
  if (a.length !== b.length)
    throw new Error(`The lengths of ${a} and ${b} should be equal!`);
  else {
    let count = 0;
    for (let i = 0; i < a.length; i++)
      if (a[i] !== b[i])
        count++;
    return count;
  }
}
  
module.exports = hammingDistance;