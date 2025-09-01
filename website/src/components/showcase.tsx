import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseRef, ShowcaseProps, ShowcaseControlProps, ShowcaseControlRef } from "@site/src/types/showcase"
import { zuord, zuordX } from "zuord"
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Tooltip } from '@mui/material';

const ShowcaseContext = createContext<ShowcaseRef>(undefined);

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuord.integrate({
        controls: [],
        style: {
            columns: 3
        }
    }, $props);

    const ref = useRef<ShowcaseRef>({
        hovered: undefined,
        focused: undefined
    });

    return (
        <ShowcaseContext.Provider value={ref.current}>
            <div 
                className={clsx('showcase', style['showcase'])}
                onMouseLeave={() => {
                    if(ref.current.hovered) {
                        ref.current.hovered.isHovered.dispatch(false);
                        ref.current.hovered = undefined;
                    }
                }}
            >
                <div 
                    className={style['controls']}
                    style={{ 
                        gridTemplateColumns: `repeat(${props.style.columns}, 1fr)`
                    }}
                >
                    {props.controls.map((control, index) => (
                        <ShowcaseControl id={index} key={index} {...control} />
                    ))}
                </div>
                <div
                    className={style['monitor']}
                >

                </div>
            </div>
        </ShowcaseContext.Provider>
    )
}

export const ShowcaseControl: React.FC<ShowcaseControlProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        text: {
            default: "showcase",
            focused: "showcase X"
        },
        id: -1,
        style: {
            className: null
        }
    }, $props);
    
    const divRef = useRef<HTMLDivElement>(null);
    const controlRef = useRef<ShowcaseControlRef>({
        element: undefined,
        isHovered: undefined,
        isFocused: undefined
    });
    
    const context = useContext(ShowcaseContext);

    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const engaged = hovered || (hovered && focused);

    useEffect(() => {
        controlRef.current.element = divRef.current;
        controlRef.current.isHovered = {
            value: hovered,
            dispatch: setHovered
        };
        controlRef.current.isFocused = {
            value: focused,
            dispatch: setFocused
        };
    }, [divRef, hovered, focused]);

    const mouseEnter = useRef<NodeJS.Timeout | null>(null);

    return (
        <Tooltip 
            title={props.text.default} 
            placement="top" 
            arrow
            open={focused}
            onOpen={() => {
                if(!context.focused) {
                    context.focused = controlRef.current;
                    context.focused.isFocused.dispatch(true);
                }
            }}
            onClose={() => {
                if(context.focused === controlRef.current) {
                    context.focused.isFocused.dispatch(false);
                    context.focused = undefined;
                }
            }}
        >
            <div
                ref={divRef}
                className={clsx(style['control'], props.style.className, engaged ? style['engaged'] : null)}
                onMouseEnter={() => {
                    mouseEnter.current = setTimeout(() => {
                        context.hovered?.isHovered.dispatch(false);
                        context.hovered = controlRef.current;
                        context.hovered.isHovered.dispatch(true);
                    }, context.hovered ? 200 : 0);
                }}
                onMouseLeave={() => {
                    if(mouseEnter.current) {
                        clearTimeout(mouseEnter.current);
                        mouseEnter.current = null;
                    }
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
        </Tooltip>
    )
}