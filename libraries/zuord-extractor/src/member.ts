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

    //

    FunctionAlt = ArrowFunction | FunctionExpression,
    FunctionLike = Function | FunctionAlt,
    InitializerLike = Value | ArrowFunction | FunctionExpression,
    VariantOnly = Variable | Function,
    SchemaOnly = Type | Interface,
    DefinitionOnly = SchemaOnly | VariantOnly,
    ExportLike = Export | ExportDefault,
    ESMLike = Import | Export | ExportDefault,
    GlobalLike = ESMLike,
    VariantLike = GlobalLike | VariantOnly,
    SchemaLike = GlobalLike | SchemaOnly,
    DefinitionLike = GlobalLike | DefinitionOnly,
    KnownLike = ESMLike | DefinitionOnly | InitializerLike,
}