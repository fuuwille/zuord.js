import { Node } from "ts-morph";
import { ModuleMember, ModuleModelMember } from "./moduleMember.model";

export interface ModuleFile {
    kind: ModuleFileKind;
    members: ModuleMember[];
    others: Node[];
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