import React from 'react';

const QuickLinks = ()=>{



	return (
		<div>
			<div className="collapse navbar-collapse" id="navbarToggler">
             <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" >
                         <i className="fa fa-twitter"></i>
                         <p className="d-lg-none">Twitter</p>
                     </a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim"  >
                         <i className="fa fa-facebook-square"></i>
                         <p className="d-lg-none">Facebook</p>
                     </a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial"  >
                         <i className="fa fa-instagram"></i>
                         <p className="d-lg-none">Instagram</p>
                     </a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://www.github.com/CreativeTimOfficial/paper-kit"  >
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


