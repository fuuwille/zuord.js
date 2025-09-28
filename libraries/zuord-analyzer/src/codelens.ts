import * as vscode from "vscode";
import explorer from "./explorer";
import { Project } from "ts-morph";
import path from "path";
import { $zuordExtractor } from "zuord-extractor";
import { getKind, nodeToRange } from "./utils";

export class CodelensProvider implements vscode.CodeLensProvider {

    public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
        const codelenses: vscode.CodeLens[] = [];

        const explorerModule = explorer.getModule();
        const name = path.basename(document.uri.path);
        const kind = getKind(name);
        const project = new Project();

        const module = explorerModule?.source;

        if(module) {
            if(kind == "type") {
                module.types.forEach(type => {
                    const node = type.member.node;
                    const variantsCount = type.variants.length;


                    const range = nodeToRange(node);
                    const codelens = new vscode.CodeLens(range, {
                        title: "Have " + variantsCount + " variants",
                        command: ""
                    });
                    codelenses.push(codelens);
                });
            }
            else if(kind == "variants") {
                module.variantsFile?.members.filter($zuordExtractor.isModuleVariantLikeMember).forEach(variant => {
                    const node = variant.node;
                    const range = nodeToRange(node);
                    const type = variant.type!;

                    const codelens = new vscode.CodeLens(range, {
                        title: (type.getAliasSymbol() ?? type.getSymbol())?.getName() ?? "no type",
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