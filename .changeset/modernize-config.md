---
"@tammergard/eslint-config-base": major
---

Modernize the config and require ESLint 9.

Breaking changes:

- The package is now ESM-only. Import with `import tammergardBaseConfig from "@tammergard/eslint-config-base"` instead of `require(...)`.
- ESLint 10 is now required (peer dependency `>=10.0.0`).
- Browser globals are no longer included by default. Add them explicitly in your project's `eslint.config.js` if you need them (`import globals from "globals"` and add `{ languageOptions: { globals: { ...globals.browser } } }`).
- Prettier is no longer a peer dependency — this config does not integrate with Prettier.
- Minimum Node.js version is now 24.

Other changes:

- TypeScript type definitions are now shipped (`index.d.ts`).
- Each config block now has a `name` for clearer ESLint output.
