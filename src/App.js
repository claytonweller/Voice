import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';
import './App.css';
import TextCapture from './TextCapture';
import TextDisplay from './TextDisplay';
import understand from './understand';
import actOnUnderstanding from './actOnUnderstanding';

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
        textColor:'',
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
    this.clearSubmitField();
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
        // let words = understand(data.alternatives[0].transcript, this.state.keyWord)
        // this.setState(words);
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

  render() {
    return (
      <div className="App">
        <Helmet bodyAttributes = {{ style: `background:${this.state.BGColor}`}}/>
        <TextDisplay
          textColor={this.state.textColor}
          fieldString={this.state.fieldString}
          keyWord={this.state.keyWord}
          adjective={this.state.adjective}
          modifyer={this.state.modifyer}

         />
        <TextCapture
          submitClick={this.activate}
          submitFieldChange={this.onSubmitFieldChange}
        />
        <h2> {'KeyWord - '+ this.state.keyWord} </h2>
        <h2> {'Modifyer - '+ this.state.modifyer} </h2>
        <h2> {'adjective - '+ this.state.adjective} </h2>
        <h2> {'Complex? - '+ this.state.isComplex} </h2>
        <h2> {'BGColor - '+ this.state.BGColor} </h2>
        <h2> {'TextColor - '+ this.state.textColor} </h2>
        <button onClick={this.onListenClick}>Listen to mic</button>
      </div>
    );
  }
}

export default App;
