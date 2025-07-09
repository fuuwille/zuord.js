import { createBaseConfig } from '../rollup.base.config.mjs';

export default createBaseConfig({
    input: 'src/index.ts',
    tsconfig: './tsconfig.json',
    //external: ['@zuord/internal']
});