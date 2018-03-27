import React from 'react';
import TextDisplay from './TextDisplay';
import TextCapture from './TextCapture';
import './Display.css'
import ParticlesMine from './ParticlesMine';


const Header = ({ textButtonClick, voiceButtonClick, activate, submitClick, submitFieldChange, mode, BGColor, buttonColor, textColor, textSize, fieldString, keyWord, adjective, modifyer})=>{


  const modeSelect= {
    readOut: ()=>{
        if (mode === "voice"){
            return (
                <TextDisplay
                  textColor={textColor}
                  textSize={textSize}
                  fieldString={fieldString}
                  keyWord={keyWord}
                  adjective={adjective}
                  modifyer={modifyer}
                  mode={mode}
                />
            )
        } else if (mode === 'text') {
            return(
              <div>
                <TextDisplay
                  textColor={textColor}
                  textSize={textSize}
                  fieldString={fieldString}
                  keyWord={keyWord}
                  adjective={adjective}
                  modifyer={modifyer}
                  mode={mode}
                />
              </div>
            )
        };
    },
    modeButtons : ()=>{
        if (mode==="choose"){
            return (
              <div style={{zIndex:'10' }} className="mode-buttons">
                <button onClick={voiceButtonClick} style={{marginTop:'50px', zIndex:'400', marginRight:'10px'}}>Voice</button>
                <button onClick={textButtonClick}> Text </button>                
              </div>
            )
        } else if (mode==="text"){
            return(
              <div>
                <TextCapture 
                  style={{ marginBottom:'50px', zIndex:'400'}}
                  submitClick={submitClick}
                  submitFieldChange={submitFieldChange} 
                  buttonColor={buttonColor}
                  textColor={textColor}
                />
                <button 
                  onClick={voiceButtonClick} 
                  style={{marginTop:'50px', zIndex:'400', marginRight:'10px', color:textColor, backgroundColor:buttonColor, opacity:'0.7'}}
                >Voice</button>
              </div>
            )
        } else if (mode==="voice"){
            return(
              <div style={{zIndex:'10'}} className="mode-buttons">
                <button onClick={textButtonClick} style={{marginTop:'50px', zIndex:'400', marginRight:'10px', color:textColor, backgroundColor:buttonColor, opacity:'0.7'}}>Text</button>            
              </div>
            ) 
        }
    },
    title : ()=>{

        return(
            mode.toUpperCase()
        )

    }        
    

  }


    return (

        <div id="topmost" className="page-header section-dark" style={{background:`${BGColor}`}}>
        <ParticlesMine />      
            <div className="filter"></div>
            
            <div className="moving-clouds" style={{backgroundImage:`url(${'https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'})` }}>
            </div> 
            <div className="content-center">
                <div className="container">
                    <div className="title-brand">
                        <h1 className="new-title" 
                          style={{zIndex:'4' }}
                        >
                            {modeSelect.title()}
                        </h1>
                        <h1 className="under-title" 
                          style={{zIndex:'4', color:textColor }}
                        >
                            {modeSelect.title()}
                        </h1>

                        <div className="fog-low" style={{transitionDuration: '1s'}}>
                            <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="" />
                        </div>
                        <div className="fog-low right" style={{transitionDuration: '1s'}}>
                            <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="" />
                        </div>
                    </div>
                    {modeSelect.readOut()}
                    {modeSelect.modeButtons()}
                    <div style={{marginBottom:'50px'}}></div>
                    
                </div>
            </div>

            
        </div>
    );

}



export default Header;        


// style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/antoine-barres.jpg')"

// style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'); "
