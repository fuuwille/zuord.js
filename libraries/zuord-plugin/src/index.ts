import * as ts from "typescript/lib/tsserverlibrary";

export default function (modules: { typescript: typeof ts }) {
    const ts = modules.typescript;

    function create(info: ts.server.PluginCreateInfo): ts.LanguageService {
        const oldLS = info.languageService;
        const host = info.languageServiceHost;

        const originalGetScriptSnapshot = host.getScriptSnapshot?.bind(host);

        host.getScriptSnapshot = (fileName: string) => {
            const snapshot = originalGetScriptSnapshot?.(fileName);
            return snapshot;
        };

        return oldLS;
    }

    return { create };
}