import { Identifier, TypeNode } from "ts-morph";
import { ModuleEnumNode, ModuleESMNode, ModuleExportDefaultNode, ModuleExportNode, ModuleFunctionNode, ModuleImportNode, ModuleInterfaceNode, ModuleNode, ModuleSchemaNode, ModuleTypeNode, ModuleVariableNode, ModuleVariantNode } from "./moduleNode.tschema";
import { getModuleMemberNameNode } from "./moduleMember.variants";

export abstract class ModuleMember {
    #node: ModuleNode
    #nameNode: Identifier | undefined | null;

    public constructor(node: ModuleNode) {
        this.#node = node;
    }

    public get node(): ModuleNode {
        return this.#node;
    }

    public get nameNode(): Identifier | null {
        if(this.#nameNode == undefined) {
            this.#nameNode = getModuleMemberNameNode(this);
        }

        return this.#nameNode;
    }

    public abstract get kind(): ModuleMemberKind;
}

export abstract class ModuleESMMember extends ModuleMember {
    public constructor(node: ModuleESMNode) {
        super(node);
    }

    public get node(): ModuleESMNode {
        return super.node as ModuleESMNode;
    }
}

export class ModuleImportMember extends ModuleESMMember {
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

export class ModuleExportMember extends ModuleESMMember {
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

export class ModuleExportDefaultMember extends ModuleESMMember {
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

export abstract class ModuleSchemaMember extends ModuleMember {
    public constructor(node: ModuleSchemaNode) {
        super(node);
    }

    public get node(): ModuleSchemaNode {
        return super.node as ModuleSchemaNode;
    }
}

export class ModuleTypeMember extends ModuleSchemaMember {
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

export class ModuleInterfaceMember extends ModuleSchemaMember {
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

export class ModuleEnumMember extends ModuleSchemaMember {
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

export abstract class ModuleVariantMember extends ModuleMember implements ModuleHasTypeNodeMember {
    #typeNode: TypeNode | null = null;

    public constructor(node: ModuleVariantNode) {
        super(node);
    }

    public get node(): ModuleVariantNode {
        return super.node as ModuleVariantNode;
    }

    public get typeNode(): TypeNode | null {
        return this.#typeNode;
    }
}

export class ModuleVariableMember extends ModuleVariantMember {
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

export class ModuleFunctionMember extends ModuleVariantMember {
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
    typeNode: TypeNode | null;
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