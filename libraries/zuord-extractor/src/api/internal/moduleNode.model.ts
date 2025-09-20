import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, FunctionExpression, ArrowFunction, ImportDeclaration, ExportDeclaration, ExportAssignment, ExportSpecifier } from "ts-morph";

export type ModuleNode = 
    | ModuleModelNode
    | ModuleVariantNode;

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

export type ModuleFunctionNode = 
    | FunctionDeclaration 
    | FunctionExpression 
    | ArrowFunction;

export type ModuleVariableNode = VariableStatement;