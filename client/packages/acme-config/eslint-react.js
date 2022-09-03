module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
		project: "./tsconfig.eslint.json",
	},
	settings: {
		"react": {
			version: "detect",
		},
		"import/resolver": {
			node: {
				paths: ["src"],
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:listeners/recommended",
		"plugin:github/recommended",
		"plugin:regexp/recommended",
		"plugin:security/recommended",
		"@fullstacksjs",
		"@fullstacksjs/eslint-config/typecheck",
		"plugin:storybook/recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended", // Make sure this is always the last element in the array.
	],
	plugins: [
		"@typescript-eslint",
		"simple-import-sort",
		"prettier",
		"github",
		"regexp",
	],
	rules: {
		"max-lines-per-function": ["error", { max: 250 }],
		"@typescript-eslint/no-throw-literal": "off",
		"@typescript-eslint/switch-exhaustiveness-check": "off",
		"i18n-text/no-en": "off",
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",
		"react/jsx-fragments": ["error", "element"],
		"fp/no-let": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-unused-expressions": "off",
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
			},
		],
		"no-use-before-define": "off",
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/accessible-emoji": "off",
		"react/prop-types": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"camelcase": "off",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "enum",
				format: ["StrictPascalCase"],
			},
			{
				selector: "enumMember",
				format: ["UPPER_CASE"],
			},
			{
				selector: "variable",
				format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
			},
			{
				selector: "parameter",
				format: ["strictCamelCase"],
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
			{
				selector: "interface",
				format: [],
				custom: {
					regex: "^I[A-Z][A-Za-z\\d]*(Props)?$",
					match: true,
				},
			},
		],
		"simple-import-sort/imports": "off",
		"simple-import-sort/exports": "off",
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
		"filenames/match-regex": "off",
		"import/no-unresolved": ["error", { ignore: ["@*"] }],
	},
	ignorePatterns: [
		"**/*.js",
		"**/*.json",
		"**/*.html",
		"node_modules",
		"public",
		"styles",
		".next",
		"coverage",
		"dist",
		".turbo",
		"vite.config.ts",
		"*/node_modules",
		"./node_modules",
		"**/node_modules",
		"packages/acme-templates/**",
	],
};
