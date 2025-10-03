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
                let name = undefined;
                let type = undefined;

                if (utility.isZVariantsFile(fileName)) {
                    name = caseAnything.pascalCase(baseName);
                    type = "tschema";
                }
                else if (utility.isZSchemaFile(fileName)) {
                    name = caseAnything.camelCase(baseName);
                    type = "tvariants";
                }

                virtualImports += 'const __VIRTUAL_IMPORTS__ = true;\n';
                virtualImports += `import * as ${name} from './${baseName}.${type}';\n`;

                let text = snapshot.getText(0, snapshot.getLength());
                const combined = virtualImports + text;

                return typescript.ScriptSnapshot.fromString(combined);
            }

            return snapshot;
        };

        return oldLS;
    }

    return { create };
}