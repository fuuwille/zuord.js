import { createConfig } from '../../rollup.config.mjs';

export default createConfig({
    tsconfig: './tsconfig-dist.json',
    input: [
        'src/internal/',
        'src/main/',
        'src/'
    ]
});