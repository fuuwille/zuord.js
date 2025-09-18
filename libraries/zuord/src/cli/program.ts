#!/usr/bin/env node
import { Command } from "commander";
import { join } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { env } from "./env";

const tsconfigUrl = import.meta.resolve("zuord/meta/tsconfig.dist.json");
const tsconfigPath = fileURLToPath(tsconfigUrl);

const rollupConfigUrl = import.meta.resolve("zuord/meta/rollup.config.mjs");
const rollupConfigPath = fileURLToPath(rollupConfigUrl);

const program = new Command();

program
.name("zuord")
.description("Zuord CLI")
.version("1.0.0");

program
.command("build")
.description("Build the zuord package")
.option("--library", "Build as library")
.action(async (options) => {
    const cwd = process.cwd();
    const packagePath = join(cwd, "zuord-package.ts");

    console.info("Building zuord package...");
    let pkg;

    try {
        pkg = await import(packagePath);

        if(options.library) {
            console.error("❌ Build cannot continue in library mode");
            process.exit(1);
        }

    } catch (err) {
        if(options.library) {
            console.info("Build will continue as library mode...")
        }
        else {
            console.error("Import hatası:", err);
            process.exit(1);
        }
    }

    const typeOnly = !!pkg?.default?.typeOnly;

    let command = typeOnly
        ? `npx rimraf dist && npx tsc --project "${tsconfigPath}" && npx cpy 'src/**/*.d.ts' dist`
        : `npx rimraf dist && npx rollup -c "${rollupConfigPath}" && npx cpy "src/**/*{.js,.d.ts}" dist`;

    env.tsconfig(() => {
        try {
            execSync(command + " && chmod +x /home/k4yr2/.npm-global/bin/zuord", { stdio: "inherit" });
            console.log(typeOnly ? "✅ Package built as Type-Only." : "✅ Package built as Synchronous.");
        } catch (error: any) {
            console.error(`❌ Error: ${error.message}`);
            process.exit(1);
        }
    });

});

program.parse(process.argv);