/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let distance = 0;

  if(a.length != b.length) {
    return error;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      distance ++;
    }
  }
  return distance;
};

module.exports = hammingDistance;
