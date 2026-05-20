import js from "@eslint/js"

export default [
	{
		...js.configs.recommended,
		name: "tammergard/base/eslint-recommended",
	},
	{
		name: "tammergard/base/rules",
		rules: {
			"no-use-before-define": "off",
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
	},
]
