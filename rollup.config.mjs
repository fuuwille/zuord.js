import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export function createConfig({ input, tsconfig = null }) {
    return {
        input,
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
        },
        external: [/^@zuord\//],
        plugins: [
            resolve({ preferBuiltins: true }),
            tsconfig && typescript({ tsconfig }),
            !tsconfig && dts()
        ].filter(Boolean),
    };
}