import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps, PretextTokenNode, PretextTokenProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';
import { highlighter } from '@site/src/utils/pretext';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

export const Pretext: React.FC<PretextProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        text: '',
        modifiers: [],
        language: 'typescript',
        design: {
            selectable: false,            
            preWrap: true,
            style: {},
        }
    }, $props);

    const { tokens } = highlighter.codeToTokens(props.text, { lang: 'ts', theme: 'dark-plus' });

    return (
        <pre 
            className={clsx('pretext', style['pretext'])} 
            style={{ 
                userSelect: props.design.selectable ? 'text' : 'none',
                whiteSpace: props.design.preWrap ? 'pre-wrap' : 'none',
                ...props.design.style
            }}
        >
            {tokens.map((line, i) => (
                <div key={i} style={{ minHeight: '24px', lineHeight: '24px' }}>
                    {line.map((token, j) => {
                        
                        let meta = { Token: PretextToken.Native, content: token.content, color: token.color };

                        for (const modifier of props.modifiers) {
                            if (modifier.predicate(meta.content)) {
                                meta = { ...meta, ...(modifier.props) };
                            }
                        }

                        const { Token, ...rest } = meta;

                        return (
                            <Token {...rest} />
                        );
                    })}
                </div>
            ))}
        </pre>
    );
};

export const PretextToken : Record<string, PretextTokenNode> = {
    Native: ((props) => {
        return (
            <span style={{ color: props.color }}>
                {props.content}
            </span>
        );
    }) satisfies React.FC<PretextTokenProps.Native>,
    Featured: ((props) => {
        return (
            <Tooltip title={props.title} placement="bottom">
                <div style={{ color: props.color, border: `1px solid ${props.color}69`, borderRadius: '800px', height: '20px', padding: '0px 8px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                    {props.content}
                </div>
            </Tooltip>
        );
    }) satisfies React.FC<PretextTokenProps.Featured>,
    Animated: ((props) => {
        const [transition, setTransition] = useState(false);

        return (
            <span 
                className={clsx(style['token'], style['animated'])} 
                style={{ color: props.color }}
                onMouseEnter={() => {
                    if(!transition) {
                        setTransition(true);
                        setTimeout(() => setTransition(false), 500);
                    }
                }}
            >
                <span className={style['layout']}>
                    <span className={clsx(style['text'], style['zero'])}>{props.content}</span>
                </span>
                <span className={clsx(style['visual'], transition ? style['transition'] : null)}>
                    <span className={clsx(style['text'], style['first'])}>{props.content}</span>
                    <span className={clsx(style['text'], style['second'])}>{props.content}</span>
                </span>
            </span>
        );
    }) satisfies React.FC<PretextTokenProps.Native>,
}