/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {

  if (a.length !== b.length) throw new Error (`${a} is different lenght to ${b}`);
  
  else {
  let number= 0;
      for (let i=0; i < a.length; i++) {
        
            if (a[i] !== b[i])
          number+=1
      } 
    return number
      }
    }
    // console.log(hammingDistance('hola', 'hosa'))
    
  module.exports = hammingDistance; 