const { FlatCompat } = require("@eslint/eslintrc")
const globals = require("globals")
const js = require("@eslint/js")

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

module.exports = [
	js.configs.recommended,
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
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: [
						"**/*.test.{ts,tsx}", // test files
						"**/eslint.config.{js,mjs,cjs}", // eslint flat config
						"**/.prettierrc.{js,mjs,cjs}", // prettier config
					],
				},
			],
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
