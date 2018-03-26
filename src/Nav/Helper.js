import React from 'react';
import './Helper.css'

const Nav = ({textColor, helperText, onHelperClick, buttonColor})=>{

	return (
			<div className="navbar-translate">
				<div className="helper-box" >
	         	<div className="helper" style={{color:textColor, backgroundColor:buttonColor, opacity:'0.7'}}  onClick={onHelperClick}>
	         		<div className="helper-text typewriter">{helperText}</div>
	         	</div>
	      	</div>
	      </div>
	);

}



export default Nav;				




