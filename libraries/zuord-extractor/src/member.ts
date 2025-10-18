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
    | MemberESMLikeType;

export type MemberESMLikeType =
    | MemberType.Import
    | MemberType.Export
    | MemberType.ExportDefault;

export type MemberDefinitionLikeType =
    | MemberGlobalLikeType
    | MemberDefinitionOnlyType;

export type MemberDefinitionOnlyType =
    | MemberSchemaOnlyType
    | MemberType.Variable
    | MemberType.Function
    | MemberType.Value;

export type MemberSchemaOnlyType =
    | MemberType.Type
    | MemberType.Interface
    | MemberType.Class
    | MemberType.Enum;