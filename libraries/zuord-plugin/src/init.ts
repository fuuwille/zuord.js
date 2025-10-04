import path from "path";
import { log } from "./logger";

const utility = require("./utility");
const caseAnything = require("case-anything");

// @ts-ignore
export = function (modules) {
    const typescript = modules.typescript;

    // @ts-ignore
    function create(info) {
        const host = info.languageServiceHost;
        log("Plugin loaded for project:", info.project.getProjectName());

        const originalGetScriptSnapshot = host.getScriptSnapshot?.bind(host);
        const originalGetScriptKind = host.getScriptKind?.bind(host);

        host.getScriptSnapshot = (fileName: string) => {
            return handleScriptSnapshot(originalGetScriptSnapshot, fileName);
        };

        host.getScriptKind = (fileName: string) => {
            return handleScriptKind(originalGetScriptKind, fileName);
        }

    const oldResolve = info.languageServiceHost.resolveModuleNames?.bind(info.languageServiceHost);
    
        // @ts-ignore
info.languageServiceHost.resolveModuleNameLiterals = (moduleLiterals,containingFile,redirectedReference,options,containingSourceFile
) => {
    // @ts-ignore
  return moduleLiterals.map((literal) => {
    const moduleName = literal.text;

    if (moduleName.endsWith(".zs")) {
      const resolvedFileName = path.resolve(path.dirname(containingFile), moduleName);

      if (typescript.sys.fileExists(resolvedFileName)) {
        log("Resolved .zs literal:", moduleName, "→", resolvedFileName);
        return {
          resolvedModule: {
            resolvedFileName,
            extension: typescript.Extension.Ts, // TS gibi parse et
          },
        };
      }
    }

    if (moduleName.endsWith(".zv")) {
      const resolvedFileName = path.resolve(path.dirname(containingFile), moduleName);

      if (typescript.sys.fileExists(resolvedFileName)) {
        log("Resolved .zv literal:", moduleName, "→", resolvedFileName);
        return {
          resolvedModule: {
            resolvedFileName,
            extension: typescript.Extension.Ts, // TS gibi parse et
          },
        };
      }
    }

    // fallback → orijinal
    const result = typescript.resolveModuleName(
      moduleName,
      containingFile,
      options,
      typescript.sys
    );
    return { resolvedModule: result.resolvedModule };
  });
};

        return info.languageService;
    }

    // @ts-ignore
    function handleScriptSnapshot(origin, fileName: string) {
        const snapshot = origin?.(fileName);

        const flag1 = utility.isZVariantsFile(fileName);
        const flag2 = utility.isZSchemaFile(fileName);
        const flag3 = flag1 || flag2;

        if (snapshot && flag3) {
            let virtualImports = "";

            const baseName = utility.getBaseName(fileName) || '';

            if (flag1) {
                virtualImports += `\nimport * as ZSchema from './${baseName}.zs';`;
            }
            else if (flag2) {
                virtualImports += `\nimport * as zvariants from './${baseName}.zv';`;
            }
            
            let text = snapshot.getText(0, snapshot.getLength());
            const combined = text + virtualImports;

            return typescript.ScriptSnapshot.fromString(combined);
        }

        return snapshot;
    }

    // @ts-ignore
    function handleScriptKind(origin, fileName: string) {
        if (utility.isZVariantsFile(fileName) || utility.isZSchemaFile(fileName)) {
            return typescript.ScriptKind.TS;
        }

        return origin?.(fileName) ?? typescript.ScriptKind.Unknown;
    }

    return { create };
}