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

    const [hovered, setHovered] = useState<ShowcaseControlRef>(null);
    const [focused, setFocused] = useState<ShowcaseControlRef>(null);

    const ref = useRef<ShowcaseRef>({
        hovered: { value: hovered, dispatch: setHovered },
        focused: { value: focused, dispatch: setFocused }
    });

    return (
        <ShowcaseContext.Provider value={ref.current}>
            <div 
                className={clsx('showcase', style['showcase'])}
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
    const context = useContext(ShowcaseContext);
    const hovered = false;
    const focused = false;
    const engaged = hovered || focused;

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
        div: null,
        id: props.id
    });

    useEffect(() => {
        controlRef.current.div = divRef.current;
    }, [divRef]);

    return (
        <Tooltip 
            title={props.text.default} 
            placement="top" 
            arrow
            open={focused}
            onOpen={() => {
                if(!context.focused.value) {
                    context.focused.dispatch(controlRef.current)
                }
            }}
            onClose={() => {
                if(context.focused.value === controlRef.current) {
                    context.focused.dispatch(null);
                }
            }}
        >
            <div
                ref={divRef}
                className={clsx(style['control'], props.style.className, engaged ? style['engaged'] : null)}
                onMouseEnter={() => {
                    if(!context.hovered.value) {
                        context.hovered.dispatch(controlRef.current)
                    }
                }}
                onMouseLeave={() => {
                    if(context.hovered.value === controlRef.current) {
                        context.hovered.dispatch(null);
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