/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  const result = [];
  if (a.length === b.length) {
    let textA = " ";
    let textB = " ";
    for (let i = 0; i < a.length; i++) {
      textA += a[i].charCodeAt(0).toString(2) + " ";
    }

    for (let i = 0; i < b.length; i++) {
      textB += b[i].charCodeAt(0).toString(2) + " ";
    }

    for (let i = 0; i < a.length; i++) {
      result.push(a.charAt(i) === b.charAt(i))
    }
    const diference = result.filter((item) => {
      return item === false;
    })

    return diference.length;
  } else {
    throw "error"
  }
}

hammingDistance('10', '10');

module.exports = hammingDistance;