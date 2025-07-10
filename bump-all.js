import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const bumpType = process.argv[2] ?? 'prerelease';
const preid = process.argv[3]; // opsiyonel: alpha, beta, rc vs.

const packages = ['type', 'util', 'api'];

for (const pkg of packages) {
  const pkgPath = join(__dirname, pkg, 'package.json');
  const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const oldVersion = pkgJson.version;

  let [baseVersion, preRelease] = oldVersion.split('-');
  let baseParts = baseVersion.split('.').map(Number);
  let newVersion;

  switch (bumpType) {
    case 'major':
      baseParts[0] += 1;
      baseParts[1] = 0;
      baseParts[2] = 0;
      newVersion = preid ? `${baseParts.join('.')}-${preid}` : `${baseParts.join('.')}`;
      break;

    case 'minor':
      baseParts[1] += 1;
      baseParts[2] = 0;
      newVersion = preid ? `${baseParts.join('.')}-${preid}` : `${baseParts.join('.')}`;
      break;

    case 'patch':
      baseParts[2] += 1;
      newVersion = preid ? `${baseParts.join('.')}-${preid}` : `${baseParts.join('.')}`;
      break;

    case 'prerelease':
    default:
      if (preRelease) {
        const preParts = preRelease.split('.');
        if (preParts.length === 2 && !isNaN(preParts[1])) {
          const preNum = parseInt(preParts[1], 10) + 1;
          newVersion = `${baseVersion}-${preParts[0]}.${preNum}`;
        } else {
          // alpha gibi ise .0 ile başlat
          newVersion = `${baseVersion}-${preRelease}.0`;
        }
      } else {
        // prerelease başlat
        baseParts[2] += 1;
        newVersion = preid ? `${baseParts.join('.')}-${preid}` : `${baseParts.join('.')}-alpha`;
      }
      break;
  }

  pkgJson.version = newVersion;
  writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n');
  console.log(`${pkg} bumped from ${oldVersion} → ${newVersion}`);
}
