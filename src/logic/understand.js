import textListener from './textListener';
import colorArray from './colorArray';

const understand = (string, word) =>{
    let keyWord = textListener.keyWord(string)
    let modifyer = textListener.modifyer(string, word)
    let adjObj = textListener.adjective(string, word)
    let complexColor = modifyer+adjObj.adjective;

    if(keyWord !== 'waiting' && adjObj.adjective !== 'waiting'){
      
      if (colorArray.includes(complexColor)){
        return({
          keyWord:keyWord,
          adjective:adjObj.adjective,
          adjType:adjObj.adjType,
          modifyer:modifyer,
          isComplex:true,
        })
      } else {
        return({
          keyWord:keyWord,
          adjType:adjObj.adjType,
          adjective:adjObj.adjective
        })
      }
    } else if (keyWord !== 'waiting'){
      return {keyWord: keyWord}
    } else if (word !== 'waiting' && adjObj.adjective !== 'waiting'){
      

      if (colorArray.includes(complexColor)){
        return { 
          adjective:adjObj.adjective,
          adjType:adjObj.adjType,
          modifyer:modifyer
        }
      } else {
        return { 
          adjType:adjObj.adjType,
          adjective:adjObj.adjective 
        }
      }
        
    };


};

export default understand;