/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (word1, word2) => {
    let distance = 0,
    lengthWord1 = word1.length,
    lengthWord2 = word2.length

    if( lengthWord1 !== lengthWord2) {
      throw 'provide '
    } else {
      let index = 0
      for (const letter of word1) {
        if(letter != word2[index]) {
          ++distance
        }
      ++index
      }
    }

    return distance

  }
  
  module.exports = hammingDistance;