import path from "path";
import vscode from "vscode";
import { $zuordExtractor, $zuordExtractor as zuordExtractor, $ZuordExtractor as ZuordExtractor } from "zuord-extractor";
import { getKind, getName } from "./utils";
import { Project } from "ts-morph";

export interface ExplorerDirtyFile {
    module: ExplorerModule;
    textDoc: vscode.TextDocument;
}

export class ExplorerProvider {

    #workspaces: Map<string, ExplorerWorkspace>;
    #dirtyFiles = new Map<string, ExplorerDirtyFile>();
    #project: Project = new Project();

    public constructor() {
        this.#workspaces = new Map<string, ExplorerWorkspace>();

        vscode.workspace.onDidChangeTextDocument(e => {
            const fsPath = e.document.uri.fsPath;

            const module = this.getModule(fsPath);
            const textDoc = e.document;

            if(module) {
                this.#dirtyFiles.set(fsPath, { module, textDoc });
            }
        });

        vscode.workspace.onDidSaveTextDocument(doc => {
            this.#dirtyFiles.delete(doc.uri.fsPath);
        });

        vscode.workspace.onDidCloseTextDocument(doc => {
            const fsPath = doc.uri.fsPath;

            if (this.#dirtyFiles.has(fsPath)) {
                const dirtyDoc = this.#dirtyFiles.get(fsPath);
                this.#dirtyFiles.delete(fsPath);

                if(dirtyDoc) {
                    const module = dirtyDoc.module;
                    const textDoc = dirtyDoc.textDoc;

                    const kind = getKind(path.basename(fsPath));
                    const sourceFile = this.#project.createSourceFile(textDoc.getText());

                    switch(kind) {
                        case "type":
                            $zuordExtractor.updateModuleTypeFile(module.source, sourceFile);
                            break;
                        case "variants":
                            $zuordExtractor.updateModuleVariantsFile(module.source, sourceFile);
                            break;
                    }
                }
            }
        });
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

    getWorkspaceFolder(wsPath?: string): vscode.WorkspaceFolder | undefined {
        const uri = wsPath ? vscode.Uri.file(wsPath) : this.getEditor()?.document.uri;

        if (uri) {
            return vscode.workspace.getWorkspaceFolder(uri);
        }

        return undefined;
    }

    getWorkspace(wsPath?: string): ExplorerWorkspace | undefined {
        const folder = this.getWorkspaceFolder(wsPath);

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
        modulePath ??= this.getCurrentPath() || "";
        const directory = this.getDirectory(modulePath);

        if (directory) {
            return directory.getModule(getName(path.basename(modulePath)));
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
    #source: ZuordExtractor.Module;

    constructor(directory: ExplorerDirectory, name: string) {
        this.#directory = directory;
        this.#name = name;
        this.#source = zuordExtractor.extractModule(directory.uri.path!, getName(name));
    }

    public get directory(): ExplorerDirectory {
        return this.#directory;
    }

    public get source(): ZuordExtractor.Module {
        return this.#source;
    }


    public refresh() {
        this.#source = zuordExtractor.extractModule(this.#directory.uri.path!, getName(this.#name));
    }
}