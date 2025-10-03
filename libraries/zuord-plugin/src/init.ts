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
                const flag1 = utility.isZVariantsFile(fileName);
                const flag2 = utility.isZSchemaFile(fileName);

                if(flag1) {
                    virtualImports += `\nimport * as ZSchema from './${baseName}.tschema';`;
                }

                if (flag1) {
                    name = caseAnything.pascalCase(baseName);
                    type = "tschema";
                }
                else if (flag2) {
                    name = caseAnything.camelCase(baseName);
                    type = "tvariants";
                }

                virtualImports += `\nimport * as ${name} from './${baseName}.${type}';`;
                
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