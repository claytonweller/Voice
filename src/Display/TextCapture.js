import React from 'react';

const TextCapture = ({ textColor, buttonColor, submitClick, submitFieldChange })=>{

	return (
		<div>
			<input type="text" id="submitField" onChange={submitFieldChange} />
			<button id="submitButton" style={{backgroundColor:buttonColor, color:textColor, opacity:'0.7'}} onClick={submitClick}> Submit! </button>
		</div>
	);

}



export default TextCapture;
