module.exports = {
	extends: [
		"eslint-config-airbnb-base",
		"plugin:eslint-plugin-prettier/recommended",
	],
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
	env: {
		browser: true,
	},
}
