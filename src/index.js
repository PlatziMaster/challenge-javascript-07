/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  const long1 = a.length
  const long2 = b.length
  var number = []

  function filter1(valor1, valor2) {
    if (valor1 === valor2) {
      function lecturaCharacter(clave, clave2) {
        for (let i = 0; i < clave.length; i++) {
          if ((clave.charAt(i) === clave2.charAt(i)) == false) {
            number.push(1)
          } 
        }
      }
      lecturaCharacter(a, b)
    } else {
      throw new Error("Whoops!");
    }
  }
  filter1(long1, long2)
  console.log(Number(number.length));
  return Number(number.length)
}
hammingDistance('abc', 'add')
module.exports = hammingDistance;