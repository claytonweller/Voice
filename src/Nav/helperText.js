const helperText = (helperStatus, i)=>{
	switch (helperStatus){
		case 'start':
			if(i === 0){
				return 'Hello!'
			} else if (i===1){
				return 'I\'m here to help you out.'
			} else {
				return 'You can control this page by voice or text. Click one of the options below.'
			} 
		case 'voice':
			if(i === 0){
				return 'Great! Confirm that this page can use your microphone.'
			} else if (i===1){
				return 'Text should appear below as you speak. If not, make sure your mic is on.' 
			} else if (i===2){
				return 'Say, "make the text green"'
			} else if (i===3){
				return 'Or maybe try, "I wish the background was dark red"'
			} else if (i===4) {
				return 'How about, "why aren\'t the buttons light blue already?!"'
			} else {
				return 'If all else fails just say, "Help!" (or click on me)'
			}

		case 'text':
			if(i === 0){
				return 'Cool! Type in the text box below.'
			} else if (i===1){
				return 'Text should appear below as you type.' 
			} else if (i===2){
				return 'Type, "make the text green." Then click Submit'
			} else if (i===3){
				return 'Or maybe try, "I wish the background was dark red"'
			} else if (i===4) {
				return 'How about, "why aren\'t the buttons light blue already?!"'
			} else {
				return 'If all else fails just say, "Help!" (or click on me)'
			}
		default:
			return 'SOMETHING IS WRONG!'
	}
}


export default helperText;