
const pause = (num) => {
	return new Promise(resolve => {
		setTimeout(() => {
		resolve('resolved');
	}, num);
});
}

export default pause;

