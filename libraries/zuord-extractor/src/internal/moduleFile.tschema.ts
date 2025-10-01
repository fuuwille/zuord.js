import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { Member, SchemaLikeMember, VariantLikeMember } from "./moduleMember.tschema";

export interface BaseFile {
    source: SourceFile
    mode: ModuleMode;
    members: Member[];
    discarded: Member[];
    others: Member[];
};

export interface SchemaFile extends BaseFile {
    members: SchemaLikeMember[];
}

export interface VariantsFile extends BaseFile {
    members: VariantLikeMember[];
}