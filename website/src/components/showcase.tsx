import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcaseContainerProps, ShowcaseState, ShowcaseControlRef, ShowcaseInspectorRef, ShowcaseControlData } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Divider } from '@mui/material';

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        container: {
            controls: [],
            design: { columns: 3 }
        }
    }, $props);

    const focuseTimeout = useRef<NodeJS.Timeout>(null);
    const unfocusTimeout = useRef<NodeJS.Timeout>(null);

    const state = useRef<ShowcaseState>({
        inspector: null,
        hovered: null,      setHovered: (value) => {
            clearTimeout(focuseTimeout.current);
            clearTimeout(unfocusTimeout.current);

            state.current.hovered = value;

            if(state.current.hovered) {
                focuseTimeout.current = setTimeout(() => {
                    if(!state.current.focused || value.props.id !== state.current.focused.props.id) {
                        state.current.focused?.state.setIsFocused(false);
                        state.current.focused = state.current.hovered;
                        state.current.focused.state.setIsFocused(true);

                        state.current.inspector.state.setData(value.props);
                    }
                }, state.current.focused ? 225 : 125);
            }
        },
        focused: null,      setFocused: (value) => state.current.focused = value,
        inspected: null,    setInspected: (value) => state.current.inspected = value
    });

    return (
        <ShowcaseContext.Provider value={state.current}>
            <div 
                className={clsx('showcase', style['showcase'])}
                onMouseLeave={() => {
                    clearTimeout(focuseTimeout.current);

                    unfocusTimeout.current = setTimeout(() => {
                        state.current.focused?.state.setIsFocused(false);
                        state.current.focused = null;
                        state.current.inspector.state.setData(null);
                    }, 125);
                }}
            >
                <ShowcaseContainer {...props.container} />
                <ShowcaseInspector />
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcaseContext = createContext<ShowcaseState>(null);

const ShowcaseContainer : React.FC<ShowcaseContainerProps> = (props) => {
    const context = useContext(ShowcaseContext);

    return (
        <div className={clsx(style['container'])} style={{ gridTemplateColumns: `repeat(${props.design.columns}, 1fr)` }}>
            {props.controls.map((control, index) => {
                return (
                    <ShowcaseControl id={index + 1} key={index} {...control} />
                );
            })}
        </div>
    );
}

const ShowcaseControl: React.FC<ShowcaseControlProps> = (props) => {
    const isHovered = useState(false);
    const isFocused = useState(false);
    const isInspected = useState(false);

    const context = useContext(ShowcaseContext);
    const ref = useRef<ShowcaseControlRef>({
        props: props,
        state: {
            isHovered: false,   setIsHovered: (value) => {
                if(value && !ref.current.state.isHovered) {
                    context.setHovered(ref.current);
                    isHovered[1](true);
                }
                else if(!value && ref.current.state.isHovered) {
                    context.setHovered(null);
                    isHovered[1](false);
                }
            },
            
            isFocused: false,   setIsFocused: (value) => {
                if(value && !ref.current.state.isFocused) {
                    context.setFocused(ref.current);
                    isFocused[1](true);
                }
                else if(!value && ref.current.state.isFocused) {
                    context.setFocused(null);
                    isFocused[1](false);
                }
            },
            isInspected: false,  setIsInspected: (value) => ref.current.state.isInspected = value
        }
    });

    ref.current.props = props;
    ref.current.state.isHovered = isHovered[0];
    ref.current.state.isFocused = isFocused[0];
    ref.current.state.isInspected = isInspected[0];

    return (
        <div
            className={clsx(style['control'], ref.current.state.isFocused ? style['focused'] : null, props.design?.className)}
            onMouseEnter={() => {
                ref.current.state.setIsHovered(true);
            }}
            onMouseLeave={() => {
                ref.current.state.setIsHovered(false);
            }}
        >
            <span className={style['layout']}>
                <span className={style['text']}>{props.text.default}</span>
            </span>
            <span className={style['visual']}>
                <span className={clsx(style['text'], style['default'])}>{props.text.default}</span>
                <span className={clsx(style['text'], style['focused'])}>{props.text.focused}</span>
            </span>
        </div>
    );
}

const ShowcaseInspector: React.FC = () => {
    const [data, setData] = useState<ShowcaseControlData>(null);
    const dataRef = useRef<ShowcaseControlData>(data);

    const context = useContext(ShowcaseContext);
    const ref = useRef<ShowcaseInspectorRef>({
        state: {
            data: null,
            setData: (data) => {
                ref.current.state.data = data;
                setData(data);
            }
        }
    });

    if(data) dataRef.current = data;
    context.inspector = ref.current;

    const isActive = data !== null;

    return (
        <div className={clsx(style['inspector'], isActive ? style['active'] : null)}>
            <div className={clsx(style['head'])}>
                {dataRef.current?.inspector.head.title}
            </div>
            <div className={clsx(style['body'])}>
                <div className={clsx(style['code'])}>
                    {dataRef.current?.inspector.body.code}
                </div>
                <div className={clsx(style['result'])}>
                    <div className={clsx(style['type'])}>
                        {dataRef.current?.inspector.body.result.type}
                    </div>
                    <div className={clsx(style['runtime'])}>
                        {dataRef.current?.inspector.body.result.runtime}
                    </div>
                </div>
            </div>
        </div>
    );
}