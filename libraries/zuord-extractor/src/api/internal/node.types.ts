import { FunctionDeclaration, ArrowFunction, FunctionExpression, VariableDeclaration, ExportAssignment, ObjectLiteralExpression } from "ts-morph";

export type RuntimeNode =
  | FunctionDeclaration
  | ArrowFunction
  | FunctionExpression
  | VariableDeclaration
  | ExportAssignment
  | ObjectLiteralExpression;