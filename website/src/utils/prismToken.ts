export const renderContent = (content: string | Prism.Token | (string | Prism.Token)[]) : string | string[] => {
    if (typeof content === "string") return content as string;

    if (Array.isArray(content)) {
        return content.map((c, i) => renderContent(c)) as string[];
    }

    return renderContent(content.content);
};