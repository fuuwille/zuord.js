import style from '@site/src/css/modules/pretext.module.scss';
import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // TS desteği için
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { tokenText } from "@site/src/utils/tokenText";
import clsx from "clsx";
import { PretextProps } from '@site/src/types/pretext';

export const Pretext: React.FC<PretextProps> = ({ text, modifiers = [] }) => {
    const tokens = Prism.tokenize(text, Prism.languages.ts);

    return (
        <pre className={clsx('pretext', style['pretext'])}>
            {tokens.map((token, i) => {
                const data = typeof token === "string" 
                    ? { content: token, type: "" }
                    : { content: tokenText(token.content), type: token.type };

                const modifier = modifiers.find(modifier => modifier.predicate(data))

                const { type, content, Node } = { ...data, ...(modifier?.props ?? {}) };

                return (
                    <span className={clsx(`token ${type}`)}>
                        {Node ? <Node content={content} type={type} /> : content}
                    </span>
                )
            })}
        </pre>
    );
};