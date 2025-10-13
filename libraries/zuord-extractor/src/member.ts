// @zuord-scope

export { default as MemberBase } from "./member.tzs";

export enum MemberType {
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

export { Member as MemberSpec, member as memberSpec } from "./member";