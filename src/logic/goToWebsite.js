import websiteList from './websiteList';

const goToWebsite = (name)=>{
	console.log(name, websiteList[name])
	window.open(websiteList[name]);
}

export default goToWebsite;