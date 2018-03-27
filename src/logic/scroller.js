const scroller=(direction)=>{
	if (direction === 'down'){
		document.getElementById('footer').scrollIntoView({behavior:'smooth'});
	} else if (direction === 'up'){
		window.scroll({
			top:0,
			behavior:'smooth'
		});
	}

}

export default scroller;