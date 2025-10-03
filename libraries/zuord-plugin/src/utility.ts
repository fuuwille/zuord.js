import path from "path";

export const getBaseName = (fileName: string) => {
    const parts = fileName.split("/");
    const lastPart = parts.pop() || "";

    const baseName = lastPart.split(".")[0];

    return baseName || undefined;
};

export const isZVariantsFile = (fileName: string) => {
    return path.extname(fileName) === ".zv";
};

export const isZSchemaFile = (fileName: string) => {
    return path.extname(fileName) === ".zs";
};