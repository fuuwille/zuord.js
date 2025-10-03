const utility = require("./utility");
const caseAnything = require("case-anything");

// @ts-ignore
export = function (modules) {
    const typescript = modules.typescript;

    // @ts-ignore
    function create(info) {
        const oldLS = info.languageService;
        const host = info.languageServiceHost;

        host.getScriptSnapshot = (fileName: string) => {
            handleScriptSnapshot(host.getScriptSnapshot?.bind(host), fileName);
        };

        const oldGetScriptKind = host.getScriptKind?.bind(host);

        host.getScriptKind = (fileName: string) => {
            if (utility.isZVariantsFile(fileName) || utility.isZSchemaFile(fileName)) {
                return typescript.ScriptKind.TS;
            }

            return oldGetScriptKind?.(fileName) ?? typescript.ScriptKind.Unknown;
        }

        return oldLS;
    }

    // @ts-ignore
    function handleScriptSnapshot(origin, fileName: string) {
        const snapshot = origin?.(fileName);

        if (snapshot && fileName.endsWith(".ts")) {
            let virtualImports = "";

            const baseName = utility.getBaseName(fileName) || '';

            if (utility.isZVariantsFile(fileName)) {
                virtualImports += `\nimport * as ZSchema from './${baseName}.zs';`;
            }
            else if (utility.isZSchemaFile(fileName)) {
                virtualImports += `\nimport * as zvariants from './${baseName}.zv';`;
            }
            
            let text = snapshot.getText(0, snapshot.getLength());
            const combined = text + virtualImports;

            return typescript.ScriptSnapshot.fromString(combined);
        }

        return snapshot;
    }

    return { create };
}