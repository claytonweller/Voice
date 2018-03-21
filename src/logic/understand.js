import textListener from './textListener';
import colorArray from './colorArray';

const understand = (string, word) =>{
    let keyWord = textListener.keyWord(string)
    let modifyer = textListener.modifyer(string, word)
    let adjective = textListener.adjective(string, word)
    let complexColor = modifyer+adjective;

    if(keyWord !== 'waiting' && adjective !== 'waiting'){
      
      if (colorArray.includes(complexColor)){
        return({
          keyWord:keyWord,
          adjective:adjective,
          modifyer:modifyer,
          isComplex:true,
        })
      } else {
        return({
          keyWord:keyWord,
          adjective:adjective
        })
      }
    } else if (keyWord !== 'waiting'){
      return {keyWord: keyWord}
    } else if (word !== 'waiting' && adjective !== 'waiting'){
      

      if (colorArray.includes(complexColor)){
        return { 
          adjective:adjective,
          modifyer:modifyer
        }
      } else {
        return { adjective:adjective }
      }
        
    };


};

export default understand;