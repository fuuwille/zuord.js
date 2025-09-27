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

    getCurrentPath(): string | undefined {
        const activeEditor = this.getEditor();
        return activeEditor ? activeEditor.document.uri.fsPath : undefined;
    }

    getRelativePath(): string | undefined {
        const currentPath = this.getCurrentPath();
        const rootDir = this.getRootDir();

        if (currentPath && rootDir) {
            return vscode.workspace.asRelativePath(currentPath, true);
        }

        return undefined;
    }
}

export const explorer = new ExplorerProvider();

export default explorer;