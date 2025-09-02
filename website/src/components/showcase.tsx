import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcasePanelProps, ShowcaseState, ShowcaseControlRef } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useRef, useState } from 'react';

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        panel: {
            controls: [],
            design: { columns: 3 }
        }
    }, $props);

    const focuseTimeout = useRef<NodeJS.Timeout>(null);
    const unfocusTimeout = useRef<NodeJS.Timeout>(null);

    const state = useRef<ShowcaseState>({
        pos: 0,
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
                    }, 125);
                }}
            >
                <ShowcasePanel {...props.panel} />
                <ShowcaseInspector />
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcaseContext = createContext<ShowcaseState>(null);

const ShowcasePanel : React.FC<ShowcasePanelProps> = (props) => {
    const context = useContext(ShowcaseContext);

    return (
        <div className={clsx(style['panel'])} style={{ gridTemplateColumns: `repeat(${props.design.columns}, 1fr)` }}>
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
            className={clsx(style['control'], ref.current.state.isFocused ? style['engaged'] : null)}
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
    const context = useContext(ShowcaseContext);

    return (
        <div className={style['inspector']}>
            <h2>Showcase Inspector</h2>
            <pre>{JSON.stringify(context, null, 2)}</pre>
        </div>
    );
}