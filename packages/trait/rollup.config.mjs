import { createConfig } from '../../rollup.config.mjs';

export default createConfig({
    input: 'src/index.d.ts',
    tsconfig: './tsconfig-dist.json'
});