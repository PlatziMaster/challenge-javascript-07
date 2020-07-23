/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
	if (a.length !== b.length) {
		throw Error;
	} else {
		let indice = 0;
		let distanciaHamming = 0;
		while (a.length >= indice) {
			if (a.charAt(indice) !== b.charAt(indice)) {
				distanciaHamming++;
			}
			indice++;
		}
		return distanciaHamming;
	}
};

module.exports = hammingDistance;
