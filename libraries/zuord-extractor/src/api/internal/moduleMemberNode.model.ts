import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment } from "ts-morph";

export type ModuleMemberNode = 
    | ModuleMemberModelNode
    | ModuleMemberVariantNode;

export type ModuleESMNode = 
    | ModuleImportNode
    | ModuleExportNode
    | ModuleDefaultNode;

export type ModuleImportNode = ImportDeclaration;

export type ModuleExportNode = ExportDeclaration;

export type ModuleDefaultNode = ExportAssignment;

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