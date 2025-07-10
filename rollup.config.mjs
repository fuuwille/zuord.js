import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export function createConfig({ input, tsconfig }) {
    return {
        input,
            output: {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            sourcemap: true,
        },
        external: ["zuord", "@zuord/type"],
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