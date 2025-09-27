import vscode from 'vscode';
import codelens from './codelens';
import explorer from './explorer';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerCodeLensProvider(
            { scheme: "file", language: "typescript" },
            codelens
        )
    );

    vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            const relativePath = explorer.getRelativePath();
            console.log("Workspace içindeki yol:", relativePath);
        }
    });
}

export function deactivate() {}