import React from 'react';

const TextDisplay = ({ mode, textSize, textColor, fieldString, keyWord, adjective, modifyer })=>{

	const callOutText = (text)=>{
		// let importantWordCount = (fieldString.match(keyWord) || []).length
		// 	+ (fieldString.match(adjective) || []).length
		// 	+ (fieldString.match(modifyer) || []).length;
		let arr = fieldString.split(" ")
		let valueArr = arr.map((word, i)  => {
			if (word.toLowerCase() === keyWord){
				return [word, 'key', i];
			} else if (word.toLowerCase() === adjective){
				return [word, 'adj', i];
			} else if (word.toLowerCase() === modifyer){
				return [word, 'mod', i];
			} else {
				return [word, 'normal', i]
			}
		})


		let finalArr = valueArr.map(word =>{
			if (word[1]==='key') {
				return <span style={{fontSize:'40px'}} key={word[2]}>{word[0]} </span>
			} else if (word[1] === 'adj'){
				return <span style={{fontSize:'35px'}} key={word[2]}>{word[0]} </span>
			} else if (word[1] === 'mod'){
				return <span style={{fontSize:'30px'}} key={word[2]}>{word[0]} </span>
			} else {
				return word[0]+' ';
			}
		})

		let display = ()=>{
			if(finalArr[0] === ' ' && finalArr.length < 2 ){
				if (mode === 'text'){
					return 'Type Something';
				} else if (mode === 'voice'){
					return 'Say Something';
				}
			} else{
				return finalArr;
			}
		};



		return (
			display()
		)

		
	}

	return (
		<div>
			<h2 className="text-center" style={{color:textColor, fontSize:'1.6em', marginTop:'50px'}}> {callOutText()} </h2>
      </div>
	);

}



export default TextDisplay;