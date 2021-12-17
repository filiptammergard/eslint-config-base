module.exports = {
  plugins: ["eslint-plugin-prettier"],
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
  },
}
