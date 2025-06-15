import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        sourcemap: true,
    },
    plugins: [
        resolve(),
        typescript({
            tsconfig: './tsconfig.dist.json',
            declaration: true,
            declarationMap: true,
            emitDeclarationOnly: false,
        }),
    ],
};