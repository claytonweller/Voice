const scroller=(direction)=>{
	if (direction === 'down'){
		document.getElementById('help-me').scrollIntoView({behavior:'smooth'});
	} else if (direction === 'up'){
		window.scroll({
			top:0,
			behavior:'smooth'
		});
	}

}

export default scroller;