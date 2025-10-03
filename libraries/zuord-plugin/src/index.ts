import * as ts from "typescript/lib/tsserverlibrary";

export default function init(modules: { typescript: typeof ts }) {
    const ts = modules.typescript;

    function create(info: ts.server.PluginCreateInfo): ts.LanguageService {
        const oldLS = info.languageService;
        const host = info.languageServiceHost;

        const originalGetScriptSnapshot = host.getScriptSnapshot?.bind(host);

        host.getScriptSnapshot = (fileName: string) => {
            const snapshot = originalGetScriptSnapshot?.(fileName);
            let virtualCode = "";
            virtualCode += `export const __VIRTUAL__ = "hello";\n`;

            if (snapshot && fileName.endsWith(".ts")) {
                if (fileName.endsWith(".tvariants.ts")) {
                    const baseName = fileName.split("/").pop()?.replace(/\.tvariants\.ts$/, "");
                    const tschemaImport = `import * from "./${baseName}.tschema";\n`;
                    virtualCode += tschemaImport;
                }

                let text = snapshot.getText(0, snapshot.getLength());
                const combined = text + virtualCode;

                return ts.ScriptSnapshot.fromString(combined);
            }
            
            return snapshot;
        };

        return oldLS;
    }

    return { create };
}