import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export function createConfig({ input, tsconfig, external = [] }) {
    return {
        input,
            output: {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            sourcemap: true,
        },
        external,
        plugins: [
            resolve(),
            typescript({
                tsconfig,
                declaration: true,
                declarationMap: true,
                emitDeclarationOnly: false,
            }),
        ],
    };
}