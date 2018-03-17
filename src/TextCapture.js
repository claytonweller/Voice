import React from 'react';

const TextCapture = ({ submitClick, submitFieldChange })=>{


	return (
		<div>
			<input type="text" id="submitField" onChange={submitFieldChange} />
			<button id="submitButton" onClick={submitClick}> Submit! </button>
		</div>
	);

}



export default TextCapture;
