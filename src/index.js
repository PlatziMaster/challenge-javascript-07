/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */


const hammingDistance = (a, b) => {

	if (a.length != b.length)
		throw (new Error('Las cadenas no son de la misma longitud'));

	let cont = 0;

	for(let i = 0; i<a.length; i++)
		if (a[i] != b[i])
			cont++;

	return cont;
}
  

module.exports = hammingDistance;