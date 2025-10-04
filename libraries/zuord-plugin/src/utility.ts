import path from "path";

export const getBaseName = (fileName: string) => {
    const parts = fileName.split("/");
    const lastPart = parts.pop() || "";

    const names = lastPart.split(".");
    names.pop();

    return names.join(".") || undefined;
};

export const getBasePath = (fileName: string) => {
    return path.join(path.dirname(fileName), path.basename(fileName, path.extname(fileName)));
}

export const getTSPath = (fileName: string) => {
    const rootName = getBasePath(fileName);
    if(rootName) {
        return `${rootName}.ts`;
    }
    return undefined;
}

export const getZSPath = (fileName: string) => {
    const rootName = getBasePath(fileName);
    if(rootName) {
        return `${rootName}.zs`;
    }
    return undefined;
}

export const getZVPath = (fileName: string) => {
    const rootName = getBasePath(fileName);
    if(rootName) {
        return `${rootName}.zv`;
    }
    return undefined;
}

export const isTSFile = (fileName: string) => {
    return path.extname(fileName) === ".ts";
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