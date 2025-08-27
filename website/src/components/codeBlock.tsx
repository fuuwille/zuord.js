import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // TS desteği için
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { tokenText } from "@site/src/utils/tokenText";

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, style }) => {
    const tokens = Prism.tokenize(code, Prism.languages.ts);
    const blockStyle: Partial<React.CSSProperties> = { background: "transparent", fontSize: "14px", padding: 3, margin: 3, userSelect: "none", ...style };

    return (
        <pre className="code-block" style={blockStyle}>
        {tokens.map((token, i) => {
            const { type, text } = typeof token === "string" 
                ? { type: "", text: token }
                : { type: token.type, text: tokenText(token.content) };

            return (
            <span
                key={i}
                className={`token ${type}`}
                data-token-index={i}
                data-token-type={type}
            >
                {text}
            </span>
            );
        })}
        </pre>
    );
};


export interface CodeBlockProps {
    code: string;
    style?: Partial<React.CSSProperties>;
}
