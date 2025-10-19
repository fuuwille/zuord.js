import path from "path";
import * as caseAnything from "case-anything";
import * as utility from "./utility";
import type ts from "typescript";

export = function (modules: { typescript: typeof ts }) {
    const typescript = modules.typescript;
    
    function create(info : ts.server.PluginCreateInfo) {
        const host = info.languageServiceHost;

        const getScriptSnapshot = host.getScriptSnapshot?.bind(host);
        const getScriptKind = host.getScriptKind?.bind(host);
        const resolveModuleNameLiterals = host.resolveModuleNameLiterals?.bind(host);

        // SCRIPT SNAPSHOT
        {
            const origin = getScriptSnapshot;
            host.getScriptSnapshot = (fileName: string) => {
                const snapshot = typescript.sys.fileExists(fileName) ? origin?.(fileName) : undefined;
                const baseName = utility.getBaseName(fileName) || '';

                const isTZS = utility.isTZSFile(fileName);
                const isTZU = utility.isTZUFile(fileName);
                const isTZV = utility.isTZVFile(fileName);
                const isTZ = isTZS || isTZU || isTZV;
                const isTS = utility.isTSFile(fileName);

                const checkTZS = (fileName: string) => typescript.sys.fileExists(utility.getTZSPath(fileName) || '');
                const checkTZV = (fileName: string) => typescript.sys.fileExists(utility.getTZVPath(fileName) || '');

                if (isTZ && snapshot) {
                    let virtualImports = "";

                    if(isTZS || checkTZS(fileName)) {
                        virtualImports += `\nimport * as ZSchema from './${baseName}.tzs';`;
                    }

                    if(isTZV || checkTZV(fileName)) {
                        virtualImports += `\nimport * as zvariants from './${baseName}.tzv';`;
                    }
                    
                    let text = snapshot.getText(0, snapshot.getLength());
                    const combined = text + virtualImports;

                    return typescript.ScriptSnapshot.fromString(combined);
                }
                else if(isTS) {
                    const hasTZS = checkTZS(fileName);
                    const hasTZU = utility.isTZUFile(fileName);
                    const hasTZV = checkTZV(fileName);
                    const hasZ = hasTZS || hasTZV;

                    if(hasZ && snapshot) {
                        let virtualExports = "";
                        let text = snapshot.getText(0, snapshot.getLength());

                        if(hasTZS) {
                            const name = caseAnything.pascalCase(baseName);

                            virtualExports += `\nexport * as Z${name} from './${baseName}.tzs';`;
                            virtualExports += `\nexport type Z${name} = any;`;
                        }

                        if(hasTZU) {
                            const name = caseAnything.camelCase(baseName);

                            virtualExports += `\nexport * as $${name}Utility from './${baseName}.tzu';`;
                        }

                        if(hasTZV) {
                            const name = caseAnything.camelCase(baseName);

                            virtualExports += `\nimport * as $${name} from './${baseName}.tzv';`;
                            virtualExports += `\ntype z${name}API = typeof $${name};`;
                            virtualExports += `\nexport const z${name} : z${name}API = $${name};`;
                        }

                        const combined = text + virtualExports;
                        return typescript.ScriptSnapshot.fromString(combined);
                    }
                }

                return snapshot;
            };
        }

        // SCRIPT KIND
        {
            const origin = getScriptKind;
            host.getScriptKind = (fileName: string) => {
                if (utility.isTZFile(fileName)) {
                    return typescript.ScriptKind.TS;
                }

                return origin?.(fileName) ?? typescript.ScriptKind.Unknown;
            }
        }

        // RESOLVE MODULE NAME LITERALS
        {
            const origin = resolveModuleNameLiterals;
            host.resolveModuleNameLiterals = (moduleLiterals, containingFile, redirectedReference, options, containingSourceFile, reusedNames) => {
                const customResolved = [];
                const toFallback = [];

                for (const literal of moduleLiterals) {
                    const name = literal.text;

                    if (utility.isTZFile(name)) {
                        const resolvedFileName = path.resolve(path.dirname(containingFile), name);

                        if (typescript.sys.fileExists(resolvedFileName)) {
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