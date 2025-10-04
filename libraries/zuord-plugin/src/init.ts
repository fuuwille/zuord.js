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

        return info.languageService;
    }

    // @ts-ignore
    function handleScriptSnapshot(origin, fileName: string) {
        const snapshot = origin?.(fileName);

        const flag1 = utility.isZSFile(fileName);
        const flag2 = utility.isZVFile(fileName);
        const flag3 = flag1 || flag2;

        if (snapshot && flag3) {
            let virtualImports = "";

            const baseName = utility.getBaseName(fileName) || '';

            if (flag1) {
                virtualImports += `\nimport * as zvariants from './${baseName}.zv';`;
            }
            else if (flag2) {
                virtualImports += `\nimport * as ZSchema from './${baseName}.zs';`;
            }
            
            let text = snapshot.getText(0, snapshot.getLength());
            const combined = text + virtualImports;

            return typescript.ScriptSnapshot.fromString(combined);
        }

        return snapshot;
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