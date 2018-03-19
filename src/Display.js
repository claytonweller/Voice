import React from 'react';
import TextDisplay from './TextDisplay';

const Header = ({BGColor, textColor, fieldString, keyWord, adjective, modifyer})=>{



    return (
        <div className="page-header section-dark" style={{background:`${BGColor}`}}>
            <div className="filter"></div>
            <div className="content-center">
                <div className="container">
                    <div className="title-brand">
                        <h1 className="presentation-title">VOICE</h1>
                        <div className="fog-low">
                            <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="" />
                        </div>
                        <div className="fog-low right">
                            <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="" />
                        </div>
                    </div>

                    <TextDisplay
                      textColor={textColor}
                      fieldString={fieldString}
                      keyWord={keyWord}
                      adjective={adjective}
                      modifyer={modifyer}
                    />



                </div>
            </div>
            <div className="moving-clouds" style={{backgroundImage:`url(${'https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'})` }}>
            </div>
        </div>
    );

}



export default Header;        


// style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/antoine-barres.jpg')"

// style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'); "
