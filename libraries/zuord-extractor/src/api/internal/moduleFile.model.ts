export interface ModuleFile {
    kind: ModuleFileKind;
};

export interface ModuleModelFile extends ModuleFile {

}

export interface ModuleVariantsFile extends ModuleFile {

}

export enum ModuleFileKind {
    Model = "model",
    Variants = "variants"
}