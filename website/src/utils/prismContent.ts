export const prismContent = (content: string | Prism.Token | (string | Prism.Token)[]) : string => {
    if (typeof content === "string") return content;

    if (Array.isArray(content)) {
        return content.map((c, i) => prismContent(c)).join('');
    }

    return prismContent(content.content);
};