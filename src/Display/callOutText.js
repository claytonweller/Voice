import React from 'react'

	const callOutText = (obj)=>{
		let keyWord = obj.keyWord;
		let fieldString = obj.fieldString;
		let adjective = obj.adjective;
		let modifyer = obj.modifyer;
		let mode = obj.mode;

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
				return <span style={{fontSize:'170%', fontWeight:'500'}} key={word[2]}>{word[0]} </span>
			} else if (word[1] === 'adj'){
				return <span style={{fontSize:'150%', fontWeight:'400'}} key={word[2]}>{word[0]} </span>
			} else if (word[1] === 'mod'){
				return <span style={{fontSize:'130%'}} key={word[2]}>{word[0]} </span>
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

export default callOutText;