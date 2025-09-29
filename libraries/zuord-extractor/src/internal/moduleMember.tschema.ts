class ModuleMember {
    #kind: ModuleMemberKind;

    public constructor(kind: ModuleMemberKind) {
        this.#kind = kind;
    }

    public get kind(): ModuleMemberKind {
        return this.#kind;
    }
}

enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    ExportDefault = "export-default",
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}