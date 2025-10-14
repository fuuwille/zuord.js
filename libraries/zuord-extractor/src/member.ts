// @zuord-scope
// @zuord-exports spec

export { default as MemberBase } from "./member.tzs";

export enum MemberType {
    Unknown,
    Import,
    Export,
    ExportDefault,
    Type,
    Interface,
    Class,
    Enum,
    Variable,
    Function,
    Value,
    ArrowFunction,
    FunctionExpression
}

export { Member as MemberSpec, member as memberSpec } from "./member";