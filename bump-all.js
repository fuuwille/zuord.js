import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const packages = ['type', 'util', 'api'];

for (const pkg of packages) {
  const pkgPath = join(__dirname, pkg, 'package.json');
  const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf8'));

  const oldVersion = pkgJson.version; // örn: 0.4.1-alpha.0 veya 0.4.1-alpha

  let [baseVersion, preRelease] = oldVersion.split('-');

  const baseParts = baseVersion.split('.').map(Number);
  let newVersion;

  if (preRelease) {
    const preParts = preRelease.split('.');
    if (preParts.length === 2 && !isNaN(preParts[1])) {
      const preNum = parseInt(preParts[1], 10) + 1;
      newVersion = `${baseVersion}-${preParts[0]}.${preNum}`;
    } else {
      newVersion = `${baseVersion}-${preRelease}.0`;
    }
  } else {
    baseParts[2] += 1;
    newVersion = `${baseParts.join('.')}-alpha.0`;
  }

  pkgJson.version = newVersion;

  writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n');

  console.log(`${pkg} version bumped from ${oldVersion} to ${newVersion}`);
}
