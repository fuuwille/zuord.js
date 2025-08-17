import { createConfig } from '../../rollup.config.mjs';

export default createConfig({
    input: 'src',
    tsconfig: './tsconfig.json',
    external: ['@zuord/core']
});