// @zuord-scope

export { default as MemberBase } from "./member.tzs";

export enum MemberKind {
    Unknown,
    Import,
    Export,
    ExportDefault,
    Type,
    Interface,
    Variable,
    Function,
    Value,
    ArrowFunction,
    FunctionExpression
}