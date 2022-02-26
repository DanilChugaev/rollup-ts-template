import typescript from '@rollup/plugin-typescript';
import html from '@web/rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';

import { DIST_DIR, isDev } from './utils';

export default [
  clear({
    targets: [DIST_DIR],
    watch: true,
  }),

  typescript({
    tsconfig: './tsconfig.json',
  }),

  !isDev ? terser() : null,

  html({
    input: ['src/index.html'],
    extractAssets: false,
    minify: !isDev,
  }),
];
