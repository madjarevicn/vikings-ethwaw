/**
 * Return a formatted number with decimals and commas.
 *
 * @param {number} number The number to be formatted
 * @return {string} The formatted string of the passed number.
 */
export function numberWithCommas(
	number: number | string,
	decimals = 8,
	removeTrailingZeroes = true,
) {
	if (!Number.isFinite(parseFloat(`${number}`))) return "0";
	if (parseFloat(`${number}`).toString() === "0") return "0";

	const parts = Number.parseFloat(`${number}`).toFixed(decimals).split(".");

	parts[0] = Number(parts[0]).toLocaleString("en");

	let formatted = parts.join(".");

	if (removeTrailingZeroes) {
		formatted = formatted
			.replace(/(\.\d*[1-9])0*$/, "$1") // 123.1200 -> 123.12
			.replace(/\.0*$/, "") // 123.00 -> 123
			.replace(/^0.0+$/, "0"); // 0.00 -> 0
	}

	return formatted;
}
