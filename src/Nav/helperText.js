const helperText = (helperStatus)=>{
	let text = [];
	switch (helperStatus){
		
		case 'start':
			text = [
				'Hello! --  I\'m here to help you out. --  You can control this page by voice or text. Click one of the options below.'
			]

			return text;

		case 'voice':
			text = [
				'Great! Confirm that this page can use your microphone.',
				'Text should appear below as you speak.      If not, make sure your mic is on.',
				'Say, "make the text bigger"',
				'Or maybe try, "I wish the background was dark red"',
				'How about, "why aren\'t the buttons light blue already?!"',
				'If all else fails just say, "Help!" (or click on me)',
			]

			return text;

		case 'text':
			text = [
				'Cool! Type in the text box below.',
				'Text should appear below as you type.',
				'Type, "make the text bigger." Then click Submit',
				'Or maybe try, "I wish the background was dark red"',
				'How about, "why aren\'t the buttons light blue already?!"',
				'If all else fails just sumbit, "Help!" (or click on me)',

			]

			return text; 

		default:
			return ['SOMETHING IS WRONG!']
	}
}


export default helperText;