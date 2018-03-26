import scrollDown from './scrollDown'

const actOnunderstanding = (keyWord, adjective, adjType, isComplex, modifyer) =>{
	let action = {}

	let reset = ()=>{
		action.keyWord = 'waiting';
		action.adjective = 'waiting';
		action.modifyer = 'waiting';
		action.isComplex = false;
		return action;

	}

	if(keyWord !== 'waiting' && adjective !== 'waiting'){
		switch (keyWord){
			case 'background':
				if(isComplex){
					action = {BGColor:modifyer+adjective};
				} else {
					action = {BGColor:adjective};
				}
				break;

			case 'buttons':
			case 'button':
				if(isComplex){
					action = {buttonColor:modifyer+adjective};
				} else {
					action = {buttonColor:adjective};
				}
				break;
			
			case 'text':
				if(adjType === 'color'){				
					if(isComplex){
						action = {textColor:modifyer+adjective};
					} else {
						action = {textColor:adjective};
					}
				} else if (adjType === 'size'){
					action = {textSize:adjective}
				}
				
				break;
			default:
				console.log('nothing going on')
		};
	
		return reset();
	
	} else if (keyWord !== 'waiting'){
		switch (keyWord){
			case 'down':
			case 'help':
				scrollDown();
				return reset();

			default:
				console.log('nothing going on')

		}

	}
};

export default actOnunderstanding;