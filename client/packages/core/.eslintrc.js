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
		"complexity": "off",
		"import/first": "error",
		"import/newline-after-import": "off",
		// "simple-import-sort/imports": [
		// "error",
		// {
		// groups: [
		// Style imports.
		// ["^.+\\.?(scss)$"],
		// Packages `react` related packages come first.
		// ["^react", "^@?\\w"],
		// Internal packages.
		// ["^(atoms|molecules|organisms)(/.*|$)"],
		// Side effect imports.
		// ["^\\u0000"],
		// Parent imports. Put `..` last.
		// ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
		// Other relative imports. Put same-folder imports and `.` last.
		// ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
		// ],
		// },
		// ],
	},
};
