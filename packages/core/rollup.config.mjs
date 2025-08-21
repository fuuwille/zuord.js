import { createConfig } from '../../rollup.config.mjs';

export default createConfig({
    input: ['src/index.ts', 'src/internal/index.ts'],
    tsconfig: './tsconfig-dist.json'
});