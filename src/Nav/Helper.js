import React from 'react';
import './Helper.css'

const Nav = ({textColor, helperText, onHelperClick})=>{

	return (
			<div className="navbar-translate">
				<div className="helper-box" >
	         	<div className="helper" style={{color:textColor}}  onClick={onHelperClick}>
	         		<div className="helper-text typewriter">{helperText}</div>
	         	</div>
	      	</div>
	      </div>
	);

}



export default Nav;				




