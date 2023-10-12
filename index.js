const { FlatCompat } = require("@eslint/eslintrc")
const globals = require("global")

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

module.exports = [
	...compat.extends("eslint-config-airbnb-base"),
	...compat.extends("plugin:eslint-plugin-prettier/recommended"),
	{
		rules: {
			"import/extensions": [
				"error",
				"never",
				{ svg: "always", json: "always", png: "always" },
			],

			"import/no-unresolved": "off",
			"import/prefer-default-export": "off",
			"no-use-before-define": "off",
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: true,
		},
	},
]
