import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseRef, ShowcaseProps, ShowcaseControlProps, ShowcaseControlRef } from "@site/src/types/showcase"
import { zuord } from "zuord"
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Tooltip } from '@mui/material';

const Context = createContext<ShowcaseRef>(undefined);

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuord.integrate({
        controls: [],
        style: {
            columns: 3
        }
    }, $props);

    const context = useRef<ShowcaseRef>({
        control: {
            hovered: null,
            focused: null
        }
    });
  
    return (
        <Context.Provider value={context.current}>
            <div 
                className={clsx('showcase', style['showcase'])}
                style={{ 
                    gridTemplateColumns: `repeat(${props.style.columns}, 1fr)`
                }}
            >
                {props.controls.map((control, index) => (
                    <ShowcaseControl key={index} {...control} />
                ))}
            </div>
        </Context.Provider>
    )
}

export const ShowcaseControl: React.FC<ShowcaseControlProps> = ($props) => {
    const context = useContext(Context);
    const ref = useRef<ShowcaseControlRef>(null);
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        ref.current = {
            hovered: {
                value: hovered,
                dispatch: setHovered
            },
            focused: {
                value: focused,
                dispatch: setFocused
            }
        };
    }, [hovered, setHovered, focused, setFocused]);

    const engaged = hovered || focused;

    const props = zuord.integrate({
        text: {
            default: "showcase",
            focused: "showcase X"
        },
        style: {
            className: null
        }
    }, $props);

    return (
        <Tooltip 
            title={props.text.default} 
            placement="top" 
            arrow
            open={focused}
            onOpen={() => {
                if(!context.control.focused) {
                    context.control.focused = ref.current
                    setFocused(true);
                }
            }}
            onClose={() => {
                if(context.control.focused === ref.current) {
                    context.control.focused = null;
                    setFocused(false);
                }
            }}
        >
            <div
                className={clsx(style['control'], props.style.className, engaged ? style['engaged'] : null)}
                onMouseEnter={() => {
                    if(!context.control.hovered) {
                        context.control.hovered = ref.current
                        setHovered(true);
                    }
                }}
                onMouseLeave={() => {
                    if(context.control.hovered === ref.current) {
                        context.control.hovered = null;
                        setHovered(false);
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