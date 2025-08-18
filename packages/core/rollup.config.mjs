import { createConfig } from '../../rollup.config.mjs';

export default createConfig({
    input: 'src/index',
    tsconfig: './tsconfig.json'
});