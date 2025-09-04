import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcaseContainerProps, ShowcaseRef, ShowcaseControlRef, ShowcaseControlData } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

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

    const divRef = useRef<HTMLDivElement>(null);
    const unfocusTimeout = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        ref.current.div = divRef.current;
        console.log(ref.current.div);
    }, []);

    return (
        <ShowcaseContext.Provider value={ref.current}>
            <div 
                ref={divRef}
                className={clsx('showcase', style['showcase'], props.design?.className)}
                onMouseEnter={() => {
                    clearTimeout(unfocusTimeout.current);
                }}
                onMouseLeave={() => {
                    unfocusTimeout.current = setTimeout(() => {
                        if(ref.current.target) {
                            ref.current.target.state.setIsFocused(false);
                            ref.current.target = null;
                            ref.current.data.dispatch(null);
                        }
                    }, 75);
                }}
            >
                <div
                    className={clsx(style['panel'])}
                >
                    <ShowcaseContainer {...props.container} />
                    <ShowcaseInspector />
                </div>
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcaseContext = createContext<ShowcaseRef>(null);

const ShowcaseContainer : React.FC<ShowcaseContainerProps> = (props) => {
    return (
        <div 
            className={clsx(style['container'])} 
            style={{ gridTemplateColumns: 'auto '.repeat(props.design.columns).trim() }}
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

    return (
        <div
            className={clsx(style['control'], ref.current.state.isFocused ? style['focused'] : null, props.design?.className)}
            onClick={() => {
                if(context.target?.props.id === props.id) {
                    context.target.state.setIsFocused(false);
                    context.data.dispatch(null);
                }
                else {
                    context.target?.state.setIsFocused(false);
                    context.target = ref.current;
                    context.target.state.setIsFocused(true);

                    context.data.dispatch(props);
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
    );
}

const ShowcaseInspector: React.FC = () => {
    const [data, setData] = useState<ShowcaseControlData>(null);

    const divRef = useRef<HTMLDivElement>(null);
    const dataRef = useRef<ShowcaseControlData>(data);

    const context = useContext(ShowcaseContext);

    if(data) dataRef.current = data;

    context.data = {
        content: dataRef.current,
        dispatch: setData
    }

    const isActive = data !== null;
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const updatePosition = () => {
            if (divRef.current) {
                const inspectorRect = divRef.current.getBoundingClientRect();
                const panelRect = divRef.current.parentElement.getBoundingClientRect();
                
                setPosition({
                    top: panelRect.bottom,
                    left: panelRect.x + (panelRect.width - inspectorRect.width) / 2
                });

            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true);


        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, []);

    return (
        <div 
            ref={divRef}
            className={clsx(style['inspector'], isActive ? style['active'] : null)}
            style={{
                position: 'fixed',
                top: `${position.top}px`,
                left: `${position.left}px`,
            }}
        >
            <div className={clsx(style['head'])}>
                {dataRef.current?.inspector.head}
            </div>
            <div className={clsx(style['body'])}>
                {dataRef.current?.inspector.body}
            </div>
        </div>
    );
}