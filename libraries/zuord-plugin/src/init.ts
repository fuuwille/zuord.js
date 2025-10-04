import path from "path";
import { log } from "./logger";

const utility = require("./utility");

// @ts-ignore
export = function (modules) {
    const typescript = modules.typescript;

    // @ts-ignore
    function create(info) {
        const host = info.languageServiceHost;

        const originalGetScriptSnapshot = host.getScriptSnapshot?.bind(host);
        const originalGetScriptKind = host.getScriptKind?.bind(host);
        const originalResolveModuleNameLiterals = host.resolveModuleNameLiterals?.bind(host);

        host.getScriptSnapshot = (fileName: string) => {
            return handleScriptSnapshot(originalGetScriptSnapshot, fileName);
        };

        host.getScriptKind = (fileName: string) => {
            return handleScriptKind(originalGetScriptKind, fileName);
        }

        // @ts-ignore
        host.resolveModuleNameLiterals = (moduleLiterals, containingFile, redirectedReference, options, containingSourceFile) => {
            return handleResolveModuleNameLiterals(originalResolveModuleNameLiterals, moduleLiterals, containingFile, redirectedReference, options, containingSourceFile);
        }

        // @ts-ignore
        host.fileExists = (fileName: string) => {
            if (!typescript.sys.fileExists(fileName)) {
                const checkZS = (fileName: string) => typescript.sys.fileExists(utility.getZSPath(fileName) || '');
                const checkZV = (fileName: string) => typescript.sys.fileExists(utility.getZVPath(fileName) || '');

                if(checkZS(fileName) || checkZV(fileName)) {
                    return true;
                }

                return false;
            }

            return true;
        }

        host.readFile = (fileName: string) => {
            const content = typescript.sys.readFile(fileName);

            if (utility.isTSFile(fileName)) {
                const hasZS = typescript.sys.fileExists(utility.getZSPath(fileName) || '');
                const hasZV = typescript.sys.fileExists(utility.getZVPath(fileName) || '');

                if(hasZS || hasZV) {
                    const virtualImports = [];

                    if(hasZS) {
                        virtualImports.push(`export * as ZSCH from './${utility.getBaseName(fileName)}.zs';`);
                    }

                    if(hasZV) {
                        virtualImports.push(`export * as zvar from './${utility.getBaseName(fileName)}.zv';`);
                    }

                    const text = content ?? '';

                    return text + virtualImports.join('\n');
                }
            }

            return content;
        }

        return info.languageService;
    }

    // @ts-ignore
    function handleScriptSnapshot(origin, fileName: string) {
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

        return origin?.(fileName);
    }

    // @ts-ignore
    function handleScriptKind(origin, fileName: string) {
        if (utility.isZSFile(fileName) || utility.isZVFile(fileName)) {
            return typescript.ScriptKind.TS;
        }

        return origin?.(fileName) ?? typescript.ScriptKind.Unknown;
    }

    // @ts-ignore
    function handleResolveModuleNameLiterals(origin, moduleLiterals, containingFile, redirectedReference, options, containingSourceFile) {

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

            customResolved.push(undefined);
            toFallback.push(literal);
        }

        if (toFallback.length && origin) {
            const fallbackResults = origin(
                toFallback,
                containingFile,
                redirectedReference,
                options,
                containingSourceFile
            );

            let fallbackIndex = 0;
            for (let i = 0; i < customResolved.length; i++) {
                if (!customResolved[i]) {
                    customResolved[i] = fallbackResults?.[fallbackIndex++];
                }
            }
        }

        return customResolved;
    }

    return { create };
}