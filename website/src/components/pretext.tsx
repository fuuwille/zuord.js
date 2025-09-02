import style from '@site/src/css/modules/pretext.module.scss';
import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // TS desteği için
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { tokenText } from "@site/src/utils/tokenText";
import clsx from "clsx";
import { PretextProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';

export const Pretext: React.FC<PretextProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        text: '',
        modifiers: [],
        language: Prism.languages.ts,
        design: {
            selectable: true,
            style: {},
        }
    }, $props);


    const tokens = Prism.tokenize(props.text, props.language);

    return (
        <pre className={clsx('pretext', style['pretext'])} style={{ userSelect: props.design.selectable ? 'text' : 'none', ...props.design.style }}>
            {tokens.map((token, i) => {
                const data = typeof token === "string" 
                    ? { content: token, type: "" }
                    : { content: tokenText(token.content), type: token.type };

                const modifier = props.modifiers.find(modifier => modifier.predicate(data))

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