import clsx from "clsx";
import { tokenText } from "../utils/tokenText";

export const CodeToken: React.FC<CodeTokenProps> = ({ token }) => {
    let { type, text } = typeof token === "string" 
        ? { type: "", text: token }
        : { type: token.type, text: tokenText(token.content) };
        
    return (
        <span className={clsx(`token ${type}`)}>
            {text}
        </span>
    );
};

export interface CodeTokenProps {
    token: string | Prism.Token;
}

export type CodeTokenWrapper = React.FC<CodeTokenWrapperProps>;

export interface CodeTokenWrapperProps {
    text: string
}