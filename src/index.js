/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    if(a.length != b.length){
      throw new Error("Las palabras tienen diferente longitud")
    }
    
    let contador = 0
    for (let index = 0; index < a.length; index++) {
      if(a.charCodeAt(index) !== b.charCodeAt(index) ){
        contador++
      }
    }

    return contador

}

module.exports = hammingDistance;