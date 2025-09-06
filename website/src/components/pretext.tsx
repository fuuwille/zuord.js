import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps, PretextTokenNode, PretextTokenProps } from '@site/src/types/pretext';
import { zuord, zuordX } from 'zuord';
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
                        
                        let meta = { Body: PretextTokenBody.Native, content: token.content, color: token.color, tips: null };
                        let patchedStyle = {};

                        for (const modifier of props.modifiers) {
                            if (modifier.predicate(meta.content)) {
                                meta = zuordX.integrate.plain.loose(meta, modifier.props || {});
                                patchedStyle = zuordX.integrate.plain.loose(patchedStyle, modifier.props.style || {});
                            }
                        }

                        const { Body, ...data } = meta;
                        const bodyProps = { className: clsx(style['token']), style: { color: meta.color, ...patchedStyle }, key: j };

                        if (meta.tips) {
                            return (
                                <Tooltip key={j} title={<meta.tips />} placement="top">
                                    <span {...bodyProps}>
                                        <Body {...data} />
                                    </span>
                                </Tooltip>
                            );
                        }
                        else {
                            return (
                                <span {...bodyProps}>
                                    <Body {...data} key={j} />
                                </span>
                            );
                        }
                    })}
                </div>
            ))}
        </pre>
    );
};

export const PretextTokenBody : Record<string, PretextTokenNode> = {
    Native: ((props) => {
        return (
            <>
                {props.content}
            </>
        );
    }) satisfies React.FC<PretextTokenProps.Native>,
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
                style={{ border: `1.5px solid ${props.style?.color}69`, ...props.style }} 
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
    Diff: ((props) => {
        return (
            <>
                <span
                    style={{
                        color: props.level === "origin" ? '#c973a8' :
                        props.level === "modified" ? '#d7b787' : '#73c991',
                        border: '1px solid',
                        borderRadius: '6px',
                        textAlign: 'center',
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        left: '-24px',
                        top: '0px',
                        fontSize: '12px',
                        height: '16px',
                        width: '16px',
                        lineHeight: '16px',
                    }}
                >
                    {props.level[0].toUpperCase()}
                </span>
                <span>
                    {props.content}
                    </span>
            </>
        );
    }) satisfies React.FC<PretextTokenProps.Diff>
}