const defaultConfig = require("@acme/config/eslint-react");

module.exports = {
	...defaultConfig,
	parserOptions: {
		...defaultConfig.parserOptions,
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
	rules: {
		...defaultConfig.rules,
		"@typescript-eslint/no-floating-promises": "off",
		"import/extensions": "off",
		"react/iframe-missing-sandbox": "off",
	},
};
