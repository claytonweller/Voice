import React, { Component } from 'react';
// import {Helmet} from 'react-helmet';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

///Elements built into the structure of the app.

import './App.css';
import Display from './Display/Display'
import Nav from './Nav'
import Footer from './Footer'

///Functions for understanding text. They look for Keywords, adjectives, and modifyers. Then they return states based upon those fidings

import understand from './logic/understand';
import actOnUnderstanding from './logic/actOnUnderstanding';

//The App BEGINS!

class App extends Component {
    constructor (){
      super();
      this.state ={
        fieldString:'',
        submittedString:'NOTHING',
        keyWord:'waiting',
        modifyer:'waiting',
        adjective: 'waiting',
        isComplex: false,
        BGColor:'',
        textColor:'white',
        particleColor:'white',
        mode:'choose',
      }
    }


  activate=()=>{
    const {keyWord, fieldString, adjective, isComplex, modifyer} = this.state
    let value = fieldString;
    let words = understand(fieldString, keyWord)
    let action = actOnUnderstanding(keyWord, adjective, isComplex, modifyer);
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
  fetch('http://localhost:3005/api/speech-to-text/token')
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
        this.activate();
        this.setState({fieldString:data.alternatives[0].transcript});
        
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
    this.setState({mode:'voice'});
    this.onListenClick();
  }

  onTextButtonClick = ()=>{
    this.setState({mode:'text'})
  }

  submitClick = ()=>{
    this.activate();
    this.clearSubmitField();
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Display 
          mode = {this.state.mode}
          textColor={this.state.textColor}
          fieldString={this.state.fieldString}
          keyWord={this.state.keyWord}
          adjective={this.state.adjective}
          modifyer={this.state.modifyer}
          BGColor={this.state.BGColor}
          particleColor={this.state.particleColor}
          activate={this.activate}
          submitFieldChange={this.onSubmitFieldChange}
          submitClick={this.submitClick}
          voiceButtonClick={this.onVoiceButtonClick}
          textButtonClick={this.onTextButtonClick}

        />
        <h1> GET READY TO HAVE YOUR MIND BLOWN! </h1>

        <h2> {'KeyWord - '+ this.state.keyWord} </h2>
        <h2> {'Modifyer - '+ this.state.modifyer} </h2>
        <h2> {'adjective - '+ this.state.adjective} </h2>
        <h2> {'Complex? - '+ this.state.isComplex} </h2>
        <h2> {'BGColor - '+ this.state.BGColor} </h2>
        <h2> {'particleColor - '+ this.state.particleColor} </h2>
        <h2> {'textColor - '+ this.state.textColor} </h2>
        <button onClick={this.onListenClick}>Listen to mic</button>
        <Footer />
      </div>
    );
  }
}

export default App;
