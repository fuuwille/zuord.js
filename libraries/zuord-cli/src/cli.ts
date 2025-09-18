#!/usr/bin/env node
import { exec } from 'child_process';

const command = 'npx rimraf dist && npx rollup -c && npx cpy "src/**/*{.js,.d.ts}" dist';

console.log(`Running: ${command}`);

const child = exec(command);

child.stdout?.pipe(process.stdout);
child.stderr?.pipe(process.stderr);

child.on('exit', (code) => {
    process.exit(code || 0);
});