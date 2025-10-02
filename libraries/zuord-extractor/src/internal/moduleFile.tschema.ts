import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { Base, SchemaLike, VariantLike } from "./moduleMember.tschema";

export interface BaseFile {
    source: SourceFile
    mode: ModuleMode;
    members: Base[];
    discarded: Base[];
    others: Base[];
};

export interface SchemaFile extends BaseFile {
    members: SchemaLike[];
}

export interface VariantsFile extends BaseFile {
    members: VariantLike[];
}