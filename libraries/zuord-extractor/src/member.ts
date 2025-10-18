// @zuord-scope

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

export type MemberGlobalLikeType =
    | MemberType.Import
    | MemberType.Export
    | MemberType.ExportDefault;