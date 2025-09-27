import * as vscode from "vscode";
import explorer from "./explorer";
import { Node } from "ts-morph";

export class CodelensProvider implements vscode.CodeLensProvider {

    public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
        const codelenses: vscode.CodeLens[] = [];

        const explorerModule = explorer.getModule();
        const module = explorerModule?.module;

        if(module) {
            const file = module.typeFile;

            if(file) {
                file.members.forEach(member => {
                    const node = member.node;
                    const range = nodeToRange(node);
                    const codelens = new vscode.CodeLens(range);
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