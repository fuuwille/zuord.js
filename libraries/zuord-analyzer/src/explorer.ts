import path from "path";
import vscode from "vscode";

export class ExplorerProvider {

    #workspaces: Map<string, ExplorerWorkspace>;

    public constructor() {
        this.#workspaces = new Map<string, ExplorerWorkspace>();
    }

    public get workspaces(): Map<string, ExplorerWorkspace> {
        return this.#workspaces;
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

    getWorkspace(): ExplorerWorkspace | undefined {
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
    #directories: Map<string, ExplorerDirectory>;

    constructor(folder: vscode.WorkspaceFolder) {
        this.#folder = folder;
        this.#directories = new Map<string, ExplorerDirectory>();
    }

    public get folder(): vscode.WorkspaceFolder {
        return this.#folder;
    }

    public get directories(): Map<string, ExplorerDirectory> {
        return this.#directories;
    }

    //

    public getDirectory(uri: vscode.Uri): ExplorerDirectory | undefined {
        let directory = this.#directories.get(uri.fsPath);

        if(!directory) {
            directory = new ExplorerDirectory(uri);
            this.#directories.set(uri.fsPath, directory);
        }

        return directory;
    }
}

export class ExplorerDirectory {
    #uri: vscode.Uri;

    constructor(uri: vscode.Uri) {
        this.#uri = uri;
    }

    public get uri(): vscode.Uri {
        return this.#uri;
    }
}