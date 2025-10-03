import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

const pluginPath = path.resolve("node_modules/zuord-plugin");
const tempPath = path.resolve("node_modules/zuord-plugin-temp");

async function fixSymlink() {
  try {
    const stats = await fs.lstat(pluginPath);
    if (stats.isSymbolicLink()) {
      console.log("Symlink detected, copying files...");

      // Remove temp folder if it exists
      if (existsSync(tempPath)) {
        await fs.rm(tempPath, { recursive: true, force: true });
      }

      // Copy actual files
      await fs.cp(pluginPath, tempPath, { recursive: true, dereference: true });

      // Remove the symlink
      await fs.rm(pluginPath, { force: true });

      // Rename temp folder to original name
      await fs.rename(tempPath, pluginPath);

      console.log("Symlink replaced with real files.");
    } else {
      console.log("Not a symlink, nothing to do.");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

fixSymlink();