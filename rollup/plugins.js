import typescript from '@rollup/plugin-typescript';
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
];
