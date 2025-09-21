import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, Node } from "ts-morph";

export type ModuleNode = Node;

export type ModuleESMNode = 
    | ModuleImportNode
    | ModuleExportNode
    | ModuleDefaultNode;

export type ModuleImportNode = ImportDeclaration;

export type ModuleExportNode = ExportDeclaration;

export type ModuleDefaultNode = ExportAssignment;

export type ModuleModelNode =
    | ModuleTypeNode
    | ModuleInterfaceNode
    | ModuleEnumNode;

export type ModuleTypeNode = TypeAliasDeclaration;

export type ModuleInterfaceNode = InterfaceDeclaration;

export type ModuleEnumNode = EnumDeclaration;

export type ModuleVariantNode =
    | ModuleFunctionNode
    | ModuleVariableNode;

export type ModuleFunctionNode = FunctionDeclaration;

export type ModuleVariableNode = VariableStatement;

//

export type ModuleDiscardedModelNode = 
    | ModuleVariantNode;

export type ModuleDiscardedVariantNode =
    | ModuleModelNode;