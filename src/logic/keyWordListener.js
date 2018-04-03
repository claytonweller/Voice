const keyWordListener = (string) =>{
	let keyWords = [
		'background',
		'text',
		'buttons',		
		'button',
		'bottom',
		'help',
		'down',
		'up',
		'top',
		'email',
		'message',
		'go',
	]
	let lowerString = string.toLowerCase();
 	let result = keyWords.filter(kWord => lowerString.includes(kWord))
 	if(result.length>0){
	 	return result[0];
	} else {
		return 'waiting'
	}

};

export default keyWordListener;