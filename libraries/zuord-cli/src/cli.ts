#!/usr/bin/env node
import { exec } from 'child_process';
import path from 'path';

const rootDir = path.resolve('./');

const command = 'npx rimraf dist && npx rollup -c && npx cpy "src/**/*{.js,.d.ts}" dist';

console.log(`Building Zuord Package...`);

const child = exec(command, { cwd: rootDir });

child.stdout?.pipe(process.stdout);
child.stderr?.pipe(process.stderr);

child.on('exit', (code) => {
    process.exit(code || 0);
});
