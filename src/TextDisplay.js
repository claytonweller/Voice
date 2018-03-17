import React from 'react';

const TextDisplay = ({ textColor, fieldString, keyWord, adjective, modifyer })=>{

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
				return <span style={{fontSize:'40px'}}>{word[0]} </span>
			} else if (word[1] === 'adj'){
				return <span style={{fontSize:'35px'}}>{word[0]} </span>
			} else if (word[1] === 'mod'){
				return <span style={{fontSize:'30px'}}>{word[0]} </span>
			} else {
				return word[0]+' ';
			}
		})



		return (
			finalArr
		)

		
	}

	return (
		<div>
			<div style={{color:textColor, margin:'10px', fontSize:'1.4em'}}> {callOutText()} </div>
      </div>
	);

}



export default TextDisplay;