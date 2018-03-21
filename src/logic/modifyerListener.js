const modifyerListener = (string, keyWord) =>{
	let modifyers = [
		'light',
		'dark',
		'cadet',
		'deep',
		'dim',
		'medium',
		'slate'
	];
	


	let LowerString = string.toLowerCase();
 	let result = modifyers.filter(modifyer => LowerString.includes(modifyer))
 	if(result.length>0){
	 	return result[0];
	} else{
		return 'waiting';
	}
}; 

export default modifyerListener;