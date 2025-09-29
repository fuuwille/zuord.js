import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, Node, ArrowFunction, FunctionExpression, ClassDeclaration } from "ts-morph";

export type ModuleNode = Node;

export type ModuleKnownNode =
    | ModuleESMLikeNode
    | ModuleDefinitionLikeNode;

export type ModuleESMLikeNode = 
    | ModuleImportNode
    | ModuleExportLikeNode;

export type ModuleImportNode = ImportDeclaration;

export type ModuleExportLikeNode = 
    | ModuleExportNode
    | ModuleExportDefaultNode;

export type ModuleExportNode = ExportDeclaration;

export type ModuleExportDefaultNode = ExportAssignment;

export type ModuleDefinitionLikeNode =
    | ModuleSchemaLikeNode
    | ModuleVariantLikeNode;

export type ModuleSchemaLikeNode =
    | ModuleTypeNode
    | ModuleInterfaceNode
    | ModuleEnumNode;

export type ModuleTypeNode = TypeAliasDeclaration;

export type ModuleInterfaceNode = InterfaceDeclaration;

export type ModuleEnumNode = EnumDeclaration;

export type ModuleClassNode = ClassDeclaration;

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
    | ModuleDiscardedSchemaNode
    | ModuleDiscardedVariantNode;

export type ModuleDiscardedSchemaNode = 
    | ModuleVariantLikeNode;

export type ModuleDiscardedVariantNode =
    | ModuleSchemaLikeNode;