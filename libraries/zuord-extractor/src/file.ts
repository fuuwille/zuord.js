// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileType {
    TS = "ts",
    TV = "tv",
    TZS = "tzs",
    TZV = "tzv"
}

export { File as FileSpec, file as fileSpec };