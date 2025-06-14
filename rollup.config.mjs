import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/zuord.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,      // ← işte burada
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