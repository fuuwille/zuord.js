import type * as ts from "typescript/lib/tsserverlibrary";

const utility = require("./utility");
const caseAnything = require("case-anything");

export = function (modules: { typescript: typeof ts }) {
    const typescript = modules.typescript;

    function create(info: ts.server.PluginCreateInfo): ts.LanguageService {
        const oldLS = info.languageService;
        const host = info.languageServiceHost;

        const originalGetScriptSnapshot = host.getScriptSnapshot?.bind(host);

        host.getScriptSnapshot = (fileName: string) => {
            const snapshot = originalGetScriptSnapshot?.(fileName);

            if (snapshot && fileName.endsWith(".ts")) {
                let virtualImports = "";

                const baseName = utility.getBaseName(fileName) || '';

                if (utility.isZVariantsFile(fileName)) {
                    virtualImports += `\nimport * as ZSchema from './${baseName}.tschema';`;
                }
                else if (utility.isZSchemaFile(fileName)) {
                    virtualImports += `\nimport * as zvariants from './${baseName}.tvariants';`;
                }
                
                let text = snapshot.getText(0, snapshot.getLength());
                const combined = text + virtualImports;

                return typescript.ScriptSnapshot.fromString(combined);
            }

            return snapshot;
        };

        return oldLS;
    }

    return { create };
}