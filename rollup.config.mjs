import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export function createConfig({ input, tsconfig }) {
    return {
        input,
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
        },
        external: [/^@?zuord\//],
        plugins: [
            resolve({ preferBuiltins: true }),
            typescript({ tsconfig })
        ],
    };
}