/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {

  var arr1 = [], arr2 = [];
	var cont = 0;
	arr1 = a.split('');
  arr2 = b.split('');
  
	if(arr1.length!==arr2.length){
		throw new Error('error');
	}
	else{
		for(var i = 0; i<=arr1.length ; i++){
			if(arr1[i]!==arr2[i]){
				cont++;
			}
		}
		return cont;
	}
}
  
  module.exports = hammingDistance;