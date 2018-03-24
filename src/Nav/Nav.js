import React from 'react';
import QuickLinks from './QuickLinks'
import Helper from './Helper'

const Nav = ({ textColor, helperText, onHelperClick })=>{

	return (
		<div>

			<nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
		        <div className="container">
		          	<Helper
		          		textColor ={textColor}
		          		helperText = {helperText}
		          		onHelperClick = {onHelperClick}
		          	 />
		            <QuickLinks />
		        </div>
		   </nav>

		</div>
	);

}



export default Nav;