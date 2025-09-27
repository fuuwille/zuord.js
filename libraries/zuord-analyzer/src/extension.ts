import { ExtensionContext, languages} from 'vscode';
import { CodelensProvider } from './codelens';

export function activate(context: ExtensionContext) {
	const codelensProvider = new CodelensProvider();

    context.subscriptions.push(
        languages.registerCodeLensProvider(
            { scheme: "file", language: "typescript" },
            codelensProvider
        )
    );
}

export function deactivate() {}
