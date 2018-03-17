import colorArray from './colorArray';

const adjectiveListener = (string, keyWord) =>{
	let adjectives = [];
	
	switch (keyWord){
		case 'background':
			adjectives = colorArray;
			break;
		case 'text':
			adjectives = colorArray;
			break;
		default:
			adjectives = [];
	};

	let LowerString = string.toLowerCase();
 	let result = adjectives.filter(adjective => LowerString.includes(adjective))
 	if(result.length>0){
	 	return result[0];
	} else{
		return 'waiting';
	}
}; 

export default adjectiveListener;