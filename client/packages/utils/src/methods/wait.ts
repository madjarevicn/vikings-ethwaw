const wait = (t: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, t);
	});

export { wait };
