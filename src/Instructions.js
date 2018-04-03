import React from 'react';
import './instructions.css';

const Instructions = ()=>{

   return (
      <div>
      	<h1>How does this thing work?</h1>
      	<div > 
      		<h4 id="help-me">Great Question! The app is constantly evaluating the text that appears on the screen. Here are the basic steps:</h4>
      		<div className="instructions" >1. It waits until it hears a Keywod it recognizes. (ex. Background or Go) </div>
      		<div>2. Once it hears a Keyword it checks the Modes in which that Keyword can be changed. (ex. color, size, url)</div>
      		<div>3. If it hears a Modifyer that applies to the Keyword it will activate that change on the page. </div>
      		<h4>Above you'll know the app has heard an important word because it will be bigger than the other text. Here are a list KeyWords and their Modes: </h4>
      		<div className="words">
      			<div className="keywords" style={{fontSize:'2em'}}>KeyWords </div>
      			<div className="modifiers" style={{fontSize:'2em'}}>Modes </div>
					<div className="keywords" style={{fontSize:'1.3em'}}> 
      				<div>Background</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
      				<div>Color</div>
      				<div>-</div> 
      			</div>

      			<div className="keywords" style={{fontSize:'1.3em'}}>
      			   <div>Text</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
	      			<div>Color </div>
						<div>Size </div>
						<div>-</div>
					</div>

				   <div className="keywords" style={{fontSize:'1.3em'}}>
      			   <div>Button -or- Buttons</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
	      			<div>Color </div>
						<div>-</div>
					</div>

					<div className="keywords" style={{fontSize:'1.3em'}}>
      			   <div>Go</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
	      			<div>Website </div>
						<div>-</div>
					</div>

					<div className="keywords" style={{fontSize:'1.3em'}}>
      			   <div>Up, Top, Help, Down, Bottom, Email, Message</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
	      			<div>Automatically activates</div>
					</div>
				</div>
				<h4>And here's a list of example Modifyers in the different Modes </h4>
				<div className="words">
      			<div className="keywords" style={{fontSize:'2em'}}>Modes </div>
      			<div className="modifiers" style={{fontSize:'2em'}}>Modifiers </div>
					<div className="keywords" style={{fontSize:'1.3em'}}> 
      				<div>Color</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
      				<div>Green, Red, Yellow, Light Blue, Slate Grey, Medium Green, Turquois... etc</div>
      				<div>-</div> 
      			</div>
					<div className="keywords" style={{fontSize:'1.3em'}}> 
      				<div>Size</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
      				<div>Big, Small, Smaller, Huge, Biggest... etc</div>
      				<div>-</div> 
      			</div>
      			<div className="keywords" style={{fontSize:'1.3em'}}> 
      				<div>Website</div>
      			</div>
      			<div className="modifiers" style={{fontSize:'1.3em'}}>
      				<div>Creative Tim, Facebook, Amazon, Reddit... you know the important ones.</div>
      			</div>
				</div>
				<h4>The app isn't Working!</h4>	
				<div> If the voice section isn't working it may be because your Microphone is disabled on your computer (or you don't have a microphone). If that's the case play around in Text Mode. </div>
      		<h4>Thanks so much for stopping by. If you would like to see how I implemented any of this or just to chat simply say or type 'Email' and you should be connected with me directly. Have a wonderful day!</h4>
      	</div>
      </div>
   );

}

export default Instructions; 