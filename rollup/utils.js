import { readdirSync } from 'fs';
import path from 'path';

/** Main app directory */
export const APP_DIR = 'src';

/** Destination directory */
export const DIST_DIR = 'dist';

/** If app run in dev mode */
export const isDev = !!process.argv.find(el => el === '--config-dev');

/** Main entry files in app directory */
export const files = readdirSync(APP_DIR)
  .filter(el => path.extname(el) === ".ts")
  .map(el => `${APP_DIR}/${el}`);