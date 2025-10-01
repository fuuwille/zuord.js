import * as vscode from "vscode";
import explorer from "./explorer";
import path from "path";
import { $zuordExtractor } from "zuord-extractor";
import { getKind, nodeToRange } from "./utils";

export class CodelensProvider implements vscode.CodeLensProvider {

    public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
        const codelenses: vscode.CodeLens[] = [];

        const explorerModule = explorer.getModule();
        const name = path.basename(document.uri.path);
        const kind = getKind(name);

        const module = explorerModule?.source;

        if(module) {
            explorer.update(document);

            if(kind == "tschema") {
                module.schemaContents.forEach(schema => {
                    const node = schema.member.node;
                    const variantsCount = schema.variants?.length ?? 0;

                    const range = nodeToRange(node);
                    const codelens = new vscode.CodeLens(range, {
                        title: "Have " + variantsCount + " variants",
                        command: ""
                    });
                    codelenses.push(codelens);
                });
            }
            else if(kind == "variants") {
                module.variantContents.forEach(variant => {
                    const member = variant.member;
                    const node = member.node;
                    const range = nodeToRange(node);
                    const schema = variant.schema;

                    const codelens = new vscode.CodeLens(range, {
                        title: (schema?.name) ?? "no type",
                        command: ""
                    });
                    codelenses.push(codelens);
                });
            }
        }

        return codelenses;
    }
}

const codelens = new CodelensProvider();

export default codelens;