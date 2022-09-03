const defaultConfig = require("@acme/config/eslint-react");

module.exports = {
	...defaultConfig,
	parserOptions: {
		...defaultConfig.parserOptions,
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
	rules: {
		...defaultConfig?.rules,
		"eslint-comments/no-use": "off",
		"complexity": "off",
	},
};
