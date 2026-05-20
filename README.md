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

### Browser globals

This config does not include browser globals by default. To add them, install
[`globals`](https://www.npmjs.com/package/globals) and add them in your own
config:

```js
import globals from "globals"
import tammergardBaseConfig from "@tammergard/eslint-config-base"

export default [
	...tammergardBaseConfig,
	{
		languageOptions: {
			globals: { ...globals.browser },
		},
	},
]
```

## License

MIT
