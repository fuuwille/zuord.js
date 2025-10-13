// @zuord-scope

export { default as ModuleFileD } from "./file.tzs";

export enum FileType {
    Main = "main",
    Schema = "schema",
    Variants = "variants"
}

export { File as FileNest, file as fileNest };