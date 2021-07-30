export const testFunction= ():void  => {
	let count = 0;
	setInterval(() => {
		console.log(count++);
	}, 1000);
};
