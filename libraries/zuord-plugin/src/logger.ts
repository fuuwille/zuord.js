// logger.js
const fs = require("fs");
const path = require("path");
const os = require("os");

const logFile = path.join(os.homedir(), "Documents", "zs-plugin.log");

// @ts-ignore
export function log(...args) {
  const msg = args.map(a => (typeof a === "string" ? a : JSON.stringify(a))).join(" ");
  fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${msg}\n`);
}