import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps, PretextTokenProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';
import { highlighter } from '@site/src/utils/pretext';

export const Pretext: React.FC<PretextProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        text: '',
        modifiers: [],
        language: 'typescript',
        design: {
            selectable: false,
            style: {},
        }
    }, $props);

    const { tokens } = highlighter.codeToTokens(props.text, { lang: 'ts', theme: 'dark-plus' });

    return (
        <pre className={clsx('pretext', style['pretext'])} style={{ userSelect: props.design.selectable ? 'text' : 'none', ...props.design.style }}>
            {tokens.map((line, i) => (
                <div key={i} style={{ minHeight: '24px', lineHeight: '24px' }}>
                    {line.map((token, j) => {
                        
                        let meta = { Token: PretextToken, content: token.content, color: token.color };

                        for (const modifier of props.modifiers) {
                            if (modifier.predicate(meta.content)) {
                                meta = { ...meta, ...(modifier.props) };
                            }
                        }

                        const { Token, content, color } = meta;

                        return (
                            <Token content={content} color={color} />
                        );
                    })}
                </div>
            ))}
        </pre>
    );
};

export const PretextToken: React.FC<PretextTokenProps> = (props) => {
    return (
        <span style={{ color: props.color }}>
            {props.content}
        </span>
    );
}