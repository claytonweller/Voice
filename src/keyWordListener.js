const keyWordListener = (string) =>{
	let keyWords = [
		'background',
		'text',
		'button'
	]
	let LowerString = string.toLowerCase();
 	let result = keyWords.filter(kWord => LowerString.includes(kWord))
 	if(result.length>0){
	 	return result[0];
	} else {
		return 'waiting'
	}

};

export default keyWordListener;