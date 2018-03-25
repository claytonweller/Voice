import colorArray from './colorArray';
import sizeArray from './sizeArray';

const adjectiveListener = (string, keyWord) =>{
	let adjectives = [];
	switch (keyWord){
		case 'background':
			adjectives = {
				colors:colorArray,
				sizes:[],
			}
			break;
		case 'text':
			adjectives = {
				colors:colorArray,
				sizes:sizeArray,
			}
			break;
		default:
			adjectives = {
				colors:[],
				sizes:[],
			};
	};

	let lowerString = string.toLowerCase();
 	let colors = adjectives.colors;
 	let sizes = adjectives.sizes;
 	
 	const adjFilter = (arr)=>{
 		return arr.filter(adjective => lowerString.includes(adjective))
 	}

 	let objMaker = ()=>{
 		if(adjFilter(colors).length !== 0 ){
 			return {
 				adjective: adjFilter(colors)[0],
 				adjType:'color',
 			}
 		} else if (adjFilter(sizes).length !== 0 ){
 			return {
 				adjective: adjFilter(sizes)[0],
 				adjType:'size',
 			} 			
 		} 
 	}

 	let result = objMaker();

 	if(result !== undefined){
	 	console.log(result)
	 	return result;
	} else{
		return {adjective:'waiting', adjType:'waiting'};
	}
}; 

export default adjectiveListener;