import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleMember, ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.tschema";

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