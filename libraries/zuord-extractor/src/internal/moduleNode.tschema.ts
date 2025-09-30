import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, Node, ArrowFunction, FunctionExpression, ClassDeclaration } from "ts-morph";

export type ModuleNode =
    | ModuleESMNode
    | ModuleSchemaNode
    | ModuleVariantNode;

export type ModuleUnknownNode = Node;

export type ModuleESMNode = 
    | ModuleImportNode
    | ModuleExportNode
    | ModuleExportDefaultNode;

export type ModuleImportNode = ImportDeclaration;

export type ModuleExportNode = ExportDeclaration;

export type ModuleExportDefaultNode = ExportAssignment;

export type ModuleSchemaNode =
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

export type ModuleInitializerNode = 
    | ModuleArrowFunctionNode
    | ModuleFunctionExpressionNode;

export type ModuleArrowFunctionNode = ArrowFunction;

export type ModuleFunctionExpressionNode = FunctionExpression;

//

export type ModuleExportLikeNode = 
    | ModuleExportNode
    | ModuleExportDefaultNode;

export type ModuleDefinitionNode =
    | ModuleSchemaNode
    | ModuleVariantNode;

export type ModuleFunctionLikeNode =
    | ModuleFunctionNode
    | ModuleFunctionAltNode;

export type ModuleFunctionAltNode = 
    | ModuleArrowFunctionNode
    | ModuleFunctionExpressionNode;

//

export type ModuleDiscardedNode =
    | ModuleDiscardedSchemaNode
    | ModuleDiscardedVariantNode;

export type ModuleDiscardedSchemaNode = 
    | ModuleVariantNode;

export type ModuleDiscardedVariantNode =
    | ModuleSchemaNode;