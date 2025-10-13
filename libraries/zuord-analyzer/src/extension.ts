import vscode from 'vscode';
import codelens from './codelens';

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.getConfiguration().update(
        "files.associations",
        {
            "*.tzs": "typescript",
            "*.tzs.*": "typescript",
            "*.tzv": "typescript",
            "*.tzv.*": "typescript",
        },
        vscode.ConfigurationTarget.Global
    );

    context.subscriptions.push(
        vscode.languages.registerCodeLensProvider(
            { scheme: "file", language: "typescript" },
            codelens
        )
    );
}

export function deactivate() {}