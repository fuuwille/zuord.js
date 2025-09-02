import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcasePanelProps, ShowcaseState, ShowcaseControlState } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        panel: {
            controls: [],
            design: { columns: 3 }
        }
    }, $props);

    const focuseTimeoutRef = useRef<NodeJS.Timeout>(null);
    const focuseTimeout = focuseTimeoutRef.current;

    const stateRef = useRef<ShowcaseState>({
        hovered: null,      setHovered: (value) => {
            clearTimeout(focuseTimeoutRef.current);
            state.hovered = value;

            if(state.hovered) {
                focuseTimeoutRef.current = setTimeout(() => {
                    state.focused = state.hovered;
                    state.focused.setIsFocused(true);
                }, 1000);
            }
        },
        focused: null,      setFocused: (value) => state.focused = value,
        inspected: null,    setInspected: (value) => state.inspected = value
    });

    const state = stateRef.current;

    return (
        <ShowcaseContext.Provider value={state}>
            <div 
                className={clsx('showcase', style['showcase'])}
            >
                <ShowcasePanel {...props.panel} />
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcaseContext = createContext<ShowcaseState>(null);

const ShowcasePanel : React.FC<ShowcasePanelProps> = (props) => {
    return (
        <div className={clsx(style['panel'])} style={{ gridTemplateColumns: `repeat(${props.design.columns}, 1fr)` }}>
            {props.controls.map((control, index) => (
                <ShowcaseControl key={index} {...control} />
            ))}
        </div>
    );
}

const ShowcaseControl: React.FC<ShowcaseControlProps> = (props) => {
    const isHovered = useState(false);
    const isFocused = useState(false);
    const isInspected = useState(false);

    const context = useContext(ShowcaseContext);
    const stateRef = useRef<ShowcaseControlState>({
        isHovered: false,   setIsHovered: (value) => {
            if(value && !state.isHovered) {
                context.setHovered(state);
                isHovered[1](true);
            }
            else if(!value && state.isHovered) {
                context.setHovered(null);
                isHovered[1](false);
            }
        },
        
        isFocused: false,   setIsFocused: (value) => state.isFocused = value,
        isInspected: false,  setIsInspected: (value) => state.isInspected = value
    });

    const state = stateRef.current;
    state.isHovered = isHovered[0];
    state.isFocused = isFocused[0];
    state.isInspected = isInspected[0];

    return (
        <div
            className={clsx(style['control'], state.isFocused ? style['engaged'] : null)}
            onMouseEnter={() => {
                state.setIsHovered(true);
            }}
            onMouseLeave={() => {
                state.setIsHovered(false);
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