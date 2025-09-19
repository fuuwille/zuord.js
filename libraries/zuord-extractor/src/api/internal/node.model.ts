import { FunctionDeclaration, ArrowFunction, FunctionExpression, VariableDeclaration, ExportAssignment, ObjectLiteralExpression, InterfaceDeclaration, TypeAliasDeclaration } from "ts-morph";

export type ModelNode =
    | InterfaceDeclaration
    | TypeAliasDeclaration;

export type VariantNode =
    | FunctionDeclaration
    | ArrowFunction
    | FunctionExpression
    | VariableDeclaration
    | ExportAssignment
    | ObjectLiteralExpression;