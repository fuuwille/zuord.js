export interface ModuleFile {
    kind: ModuleFileKind;
};

export enum ModuleFileKind {
    Model = "model",
    Variants = "variants"
}