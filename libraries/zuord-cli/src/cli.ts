#!/usr/bin/env node
import { exec } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

async function main() {
    const cwd = process.cwd();
    const packagePath = join(cwd, "zuord-package.ts");

    if (!existsSync(packagePath)) {
        console.error("❌ Does not found zuord-package.ts");
        process.exit(1);
    }

    console.info("Building zuord package...");
    var pkg;

    try {
        pkg = await import(packagePath);
    } catch (err) {
        console.error("An error occured while importing zuord-package file", err);
        process.exit(1);
    }

    const typeOnly = pkg.default?.typeOnly;
    const command = typeOnly 
        ? "npx rimraf dist && npx rollup -c && npx cpy \"src/**/*{.js,.d.ts}\" dist"
        : "npx rimraf dist && npx tsc --project tsconfig-dist.json && npx cpy 'src/**/*.d.ts' dist";

    const child = exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`❌ Error: ${error.message}`);
            process.exit(1);
        }
        if (stderr) {
            console.error(`⚠️ Stderr: ${stderr}`);
        }
        
        if (typeOnly) {
            console.log("✅ Package built as Type-Only.");
        } else {
            console.log("✅ Package built as Synchronous.");
        }
    });

    child.stdout?.pipe(process.stdout);
    child.stderr?.pipe(process.stderr);
}

main();