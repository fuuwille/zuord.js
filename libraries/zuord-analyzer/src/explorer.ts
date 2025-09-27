import vscode from "vscode";

export class ExplorerProvider {
    getWorkspaceFolder(): vscode.WorkspaceFolder | undefined {
        const activeEditor = vscode.window.activeTextEditor;

        if (activeEditor) {
            const uri = activeEditor.document.uri;
            return vscode.workspace.getWorkspaceFolder(uri);
        }

        return undefined;
    }
}

export const explorer = new ExplorerProvider();

export default explorer;