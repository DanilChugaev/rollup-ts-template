import typescript from '@rollup/plugin-typescript';
import html from '@web/rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import { visualizer } from 'rollup-plugin-visualizer';

import { DIST_DIR, APP_DIR, isDev, isNeedOpenStats } from './utils';

export default [
  clear({
    targets: [ DIST_DIR ],
    watch: true,
  }),

  typescript({
    tsconfig: './tsconfig.json',
  }),

  !isDev ? terser() : null,

  html({
    input: [ `${APP_DIR}/index.html` ],
    extractAssets: false,
    minify: !isDev,
  }),

  visualizer({
    title: 'Project dependency visualization',
    template: 'sunburst',
    open: isNeedOpenStats,
  }),
];
