const globals = require("globals")
const js = require("@eslint/js")

module.exports = [
	js.configs.recommended,
	{
		rules: {
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
			reportUnusedDisableDirectives: true,
		},
	},
]
