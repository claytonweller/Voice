import React from 'react';

const QuickLinks = ()=>{



	return (
		<div>
			<div className="collapse navbar-collapse" id="navbarToggler">
             <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/clayton.weller"  >
                         <i className="fa fa-facebook-square"></i>
                         <p className="d-lg-none">Facebook</p>
                     </a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://github.com/claytonweller"  >
                         <i className="fa fa-github"></i>
                         <p className="d-lg-none">GitHub</p>
                     </a>
                 </li>
             </ul>
         </div>
		</div>
	);

}



export default QuickLinks;						


