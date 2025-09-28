import * as vscode from "vscode";
import explorer from "./explorer";
import path from "path";
import { $zuordExtractor } from "zuord-extractor";
import { getKind, nodeToRange } from "./utils";

export class CodelensProvider implements vscode.CodeLensProvider {

    private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
    public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

    enabled: boolean = true;

    public refreshCodeLenses(): void {
        this._onDidChangeCodeLenses.fire();
    }

    private async waitForEnabled() {
        while (!this.enabled) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }

    public async provideCodeLenses(document: vscode.TextDocument): Promise<vscode.CodeLens[]> {
        const codelenses: vscode.CodeLens[] = [];
        await this.waitForEnabled();

        const explorerModule = explorer.getModule();
        const name = path.basename(document.uri.path);
        const kind = getKind(name);

        const module = explorerModule?.source;

        if(module) {
            explorer.update(document);

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
                    const type = variant.type;

                    const codelens = new vscode.CodeLens(range, {
                        title: (type?.getAliasSymbol() ?? type?.getSymbol())?.getName() ?? "no type",
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

let timeout: NodeJS.Timeout | null = null;

vscode.workspace.onDidChangeTextDocument(() => {
    codelens.enabled = false;

    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(() => { codelens.enabled = true; codelens.refreshCodeLenses(); }, 1000);
});
