import path from "path";
import vscode from "vscode";
import { $zuordExtractor as zuordExtractor, $ZuordExtractor as ZuordExtractor } from "zuord-extractor";

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

    getDirectory(dirPath?: string): ExplorerDirectory | undefined {
        dirPath ??= this.getCurrentPath();
        const workspace = this.getWorkspace();

        if (workspace && dirPath) {
            return workspace.getDirectory(vscode.Uri.file(path.dirname(dirPath)));
        }

        return undefined;
    }

    getModule(modulePath?: string): ExplorerModule | undefined {
        modulePath ??= this.getCurrentPath();
        const directory = this.getDirectory();

        if (directory) {
            return directory.getModule(trimExtension(path.basename(modulePath || "")));
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

    getCurrentDir(): string | undefined {
        const currentPath = this.getCurrentPath();
        return currentPath ? path.dirname(currentPath) : undefined;
    }

    getRelativePath(): string | undefined {
        const currentPath = this.getCurrentPath();
        const rootDir = this.getRootDir();

        if (currentPath && rootDir) {
            return path.relative(rootDir, currentPath);
        }

        return undefined;
    }

    getRelativeDir(): string | undefined {
        const currentDir = this.getCurrentDir();
        const rootDir = this.getRootDir();

        if (currentDir && rootDir) {
            return path.relative(rootDir, currentDir);
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
            directory = new ExplorerDirectory(this, uri);
            this.#directories.set(uri.fsPath, directory);
        }

        return directory;
    }
}

export class ExplorerDirectory {
    #workspace: ExplorerWorkspace;
    #uri: vscode.Uri;
    #modules: Map<string, ExplorerModule>;

    constructor(workspace: ExplorerWorkspace, uri: vscode.Uri) {
        this.#workspace = workspace;
        this.#uri = uri;
        this.#modules = new Map<string, ExplorerModule>();
    }

    public get workspace(): ExplorerWorkspace {
        return this.#workspace;
    }

    public get uri(): vscode.Uri {
        return this.#uri;
    }

    public get modules(): Map<string, ExplorerModule> {
        return this.#modules;
    }

    //

    public getModule(name: string): ExplorerModule | undefined {
        let module = this.#modules.get(name);

        if(!module) {
            module = new ExplorerModule(this, name);
            this.#modules.set(name, module);
        }

        return module;
    }
}

export class ExplorerModule {
    #directory: ExplorerDirectory;
    #name: string;
    #module: ZuordExtractor.Module;

    constructor(directory: ExplorerDirectory, name: string) {
        this.#directory = directory;
        this.#name = name;
        this.#module = zuordExtractor.extractModule(directory.uri.path!, trimExtension(name));
    }

    public get directory(): ExplorerDirectory {
        return this.#directory;
    }

    public get module(): ZuordExtractor.Module {
        return this.#module;
    }


    public refresh() {
        this.#module = zuordExtractor.extractModule(this.#directory.uri.path!, trimExtension(this.#name));
    }
}

function trimExtension(name: string): string {
    const parts = name.split(".");
    if (parts.length <= 2) return parts[0];
    return parts.slice(0, parts.length - 2).join("."); 
}