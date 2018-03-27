import React from 'react';
import './Helper.css';
import sizeInterpreter from '../logic/sizeInterpreter'

const Nav = ({textColor, textSize, helperText, onHelperClick, buttonColor})=>{

	let size = sizeInterpreter(textSize);
	return (
			<div className="navbar-translate">
				<div className="helper-box" >
	         	<div className="helper" style={{color:textColor, backgroundColor:buttonColor, opacity:'0.7'}}  onClick={onHelperClick}>
	         		<div className="helper-text typewriter" style={{fontSize:size}}>{helperText}</div>
	         	</div>
	      	</div>
	      </div>
	);

}



export default Nav;				




