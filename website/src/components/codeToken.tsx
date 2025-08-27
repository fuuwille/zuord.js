import clsx from "clsx";
import { tokenText } from "../utils/tokenText";

export const CodeToken: React.FC<CodeTokenProps> = ({ token }) => {
    const { type, text } = typeof token === "string" 
        ? { type: "", text: token }
        : { type: token.type, text: tokenText(token.content) };
        
    return (
        <span className={clsx('token')}>

        </span>
    );
};

export interface CodeTokenProps {
    token: string | Prism.Token;
}