export const tokenText = (token: string | Prism.Token | (string | Prism.Token)[]) : string => {
    if (typeof token === "string") return token;

    if (Array.isArray(token)) {
        return token.map((c, i) => tokenText(c)).join('');
    }

    return tokenText(token.content);
};