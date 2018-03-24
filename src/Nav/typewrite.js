import helperText from './helperText'
import pause from './pause'

const typewrite = async (helperStatus, helperInc, updater) =>{
  let string = helperText(helperStatus, helperInc);
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