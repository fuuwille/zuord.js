import path from "path";
import vscode from "vscode";

export class ExplorerProvider {

    #workspaces: Map<string, ExplorerWorkspace>;

    public constructor() {
        this.#workspaces = new Map<string, ExplorerWorkspace>();
    }

    public get workspace(): ExplorerWorkspace | undefined {
        const folder = this.getWorkspaceFolder();

        if (folder) {
            let workspace = this.#workspaces.get(folder.uri.fsPath);

            if (!workspace) {
                workspace = new ExplorerWorkspace(folder);
                this.#workspaces.set(folder.uri.fsPath, workspace);
            }

            return workspace;
        }    
    }

    public get workspaceList(): ExplorerWorkspace[] {
        return Array.from(this.#workspaces.values());
    }

    //

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
            return path.relative(rootDir, currentPath);
        }

        return undefined;
    }

    //

    reset() {
        this.#workspaces.clear();
    }
}

export const explorer = new ExplorerProvider();

export default explorer;

export class ExplorerWorkspace {
    #folder: vscode.WorkspaceFolder;

    constructor(folder: vscode.WorkspaceFolder) {
        this.#folder = folder;
    }

    public get folder(): vscode.WorkspaceFolder {
        return this.#folder;
    }
}