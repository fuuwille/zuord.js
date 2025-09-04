import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';
import { highlighter } from '@site/src/utils/pretext';

export const Pretext: React.FC<PretextProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        text: '',
        modifiers: [],
        language: 'typescript',
        design: {
            selectable: true,
            style: {},
        }
    }, $props);

    const { tokens } = highlighter.codeToTokens(props.text, { lang: 'ts', theme: 'dark-plus' });

    return (
        <pre className={clsx('pretext', style['pretext'])} style={{ userSelect: props.design.selectable ? 'text' : 'none', ...props.design.style }}>
            {tokens.map((line, i) => (
                <div key={i}>
                    {line.map((token, j) => {
                        
                        let data = { content: token.content, color: token.color, Node: null };

                        for (const modifier of props.modifiers) {
                            if (modifier.predicate(data.content)) {
                                data = { ...data, ...(modifier.props) };
                            }
                        }

                        return (
                            <span
                                key={j}
                                style={{ color: data.color }}
                            >
                                {data.Node ? <data.Node content={data.content} color={data.color} /> : data.content}
                            </span>
                        );
                    })}
                </div>
            ))}
        </pre>
    );
};