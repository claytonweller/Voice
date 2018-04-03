import scroller from './scroller'
import goToWebsite from './goToWebsite'

const actOnunderstanding = (keyWord, adjective, adjType, isComplex, modifyer, messageSent) =>{
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

			case 'go':
					goToWebsite(adjective);
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
			case 'bottom':
				scroller('down');
				return reset();
			case 'up':
			case 'top':
				scroller('up');
				return reset();
			case 'email':
			case 'message':
				console.log(messageSent);
				if(messageSent === false){
					window.open('mailto:clayton.weller@gmail.com?subject=Voice App!&body=Hi Clayton, %0A%0A[Your message here]' );
					action = {messageSent:true};
					return action; 
				} else {
					action = {fieldString: 'Email window opened already' }
					return action;
				}
			default:
				console.log('nothing going on');

		}

	}
};

export default actOnunderstanding;