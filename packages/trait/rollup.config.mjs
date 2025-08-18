import { createConfig } from '../../rollup.config.mjs';

export default createConfig({
    input: 'src/index.ts',
    tsconfig: './tsconfig-dist.json',
    external: ['@zuord/type', '@zuord/trait', '@zuord/trait/internal']
});