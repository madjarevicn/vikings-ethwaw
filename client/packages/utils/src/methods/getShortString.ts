const getShortString = (string = "", expanded = false, amount = 8) => {
	if (!string) {
		return "";
	}

	if (expanded) {
		return `${string.slice(0, 5)}...${string.slice(-5)}`;
	}

	if (string.length <= amount) {
		return string;
	}

	return `${string.slice(0, amount)}...`;
};

export { getShortString };
