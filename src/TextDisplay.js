import React from 'react';

const TextDisplay = ({ textColor, fieldString, keyWord, adjective, modifyer })=>{

	const callOutText = (text)=>{
	 	

	 	if (fieldString.includes(modifyer) && fieldString.includes(adjective) && fieldString.includes(keyWord)){
			let arrKW = fieldString.split(keyWord);
			let arrA = arrKW.map((element, i) => [element,i]);
			arrA = arrA.filter(element=> element[0].includes(adjective));
			let arrASplit = arrA[0][0].split(adjective);
			let completeArr=[];
			if (arrA[0][1] === 1){
				completeArr = arrKW.concat(arrASplit);
				completeArr.splice(1,1);
				return(		
					<span>
						{completeArr[0]}
						<span style={{fontSize:'1.7em'}}>{keyWord}</span>
						{completeArr[1]}
						<span style={{fontSize:'1.6em'}}>{adjective}</span>
						{completeArr[2]}
					</span>
				)		 		
			} else {
				completeArr = arrASplit.concat(arrKW);
				completeArr.splice(2,1);
				return(		
					<span>
						{completeArr[0]}
						<span style={{fontSize:'1.6em'}}>{adjective}</span>
						{completeArr[1]}
						<span style={{fontSize:'1.7em'}}>{keyWord}</span>
						{completeArr[2]}
					</span>
				)	
			}




	 	}else if (fieldString.includes(adjective) && fieldString.includes(keyWord)){
			let arrKW = fieldString.split(keyWord);
			let arrA = arrKW.map((element, i) => [element,i]);
			arrA = arrA.filter(element=> element[0].includes(adjective));
			let arrASplit = arrA[0][0].split(adjective);
			let completeArr=[];
			if (arrA[0][1] === 1){
				completeArr = arrKW.concat(arrASplit);
				completeArr.splice(1,1);
				return(		
					<span>
						{completeArr[0]}
						<span style={{fontSize:'1.7em'}}>{keyWord}</span>
						{completeArr[1]}
						<span style={{fontSize:'1.6em'}}>{adjective}</span>
						{completeArr[2]}
					</span>
				)	
			} else {
				completeArr = arrASplit.concat(arrKW);
				completeArr.splice(2,1);
				return(		
					<span>
						{completeArr[0]}
						<span style={{fontSize:'1.6em'}}>{adjective}</span>
						{completeArr[1]}
						<span style={{fontSize:'1.7em'}}>{keyWord}</span>
						{completeArr[2]}
					</span>
				)	
			}

		} else if(fieldString.includes(keyWord)){
			let arr = fieldString.split(keyWord);
			return(		
				<span>
					{arr[0]}
					<span style={{fontSize:'1.7em'}}>{keyWord}</span>
					{arr[1]}
				</span>
			)
		} else if (fieldString.includes(adjective)){
			let arr = fieldString.split(adjective) 
			return(		
				<span>
					{arr[0]}
					<span style={{fontSize:'1.6em'}}>{adjective}</span>
					{arr[1]}
				</span>
			)

	

		} else if (fieldString === ''){
			return (
				<span>Type Something</span>
			)
		} else {
			return <span>{fieldString}</span>
		}


	}

	return (
		<div>
			<div style={{color:textColor, margin:'10px', fontSize:'1.5em'}}> {callOutText()} </div>
      </div>
	);

}



export default TextDisplay;