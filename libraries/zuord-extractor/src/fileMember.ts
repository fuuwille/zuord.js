// @zuord-scope

export enum FileMemberKind {
    Unknown = 0,
    Import = 1 << 0,
    Export = 1 << 1,
    ExportDefault = 1 << 2,
    Type = 1 << 3,
    Interface = 1 << 4,
    Variable = 1 << 5,
    Function = 1 << 6,
    Value = 1 << 7,
    ArrowFunction = 1 << 8,
    FunctionExpression = 1 << 9,
}