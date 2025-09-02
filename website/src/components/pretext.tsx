import style from '@site/src/css/modules/pretext.module.scss';
import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // TS desteği için
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { tokenText } from "@site/src/utils/tokenText";
import { CodeTokenModifier } from "@site/src/types/codeToken";
import clsx from "clsx";

export const Pretext: React.FC<PretextProps> = ({ code, modifiers = [] }) => {
    const tokens = Prism.tokenize(code, Prism.languages.ts);

    return (
        <pre className={clsx('pretext', style['pretext'])}>
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
