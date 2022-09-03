interface IAbbreviateOptions {
	padding?: boolean;
	symbols?: string[];
}

const defaultSymbols = ["", "k", "M", "G", "T", "P", "E"];

const defaultOptions = {
	padding: true,
	symbols: defaultSymbols,
};

export const abbreviateNumber = (
	num: number,
	digit?: number,
	options?: IAbbreviateOptions | IAbbreviateOptions["symbols"],
): string => {
	if (!digit) digit = 1;

	// Previous options style
	if (Array.isArray(options)) {
		options = { symbols: options };
	}

	const { symbols, padding } = { ...defaultOptions, ...options };

	// handle negatives
	const sign = Math.sign(num) >= 0;
	num = Math.abs(num);

	// what tier? (determines SI symbol)
	// eslint-disable-next-line no-bitwise
	const tier = (Math.log10(num) / 3) | 0;

	// if zero, we don't need a suffix
	if (tier === 0) return (!sign ? "-" : "") + num.toString();

	// get suffix and determine scale
	// eslint-disable-next-line security/detect-object-injection
	const suffix = symbols[tier];
	if (!suffix) throw new RangeError();

	const scale = 10 ** (tier * 3);

	// scale the number
	const scaled = num / scale;

	let rounded = scaled.toFixed(digit);
	if (!padding) {
		rounded = String(Number(rounded));
	}

	// format number and add suffix
	return (!sign ? "-" : "") + rounded + suffix;
};
