import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcasePanelProps, ShowcaseState, ShowcaseControlState } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useEffect, useRef } from 'react';

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        panel: {
            controls: [],
            design: { columns: 3 }
        }
    }, $props);

    const stateRef = useRef<ShowcaseState>({
        hovered: null,      setHovered: (value) => state.hovered = value,
        focused: null,      setFocused: (value) => state.focused = value,
        inspected: null,    setInspected: (value) => state.inspected = value
    });

    const state = stateRef.current;

    return (
        <ShowcaseContext.Provider value={state}>
            <div className={clsx('showcase', style['showcase'])}>
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
    const context = useContext(ShowcaseContext);
    const stateRef = useRef<ShowcaseControlState>({
        isHovered: false,   setIsHovered: (value) => state.isHovered = value,
        isFocused: false,   setIsFocused: (value) => state.isFocused = value,
        isInspected: false,  setIsInspected: (value) => state.isInspected = value
    });

    const state = stateRef.current;

    return (
        <div
            className={clsx(style['control'])}
            onMouseEnter={() => context.setHovered(state)}
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