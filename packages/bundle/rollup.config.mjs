import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export const config_lib = [
    {
        input: "src/lib/index.d.ts",
        output: { file: "dist/lib/index.d.ts", format: "es" },
        plugins: [resolve(), dts({ compilerOptions: { baseUrl: "./node_modules/zuord" } })],
    }
];

export const config_type = [
    {
        input: "src/type/index.d.ts",
        output: { file: "dist/type/index.d.ts", format: "es" },
        plugins: [resolve(), dts({ compilerOptions: { baseUrl: "./node_modules/@zuord/type" } })],
    }
];

export const config_core = [
    {
        input: "src/core/index.d.ts",
        output: { file: "dist/core/index.d.ts", format: "es" },
        plugins: [resolve(), dts({ compilerOptions: { baseUrl: "./node_modules/@zuord/core" } })],
    }
];

export const config_trait = [
    {
        input: "src/trait/index.d.ts",
        output: { file: "dist/trait/index.d.ts", format: "es" },
        plugins: [resolve(), dts({ compilerOptions: { baseUrl: "./node_modules/@zuord/trait" } })],
    }
];

export const config_util = [
    {
        input: "src/util/index.d.ts",
        output: { file: "dist/util/index.d.ts", format: "es" },
        plugins: [resolve(), dts({ compilerOptions: { baseUrl: "./node_modules/@zuord/util" } })],
    }
];

export default defineConfig([
    ...config_lib,
    ...config_type,
    ...config_core,
    ...config_trait,
]);