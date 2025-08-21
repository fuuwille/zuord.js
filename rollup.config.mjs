import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export function createConfig({ input, tsconfig, external = [] }) {
    return {
        input,
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
        },
        external,
        plugins: [
            resolve({ preferBuiltins: true }),
            typescript({ tsconfig })
        ],
    };
}