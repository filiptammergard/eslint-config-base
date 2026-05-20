# @tammergard/eslint-config-base

A sharable ESLint config for JavaScript with personal preferences.

## Installation

Install this ESLint config and its peer dependency:

```bash
# npm
npm install --save-dev @tammergard/eslint-config-base eslint

# pnpm
pnpm add -D @tammergard/eslint-config-base eslint

# yarn
yarn add -D @tammergard/eslint-config-base eslint
```

Requires ESLint 10 (flat config) and Node.js 24+.

## Usage

Add the config to your `eslint.config.js`:

```js
import tammergardBaseConfig from "@tammergard/eslint-config-base"

export default [...tammergardBaseConfig]
```

## License

MIT
