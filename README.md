# @tammergard/eslint-config-base

A sharable ESLint config for JavaScript with personal preferences.

## Installation

Install this ESLint config as a dev dependency:

```bash
# npm
npm install @tammergard/eslint-config-base --save-dev

# yarn
yarn add @tammergard/eslint-config-base --dev

# pnpm
pnpm add @tammergard/eslint-config-base --save-dev
```

Then also install all peer dependencies.

## Usage

Add the config to your `eslint.config.js` file:

```js
const tammergardBaseConfig = require("@tammergard/eslint-config-base")

module.exports = [...tammergardBaseConfig]
```

## License

MIT
