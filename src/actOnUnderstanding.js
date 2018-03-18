


const actOnunderstanding = (keyWord, adjective, isComplex, modifyer) =>{
	let action = {}

	if(keyWord !== 'waiting' && adjective !== 'waiting'){

		switch (keyWord){
			case 'background':
				if(isComplex){
					action = {BGColor:modifyer+adjective};
				} else {
					action = {BGColor:adjective};
				}
				break;
			case 'text':
				if(isComplex){
					action = {textColor:modifyer+adjective};
				} else {
					action = {textColor:adjective};
				}
				break;
			default:
				console.log('nothing going on')
		};
		action.keyWord = 'waiting';
		action.adjective = 'waiting';
		action.modifyer = 'waiting';
		action.isComplex = false;
		return action;
	}
};

export default actOnunderstanding;