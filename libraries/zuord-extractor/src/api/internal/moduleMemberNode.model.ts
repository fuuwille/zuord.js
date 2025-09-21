import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment } from "ts-morph";

export type ModuleMemberNode = 
    | ModuleMemberESMNode
    | ModuleMemberModelNode
    | ModuleMemberVariantNode;

export type ModuleMemberESMNode = 
    | ModuleMemberImportNode
    | ModuleMemberExportNode
    | ModuleMemberDefaultNode;

export type ModuleMemberImportNode = ImportDeclaration;

export type ModuleMemberExportNode = ExportDeclaration;

export type ModuleMemberDefaultNode = ExportAssignment;

export type ModuleMemberModelNode =
    | ModuleMemberTypeNode
    | ModuleMemberInterfaceNode
    | ModuleMemberEnumNode;

export type ModuleMemberTypeNode = TypeAliasDeclaration;

export type ModuleMemberInterfaceNode = InterfaceDeclaration;

export type ModuleMemberEnumNode = EnumDeclaration;

export type ModuleMemberVariantNode =
    | ModuleMemberFunctionNode
    | ModuleMemberVariableNode;

export type ModuleMemberFunctionNode = FunctionDeclaration;

export type ModuleMemberVariableNode = VariableStatement;

//

export type ModuleMemberDiscardedModelNode = 
    | ModuleMemberVariantNode;

export type ModuleMemberDiscardedVariantNode =
    | ModuleMemberModelNode;