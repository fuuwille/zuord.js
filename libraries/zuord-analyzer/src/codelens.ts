import * as vscode from "vscode";

export class CodelensProvider implements vscode.CodeLensProvider {

    private diagnosticsCollection = vscode.languages.createDiagnosticCollection('customErrors');

    public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
        return [];
        /*const codelenses: vscode.CodeLens[] = [];
        this.diagnosticsCollection.set(document.uri, []);

        const allDiagnostics: vscode.Diagnostic[] = [];
        const explorerModule = explorer.getModule();
        const name = path.basename(document.uri.path);
        const kind = getKind(name);

        const module = explorerModule?.source;

        if(module) {
            explorer.update(document);

            if(kind == "zschema") {
                module.schemaContents.forEach(schema => {
                    const node = schema.member.node;
                    const variantsCount = schema.variants?.length ?? 0;

                    const range = nodeToRange(node, document);
                    const codelens = new vscode.CodeLens(range, {
                        title: "Have " + variantsCount + " variants",
                        command: ""
                    });
                    
                    codelenses.push(codelens);
                });
            }
            else if(kind == "zvariants") {
                module.variantContents.forEach(variant => {
                    const member = variant.member;
                    const node = member.node;
                    const range = nodeToRange(node, document);
                    const schema = variant.schema;

                    const codelens = new vscode.CodeLens(range, {
                        title: (schema?.name) ?? "no type",
                        command: ""
                    });

                    variant.diagnostics?.forEach(diagnostic => {
                        const diagRange = nodeToRange(diagnostic.node, document);
                        const diag = new vscode.Diagnostic(
                            diagRange,
                            diagnostic.message,
                            diagnostic.level === "error" ? vscode.DiagnosticSeverity.Error : vscode.DiagnosticSeverity.Warning
                        );

                        allDiagnostics.push(diag);
                    });
                    codelenses.push(codelens);
                });
            }

            this.diagnosticsCollection.set(document.uri, allDiagnostics);
        }

        return codelenses;*/
    }
}

const codelens = new CodelensProvider();

export default codelens;