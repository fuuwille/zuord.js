import * as vscode from "vscode";

export class CodelensProvider implements vscode.CodeLensProvider {
    public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
        return [];
    }
}