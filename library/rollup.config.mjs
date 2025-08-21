import { createConfig } from '../rollup.config.mjs';

export default createConfig({
    input: ['src/index', 'src/internal/index', 'src/extended/index'],
    tsconfig: './tsconfig-dist.json',
});