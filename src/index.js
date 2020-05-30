/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    if(a.length !== b.length) throw new Error(`Error: ${a} and ${b} strings must be equal lenght`)

    let distance = 0;
    for (let index = 0; index < a.length; index++) {
      if(a.charAt(index) !== b.charAt(index)) {
        distance++;
      }
    }
    return distance;
}

module.exports = hammingDistance;