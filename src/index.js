/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {debugger
  var arrayA = a.split(""), arrayB = b.split(""), numberDistance = 0
  if (!(arrayA.length == arrayB.length)) {
      throw error 
  }
  //('Si tienen misma longitud')
  for (var i = 0; i <= arrayA.length-1; i++){
      if (!(arrayA[i] === arrayB[i]))
      numberDistance ++
  }return numberDistance
}
  module.exports = hammingDistance;