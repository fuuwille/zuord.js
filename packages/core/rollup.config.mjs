import { createConfig } from '../../rollup.config.mjs';

export default createConfig({
    input: ['src/internal/index', 'src/main/index', 'src/index'],
    tsconfig: './tsconfig-dist.json'
});""