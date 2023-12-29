# Nuxt3 BCROS Styling & Fonts Layer

This layer was created to enhance DX when creating BCROS applications.
The BC Gov color theme, BCSans font and BC favicon are configured using tailwindcss.

Please see the tailwind.config.ts file for specifics.

Also included are several common npm packages and nuxt modules. Please see the package.json and nuxt.config.ts for specifics.

Also included are some presets for nuxt/ui components in app.config.ts, such as primary/secondary color, button/input variants etc. Please see file for specifics.

## Setup for Local Dev

Make sure to install the dependencies:

```bash
pnpm install
```

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Distributing Layer

The Nuxt layer is shaped exactly the same as any other Nuxt project, except you can publish it on NPM.

To do so, you only have to check if the `package.json` is valid:

- main must be set to `"main": "./nuxt.config.ts"`
- any dependencies you want included in the layer must be installed in dependencies, NOT devDependencies
- make sure to update package version

Then run:

```bash
npm publish --access public
```

It is not necessary to run `pnpm run build` to successfully publish a layer.

## Using Layer

To install layer:

```bash
pnpm i -D @dwol/layer-test1
```

Then add the dependency to the `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: "@dwol/layer-test1",
});
```
