import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, Node, ArrowFunction, FunctionExpression } from "ts-morph";

export type ModuleNode = Node;

export type ModuleKnownNode =
    | ModuleESMNode
    | ModuleModelNode
    | ModuleVariantNode;

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

export type ModuleVariableNode = VariableStatement;

export type ModuleFunctionNode = FunctionDeclaration;

export type ModuleFunctionBaseNode =
    | ModuleFunctionNode
    | ModuleFunctionLikeNode;

export type ModuleFunctionLikeNode = 
    | ModuleArrowFunctionNode
    | ModuleFunctionExpressionNode;

export type ModuleArrowFunctionNode = ArrowFunction;

export type ModuleFunctionExpressionNode = FunctionExpression;

//

export type ModuleDiscardedNode =
    | ModuleDiscardedModelNode
    | ModuleDiscardedVariantNode;

export type ModuleDiscardedModelNode = 
    | ModuleVariantNode;

export type ModuleDiscardedVariantNode =
    | ModuleModelNode;