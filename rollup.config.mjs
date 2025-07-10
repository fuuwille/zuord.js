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
            resolve({ preferBuiltins: true }),
            typescript({
                tsconfig,
                declaration: true,
                declarationMap: true,
                emitDeclarationOnly: false,
                skipLibCheck: true
            }),
        ],
    };
}