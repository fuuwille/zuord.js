import { ExtensionContext, languages} from 'vscode';
import codelens from './codelens';

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        languages.registerCodeLensProvider(
            { scheme: "file", language: "typescript" },
            codelens
        )
    );
}

export function deactivate() {}