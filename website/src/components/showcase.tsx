import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcasePanelProps, ShowcaseState, ShowcaseControlState, ShowcaseControlRef } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

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
        pos: 0,
        hovered: null,      setHovered: (value) => {
            clearTimeout(focuseTimeoutRef.current);
            state.hovered = value;

            if(state.hovered) {
                focuseTimeoutRef.current = setTimeout(() => {
                    if(!state.focused || value.props.id !== state.focused.props.id) {
                        state.focused?.state.setIsFocused(false);
                        state.focused = state.hovered;
                        state.focused.state.setIsFocused(true);
                    }

                    console.log([value.props.id, state.focused?.props.id])
                }, 175);
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
                onMouseLeave={() => {
                    state.focused?.state.setIsFocused(false);
                    state.focused = null;
                }}
            >
                <ShowcasePanel {...props.panel} />
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcaseContext = createContext<ShowcaseState>(null);

const ShowcasePanel : React.FC<ShowcasePanelProps> = (props) => {
    const context = useContext(ShowcaseContext);
    context.pos = 0;

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
    const controlRef = useRef<ShowcaseControlRef>({
        props: props,
        state: {
            isHovered: false,   setIsHovered: (value) => {
                if(value && !control.state.isHovered) {
                    context.setHovered(control);
                    isHovered[1](true);
                }
                else if(!value && control.state.isHovered) {
                    context.setHovered(null);
                    isHovered[1](false);
                }
            },
            
            isFocused: false,   setIsFocused: (value) => {
                if(value && !control.state.isFocused) {
                    context.setFocused(control);
                    isFocused[1](true);
                }
                else if(!value && control.state.isFocused) {
                    context.setFocused(null);
                    isFocused[1](false);
                }
            },
            isInspected: false,  setIsInspected: (value) => control.state.isInspected = value
        }
    });

    const control = controlRef.current;
    control.props = props;
    control.state.isHovered = isHovered[0];
    control.state.isFocused = isFocused[0];
    control.state.isInspected = isInspected[0];

    return (
        <div
            className={clsx(style['control'], control.state.isFocused ? style['engaged'] : null)}
            onMouseEnter={() => {
                control.state.setIsHovered(true);
            }}
            onMouseLeave={() => {
                control.state.setIsHovered(false);
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