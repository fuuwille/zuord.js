import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.type";
import { ModuleMember, ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.type";

export interface ModuleFile {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember[];
    discarded: ModuleMember[];
    others: ModuleMember[];
};

export interface ModuleTypeFile extends ModuleFile {
    members: ModuleTypeLikeMember[];
}

export interface ModuleVariantsFile extends ModuleFile {
    members: ModuleVariantLikeMember[];
}