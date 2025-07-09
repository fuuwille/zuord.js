import { createConfig } from '../rollup.base.config.mjs';

export default createConfig({
    input: 'src/index.ts',
    tsconfig: './tsconfig.json',
    //external: ['@zuord/internal']
});