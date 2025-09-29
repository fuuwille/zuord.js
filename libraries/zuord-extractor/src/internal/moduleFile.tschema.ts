import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleMember, ModuleSchemaLikeMember, ModuleVariantLikeMember } from "./moduleMember.tschema";

export interface ModuleFile {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember[];
    discarded: ModuleMember[];
    others: ModuleMember[];
};

export interface ModuleSchemaFile extends ModuleFile {
    members: ModuleSchemaLikeMember[];
}

export interface ModuleVariantsFile extends ModuleFile {
    members: ModuleVariantLikeMember[];
}