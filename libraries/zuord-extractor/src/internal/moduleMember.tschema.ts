import { ModuleNode } from "./moduleNode.tschema";

export class ModuleMember {
    #node: ModuleNode
    #kind: ModuleMemberKind;

    public constructor(node: ModuleNode, kind: ModuleMemberKind) {
        this.#node = node;
        this.#kind = kind;
    }

    public get node(): ModuleNode {
        return this.#node;
    }

    public get kind(): ModuleMemberKind {
        return this.#kind;
    }
}

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    ExportDefault = "export-default",
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}