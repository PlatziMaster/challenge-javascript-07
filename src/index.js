/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {

  if (a.length === b.length) {

    let count = 0;

    for (let i in a)
      if (a[i] !== b[i])
        count++

    return count;

  } else {
    throw "No son de la misma longitud";
  }

}

module.exports = hammingDistance;
