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
    | MemberVariantOnlyType;

export type MemberSchemaLikeType =
    | MemberGlobalLikeType
    | MemberSchemaOnlyType;

export type MemberSchemaOnlyType =
    | MemberType.Type
    | MemberType.Interface
    | MemberType.Class
    | MemberType.Enum;

export type MemberVariantLikeType =
    | MemberGlobalLikeType
    | MemberVariantOnlyType;

export type MemberVariantOnlyType =
    | MemberType.Variable
    | MemberType.Function;

export type MemberInitializerLikeType = 
    | MemberType.Value
    | MemberType.ArrowFunction
    | MemberType.FunctionExpression;