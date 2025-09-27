import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, Node, ArrowFunction, FunctionExpression, SourceFile } from "ts-morph";

export type ModuleNode = Node;

export type ModuleKnownNode =
    | ModuleESMLikeNode
    | ModuleTypeLikeNode
    | ModuleVariantLikeNode;

export type ModuleESMLikeNode = 
    | ModuleImportNode
    | ModuleExportNode
    | ModuleDefaultNode;

export type ModuleImportNode = ImportDeclaration;

export type ModuleExportNode = ExportDeclaration;

export type ModuleDefaultNode = ExportAssignment;

export type ModuleTypeLikeNode =
    | ModuleTypeNode
    | ModuleInterfaceNode
    | ModuleEnumNode;

export type ModuleTypeNode = TypeAliasDeclaration;

export type ModuleInterfaceNode = InterfaceDeclaration;

export type ModuleEnumNode = EnumDeclaration;

export type ModuleVariantLikeNode =
    | ModuleFunctionNode
    | ModuleVariableNode;

export type ModuleVariableNode = VariableStatement;

export type ModuleFunctionNode = FunctionDeclaration;

export type ModuleFunctionLikeNode =
    | ModuleFunctionNode
    | ModuleFunctionAltNode;

export type ModuleFunctionAltNode = 
    | ModuleArrowFunctionNode
    | ModuleFunctionExpressionNode;

export type ModuleArrowFunctionNode = ArrowFunction;

export type ModuleFunctionExpressionNode = FunctionExpression;

//

export type ModuleDiscardedNode =
    | ModuleDiscardedTypeNode
    | ModuleDiscardedVariantNode;

export type ModuleDiscardedTypeNode = 
    | ModuleVariantLikeNode;

export type ModuleDiscardedVariantNode =
    | ModuleTypeLikeNode;