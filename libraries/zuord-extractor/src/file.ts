// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileType {
    Main = "main",
    Schema = "schema",
    Variants = "variants"
}

export { File as FileSpec, file as fileSpec };