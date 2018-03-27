import React from 'react';
import callOutText from './callOutText'
import sizeInterpreter from '../logic/sizeInterpreter'

const TextDisplay = ({ mode, textSize, textColor, fieldString, keyWord, adjective, modifyer })=>{

	let callOutObj = {
		mode:mode,
		fieldString:fieldString,
		keyWord:keyWord,
		adjective:adjective,
		modifyer:modifyer
	}

	let size = sizeInterpreter(textSize)

	return (
		<div>
			<h2 id="text" className="text-center" style={{color:textColor, fontSize:size, marginTop:'50px'}}> {callOutText(callOutObj)} </h2>
      </div>
	);

}



export default TextDisplay;