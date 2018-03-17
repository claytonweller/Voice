import keyWordListener from './keyWordListener';
import adjectiveListener from './adjectiveListener';
import modifyerListener from './modifyerListener';


let textListener = {
	keyWord: keyWordListener,
	adjective: adjectiveListener,
	modifyer: modifyerListener
}


export default textListener;