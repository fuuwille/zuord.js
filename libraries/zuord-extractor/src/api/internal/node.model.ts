import { FunctionDeclaration, ArrowFunction, FunctionExpression, VariableDeclaration, ExportAssignment, ObjectLiteralExpression, InterfaceDeclaration, TypeAliasDeclaration } from "ts-morph";

export type ModelNode =
    | ModelTypeNode
    | ModelInterfaceNode;

export type ModelTypeNode = TypeAliasDeclaration;

export type ModelInterfaceNode = InterfaceDeclaration;

export type VariantNode =
    | FunctionDeclaration
    | ArrowFunction
    | FunctionExpression
    | VariableDeclaration
    | ExportAssignment
    | ObjectLiteralExpression;