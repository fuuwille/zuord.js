import vscode from 'vscode';
import codelens from './codelens';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerCodeLensProvider(
            { scheme: "file", language: "typescript" },
            codelens
        )
    );
}

export function deactivate() {}