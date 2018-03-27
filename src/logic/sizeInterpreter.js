const sizeInterpreter = (size) =>{
	switch (size){
		case 'normal':
			return '1.6em'
		case 'small':
			return '1.2em'
		case 'big':
		case 'large':
			return '3em'
		case 'tiny':
		case 'smallest':
			return '0.8em'
		case 'huge':
		case 'enourmous':
		case 'gigantic':
		case 'biggest':
			return '5em'
		case 'smaller':
			return '1em'
		case 'bigger':
			return '4em'
		default:
			return '1.6em'
	}
}

export default sizeInterpreter;