import pause from './pause'

const typewrite = async (string, updater) =>{
  
  let i = 0;
  let newString = '';
  const typer = ()=>{
    let char = string.charAt(i);
    newString=newString+char;
    updater(newString);
  }

  while (i<string.length){
     typer();
     await pause(50);
     i++

  }
}

export default typewrite;