import * as vscode from "vscode";
import explorer from "./explorer";
import { Node, Project } from "ts-morph";
import path from "path";
import { $zuordExtractor } from "zuord-extractor";

export class CodelensProvider implements vscode.CodeLensProvider {

    public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
        const codelenses: vscode.CodeLens[] = [];

        const explorerModule = explorer.getModule();
        const name = path.basename(document.uri.path);
        const kind = getSecondToLastPart(name);
        const project = new Project();

        const module = explorerModule?.module;

        if(module) {
            if(kind == "type") {
                $zuordExtractor.updateModuleTypeFile(module, project.createSourceFile(name, document.getText()));

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
                $zuordExtractor.updateModuleVariantsFile(module, project.createSourceFile(name, document.getText()));

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

function nodeToRange(node: Node): vscode.Range {
    const start = node.getStartLineNumber() - 1; // VSCode 0 tabanlı
    const startChar = node.getStart() - node.getPos(); // veya node.getStartLinePos()
    const end = node.getEndLineNumber() - 1;
    const endChar = node.getEnd() - node.getStart(); // approximate
    return new vscode.Range(start, startChar, end, endChar);
}

function getSecondToLastPart(name: string): string | undefined {
    const parts = name.split(".");
    if (parts.length < 2) return undefined; // sondan ikinci yoksa
    return parts[parts.length - 2];
}