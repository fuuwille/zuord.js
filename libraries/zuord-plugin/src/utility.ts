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

export const getTZSPath = (fileName: string) => {
    const rootName = getBasePath(fileName);
    if(rootName) {
        return `${rootName}.tzs`;
    }
    return undefined;
}

export const getTZUPath = (fileName: string) => {
    const rootName = getBasePath(fileName);
    if(rootName) {
        return `${rootName}.tzu`;
    }
    return undefined;
}

export const getTZVPath = (fileName: string) => {
    const rootName = getBasePath(fileName);
    if(rootName) {
        return `${rootName}.tzv`;
    }
    return undefined;
}

export const isTSFile = (fileName: string) => {
    return path.extname(fileName) === ".ts";
}

export const isTZFile = (fileName: string) => {
    return isTZSFile(fileName) || isTZVFile(fileName);
}

export const isTZSFile = (fileName: string) => {
    return path.extname(fileName) === ".tzs";
};

export const isTZVFile = (fileName: string) => {
    return path.extname(fileName) === ".tzv";
};

//

export const getZuordAttributes = (text: string) => {
    let start = 0;
    let lineNumber = 0;

    const attributes = new Set<string>();

    for (let i = 0; i <= text.length; i++) {
        if (i === text.length || text[i] === "\n") {
            let line = text.slice(start, i);
            if (line.endsWith("\r")) line = line.slice(0, -1);

            const attribute = getZuordAttribute(line);

            if(!attribute) {
                break;
            }

            attributes.add(attribute);

            lineNumber++;
            start = i + 1;
        }
    }

    return Array.from(attributes);
}

export const getZuordAttribute = (line: string) => {
    const regex = /^\s*\/\/\s*@zuord-([a-zA-Z0-9_-]+)\s*$/m;
    const match = line.match(regex);

    return match?.[1] ?? undefined;
}