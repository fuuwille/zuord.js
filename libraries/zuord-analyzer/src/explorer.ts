import vscode from "vscode";

export class ExplorerProvider {
    getEditor(): vscode.TextEditor | undefined {
        return vscode.window.activeTextEditor;
    }

    getWorkspaceFolder(): vscode.WorkspaceFolder | undefined {
        const activeEditor = this.getEditor();

        if (activeEditor) {
            const uri = activeEditor.document.uri;
            return vscode.workspace.getWorkspaceFolder(uri);
        }

        return undefined;
    }

    getRootDir(): string | undefined {
        const workspaceFolder = this.getWorkspaceFolder();
        return workspaceFolder ? workspaceFolder.uri.fsPath : undefined;
    }
}

export const explorer = new ExplorerProvider();

export default explorer;