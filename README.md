# Nuxt BCMS

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[BCMS](https://thebcms.com) integration for [Nuxt](https://nuxt.com).

- [✨ &nbsp;Release Notes](CHANGELOG.md)
- [📖 &nbsp;Documentation](https://thebcms.com/docs/integrations/nuxt-js)

## Features

- Seamless integration with BCMS
- Out of the box components for rendering BCMS Images and content
- Automatic TypeScript types generation from your BCMS
- Easy access to BCMS Client API on server and client side
- Support for Private and Public API Keys

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add bcms
```

Then in your `nuxt.config.ts` file, add BCMS configuration. You can find
configuration information on BCMS dashboard in the `API Keys` section.

```ts
export default defineNuxtConfig({
    modules: ['@thebcms/nuxt'],
    // ...
    bcms: {
        privateClientOptions: {
            id: process.env.BCMS_API_KEY,
            injectSvg: true,
        },
        publicClientOptions: {
            id: process.env.NUXT_PUBLIC_BCMS_API_KEY,
            injectSvg: true,
        },
    },
});
```

That's it! You can now use BCMS in your Nuxt app ✨

For more information on how to use BCMS with Nuxt, check out the
[documentation](https://thebcms.com/docs/integrations/nuxt-js).

## Contribution

<details>
  <summary>Local development</summary>
  
```bash
# Install dependencies
npm install

# Generate type stubs

npm run dev:prepare

# Develop with the playground

npm run dev

# Build the playground

npm run dev:build

# Run ESLint

npm run lint

# Run Vitest

npm run test
npm run test:watch

# Release new version

npm run release

```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@thebcms/nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@thebcms/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@thebcms/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@thebcms/nuxt
[license-src]: https://img.shields.io/npm/l/@thebcms/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@thebcms/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
```
