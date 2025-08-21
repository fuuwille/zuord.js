import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import tsconfigPaths from "rollup-plugin-tsconfig-paths";

export function createConfig({ input, tsconfig, external = [] }) {
    return {
        input,
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
        },
        external: [/node_modules/],
        plugins: [
            resolve({
                extensions: ['.js', '.ts']
            }),
            tsconfigPaths({ tsConfigPath: tsconfig }),
            typescript({ tsconfig }),
        ],
    };
}