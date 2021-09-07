module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-prettier",
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
};
