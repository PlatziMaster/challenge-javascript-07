/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  if (a.length != b.length) {
    throw new Error('La longitud de los textos tiene que ser igual')
  }else{
    let texto1 = a.split('')
    let texto2 = b.split('')
    let numero = 0

    for (let i = 0; i < a.length; i++) {
      if (texto1[i] != texto2[i]) {
        numero++
      }
    }
    return numero
  }
}

module.exports = hammingDistance;