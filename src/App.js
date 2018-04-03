import React, { Component } from 'react';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

///Elements built into the structure of the app.

import './App.css';
import Display from './Display/Display'
import Nav from './Nav/Nav'
import Footer from './Footer';
import Instructions from './Instructions'

///Functions for understanding text. They look for Keywords, adjectives, and modifyers. Then they return states based upon those fidings

import understand from './logic/understand';
import actOnUnderstanding from './logic/actOnUnderstanding';

//The 'AI' Helper has some logic and some states

import typewrite from './Nav/typewrite';
import pause from './Nav/pause';
import helperText from './Nav/helperText'

//Full page verbs functions

import scroller from './logic/scroller'

//The App BEGINS!

class App extends Component {
    constructor (props){
      super(props);
      this.state ={
        fieldString:'',
        submittedString:'NOTHING',
        keyWord:'waiting',
        modifyer:'waiting',
        adjective: 'waiting',
        adjType: 'waiting',
        isComplex: false,
        BGColor:'',
        textColor:'white',
        buttonColor:'waiting',
        textSize:'normal',
        particleColor:'white',
        mode:'choose',
        modeSwitch:false,
        helperStatus: 'start',
        helperText: 'Hello!',
        messageSent: false,
      }
    }




  activate=()=>{
    const {keyWord, fieldString, adjective, adjType, isComplex, modifyer, messageSent} = this.state
    let value = fieldString;
    let words = understand(fieldString, keyWord)
    let action = actOnUnderstanding(keyWord, adjective, adjType, isComplex, modifyer, messageSent);
    this.setState(words);
    this.setState(action);
    this.setState({ submittedString:value })
  }

  onSubmitFieldChange=(data)=>{
    let words = understand(this.state.fieldString, this.state.keyWord)
    this.setState(words)
    this.setState({fieldString:data.target.value})
    
  }

  clearSubmitField = () =>{
    document.getElementById("submitField").value='';
  }

  onListenClick = () =>{
  fetch('https://murmuring-fjord-60883.herokuapp.com/api/speech-to-text/token')
    .then((response) => {
        return response.text();
    }).then( (token) => {
      var stream = recognizeMicrophone({
          token: token,
          objectMode: false, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });
      stream.on('data', (data) => {
        this.setState({fieldString:data.alternatives[0].transcript});
        this.activate();
        
        
      });
      stream.on('error', (err) => {
        console.log(err);
      });
      document.querySelector('#stop').onclick = stream.stop.bind(stream);
    }).catch((error) =>{
        console.log(error);
    });
  }

  onVoiceButtonClick = () =>{
    this.helperStatusUpdate('voice');
    this.onListenClick();
    this.helpCycle('voice');
  }

  onTextButtonClick = ()=>{
    this.helperStatusUpdate('text');
    this.helpCycle('text');
  }

  submitClick = ()=>{
    this.activate();
    this.clearSubmitField();
  }


////// These functions update the 'AI' Helper window.

  helpCycle = async (mode) =>{
    let i = 0;
    let textArr = helperText(mode)
    while (i<textArr.length ){

      this.typer(textArr[i]);
      await pause(7000)
      i++; 
    }
  }

  helperStatusUpdate = (mode)=>{
    this.setState({mode:mode, helperStatus:mode, modeSwitch:true});
  }

  helperTextUpdate = (newString)=>{
    this.setState({helperText:newString})
  }

  typer = (string) =>{
    typewrite(string, this.helperTextUpdate);
  }


  onHelperClick = ()=>{
    scroller('down');
  }

  componentDidMount(){
    this.helpCycle('start')

  }



  render() {
    const { helperText, messageSent, mode, textSize, textColor, buttonColor, fieldString, keyWord, adjective, modifyer, BGColor} = this.state;
    return (
      <div className="App">
        <Nav
          textColor={textColor}
          helperText={helperText}
          onHelperClick={this.onHelperClick}
          buttonColor={buttonColor}
          textSize={textSize}
          messageSent={messageSent}
        />
        <Display 
          mode = {mode}
          textSize = {textSize}
          textColor={textColor}
          fieldString={fieldString}
          keyWord={keyWord}
          adjective={adjective}
          modifyer={modifyer}
          BGColor={BGColor}
          buttonColor={buttonColor}
          activate={this.activate}
          submitFieldChange={this.onSubmitFieldChange}
          submitClick={this.submitClick}
          voiceButtonClick={this.onVoiceButtonClick}
          textButtonClick={this.onTextButtonClick}
        />
        <Instructions />

        <Footer />
      </div>
    );
  }
}

export default App;
