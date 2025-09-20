import { ModuleModelMember } from "./moduleMember.model";

export interface ModuleFile {
    kind: ModuleFileKind;
};

export interface ModuleModelFile extends ModuleFile {
    members: ModuleModelMember[];
}

export interface ModuleVariantsFile extends ModuleFile {

}

export enum ModuleFileKind {
    Model = "model",
    Variants = "variants"
}