import colorArray from './colorArray';
import sizeArray from './sizeArray';
import websiteList from './websiteList';

const adjectiveListener = (string, keyWord) =>{
	
	let adjectives = [];
	switch (keyWord){
		case 'background':
			adjectives = {
				colors:colorArray,
				sizes:[],
				websites:[]
			}
			break;
		case 'text':
			adjectives = {
				colors:colorArray,
				sizes:sizeArray,
				websites:[],
			}
			break;
		case 'go':
			adjectives= {
				colors:[],
				sizes:[],
				websites:Object.keys(websiteList),	
			}
			break;
		case 'buttons':
		case 'button':
			adjectives = {
				colors:colorArray,
				sizes:[],
				websites:[],
			}
			break;	
		default:
			adjectives = {
				colors:[],
				sizes:[],
				websites:[],
			};
	};

	let lowerString = string.toLowerCase();
 	let colors = adjectives.colors;
 	let sizes = adjectives.sizes;
 	let websites = adjectives.websites;
 	
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
 		} else if (adjFilter(websites).length !== 0){
 			return {
 				adjective: adjFilter(websites)[0],
 				adjType:'website',
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