export const prismContent = (content: string | Prism.Token | (string | Prism.Token)[]) : string | string[] => {
    if (typeof content === "string") return content as string;

    if (Array.isArray(content)) {
        return content.map((c, i) => prismContent(c)) as string[];
    }

    return prismContent(content.content);
};