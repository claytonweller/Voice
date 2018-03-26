    
import React from 'react';

const Footer = ()=>{

    return (
        <div>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <nav className="footer-nav">
                            <ul>
                                <li><a href="https://github.com/claytonweller/"  >Clayton Weller</a></li>
                            </ul>
                        </nav>
                        <div className="credits ml-auto">
                            <span className="copyright" >
                                © <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> by <a href="https://github.com/claytonweller/"  > Clayton Weller  </a> (w/ <a href="http://www.creative-tim.com">Creative Tim's</a> PaperKit Template)
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );

}

export default Footer; 








