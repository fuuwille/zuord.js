import { createConfig } from '../../rollup.config.mjs';
import glob from 'fast-glob';

export default createConfig({
    tsconfig: './tsconfig-dist.json',
    input: await glob(['src/**/*.ts', '!**/*.d.ts'])
});