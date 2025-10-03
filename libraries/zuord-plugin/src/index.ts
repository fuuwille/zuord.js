import * as ts from "typescript/lib/tsserverlibrary";
import * as utility from "./utility";

module.exports = function (modules: { typescript: typeof ts }) {
    const typescript = modules.typescript;
    const caseAnything = require("case-anything");

    function create(info: ts.server.PluginCreateInfo): ts.LanguageService {
        const oldLS = info.languageService;
        const host = info.languageServiceHost;

        const originalGetScriptSnapshot = host.getScriptSnapshot?.bind(host);

        host.getScriptSnapshot = (fileName: string) => {
            const snapshot = originalGetScriptSnapshot?.(fileName);

            if (snapshot && fileName.endsWith(".ts")) {
                let virtualImports = "";

                const baseName = utility.getBaseName(fileName) || "";
                let name = undefined;
                let type = undefined;

                if (utility.isZVariantsFile(fileName)) {
                    name = caseAnything.pascalCase(baseName);
                    type = "tvariants";
                }
                else if (utility.isZSchemaFile(fileName)) {
                    name = caseAnything.camelCase(baseName);
                    type = "tschema";
                }

                virtualImports += `import * from './${name}.${type}';\n`;

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