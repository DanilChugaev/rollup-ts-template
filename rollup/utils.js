import { readdirSync } from 'fs';
import path from 'path';

/** Main app directory */
export const APP_DIR = 'src';

/** Destination directory */
export const DIST_DIR = 'dist';

/** If app run in dev mode */
export const isDev = !!process.argv.find(el => el === '--config-dev');

/** If need visualize code statisticss of project */
export const isNeedOpenStats = !!process.argv.find(el => el === '--stats');

/** Main entry files in app directory */
export const files = readdirSync(APP_DIR)
  .filter(el => path.extname(el) === '.ts')
  .map(el => `${APP_DIR}/${el}`);