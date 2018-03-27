import React from 'react';
import QuickLinks from './QuickLinks'
import Helper from './Helper'

const Nav = ({ textSize, buttonColor, textColor, helperText, onHelperClick })=>{

	return (
		<div>

			<nav  className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
		        <div className="container">
		          	<Helper
		          		buttonColor={buttonColor}
		          		textColor ={textColor}
		          		helperText = {helperText}
		          		onHelperClick = {onHelperClick}
		          		textSize = {textSize}
		          	 />
		            <QuickLinks />
		        </div>
		   </nav>

		</div>
	);

}



export default Nav;