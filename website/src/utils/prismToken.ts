export const prismToken = (content: string | Prism.Token | (string | Prism.Token)[]) : string | string[] => {
    if (typeof content === "string") return content as string;

    if (Array.isArray(content)) {
        return content.map((c, i) => prismToken(c)) as string[];
    }

    return prismToken(content.content);
};