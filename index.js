module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "plugin:eslint-plugin-prettier/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "import/extensions": [
      "error",
      "never",
      { svg: "always", json: "always", png: "always" },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    jest: {
      version: 27, // this is set to avoid autodetecting trouble when jest isn't used
    },
  },
}
