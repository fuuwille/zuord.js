import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // TS desteği için
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { tokenText } from "@site/src/utils/tokenText";
import { CodeTokenModifier } from "@site/src/types/codeToken";
import clsx from "clsx";

export const Pretext: React.FC<PretextProps> = ({ code, style, modifiers = [] }) => {
    const tokens = Prism.tokenize(code, Prism.languages.ts);
    const blockStyle: Partial<React.CSSProperties> = { background: "transparent", fontSize: "14px", padding: 3, margin: 3, userSelect: "none", ...style };

    return (
        <pre className="code-block" style={blockStyle}>
            {tokens.map((token, i) => {
                const data = typeof token === "string" 
                    ? { type: "", text: token }
                    : { type: token.type, text: tokenText(token.content) };

                const modifier = modifiers.find(modifier => modifier.predicate(data))

                const { type, text, Wrapper } = { ...data, ...(modifier?.props ?? {}) };

                return (
                    <span className={clsx(`token ${type}`)}>
                        {Wrapper ? <Wrapper text={text} type={type} /> : text}
                    </span>
                )
            })}
        </pre>
    );
};


export interface PretextProps {
    code: string;
    style?: Partial<React.CSSProperties>;
    modifiers?: CodeTokenModifier[];
}
