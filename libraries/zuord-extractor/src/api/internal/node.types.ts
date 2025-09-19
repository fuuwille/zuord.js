import { FunctionDeclaration, ArrowFunction, FunctionExpression, VariableDeclaration, ExportAssignment, ObjectLiteralExpression, InterfaceDeclaration, TypeAliasDeclaration } from "ts-morph";

export type RuntimeNode =
  | FunctionDeclaration
  | ArrowFunction
  | FunctionExpression
  | VariableDeclaration
  | ExportAssignment
  | ObjectLiteralExpression;

export type TypeNode =
    | InterfaceDeclaration
    | TypeAliasDeclaration;