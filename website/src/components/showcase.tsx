import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcaseContainerProps, ShowcaseRef, ShowcaseControlRef, ShowcaseControlData } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext, useContext, useRef, useState } from 'react';

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

    const unfocusTimeout = useRef<NodeJS.Timeout>(null);

    const ref = useRef<ShowcaseRef>({
        target: null,
        data: {
            content: null,
            dispatch: null
        }
    });

    return (
        <ShowcaseContext.Provider value={ref.current}>
            <div 
                className={clsx('showcase', style['showcase'], props.design?.className)}
                onMouseEnter={() => {
                    clearTimeout(unfocusTimeout.current);
                }}
                onMouseLeave={() => {
                    unfocusTimeout.current = setTimeout(() => {
                        ref.current.target?.state.setIsFocused(false);
                        ref.current.target = null;
                        ref.current.data.dispatch(null);
                    }, 50);
                }}
            >
                <ShowcaseContainer {...props.container} />
                <ShowcaseInspector />
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcaseContext = createContext<ShowcaseRef>(null);

const ShowcaseContainer : React.FC<ShowcaseContainerProps> = (props) => {
    const context = useContext(ShowcaseContext);

    return (
        <div className={clsx(style['container'])} style={{ gridTemplateColumns: 'auto '.repeat(props.design.columns).trim() }}>
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
    const dataRef = useRef<ShowcaseControlData>(data);

    const context = useContext(ShowcaseContext);

    if(data) dataRef.current = data;

    context.data = {
        content: dataRef.current,
        dispatch: setData
    }

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