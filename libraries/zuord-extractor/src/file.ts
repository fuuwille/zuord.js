// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileType {
    TS = 0,
    TV = 1 << 1,
    TZS = 1 << 2,
    TZV = 1 << 3,
    Schema = FileType.TS | FileType.TZS,
    Variants = FileType.TS | FileType.TZV
}

export { File as FileSpec, file as fileSpec };