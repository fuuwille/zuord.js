import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export const config_lib = [
    {
        input: "$/lib/index.js",
        output: { file: "lib/index.js", format: "esm" },
        plugins: [resolve()],
    },
    {
        input: "$/lib/index.d.ts",
        output: { file: "lib/index.d.ts", format: "es" },
        plugins: [dts()],
    }
];

export const config_type = [
    {
        input: "$/type/index.js",
        output: { file: "type/index.js", format: "esm" },
        plugins: [resolve()],
    },
    {
        input: "$/type/index.d.ts",
        output: { file: "type/index.d.ts", format: "es" },
        plugins: [dts()],
    }
];

export const config_core = [
    {
        input: "$/core/index.js",
        output: { file: "core/index.js", format: "esm" },
        plugins: [resolve()],
    },
    {
        input: "$/core/index.d.ts",
        output: { file: "core/index.d.ts", format: "es" },
        plugins: [dts()],
    }
];

export const config_trait = [
    {
        input: "$/trait/index.d.ts",
        output: { file: "trait/index.d.ts", format: "es" },
        plugins: [dts()],
    }
];

export const config_util = [
    {
        input: "$/util/index.d.ts",
        output: { file: "util/index.d.ts", format: "es" },
        plugins: [dts()],
    }
];

export default defineConfig([
    ...config_lib,
    ...config_type,
    ...config_core,
    ...config_trait,
    ...config_util
]);