import * as ts from "typescript/lib/tsserverlibrary";

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

                if (fileName.endsWith(".tvariants.ts")) {
                    const baseName = fileName.split("/").pop()?.replace(/\.tvariants\.ts$/, "");
                    const tschemaImport = `import * from "./${baseName}.tschema";\n`;
                    virtualCode += tschemaImport;
                }

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