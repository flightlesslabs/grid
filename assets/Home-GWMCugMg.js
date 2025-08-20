import{j as e,S as t}from"./blocks-BHJIFIoa.js";import{useMDXComponents as r}from"./index-CP5hrkJi.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-N8KK-9Bi.js";const l=`{
  "name": "@flightlesslabs/grid",
  "version": "0.1.0",
  "scripts": {
    "build": "vite build && pnpm run prepack",
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "prepack": "svelte-kit sync && svelte-package && publint",
    "svelte-check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "format": "prettier --write .",
    "lint": "prettier --check . && eslint .",
    "dev": "storybook dev -p 6006",
    "build-storybook": "storybook build && touch ./storybook-static/.nojekyll",
    "check": "pnpm run svelte-check && eslint . && pnpm run lint",
    "check:fix": "pnpm run svelte-check && eslint . && pnpm run format"
  },
  "homepage": "https://flightlesslabs.github.io/grid",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/flightlesslabs/grid.git"
  },
  "license": "MIT",
  "files": [
    "dist",
    "!dist/**/*.test.*",
    "!dist/**/*.spec.*",
    "src/lib",
    "!src/lib/**/*.test.*",
    "!src/lib/**/*.spec.*",
    "!src/lib/stories/**/*.stories.*",
    "!src/lib/stories/**/*.mdx",
    "!src/lib/stories/assets/**/*.png",
    "!src/lib/stories/assets/**/*.jpg"
  ],
  "sideEffects": [
    "**/*.css"
  ],
  "svelte": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    }
  },
  "peerDependencies": {
    "svelte": "^5.0.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^4.1.0",
    "@eslint/compat": "^1.2.5",
    "@eslint/js": "^9.18.0",
    "@storybook/addon-a11y": "^9.1.2",
    "@storybook/addon-docs": "^9.1.2",
    "@storybook/addon-svelte-csf": "^5.0.7",
    "@storybook/addon-vitest": "^9.1.2",
    "@storybook/sveltekit": "^9.1.2",
    "@sveltejs/adapter-auto": "^6.0.0",
    "@sveltejs/adapter-static": "^3.0.9",
    "@sveltejs/kit": "^2.22.0",
    "@sveltejs/package": "^2.0.0",
    "@sveltejs/vite-plugin-svelte": "^6.0.0",
    "@types/node": "^22",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-storybook": "^9.1.2",
    "eslint-plugin-svelte": "^3.0.0",
    "globals": "^16.0.0",
    "prettier": "^3.4.2",
    "prettier-plugin-svelte": "^3.3.3",
    "publint": "^0.3.2",
    "sass": "^1.90.0",
    "storybook": "^9.1.2",
    "svelte": "^5.0.0",
    "svelte-check": "^4.0.0",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^5.0.0",
    "typescript-eslint": "^8.20.0",
    "vite": "^7.0.4"
  },
  "keywords": [
    "svelte"
  ],
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild"
    ]
  },
  "volta": {
    "node": "22.18.0",
    "pnpm": "10.15.0"
  }
}
`;function i(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs("main",{style:{textAlign:"center"},children:[e.jsx(n.h1,{id:"grid",children:"Grid"}),e.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(l)?.version]}),e.jsx("h3",{style:{fontWeight:400},children:"Grid component for Svelte."}),e.jsxs(n.h3,{id:"github---npm",children:[e.jsx(n.a,{href:"https://github.com/flightlesslabs/grid",rel:"nofollow",children:"Github"})," - ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@flightlesslabs/grid",rel:"nofollow",children:"npm"})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"pnpm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/grid
`}),`
`,e.jsx(n.p,{children:"npm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/grid
`}),`
`,e.jsx(n.h2,{id:"use-it",children:"Use it!"}),`
`,e.jsxs(n.p,{children:["Lets import ",e.jsx(n.a,{href:"?path=/docs/grid--docs",children:"Grid"})," component."]}),`
`,e.jsx(t,{dark:!0,language:"js",code:`
import { Grid, Row, Column } '@flightlesslabs/grid';
`})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
