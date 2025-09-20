import { ModuleMember, ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";

export interface ModuleFile {
    kind: ModuleFileKind;
    members: ModuleMember[];
    invalids: ModuleMember[];
};

export interface ModuleModelFile extends ModuleFile {
    members: ModuleModelMember[];
}

export interface ModuleVariantsFile extends ModuleFile {
    members: ModuleVariantMember[];
}

export enum ModuleFileKind {
    Model = "model",
    Variants = "variants"
}