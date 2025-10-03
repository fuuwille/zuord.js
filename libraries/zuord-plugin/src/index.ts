import * as ts from "typescript/lib/tsserverlibrary";
import * as utility from "./utility";
import * as caseAnything from "case-anything";

module.exports = function (modules: { typescript: typeof ts }) {
    const typescript = modules.typescript;

    function create(info: ts.server.PluginCreateInfo): ts.LanguageService {
        const oldLS = info.languageService;
        const host = info.languageServiceHost;

        const originalGetScriptSnapshot = host.getScriptSnapshot?.bind(host);

        host.getScriptSnapshot = (fileName: string) => {
            const snapshot = originalGetScriptSnapshot?.(fileName);

            if (snapshot && fileName.endsWith(".ts")) {
                let virtualCode = "";

                const baseName = utility.getBaseName(fileName) || "";
                let name = undefined;

                if (utility.isZVariantsFile(fileName)) {
                    name = caseAnything.pascalCase(baseName);
                }
                else if (utility.isZSchemaFile(fileName)) {
                    name = caseAnything.camelCase(baseName);
                }
                    
                virtualCode += `import * from "./${name}.tschema";\n`;

                let text = snapshot.getText(0, snapshot.getLength());
                const combined = text + virtualCode;

                return typescript.ScriptSnapshot.fromString(combined);
            }

            return snapshot;
        };

        return oldLS;
    }

    return { create };
}