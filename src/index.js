/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let arr = Array.from(a)
  let arr2 = Array.from(b)
  let tamaño = arr.length
  
  if (arr.length !== arr2.length){
    throw Error
  }
  else {
    let contador = 0
    for (let i = 0; i < tamaño; i++) {
      if (arr[i] !== arr2[i]) {
        contador+=1
      }
      
    }
  
    return contador
  }
}



module.exports = hammingDistance;


