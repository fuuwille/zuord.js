import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import tsconfigPaths from "rollup-plugin-tsconfig-paths";
import glob from 'fast-glob';

export const rollupConfig = {
    input: await glob(['src/**/*.ts', '!src/**/*.types.ts', '!**/*.d.ts']),
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    external: [/node_modules/, /^@?zuord\//],
    plugins: [
        resolve({
            extensions: ['.js', '.ts']
        }),
        tsconfigPaths({ tsConfigPath: './tsconfig-dist.json' }),
        typescript({ tsconfig: './tsconfig-dist.json' }),
    ],
}