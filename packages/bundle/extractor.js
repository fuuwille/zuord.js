#!/usr/bin/env node
import fs from "fs";
import path from "path";

if (process.argv.length < 4) {
  console.error("Usage: node filter-tsignore.js <sourceDir> <targetDir>");
  process.exit(1);
}

const srcDir = process.argv[2];
const outDir = process.argv[3];

function processFile(srcPath, outPath) {
  const content = fs.readFileSync(srcPath, "utf-8");
  const lines = content.split("\n");

  const filteredLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "// @ts-ignore") {
      i++; // Sonraki satırı da atla
      continue;
    }
    filteredLines.push(line);
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, filteredLines.join("\n"));
  console.log(`Processed: ${srcPath} -> ${outPath}`);
}

function walkDir(dirSrc, dirOut) {
  const entries = fs.readdirSync(dirSrc, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(dirSrc, entry.name);
    const outPath = path.join(dirOut, entry.name);

    if (entry.isDirectory()) {
      walkDir(srcPath, outPath);
    } else if (entry.isFile() && srcPath.endsWith(".d.ts")) {
      processFile(srcPath, outPath);
    } else if (entry.isFile()) {
      // Diğer dosyaları da orijinal haliyle kopyala
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.copyFileSync(srcPath, outPath);
    }
  }
}

walkDir(srcDir, outDir);
console.log("All done.");