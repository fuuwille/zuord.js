import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps, PretextTokenNode, PretextTokenProps } from '@site/src/types/pretext';
import { produce, produceX } from '@zuord/produce';
import { highlighter } from '@site/src/utils/pretext';
import { Tooltip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export const Pretext: React.FC<PretextProps> = ($props) => {
    const props = produce.integrate({
        source: [],
        modifiers: [],
        language: 'typescript',
        design: {
            flatten: true,
            selectable: false,            
            preWrap: true,
        },
        style: {}
    }, $props);

    const tokens = typeof props.source == "string" ? highlighter.codeToTokens(props.source, { lang: 'ts', theme: 'dark-plus' }).tokens : props.source;
    const flatten = props.design.flatten || false;

    return (
        <pre 
            className={clsx('pretext', style['pretext'], flatten ? style['flatten'] : null)} 
            style={{ 
                userSelect: props.design.selectable ? 'text' : 'none',
                whiteSpace: props.design.preWrap ? 'pre-wrap' : 'none',
                ...props.style
            }}
        >
            {tokens.map((line, i) => (
                <div key={i}>
                    {line.map((token, j) => {
                        
                        let meta = { Body: PretextTokenBody.Native, content: token.content, tips: null, style: { color: token.color } };
                        let patchedStyle = { };

                        if(props.modifiers) {
                            for (const modifier of props.modifiers) {
                                if (modifier?.predicate?.(meta.content)) {
                                    meta = produce.integrate(meta, modifier.props || {});
                                    patchedStyle = produceX.integrate.loose(patchedStyle, modifier.props.style || {});
                                }
                            }
                        }

                        const { Body, ...data } = meta;
                        const bodyProps = { className: clsx(style['token']), style: { color: token.color, ...patchedStyle }, key: j };

                        if (meta.tips) {
                            return (
                                <Tooltip key={j} title={<meta.tips />}>
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
        const color = props.level === "origin" ? '#d16aa6' : props.level === "modified" ? '#d1c76a' : '#6ad180ff';

        return (
            <>
                <span
                    style={{
                        color,
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
                <span style={{ color }}>
                    {props.content}
                </span>
            </>
        );
    }) satisfies React.FC<PretextTokenProps.Diff>
}