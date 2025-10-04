import path from "path";

export const getBaseName = (fileName: string) => {
    const parts = fileName.split("/");
    const lastPart = parts.pop() || "";

    const baseName = lastPart.split(".")[0];

    return baseName || undefined;
};

export const getRootName = (fileName: string) => {
    return path.basename(fileName, path.extname(fileName));
}

export const getZSName = (fileName: string) => {
    const rootName = getRootName(fileName);
    if(rootName) {
        return `${rootName}.zs`;
    }
    return undefined;
}

export const getZVName = (fileName: string) => {
    const rootName = getRootName(fileName);
    if(rootName) {
        return `${rootName}.zv`;
    }
    return undefined;
}

export const isZFile = (fileName: string) => {
    return isZSFile(fileName) || isZVFile(fileName);
}

export const isZSFile = (fileName: string) => {
    return path.extname(fileName) === ".zs";
};

export const isZVFile = (fileName: string) => {
    return path.extname(fileName) === ".zv";
};