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
        const originalResolveModuleNameLiterals = host.resolveModuleNames?.bind(info.languageServiceHost);

        host.getScriptSnapshot = (fileName: string) => {
            return handleScriptSnapshot(originalGetScriptSnapshot, fileName);
        };

        host.getScriptKind = (fileName: string) => {
            return handleScriptKind(originalGetScriptKind, fileName);
        }

        // @ts-ignore
        host.resolveModuleNameLiterals = (moduleLiterals, containingFile, _redirectedReference, options, _containingSourceFile) => {
            return handleResolveModuleNameLiterals(originalResolveModuleNameLiterals, moduleLiterals, containingFile, options);
        }

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

    // @ts-ignore
    function handleResolveModuleNameLiterals(origin, moduleLiterals, containingFile, options) {
        
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

            const result = typescript.resolveModuleName(
                moduleName,
                containingFile,
                options,
                typescript.sys
            );
            return { resolvedModule: result.resolvedModule };
        });
    }

    return { create };
}