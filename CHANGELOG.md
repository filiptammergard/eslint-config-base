# @tammergard/eslint-config-base

## 6.1.1

### Patch Changes

- 656a496: Use `devEngines` instead of `engines` for the Node version requirement, so it applies to development only and no longer constrains consumers of the package.

## 6.1.0

### Minor Changes

- eb5c7e9: Ignore `dist/` by default. Consumers that build to `dist/` no longer need to
  add their own `{ ignores: ["dist"] }` block.

## 6.0.0

### Major Changes

- 61fc958: Modernize the config and require ESLint 9.

  Breaking changes:
  - The package is now ESM-only. Import with `import tammergardBaseConfig from "@tammergard/eslint-config-base"` instead of `require(...)`.
  - ESLint 10 is now required (peer dependency `>=10.0.0`).
  - Browser globals are no longer included by default. Add them explicitly in your project's `eslint.config.js` if you need them (`import globals from "globals"` and add `{ languageOptions: { globals: { ...globals.browser } } }`).
  - Prettier is no longer a peer dependency — this config does not integrate with Prettier.
  - Minimum Node.js version is now 24.

  Other changes:
  - TypeScript type definitions are now shipped (`index.d.ts`).
  - Each config block now has a `name` for clearer ESLint output.

## 5.1.0

### Minor Changes

- b726324: Simplify a lot.

## 5.0.6

### Patch Changes

- 73872cf: Add test file to ignore.

## 5.0.5

### Patch Changes

- 4609dc0: Allow inline config.

## 5.0.4

### Patch Changes

- 6ef7d2e: Ignpre extraneous deps in prettier config.

## 5.0.3

### Patch Changes

- 4fee78c: Put no-extraneous-dependencies rule inside rule object.

## 5.0.2

### Patch Changes

- 24b101b: Don't spread js config.

## 5.0.1

### Patch Changes

- 4b7e01e: Use exact same config as when doing eslintrc.

## 5.0.0

### Major Changes

- 0738016: Migrate to flat config format

## 4.0.4

### Patch Changes

- 2c8acf4: Update dependency eslint-config-prettier to v9.

## 4.0.3

### Patch Changes

- fe00465: fix(deps): update dependency eslint-plugin-import to v2.28.0
- f27c72b: fix(deps): update dependency eslint-config-prettier to v8.9.0

## 4.0.2

### Patch Changes

- e76dea5: Support Prettier v3

## 4.0.1

### Patch Changes

- 3be7dd7: Publish with provenance.

## 4.0.0

### Major Changes

- eb99910: Update peer dependencies.
