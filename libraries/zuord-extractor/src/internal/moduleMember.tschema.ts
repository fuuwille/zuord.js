import { ModuleESMLikeNode, ModuleExportDefaultNode, ModuleExportNode, ModuleImportNode, ModuleNode } from "./moduleNode.tschema";

export abstract class ModuleMember {
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

export abstract class ModuleESMLikeMember extends ModuleMember {
    public constructor(node: ModuleESMLikeNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleESMLikeNode {
        return super.node as ModuleESMLikeNode;
    }
}

export class ModuleImportMember extends ModuleESMLikeMember {
    public constructor(node: ModuleImportNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleImportNode {
        return super.node as ModuleImportNode;
    }
}

export class ModuleExportMember extends ModuleESMLikeMember {
    public constructor(node: ModuleExportNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleExportNode {
        return super.node as ModuleExportNode;
    }
}

export class ModuleExportDefaultMember extends ModuleESMLikeMember {
    public constructor(node: ModuleExportDefaultNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleExportDefaultNode {
        return super.node as ModuleExportDefaultNode;
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