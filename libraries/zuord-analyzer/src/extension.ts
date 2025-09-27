import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "zuord-analyzer" is now active!');

	const disposable = vscode.commands.registerCommand('zuord-analyzer.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from zuord-analyzer!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
