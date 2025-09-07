import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcaseContainerProps, ShowcaseRef, ShowcaseControlRef, ShowcaseControlData, ShowcaseInspectorBodyProps } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Box, Divider, Tooltip } from '@mui/material';

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        container: {
            controls: [],
            design: { columns: 3 }
        },
        design: {
            className: null
        }
    }, $props);

    const ref = useRef<ShowcaseRef>({
        div: null,
        target: null,
        data: {
            content: null,
            dispatch: null
        }
    });

    const [data, setData] = useState<ShowcaseControlData>(null);

    ref.current.data = {
        content: data,
        dispatch: setData
    }

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current.div = divRef.current;
    }, []);

    return (
        <ShowcaseContext.Provider value={ref.current}>
            <div 
                ref={divRef}
                className={clsx('showcase', style['showcase'], props.design?.className)}
            >
                <Tooltip 
                    title={<ShowcaseInspector />} 
                    placement="top" 
                    open={data !== null}
                    onClose={() => {
                        if(ref.current.target) {
                            ref.current.target.state.setIsFocused(false);
                            ref.current.target = null;
                            ref.current.data.dispatch(null);
                        }
                    }}
                >
                    <div
                        className={clsx(style['panel'])}
                    >
                        <ShowcaseContainer {...props.container} />
                    </div>
                </Tooltip>
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcaseContext = createContext<ShowcaseRef>(null);

const ShowcaseContainer : React.FC<ShowcaseContainerProps> = (props) => {
    const yUnit = props.controls.length / props.design.columns;

    return (
        <div 
            className={clsx(style['container'])} 
            style={{ gridTemplateColumns: 'auto '.repeat(props.design.columns).trim(), height: `${yUnit * 36}px` }}
        >
            {props.controls.map((control, index) => {
                return (
                    <ShowcaseControl id={index + 1} key={index} {...control} />
                );
            })}
        </div>
    );
}

const ShowcaseControl: React.FC<ShowcaseControlProps> = (props) => {
    const isFocused = useState(false);

    const context = useContext(ShowcaseContext);
    const ref = useRef<ShowcaseControlRef>({
        props: props,
        state: {
            isFocused: false,   setIsFocused: (value) => {
                if(value && !ref.current.state.isFocused) {
                    context.target = ref.current;
                    isFocused[1](true);
                }
                else if(!value && ref.current.state.isFocused) {
                    context.target = null;
                    isFocused[1](false);
                }
            },
        }
    });

    ref.current.props = props;
    ref.current.state.isFocused = isFocused[0];
    const focusTimeout = useRef<NodeJS.Timeout>(null);

    return (
        <div
            className={clsx(style['control'], ref.current.state.isFocused ? style['focused'] : null, props.design?.className)}
            onMouseEnter={() => {
                focusTimeout.current = setTimeout(() => {
                    context.target?.state.setIsFocused(false);
                    context.target = ref.current;
                    context.target.state.setIsFocused(true);

                    context.data.dispatch(props);
                }, context.target ? 200 : 100);
            }}
            onMouseLeave={() => {
                if(focusTimeout.current) {
                    clearTimeout(focusTimeout.current);
                }
            }}
        >
            <span className={style['layout']}>
                <span className={clsx(style['text'], style['zero'])}>{props.text.zero}</span>
            </span>
            <span className={style['visual']}>
                <span className={clsx(style['text'], style['first'])}>{props.text.first}</span>
                <span className={clsx(style['text'], style['second'])}>{props.text.second}</span>
            </span>
        </div>
    );
}

const ShowcaseInspector: React.FC = () => {
    const context = useContext(ShowcaseContext);
    const dataRef = useRef<ShowcaseControlData>(context.data.content);

    if(context.data.content) {
        dataRef.current = context.data.content;
    }
    
    return (
        <div 
            className={clsx(style['inspector'])}
        >
            <div className={clsx(style['head'])}>
                {dataRef.current?.inspector.head}
            </div>
            <Divider orientation='horizontal' flexItem/>
            <div className={clsx(style['body'])}>
                {dataRef.current?.inspector.body}
            </div>
        </div>
    );
}

export const ShowcaseInspectorHead = {
    Native: ((props) => {
        return (
            <div style={{ padding: '0 8px' }}>
                {props.content}
            </div>
        );
    }) satisfies React.FC<{ content: React.ReactNode }>,
    Detailed : ((props) => {
        return (
            <>
                <div className={clsx(style['box'], style['link'])}>
                    L
                </div>
                <div className={clsx(style['content'])}>
                    {props.content}
                </div>
                <div className={clsx(style['box'], style['copy'])}>
                    C
                </div>
            </>
        );
    }) satisfies React.FC<{ content: React.ReactNode }>
}

export const ShowcaseInspectorBody = {
    Description: ((props) => {
        return (
            <div style={{ padding: '0 8px' }}>
                {<props.text />}
            </div>
        );
    }) satisfies React.FC<{ text: React.FC }>,
    Content : ((props) => {
        return (
            <div className={clsx(style['body-content'])}>
                <div className={clsx(style['example'])}>
                    {props.example && <props.example />}
                </div>
                <Divider orientation='horizontal' flexItem />
                <Box display={{ xs: 'none', lg: 'block' }}>
                    <div className={clsx(style['result'])}>
                        <div className={clsx(style['inference'])}>
                            {props.inference && <props.inference />}
                        </div>
                        <div className={clsx(style['value'])}>
                            {props.value && <props.value />}
                        </div>
                    </div>
                    <div className={clsx(style['footer'])}>
                        <div className={clsx(style['decl'], style['source'])}>
                            <div className={clsx(style['box'])} />
                            <span className={clsx(style['text'])}>source content</span>
                        </div>
                        <div className={clsx(style['decl'], style['patch'])}>
                            <div className={clsx(style['box'])} />
                            <span className={clsx(style['text'])}>patched content</span>
                        </div>
                    </div>
                </Box>
            </div>
        );
    }) satisfies React.FC<ShowcaseInspectorBodyProps.Content>,
}