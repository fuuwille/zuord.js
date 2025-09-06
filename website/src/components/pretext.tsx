import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps, PretextTokenNode, PretextTokenProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';
import { highlighter } from '@site/src/utils/pretext';
import { Tooltip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

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
                            <Token {...rest} key={j} />
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
            <span style={{ color: props.color, ...props.style }}>
                {props.content}
            </span>
        );
    }) satisfies React.FC<PretextTokenProps.Native>,
    Featured: ((props) => {
        return (
            <Tooltip title={props.title} placement="bottom">
                <div style={{ color: props.color, border: `1px solid ${props.color}69`, borderRadius: '800px', height: '20px', padding: '0px 8px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer', ...props.style }}>
                    {props.content}
                </div>
            </Tooltip>
        );
    }) satisfies React.FC<PretextTokenProps.Featured>,
    Animated: ((props) => {
        const [transition, setTransition] = useState(false);

        const [index, setIndex] = useState(0);
        const [first, setFirst] = useState<React.ReactNode>(props.stages[index]);
        const [second, setSecond] = useState<React.ReactNode>(null);

        const indexRef = useRef(index);

        useEffect(() => {
            indexRef.current = index;
        }, [index]);

        const nextStage = () => {
            if(!transition) {
                setTransition(true);

                let nextIndex = indexRef.current >= props.stages.length - 1 ? 0 : indexRef.current + 1;
                setSecond(props.stages[nextIndex]);

                setIndex(nextIndex);

                setTimeout(() => {
                    setFirst(props.stages[nextIndex]);
                    setSecond(null);

                    setTransition(false);
                }, 1000);
            }
        }

        useEffect(() => {
            const interval = setInterval(nextStage, 3000);
            return () => clearInterval(interval);
        }, []);

        return (
            <span 
                className={clsx(style['token'], style['animated'])} 
                style={{ border: `1.5px solid ${props.color}69`, color: props.color, ...props.style }} 
            >
                <span className={style['layout']}>
                    <span className={clsx(style['text'], style['zero'])}>{props.layout}</span>
                </span>
                <span className={clsx(style['visual'], transition ? style['transition'] : null)}>
                    <span className={clsx(style['text'], style['first'])}>{first}</span>
                    <span className={clsx(style['text'], style['second'])}>{second}</span>
                </span>
            </span>
        );
    }) satisfies React.FC<PretextTokenProps.Animated>,
}