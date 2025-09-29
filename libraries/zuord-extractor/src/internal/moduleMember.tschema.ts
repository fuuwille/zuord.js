import { TypeNode } from "ts-morph";
import { ModuleClassNode, ModuleEnumNode, ModuleESMLikeNode, ModuleExportDefaultNode, ModuleExportNode, ModuleFunctionNode, ModuleImportNode, ModuleInterfaceNode, ModuleNode, ModuleSchemaLikeNode, ModuleTypeNode, ModuleVariableNode, ModuleVariantLikeNode } from "./moduleNode.tschema";

export abstract class ModuleMember {
    #node: ModuleNode

    public constructor(node: ModuleNode) {
        this.#node = node;
    }

    public get node(): ModuleNode {
        return this.#node;
    }

    public abstract get kind(): ModuleMemberKind;
}

export abstract class ModuleESMLikeMember extends ModuleMember {
    public constructor(node: ModuleESMLikeNode) {
        super(node);
    }

    public get node(): ModuleESMLikeNode {
        return super.node as ModuleESMLikeNode;
    }
}

export class ModuleImportMember extends ModuleESMLikeMember {
    public constructor(node: ModuleImportNode) {
        super(node);
    }

    public get node(): ModuleImportNode {
        return super.node as ModuleImportNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Import;
    }
}

export class ModuleExportMember extends ModuleESMLikeMember {
    public constructor(node: ModuleExportNode) {
        super(node);
    }

    public get node(): ModuleExportNode {
        return super.node as ModuleExportNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Export;
    }
}

export class ModuleExportDefaultMember extends ModuleESMLikeMember {
    public constructor(node: ModuleExportDefaultNode) {
        super(node);
    }

    public get node(): ModuleExportDefaultNode {
        return super.node as ModuleExportDefaultNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.ExportDefault;
    }
}

export abstract class ModuleSchemaLikeMember extends ModuleMember {
    public constructor(node: ModuleSchemaLikeNode) {
        super(node);
    }

    public get node(): ModuleSchemaLikeNode {
        return super.node as ModuleSchemaLikeNode;
    }
}

export class ModuleTypeMember extends ModuleSchemaLikeMember {
    public constructor(node: ModuleTypeNode) {
        super(node);
    }

    public get node(): ModuleTypeNode {
        return super.node as ModuleTypeNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Type;
    }
}

export class ModuleInterfaceMember extends ModuleSchemaLikeMember {
    public constructor(node: ModuleInterfaceNode) {
        super(node);
    }

    public get node(): ModuleInterfaceNode {
        return super.node as ModuleInterfaceNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Interface;
    }
}

export class ModuleEnumMember extends ModuleSchemaLikeMember {
    public constructor(node: ModuleEnumNode) {
        super(node);
    }

    public get node(): ModuleEnumNode {
        return super.node as ModuleEnumNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Enum;
    }
}

export class ModuleClassMember extends ModuleSchemaLikeMember {
    public constructor(node: ModuleClassNode) {
        super(node);
    }

    public get node(): ModuleClassNode {
        return super.node as ModuleClassNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Class;
    }
}

export abstract class ModuleVariantLikeMember extends ModuleMember {
    public constructor(node: ModuleVariantLikeNode) {
        super(node);
    }

    public get node(): ModuleVariantLikeNode {
        return super.node as ModuleVariantLikeNode;
    }
}

export class ModuleVariableMember extends ModuleVariantLikeMember {
    public constructor(node: ModuleVariableNode) {
        super(node);
    }

    public get node(): ModuleVariableNode {
        return super.node as ModuleVariableNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Variable;
    }
}

export class ModuleFunctionMember extends ModuleVariantLikeMember {
    public constructor(node: ModuleFunctionNode) {
        super(node);
    }

    public get node(): ModuleFunctionNode {
        return super.node as ModuleFunctionNode;
    }

    public get kind(): ModuleMemberKind {
        return ModuleMemberKind.Function;
    }
}

export interface ModuleHasTypeNodeMember {
    typeNode: TypeNode;
}

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    ExportDefault = "export-default",
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Class = "class",
    Function = "function",
    Variable = "variable",
}