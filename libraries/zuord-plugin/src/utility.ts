import path from "path";

export const getBaseName = (fileName: string) => {
    const parts = fileName.split("/");
    const lastPart = parts.pop() || "";

    const baseName = lastPart.split(".")[0];

    return baseName || undefined;
};

export const isZSFile = (fileName: string) => {
    return path.extname(fileName) === ".zs";
};

export const isZVFile = (fileName: string) => {
    return path.extname(fileName) === ".zv";
};