#!/usr/bin/env node
import { Command } from "commander";
import { dirname, join } from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

const tsconfigUrl = import.meta.resolve("zuord/meta/tsconfig-dist.json");
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

    if (options.library) {
        console.log("📦 Library build seçildi");
    }

    const child = exec(command + " && chmod +x /home/k4yr2/.npm-global/bin/zuord", (error) => {
        if (error) {
            console.error(`❌ Hata: ${error.message}`);
            process.exit(1);
        }

        console.log(typeOnly ? "✅ Package built as Type-Only." : "✅ Package built as Synchronous.");
    });

    child.stdout?.pipe(process.stdout);
    child.stderr?.pipe(process.stderr);
});

program.parse(process.argv);