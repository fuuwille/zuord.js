const utility = require("./utility");
const caseAnything = require("case-anything");

// @ts-ignore
export = function (modules) {
    const typescript = modules.typescript;

    // @ts-ignore
    function create(info) {
        const host = info.languageServiceHost;

        host.getScriptSnapshot = (fileName: string) => {
            return handleScriptSnapshot(host.getScriptSnapshot?.bind(host), fileName);
        };

        host.getScriptKind = (fileName: string) => {
            return handleScriptKind(host.getScriptKind?.bind(host), fileName);
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

    return { create };
}