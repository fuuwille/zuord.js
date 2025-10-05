import path from "path";
import type ts from "typescript";

const utility = require("./utility");

export = function (modules: { typescript: typeof ts }) {
    const typescript = modules.typescript;

    let _getScriptKind: ts.LanguageServiceHost["getScriptKind"] | undefined;
    let _resolveModuleNameLiterals: ts.LanguageServiceHost["resolveModuleNameLiterals"] | undefined;

    function create(info : ts.server.PluginCreateInfo) {
        const host = info.languageServiceHost;

        _getScriptKind = host.getScriptKind?.bind(host);
        _resolveModuleNameLiterals = host.resolveModuleNameLiterals?.bind(host);

        // SCRIPT SNAPSHOT
        {
            const origin = host.getScriptSnapshot?.bind(host);
            host.getScriptSnapshot = (fileName: string) => {
                const snapshot = origin?.(fileName);
                const baseName = utility.getBaseName(fileName) || '';

                const isZS = utility.isZSFile(fileName);
                const isZV = utility.isZVFile(fileName);
                const isZ = isZS || isZV;
                const isTS = utility.isTSFile(fileName);

                const checkZS = (fileName: string) => typescript.sys.fileExists(utility.getZSPath(fileName) || '');
                const checkZV = (fileName: string) => typescript.sys.fileExists(utility.getZVPath(fileName) || '');

                if (isZ && snapshot) {
                    let virtualImports = "";


                    if(isZS || checkZS(fileName)) {
                        virtualImports += `\nimport * as ZSchema from './${baseName}.zs';`;
                    }

                    if(isZV || checkZV(fileName)) {
                        virtualImports += `\nimport * as zvariants from './${baseName}.zv';`;
                    }
                    
                    let text = snapshot.getText(0, snapshot.getLength());
                    const combined = text + virtualImports;

                    return typescript.ScriptSnapshot.fromString(combined);
                }
                else if(isTS) {
                    const hasZS = checkZS(fileName);
                    const hasZV = checkZV(fileName);
                    const hasZ = hasZS || hasZV;

                    if(hasZ) {
                        let virtualExports = "";

                        if(hasZS) {
                            virtualExports += `\nexport * as ZSCH from './${baseName}.zs';`;
                        }

                        if(hasZV) {
                            virtualExports += `\nexport * as ZVAR from './${baseName}.zv';`;
                        }

                        if(snapshot) {
                            let text = snapshot.getText(0, snapshot.getLength());
                            const combined = text + virtualExports;

                            return typescript.ScriptSnapshot.fromString(combined);
                        }

                        return typescript.ScriptSnapshot.fromString(virtualExports);
                    }
                }

                return snapshot;
            };
        }

        // SCRIPT KIND
        {
            const origin = host.getScriptKind?.bind(host);
            host.getScriptKind = (fileName: string) => {
                if (utility.isZSFile(fileName) || utility.isZVFile(fileName)) {
                    return typescript.ScriptKind.TS;
                }

                return origin?.(fileName) ?? typescript.ScriptKind.Unknown;
            }
        }

        // RESOLVE MODULE NAME LITERALS
        {
            const origin = host.resolveModuleNameLiterals?.bind(host);

            host.resolveModuleNameLiterals = (moduleLiterals, containingFile, redirectedReference, options, containingSourceFile, reusedNames) => {
                const customResolved = [];
                const toFallback = [];

                for (const literal of moduleLiterals) {
                    const name = literal.text;

                    if (utility.isZFile(name)) {
                        const resolvedFileName = path.resolve(path.dirname(containingFile), name);

                        if (typescript.sys.fileExists(resolvedFileName)) {
                            customResolved.push({ resolvedModule: { resolvedFileName, extension: typescript.Extension.Ts } });
                            continue;
                        }
                    }

                    if(utility.isTSFile(containingFile) || utility.isZFile(containingFile)) {
                        const resolvedFileName = path.resolve(path.dirname(containingFile), name, ".ts");

                        if(!typescript.sys.fileExists(resolvedFileName)) {
                            customResolved.push({ resolvedModule: { resolvedFileName, extension: typescript.Extension.Ts } });
                            continue;
                        }
                    }

                    customResolved.push(undefined);
                    toFallback.push(literal);
                }

                if (toFallback.length && origin) {
                    const fallbackResults = origin(
                        toFallback,
                        containingFile,
                        redirectedReference,
                        options,
                        containingSourceFile,
                        reusedNames
                    );

                    let fallbackIndex = 0;
                    for (let i = 0; i < customResolved.length; i++) {
                        if (!customResolved[i]) {
                            customResolved[i] = fallbackResults?.[fallbackIndex++];
                        }
                    }
                }

                return customResolved as ts.ResolvedModuleWithFailedLookupLocations[];
            }
        }

        return info.languageService;
    }

    return { create };
}