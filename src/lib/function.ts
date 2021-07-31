const testFunction= ():void  => {
	let count = 0;
	setInterval(() => {
		console.log(count++);
	}, 1000);
};
let FunctionLib = { testFunction };

export default FunctionLib;
