import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleMember } from "./moduleMember";

export interface BaseFile {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember.Base[];
    discarded: ModuleMember.Base[];
    others: ModuleMember.Base[];
};

export interface SchemaFile extends BaseFile {
    members: ModuleMember.SchemaLike[];
}

export interface VariantsFile extends BaseFile {
    members: ModuleMember.VariantLike[];
}