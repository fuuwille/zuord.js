import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export function createConfig({ input, tsconfig, external = ["zuord", "zuord/intenal", "@zuord/type", "@zuord/core", "@zuord/util", "@zuord/trait"] }) {
    return {
        input,
        output: {
            dir: 'dist',
            format: 'esm'
        },
        external: [/^@zuord\//],
        plugins: [
            resolve({ preferBuiltins: true }),
            typescript({ tsconfig }),
        ],
    };
}