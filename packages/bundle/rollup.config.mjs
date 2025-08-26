import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export const config_lib = [
    {
        input: "src/zuord/index.d.ts",
        output: { file: "dist/zuord/index.d.ts", format: "es" },
        plugins: [resolve(), dts({ compilerOptions: { baseUrl: "./node_modules/zuord" } })],
    }
]

export default defineConfig([
    ...config_lib
]);