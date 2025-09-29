import { ModuleEnumNode, ModuleESMLikeNode, ModuleExportDefaultNode, ModuleExportNode, ModuleFunctionNode, ModuleImportNode, ModuleInterfaceNode, ModuleNode, ModuleSchemaLikeNode, ModuleTypeNode, ModuleVariableNode, ModuleVariantLikeNode } from "./moduleNode.tschema";

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

export abstract class ModuleSchemaLikeMember extends ModuleMember {
    public constructor(node: ModuleSchemaLikeNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleSchemaLikeNode {
        return super.node as ModuleSchemaLikeNode;
    }
}

export class ModuleTypeMember extends ModuleMember {
    public constructor(node: ModuleTypeNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleTypeNode {
        return super.node as ModuleTypeNode;
    }
}

export class ModuleInterfaceMember extends ModuleMember {
    public constructor(node: ModuleInterfaceNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleInterfaceNode {
        return super.node as ModuleInterfaceNode;
    }
}

export class ModuleEnumMember extends ModuleMember {
    public constructor(node: ModuleEnumNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleEnumNode {
        return super.node as ModuleEnumNode;
    }
}

export abstract class ModuleVariantLikeMember extends ModuleMember {
    public constructor(node: ModuleVariantLikeNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleVariantLikeNode {
        return super.node as ModuleVariantLikeNode;
    }
}

export class ModuleVariableMember extends ModuleVariantLikeMember {
    public constructor(node: ModuleVariableNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleVariableNode {
        return super.node as ModuleVariableNode;
    }
}

export class ModuleFunctionMember extends ModuleVariantLikeMember {
    public constructor(node: ModuleFunctionNode, kind: ModuleMemberKind) {
        super(node, kind);
    }

    public get node(): ModuleFunctionNode {
        return super.node as ModuleFunctionNode;
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