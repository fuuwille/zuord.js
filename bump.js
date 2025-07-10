import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Pozisyonel: package
const target = process.argv[2];

// İsimli argümanlar
function parseArgs(argv) {
  const args = {};
  for (let i = 3; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
      args[key] = value;
    }
  }
  return args;
}

const args = parseArgs(process.argv);
const bumpType = args.mode ?? 'patch';
const preid = args.preid ?? (bumpType === 'prerelease' ? 'alpha' : undefined);
const shouldPublish = args.publish === true;

const validPackages = ['type', 'util', 'api'];
const targetPackages = target === '.' ? validPackages : [target];

// Geçerlilik kontrolü
if (!target || !targetPackages.every(p => validPackages.includes(p))) {
  console.error(`⛔ Paket adı 'type', 'util', 'api' veya '.' olmalı.`);
  process.exit(1);
}

for (const pkg of targetPackages) {
  const pkgPath = join(__dirname, pkg, 'package.json');
  const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const oldVersion = pkgJson.version;

  let [baseVersion, preRelease] = oldVersion.split('-');
  const baseParts = baseVersion.split('.').map(Number);
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
      if (preRelease?.startsWith(preid)) {
        const preParts = preRelease.split('.');
        const current = parseInt(preParts[1] ?? '0', 10);
        newVersion = `${baseVersion}-${preid}.${current + 1}`;
      } else {
        baseParts[2] += 1;
        newVersion = `${baseParts.join('.')}-${preid}.0`;
      }
      break;
  }

  pkgJson.version = newVersion;
  writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n');
  console.log(`✅ ${pkg} bumped from ${oldVersion} → ${newVersion}`);

  if (shouldPublish) {
    console.log(`📦 ${pkg} publishing as ${newVersion}...`);
    try {
      execSync(`cd ${pkg} && npm publish --access public --tag ${preid}`, { stdio: 'inherit' });
    } catch (err) {
      console.error(`❌ ${pkg} publish failed:`, err.message);
    }
  }
}